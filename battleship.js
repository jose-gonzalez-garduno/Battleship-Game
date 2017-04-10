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
          { locations: ["63", "64", "65"], hits: ["", "", ""] }],
  // We will take a guess as an argument and iterate over to check if the ship was hit
  fire: function (guess) {
    // Iterate through the array of ships
    for (var i = 0; i < this.numShips; i++) {
      // We first get the ship
      var ship = this.ships[i];
      // Then get the locations of the ship
      locations = ship.locations;
      // Then we get the index of the guess on the locations
      var index = locations.indexOf(guess);
      // If the index is greater than or equal to 0, we have a hit
      // If we don't, then we return false
      if (index >= 0) {
        //Mark the hits array at the same index
        ship.hits[index] = "hit";
        // Tell the view that we have a hit at the guess location
        view.displayHit(guess);
        // Tell the view to display HIT
        view.displayMessage("HIT");
        // The ship is sunk, then let the player know
        if (this.isSunk(ship)) {
          view.displayMessage("You sank my battleship!");
          this.shipsSunk++;
        }
        return true;
      }
    }
    // Tell view there was a miss in location
    view.displayMiss(guess);
    // Show a display message telling you missed
    view.displayMessage("You missed.");
    // If there was no hit, we return false
    return false;
  },
  // Takes a ship and return true if it's sunk and false if it is still floating
  isSunk: function (ship) {
    // Takes the method and checks every possible location
    for (var i = 0; i < this.shipLength; i++) {
      // If there's a location that doesn't have a hit
      if (ship.hits[i] !== "hit") {
        // Then the ship is still floating and we will return flase
        return false;
      }
    }
    // The ship is sunk!
    return true;
  }
};

// // Testing the view object
// view.displayMiss("00");
// view.displayHit("34");
// view.displayHit("55");
// view.displayMiss("25");
// view.displayMiss("12");
//
// view.displayMessage("Test Test Test!");
