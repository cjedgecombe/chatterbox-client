// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
  },

  render: function() {
    // TODO: Render _all_ the messages.
    // loop over messages array
    for (var i = 0; i < Messages._data.length; i++) {
      // pass each message entry into the messageView function to render into template
      var currentMessage = Messages._data[i];

      // append to the DOM
      var html = MessageView.render(currentMessage);

      this.$chats.append(html);
    }
  },

  renderMessage: function(message) {
    // TODO: Render a single message.
    var html = MessageView.render(message);
    this.$chats.prepend(html);
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
  }

};