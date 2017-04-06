//The view object
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

// The model that holds the logic relating to the game
var model = {
  // Size of the grid used for the board
  boardSize: 7,
  // Number of ships in the game
  numShips: 3,
  // Number of location in each ship
  shipLength: 3,
  // Keeps the current number of ships that have been sunk by the player
  shipsSunk: 0,

  // All ships are in an array holds which each holds the location
  // on the board holds and whether or not a ship is hit at each location
  ships: [{ locations: ["10", "20", "30"], hits: ["", "", ""] },
          { locations: ["32", "33", "34"], hits: ["", "", ""] },
          { locations: ["63", "64", "65"], hits: ["", "", ""] }]
};



// Testing the view object
view.displayMiss("00");
view.displayHit("34");
view.displayHit("55");
view.displayMiss("25");
view.displayMiss("12");

view.displayMessage("Test Test Test!");
