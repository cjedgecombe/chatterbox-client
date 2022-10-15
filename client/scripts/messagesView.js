// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    MessagesView.$chats.on('click', MessagesView.handleClick);
  },

  render: function(messageArray) {
    // TODO: Render _all_ the messages.
    // loop over messages array
    for (var i = 0; i < messageArray.length; i++) {
      // pass each message entry into the messageView function to render into template
      var currentMessage = messageArray[i];

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
    var currentDiv = event.target;
    console.log(currentDiv);
    if (event.target === 'div.username') {
      //add username to Friends._data
    }

    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
  }

};