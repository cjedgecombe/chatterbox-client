// FormView is an object which houses all the message form functionality.
// Consider the provided code and complete the functionality.
// Apply what you learn here to other interactive views if necessary.

var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();

    var currentMessage = {
      username: App.username,
      text: $('input:text').val(),
      roomname: $('#rooms select').val(),
    };
    //push message to API
    //console.log(currentMessage);
    Parse.create(currentMessage);
    //add message to current chat window
    MessagesView.renderMessage(currentMessage);
    // TODO: Currently, this is all handleSubmit does.
    // Make this function actually send a message to the Parse API.


  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};