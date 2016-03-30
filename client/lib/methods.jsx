import React from 'react';
import ReactDOM from 'react-dom';
Meteor.methods({
  modal: function(content, options){

    ReactDOM.render(<BSModal {...options}>{content}</BSModal>, document.getElementById('modal_container'));

    Session.set({
      modal: !Session.get('modal'),
    });
  }
})
