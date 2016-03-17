Meteor.methods({
  modal: function(content){
    console.log(ReviewList)
    Session.set({
      modal: !Session.get('modal'),
      modalContent:ReviewList
    });
  }
})
