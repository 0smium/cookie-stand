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
    var divPikePlace  = document.getElementById('pikePlace');
    var newH2 = document.createElement('h2');
    var newHeading = document.createTextNode('Pike Place');
    newH2.appendChild(newHeading);
    divPikePlace.appendChild(newH2);
    // 2. Create a UL element
    var newUL = document.createElement('ul');
    divPikePlace.appendChild(newUL);
    var position = document.getElementsByTagName('ul')[0];
    // 3. Create and populate an LI element for each of the data points that you want to render
    for (i = 0; i < this.timeOfDay.length; i++) {
      var newLi = document.createElement('li');
      var newText = document.createTextNode(this.timeOfDay[i] + ': ' + this.cookiesPerHour[i] + ' cookies');
      newLi.appendChild(newText);
      // 4. Append the LI to the UL
      position.appendChild(newLi);
    }
    // 5. Append the UL to the element that you stored in step 1
    // ???

    var newTotal = document.createElement('li');
    var newStrong = document.createElement('strong');
    newTotal.appendChild(newStrong);
    var newStrongContent = document.createTextNode('Total: ' + this.total + ' cookies');
    newStrong.appendChild(newStrongContent);
    position.appendChild(newTotal);

  }
};
pikePlace.render()
