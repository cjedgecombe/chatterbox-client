// This App object represents the Chatterbox application.
// It should initialize the other parts of the application
// and begin making requests to the Parse API for data.

var App = {

  $spinner: $('.spinner img'),

  username: 'Alex and CJ',

  initialize: function() {
    //App.username = window.location.search.substr(10);

    // create new Promise, pass in

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

    // TODO: Make sure the app loads data from the API
    // continually, instead of just once at the start.

    //setTimeout function for app refresh every 30sec (could possibly already be working, recheck later)
  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // store message data in Messages object
      Messages._data = data;
      // console.log(Messages._data);
      Rooms._data = data;
      Rooms.sortRooms(Rooms._data);
      // console.log('rooms', Rooms.sortedRooms);
      // render the message view AFTER data has been stored
      MessagesView.render(Messages._data);
      RoomsView.render();
      // TODO: Use the data to update Messages and Rooms
      // turn off the spinner
      callback();
      // and re-render the corresponding views.
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
