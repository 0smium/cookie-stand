//Create a global array for time of day
var timeOfDay = ['10am', '11am', '12am', '01pm', '02pm', '03pm', '04pm', '05pm'];
var listOfShops = [];

var storeTable = document.getElementById('storeTable');
var headingRow = document.createElement('tr');
storeTable.appendChild(headingRow);
var blankTH = document.createElement('th');
// blankTH.textContent = 'BLANK';
headingRow.appendChild(blankTH);

for (i = 0; i < timeOfDay.length; i++) {
  var TH = document.createElement('th');
  TH.textContent = timeOfDay[i];
  headingRow.appendChild(TH);
}

var totalsTH = document.createElement('th');
totalsTH.textContent = 'Daily Location Total';
headingRow.appendChild(totalsTH);


//Create location constructor 'shopLocation'
var shopLocation = function (name, fullName, min, max, avg) {
  this.name = name; //name of location, abbreviated
  this.fullName = fullName; //name of location, full name as string
  this.min = min; //min cookies per hour
  this.max = max; //max cookies per hour
  this.avg = avg; //avg cookies per customer
  this.getRandom = function (min, max) {
    return (Math.random() * ((this.max - this.min) + this.min));
  }
  listOfShops.push(this);
  this.cookiesPerHour = [];
  this.total = 0;
  this.populate = function() {
  for (i = 0; i < timeOfDay.length; i++) {
    var rand =  Math.round(this.getRandom() * this.avg);
    this.cookiesPerHour.push(rand);
    this.total += rand;
    }
  }
  this.render = function() {
    this.populate();

    var shopRow = document.createElement('tr');
    storeTable.appendChild(shopRow);
    var shopNameTD = document.createElement('td');
    shopNameTD.textContent = this.fullName;
    shopRow.appendChild(shopNameTD);

    for (i = 0; i < this.cookiesPerHour.length; i++){
      var newTD = document.createElement('td');
      newTD.textContent = this.cookiesPerHour[i];
      shopRow.appendChild(newTD);
    }

    var totalTD = document.createElement('td');
    totalTD.textContent = this.total;
    shopRow.appendChild(totalTD);

    }
}

//create and render each shiop location

var pikePlace = new shopLocation ('pikePlace', 'Pike Place', 17, 88, 5.2);
pikePlace.render()

var seaTac = new shopLocation ('seaTac', 'Sea Tac Airport', 6, 24, 1.2);
seaTac.render()

var southcenter = new shopLocation ('southcenter', 'South Center', 11, 38, 1.9);
southcenter.render()

var bellevueSquare = new shopLocation ('bellevueSquare', 'Bellevue Square', 20, 48, 3.3);
bellevueSquare.render()

var alki = new shopLocation ('alki', 'Alki Beach', 3, 24, 2.6);
alki.render()

//create column totals

var totalsTR = document.createElement('tr')
storeTable.appendChild(totalsTR);
var totalByTimeOfDayDescTD = document.createElement('td');
totalByTimeOfDayDescTD.textContent = 'Totals'
totalsTR.appendChild(totalByTimeOfDayDescTD);

for (i = 0; i < timeOfDay.length; i++) {
  var totalByTimeOfDayTD = document.createElement('td');
  var totalByTimeOfDay = 0;
  for (j = 0; j < listOfShops.length; j++) {
    totalByTimeOfDay += listOfShops[j].cookiesPerHour[i]
  }
  totalByTimeOfDayTD.textContent = totalByTimeOfDay;
  totalsTR.appendChild(totalByTimeOfDayTD);
}

var grandTotalTD = document.createElement('td');

var grandTotal = 0;
for (i = 0; i < listOfShops.length; i++) {
  grandTotal += listOfShops[i].total;
}

grandTotalTD.textContent = grandTotal;
totalsTR.appendChild(grandTotalTD);
