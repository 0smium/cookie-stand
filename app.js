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
    var newH2 = document.createElement('h2');
    var newHeading = document.createTextNode('Pike Place');
    newH2.appendChild(newHeading);
    divLocation.appendChild(newH2);
    // 2. Create a UL element
    var newUL = document.createElement('ul');
    divLocation.appendChild(newUL);
    var ULposition = document.getElementsByTagName('ul')[0];
    // 3. Create and populate an LI element for each of the data points that you want to render
    for (i = 0; i < this.timeOfDay.length; i++) {
      var newLi = document.createElement('li');
      var newText = document.createTextNode(this.timeOfDay[i] + ': ' + this.cookiesPerHour[i] + ' cookies');
      newLi.appendChild(newText);
      // 4. Append the LI to the UL
      ULposition.appendChild(newLi);
    }
    // 5. Append the UL to the element that you stored in step 1
    // ???

    var totalLI = document.createElement('li');
    var newStrong = document.createElement('strong');
    totalLI.appendChild(newStrong);
    var newStrongContent = document.createTextNode('Total: ' + this.total + ' cookies');
    newStrong.appendChild(newStrongContent);
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
    var newH2 = document.createElement('h2');
    var newHeading = document.createTextNode('SeaTac Airport');
    newH2.appendChild(newHeading);
    divLocation.appendChild(newH2);
    // 2. Create a UL element
    var newUL = document.createElement('ul');
    divLocation.appendChild(newUL);
    var ULposition = document.getElementsByTagName('ul')[1];
    // 3. Create and populate an LI element for each of the data points that you want to render
    for (i = 0; i < this.timeOfDay.length; i++) {
      var newLi = document.createElement('li');
      var newText = document.createTextNode(this.timeOfDay[i] + ': ' + this.cookiesPerHour[i] + ' cookies');
      newLi.appendChild(newText);
      // 4. Append the LI to the UL
      ULposition.appendChild(newLi);
    }
    // 5. Append the UL to the element that you stored in step 1
    // ???

    var totalLI = document.createElement('li');
    var newStrong = document.createElement('strong');
    totalLI.appendChild(newStrong);
    var newStrongContent = document.createTextNode('Total: ' + this.total + ' cookies');
    newStrong.appendChild(newStrongContent);
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
    var newH2 = document.createElement('h2');
    var newHeading = document.createTextNode('Southcenter');
    newH2.appendChild(newHeading);
    divLocation.appendChild(newH2);
    // 2. Create a UL element
    var newUL = document.createElement('ul');
    divLocation.appendChild(newUL);
    var ULposition = document.getElementsByTagName('ul')[2];
    // 3. Create and populate an LI element for each of the data points that you want to render
    for (i = 0; i < this.timeOfDay.length; i++) {
      var newLi = document.createElement('li');
      var newText = document.createTextNode(this.timeOfDay[i] + ': ' + this.cookiesPerHour[i] + ' cookies');
      newLi.appendChild(newText);
      // 4. Append the LI to the UL
      ULposition.appendChild(newLi);
    }
    // 5. Append the UL to the element that you stored in step 1
    // ???

    var totalLI = document.createElement('li');
    var newStrong = document.createElement('strong');
    totalLI.appendChild(newStrong);
    var newStrongContent = document.createTextNode('Total: ' + this.total + ' cookies');
    newStrong.appendChild(newStrongContent);
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
    var newH2 = document.createElement('h2');
    var newHeading = document.createTextNode('Bellevue Square');
    newH2.appendChild(newHeading);
    divLocation.appendChild(newH2);
    // 2. Create a UL element
    var newUL = document.createElement('ul');
    divLocation.appendChild(newUL);
    var ULposition = document.getElementsByTagName('ul')[3];
    // 3. Create and populate an LI element for each of the data points that you want to render
    for (i = 0; i < this.timeOfDay.length; i++) {
      var newLi = document.createElement('li');
      var newText = document.createTextNode(this.timeOfDay[i] + ': ' + this.cookiesPerHour[i] + ' cookies');
      newLi.appendChild(newText);
      // 4. Append the LI to the UL
      ULposition.appendChild(newLi);
    }
    // 5. Append the UL to the element that you stored in step 1
    // ???

    var totalLI = document.createElement('li');
    var newStrong = document.createElement('strong');
    totalLI.appendChild(newStrong);
    var newStrongContent = document.createTextNode('Total: ' + this.total + ' cookies');
    newStrong.appendChild(newStrongContent);
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
    var newH2 = document.createElement('h2');
    var newHeading = document.createTextNode('Alki');
    newH2.appendChild(newHeading);
    divLocation.appendChild(newH2);
    // 2. Create a UL element
    var newUL = document.createElement('ul');
    divLocation.appendChild(newUL);
    var ULposition = document.getElementsByTagName('ul')[4];
    // 3. Create and populate an LI element for each of the data points that you want to render
    for (i = 0; i < this.timeOfDay.length; i++) {
      var newLi = document.createElement('li');
      var newText = document.createTextNode(this.timeOfDay[i] + ': ' + this.cookiesPerHour[i] + ' cookies');
      newLi.appendChild(newText);
      // 4. Append the LI to the UL
      ULposition.appendChild(newLi);
    }
    // 5. Append the UL to the element that you stored in step 1
    // ???

    var totalLI = document.createElement('li');
    var newStrong = document.createElement('strong');
    totalLI.appendChild(newStrong);
    var newStrongContent = document.createTextNode('Total: ' + this.total + ' cookies');
    newStrong.appendChild(newStrongContent);
    ULposition.appendChild(totalLI);

  }
};
alki.render()

var grandTotal = pikePlace.total + seaTac.total + southcenter.total + bellevueSquare.total + alki.total
var grandTotalDivLocation  = document.getElementById('grandTotal');
var grandTotalH2 = document.createElement('h2');
var grandTotalHeading = document.createTextNode('Grand Total: ' + grandTotal);

grandTotalH2.appendChild(grandTotalHeading);
grandTotalDivLocation.appendChild(grandTotalH2);
