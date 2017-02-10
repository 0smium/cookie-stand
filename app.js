//Pike Place JS File

var pikePlace = {
  min: 17,
  max: 88,
  avg: 5.2,
  timeOfDay: ['10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm'],
  // What other properties might you need to keep track of?
  getRandom: function(min, max) {
    return (Math.random() * ((this.max - this.min) + this.min)).toFixed(0);
  },
  // other methods to aggregate data...
  render: function() {
    // render your object data to the DOM as an unordered list of data points!!
    // 1. Get an element by Id from your html
    // 2. Create a UL element
    // 3. Create and populate an LI element for each of the data points that you want to render
    // 4. Append the LI to the UL
    // 5. Append the UL to the element that you stored in step 1
  }
};
