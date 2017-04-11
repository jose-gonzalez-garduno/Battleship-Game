//The view object
var view = {
    // this method takes a string message and displays it
    // in the message display area
    displayMessage: function(msg) {
        //Get the ID from the message tag
        var messageArea = document.getElementById('messageArea');
        messageArea.innerHTML = msg;
    },

    // take the location of a hit as an argument
    displayHit: function(location) {
        // take the location of a miss as an argument
        var cell = document.getElementById(location);
        // Set class to 'hit' to change to the hit image
        cell.setAttribute("class", "hit");
    },

    // take the location of a miss as an argument
    displayMiss: function(location) {
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
    ships: [{
            locations: ["06", "16", "26"],
            hits: ["", "", ""]
        },
        {
            locations: ["24", "34", "44"],
            hits: ["", "", ""]
        },
        {
            locations: ["10", "11", "12"],
            hits: ["", "", ""]
        }
    ],
    // We will take a guess as an argument and iterate over to check if the ship was hit
    fire: function(guess) {
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
    isSunk: function(ship) {
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

// The controller object
var controller = {
    guesses: 0,

    processGuess: function(guess) {
      // validate the players guess
      var location = parseGuess(guess);
      // the location is known and valid
      if (location) {
        // add 1 to each time they guess
        this.guesses++;
        // pass in the from of a string
        var hit = model.fire(location);
        // if all the ships are sunk then display a message
        if (hit && model.shipsSunk === model.numShips) {
          view.displayMessage("You sank all my battleships, in " +
          this.guesses + " guesses.");
        }
      }
    }
};

// We get the guess and pass it through the function
function parseGuess(guess) {
    // Maybe add a variable as a || A
    var alphabet = ["A", "B", "C", "D", "E", "F", "G"];
    // Make sure there is information passed and is only 2 characters long
    if (guess === null || guess.length !== 2) {
        alert("Oops, please enter a letter and a number on the board.");
    } else {
        // Grab the first character of the guess
        firstChar = guess.charAt(0);
        // We get a number between 0 and 6 from our guess
        var row = alphabet.indexOf(firstChar);
        // Grab the second string
        var column = guess.charAt(1);

        // Check if either of the row or column isNAN
        if (isNaN(row) || isNaN(column)) {
          alert("Oops, that isn't on the board.");
        } // Makes sure the guess is between 0 and the boardSize
          else if (row < 0 || row >= model.boardSize || column < 0 || column >= model.boardSize) {
          alert("Oops, that's off that's off the board!");
        } else {
          // Everything looks good so we can
          // So we concatenating the row and column
          return row + column;
        }
    }
    // There was a fail along the way so we return null
    return null;
}

function handleFireButton() {
  // Get the players a guess from the form
  // and get it to the controller.
}
//
function init() {
 var fireButton = document.getElementById("fireButton");
 fireButton.onclick = handleFireButton;
}

controller.processGuess("A0");

controller.processGuess("A6");
controller.processGuess("B6");
controller.processGuess("C6");

controller.processGuess("C4");
controller.processGuess("D4");
controller.processGuess("E4");

controller.processGuess("B0");
controller.processGuess("B1");
controller.processGuess("B2");
