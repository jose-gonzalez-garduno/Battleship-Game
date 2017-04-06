var view = {
  // this method takes a string message and displays it
  // in the message display area
  displayMessage: function (msg) {
    //Get the ID from the message tag
    var messageArea = document.getElementById('messageArea');
    messageArea.innerHTML = msg;
  },

  // take the location of a hit as an argument
  displayHit: function (location) {
    // take the location of a miss as an argument
    var cell = document.getElementById(location);
    // Set class to 'hit' to change to the hit image
    cell.setAttribute("class", "hit");
  },

  // take the location of a miss as an argument
  displayMiss: function (location) {
    var cell = document.getElementById(location);
    // Set class to 'miss' to change to the miss image
    cell.setAttribute("class", "miss");
  }
};

// Testing the view object
view.displayMiss("00");
view.displayHit("34");
view.displayHit("55");
view.displayMiss("25");
view.displayMiss("12");

view.displayMessage("Test Test Test!");
