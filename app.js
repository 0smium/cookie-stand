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
  this.render = function() {
    this.populate();
    var divLocation  = document.getElementById(this.name);
    var newh3 = document.createElement('h3');
    var newHeading = document.createTextNode(this.fullName);
    newh3.appendChild(newHeading);
    divLocation.appendChild(newh3);
    var newUL = document.createElement('ul');
    divLocation.appendChild(newUL);
    var ULposition = document.getElementsByTagName('ul')[0];
    for (i = 0; i < timeOfDay.length; i++) {
      var newLi = document.createElement('li');
      newLi.textContent = timeOfDay[i] + ': ' + this.cookiesPerHour[i] + ' cookies';
      ULposition.appendChild(newLi);
    }
    var totalLI = document.createElement('li');
    totalLI.className = 'total';
    var newStrong = document.createElement('strong');
    totalLI.appendChild(newStrong);
    newStrong.textContent = 'Total: ' + this.total + ' cookies';
    ULposition.appendChild(totalLI);
    }
  }
}


//Pike Place Store

var pikePlace = {
  min: 17,
  max: 88,
  avg: 5.2,
  timeOfDay: ['10am', '11am', '12am', '01pm', '02pm', '03pm', '04pm', '05pm'],
  // What other properties might you need to keep track of?
  getRandom: function(min, max) {
    return (Math.random() * ((this.max - this.min) + this.min));
  },
  //store average cookies by time of day in an array
  cookiesPerHour: [],
  total: 0,
  populate: function() {
    for (i = 0; i < this.timeOfDay.length; i++) {
      var rand =  Math.round(this.getRandom() * this.avg);
      this.cookiesPerHour.push(rand);
      this.total += rand;
    }
  },
  // other methods to aggregate data...
  render: function() {
    // render your object data to the DOM as an unordered list of data points!!
    this.populate()
    // 1. Get an element by Id from your html
    var divLocation  = document.getElementById('pikePlace');
    var newh3 = document.createElement('h3');
    var newHeading = document.createTextNode('Pike Place');
    newh3.appendChild(newHeading);
    divLocation.appendChild(newh3);
    // 2. Create a UL element
    var newUL = document.createElement('ul');
    divLocation.appendChild(newUL);
    var ULposition = document.getElementsByTagName('ul')[0];
    // 3. Create and populate an LI element for each of the data points that you want to render
    for (i = 0; i < this.timeOfDay.length; i++) {
      var newLi = document.createElement('li');
      // var newText = document.createTextNode(this.timeOfDay[i] + ': ' + this.cookiesPerHour[i] + ' cookies');
      // newLi.appendChild(newText);
      newLi.textContent = this.timeOfDay[i] + ': ' + this.cookiesPerHour[i] + ' cookies';
      // 4. Append the LI to the UL
      ULposition.appendChild(newLi);
    }
    // 5. Append the UL to the element that you stored in step 1
    // ???

    var totalLI = document.createElement('li');
    totalLI.className = 'total';
    var newStrong = document.createElement('strong');
    totalLI.appendChild(newStrong);
    // var newStrongContent = document.createTextNode('Total: ' + this.total + ' cookies');
    // newStrong.appendChild(newStrongContent);
    newStrong.textContent = 'Total: ' + this.total + ' cookies';
    ULposition.appendChild(totalLI);

  }
};
pikePlace.render()

//SeaTac Airport

var seaTac = {
  min: 6,
  max: 24,
  avg: 1.2,
  timeOfDay: ['10am', '11am', '12am', '01pm', '02pm', '03pm', '04pm', '05pm'],
  // What other properties might you need to keep track of?
  getRandom: function(min, max) {
    return (Math.random() * ((this.max - this.min) + this.min));
  },
  //store average cookies by time of day in an array
  cookiesPerHour: [],
  total: 0,
  populate: function() {
    for (i = 0; i < this.timeOfDay.length; i++) {
      var rand =  Math.round(this.getRandom() * this.avg);
      this.cookiesPerHour.push(rand);
      this.total += rand;
    }
  },
  // other methods to aggregate data...
  render: function() {
    // render your object data to the DOM as an unordered list of data points!!
    this.populate()
    // 1. Get an element by Id from your html
    var divLocation  = document.getElementById('seaTac');
    var newh3 = document.createElement('h3');
    var newHeading = document.createTextNode('SeaTac Airport');
    newh3.appendChild(newHeading);
    divLocation.appendChild(newh3);
    // 2. Create a UL element
    var newUL = document.createElement('ul');
    divLocation.appendChild(newUL);
    var ULposition = document.getElementsByTagName('ul')[1];
    // 3. Create and populate an LI element for each of the data points that you want to render
    for (i = 0; i < this.timeOfDay.length; i++) {
      var newLi = document.createElement('li');
      // var newText = document.createTextNode(this.timeOfDay[i] + ': ' + this.cookiesPerHour[i] + ' cookies');
      // newLi.appendChild(newText);
      newLi.textContent = this.timeOfDay[i] + ': ' + this.cookiesPerHour[i] + ' cookies';
      // 4. Append the LI to the UL
      ULposition.appendChild(newLi);
    }
    // 5. Append the UL to the element that you stored in step 1
    // ???

    var totalLI = document.createElement('li');
    totalLI.className = 'total';
    var newStrong = document.createElement('strong');
    totalLI.appendChild(newStrong);
    // var newStrongContent = document.createTextNode('Total: ' + this.total + ' cookies');
    // newStrong.appendChild(newStrongContent);
    newStrong.textContent = 'Total: ' + this.total + ' cookies';
    ULposition.appendChild(totalLI);

  }
};
seaTac.render()

//Southcenter

var southcenter = {
  min:11,
  max: 38,
  avg: 1.9,
  timeOfDay: ['10am', '11am', '12am', '01pm', '02pm', '03pm', '04pm', '05pm'],
  // What other properties might you need to keep track of?
  getRandom: function(min, max) {
    return (Math.random() * ((this.max - this.min) + this.min));
  },
  //store average cookies by time of day in an array
  cookiesPerHour: [],
  total: 0,
  populate: function() {
    for (i = 0; i < this.timeOfDay.length; i++) {
      var rand =  Math.round(this.getRandom() * this.avg);
      this.cookiesPerHour.push(rand);
      this.total += rand;
    }
  },
  // other methods to aggregate data...
  render: function() {
    // render your object data to the DOM as an unordered list of data points!!
    this.populate()
    // 1. Get an element by Id from your html
    var divLocation  = document.getElementById('southcenter');
    var newh3 = document.createElement('h3');
    var newHeading = document.createTextNode('Southcenter');
    newh3.appendChild(newHeading);
    divLocation.appendChild(newh3);
    // 2. Create a UL element
    var newUL = document.createElement('ul');
    divLocation.appendChild(newUL);
    var ULposition = document.getElementsByTagName('ul')[2];
    // 3. Create and populate an LI element for each of the data points that you want to render
    for (i = 0; i < this.timeOfDay.length; i++) {
      var newLi = document.createElement('li');
      // var newText = document.createTextNode(this.timeOfDay[i] + ': ' + this.cookiesPerHour[i] + ' cookies');
      // newLi.appendChild(newText);
      newLi.textContent = this.timeOfDay[i] + ': ' + this.cookiesPerHour[i] + ' cookies';
      // 4. Append the LI to the UL
      ULposition.appendChild(newLi);
    }
    // 5. Append the UL to the element that you stored in step 1
    // ???

    var totalLI = document.createElement('li');
    totalLI.className = 'total';
    var newStrong = document.createElement('strong');
    totalLI.appendChild(newStrong);
    // var newStrongContent = document.createTextNode('Total: ' + this.total + ' cookies');
    // newStrong.appendChild(newStrongContent);
    newStrong.textContent = 'Total: ' + this.total + ' cookies';
    ULposition.appendChild(totalLI);

  }
};
southcenter.render()

//Bellevue Square

var bellevueSquare = {
  min: 20,
  max: 48,
  avg: 3.3,
  timeOfDay: ['10am', '11am', '12am', '01pm', '02pm', '03pm', '04pm', '05pm'],
  // What other properties might you need to keep track of?
  getRandom: function(min, max) {
    return (Math.random() * ((this.max - this.min) + this.min));
  },
  //store average cookies by time of day in an array
  cookiesPerHour: [],
  total: 0,
  populate: function() {
    for (i = 0; i < this.timeOfDay.length; i++) {
      var rand =  Math.round(this.getRandom() * this.avg);
      this.cookiesPerHour.push(rand);
      this.total += rand;
    }
  },
  // other methods to aggregate data...
  render: function() {
    // render your object data to the DOM as an unordered list of data points!!
    this.populate()
    // 1. Get an element by Id from your html
    var divLocation  = document.getElementById('bellevueSquare');
    var newh3 = document.createElement('h3');
    var newHeading = document.createTextNode('Bellevue Square');
    newh3.appendChild(newHeading);
    divLocation.appendChild(newh3);
    // 2. Create a UL element
    var newUL = document.createElement('ul');
    divLocation.appendChild(newUL);
    var ULposition = document.getElementsByTagName('ul')[3];
    // 3. Create and populate an LI element for each of the data points that you want to render
    for (i = 0; i < this.timeOfDay.length; i++) {
      var newLi = document.createElement('li');
      // var newText = document.createTextNode(this.timeOfDay[i] + ': ' + this.cookiesPerHour[i] + ' cookies');
      // newLi.appendChild(newText);
      newLi.textContent = this.timeOfDay[i] + ': ' + this.cookiesPerHour[i] + ' cookies';
      // 4. Append the LI to the UL
      ULposition.appendChild(newLi);
    }
    // 5. Append the UL to the element that you stored in step 1
    // ???

    var totalLI = document.createElement('li');
    totalLI.className = 'total';
    var newStrong = document.createElement('strong');
    totalLI.appendChild(newStrong);
    // var newStrongContent = document.createTextNode('Total: ' + this.total + ' cookies');
    // newStrong.appendChild(newStrongContent);
    newStrong.textContent = 'Total: ' + this.total + ' cookies';
    ULposition.appendChild(totalLI);

  }
};
bellevueSquare.render()

//Alki

var alki = {
  min: 3,
  max: 24,
  avg: 2.6,
  timeOfDay: ['10am', '11am', '12am', '01pm', '02pm', '03pm', '04pm', '05pm'],
  // What other properties might you need to keep track of?
  getRandom: function(min, max) {
    return (Math.random() * ((this.max - this.min) + this.min));
  },
  //store average cookies by time of day in an array
  cookiesPerHour: [],
  total: 0,
  populate: function() {
    for (i = 0; i < this.timeOfDay.length; i++) {
      var rand =  Math.round(this.getRandom() * this.avg);
      this.cookiesPerHour.push(rand);
      this.total += rand;
    }
  },
  // other methods to aggregate data...
  render: function() {
    // render your object data to the DOM as an unordered list of data points!!
    this.populate()
    // 1. Get an element by Id from your html
    var divLocation  = document.getElementById('alki');
    var newh3 = document.createElement('h3');
    var newHeading = document.createTextNode('Alki');
    newh3.appendChild(newHeading);
    divLocation.appendChild(newh3);
    // 2. Create a UL element
    var newUL = document.createElement('ul');
    divLocation.appendChild(newUL);
    var ULposition = document.getElementsByTagName('ul')[4];
    // 3. Create and populate an LI element for each of the data points that you want to render
    for (i = 0; i < this.timeOfDay.length; i++) {
      var newLi = document.createElement('li');
      // var newText = document.createTextNode(this.timeOfDay[i] + ': ' + this.cookiesPerHour[i] + ' cookies');
      // newLi.appendChild(newText);
      newLi.textContent = this.timeOfDay[i] + ': ' + this.cookiesPerHour[i] + ' cookies';
      // 4. Append the LI to the UL
      ULposition.appendChild(newLi);
    }
    // 5. Append the UL to the element that you stored in step 1
    // ???

    var totalLI = document.createElement('li');
    totalLI.className = 'total';
    var newStrong = document.createElement('strong');
    totalLI.appendChild(newStrong);
    // var newStrongContent = document.createTextNode('Total: ' + this.total + ' cookies');
    // newStrong.appendChild(newStrongContent);
    newStrong.textContent = 'Total: ' + this.total + ' cookies';
    ULposition.appendChild(totalLI);

  }
};
alki.render()

var grandTotal = pikePlace.total + seaTac.total + southcenter.total + bellevueSquare.total + alki.total
var grandTotalDivLocation  = document.getElementById('grandTotal');
var grandTotalh2 = document.createElement('h2');
var grandTotalHeading = document.createTextNode('Total: ' + grandTotal + ' cookies');

grandTotalh2.appendChild(grandTotalHeading);
grandTotalDivLocation.appendChild(grandTotalh2);
