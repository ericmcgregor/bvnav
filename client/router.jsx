FlowRouter.route('/', {
    name:'home',
    action: function(params, queryParams) {
      ReactLayout.render(HomeView);
    }
});




FlowRouter.route('/rr', {
    name:'rr',
    action: function(params, queryParams) {
      ReactLayout.render(HomeView);
    }
});
FlowRouter.route('/rr/collect', {
    name:'rrcollect',
    action: function(params, queryParams) {
      ReactLayout.render(RRcollect);
    }
});
FlowRouter.route('/rr/manage', {
    name:'rrmanage',
    action: function(params, queryParams) {
      switch (queryParams.view) {
        case "a":
          ReactLayout.render(RRmanagea);
          break;
        case "b":
          ReactLayout.render(RRmanageb);
          break;
        default:
          ReactLayout.render(RRmanagea);
      }
    }
});
FlowRouter.route('/rr/manage/native/detail', {
    name:'rrnativedetail',
    action: function(params, queryParams) {
      ReactLayout.render(RRnativedetail);
    }
});
