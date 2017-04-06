var view = {
  // this method takes a string message and displays it
  // in the message display area
  displayMessage: function (msg) {
    //Get the ID from
    var messageArea = document.getElementById("messageArea");
    messageArea.innerHtml = msg;
  },
  displayHit: function (location) {

  },
  displayMiss: function (location) {

  }
};
