// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    console.log('messagesView initialized');
    console.log(MessagesView.render());
  },

  render: function() {
    // TODO: Render _all_ the messages.
    // loop over messages array
    console.log('before for loop');
    for (var i = 0; i < Messages._data.length; i++) {
      // pass each message entry into the messageView function to render into template
      var currentMessage = Messages._data[i];
      console.log(currentMessage);
      // append to the DOM
      var html = MessageView.render(currentMessage);
      console.log(html);
      //console.log(html);
      this.$chats.append(html);
    }
  },

  renderMessage: function(message) {
    // TODO: Render a single message.
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
  }

};