FlowRouter.route('/audiences', {
    name:'audiences',
    action: function(params, queryParams) {
      params.active='Audiences'
      params.current='Audiences'
      params.title="Audiences"
      ReactLayout.render(HomeView);
    }
});

FlowRouter.route('/audiences/contributors', {
    name:'Audiences-Contributors',
    action: function(params, queryParams) {
      params.active='Audiences'
      params.current='Audiences-Contributors'
      params.title="Audiences:Contributors"
      ReactLayout.render(HomeView);
    }
});

FlowRouter.route('/audiences/Manage', {
    name:'Audiences-Manage',
    action: function(params, queryParams) {
      params.active='Audiences'
      params.current='Audiences-Manage'
      params.title="Audiences:Manage"
      ReactLayout.render(HomeView);
    }
});
