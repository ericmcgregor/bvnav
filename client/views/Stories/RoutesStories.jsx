FlowRouter.route('/Stories', {
    name:'Stories',
    action: function(params, queryParams) {
      params.active='Stories'
      params.current='Stories'
      params.title="Stories"
      ReactLayout.render(HomeView);
    }
});

FlowRouter.route('/Stories/Dashboard', {
    name:'Stories-Dashboard',
    action: function(params, queryParams) {
      params.active='Stories'
      params.current='Stories-Dashboard'
      params.title="Stories:Dashboard"
      ReactLayout.render(HomeView);
    }
});


FlowRouter.route('/Stories/Manage', {
    name:'Stories-Manage',
    action: function(params, queryParams) {
      params.active='Stories'
      params.current='Stories-Manage'
      params.title="Stories:Manage"
      ReactLayout.render(HomeView);
    }
});
