// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  // TODO: Define how you want to store the list of rooms
  _data: null,
  sortedRooms: {},
  // TODO: Define methods which allow you to add rooms, update the list,
  // mark a room as selected, etc.
  sortRooms: function (data) {
    //loop through array of message objects
    for (message of data) {
      var currentRoomname = message.roomname;
      if (currentRoomname === null) {
        continue;
      } else if (!Rooms.sortedRooms.hasOwnProperty(currentRoomname)) {
        Rooms.sortedRooms[currentRoomname] = [];
        Rooms.sortedRooms[currentRoomname].push(message);
      } else {
        Rooms.sortedRooms[currentRoomname].push(message);
      }
    }
  }

};