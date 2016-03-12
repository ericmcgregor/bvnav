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
FlowRouter.route('/rr/manage', {
    name:'rrmanage',
    action: function(params, queryParams) {
      ReactLayout.render(HomeView);
    }
});
