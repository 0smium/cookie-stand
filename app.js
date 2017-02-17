//Create a global array for time of day
var timeOfDay = ['10am', '11am', '12am', '01pm', '02pm', '03pm', '04pm', '05pm'];

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
    var divLocation  = document.getElementById(this.name);
    var newh3 = document.createElement('h3');
    var newHeading = document.createTextNode(this.fullName);
    newh3.appendChild(newHeading);
    divLocation.appendChild(newh3);
    var newUL = document.createElement('ul');
    divLocation.appendChild(newUL);
    // var ULposition = document.getElementsByTagName('ul');
    for (i = 0; i < timeOfDay.length; i++) {
      var newLi = document.createElement('li');
      newLi.textContent = timeOfDay[i] + ': ' + this.cookiesPerHour[i] + ' cookies';
      // ULposition.appendChild(newLi);
      newUL.appendChild(newLi);
    }
    var totalLI = document.createElement('li');
    totalLI.className = 'total';
    var newStrong = document.createElement('strong');
    totalLI.appendChild(newStrong);
    newStrong.textContent = 'Total: ' + this.total + ' cookies';
    // ULposition.appendChild(totalLI);
    newUL.appendChild(totalLI);
    }
}

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

var grandTotal = pikePlace.total + seaTac.total + southcenter.total + bellevueSquare.total + alki.total
var grandTotalDivLocation  = document.getElementById('grandTotal');
var grandTotalh2 = document.createElement('h2');
var grandTotalHeading = document.createTextNode('Total: ' + grandTotal + ' cookies');

grandTotalh2.appendChild(grandTotalHeading);
grandTotalDivLocation.appendChild(grandTotalh2);
