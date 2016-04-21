import React from 'react';

window.printView = ()=> {
  let view = Session.get('print');
  console.log(view);
  if(!view) {
    view = false;
  }
  view = !view;

  Session.setPersistent({print:view});
}

Meteor.startup(function(){

  Tracker.autorun(function (c) {
    Session.get('print');
    swapView();
  });

})

swapView = () => {
  let print = Session.get('print');
  let id = "";
  if(print == true) {
    id="print";
    $('body').attr('id', id);
  } else {
    $('body').attr('id', '');
  }
}
