FlowRouter.route('/Sampling', {
    name:'Sampling',
    action: function(params, queryParams) {
      params.active='Sampling'
      params.current='Sampling'
      params.title="Sampling"
      ReactLayout.render(HomeView);
    }
});

FlowRouter.route('/Sampling/Templates', {
    name:'Sampling-Templates',
    action: function(params, queryParams) {
      params.active='Sampling'
      params.current='Sampling-Templates'
      params.title="Sampling:Templates"
      ReactLayout.render(HomeView);
    }
});


FlowRouter.route('/Sampling/Members', {
    name:'Sampling-Members',
    action: function(params, queryParams) {
      params.active='Sampling'
      params.current='Sampling-Members'
      params.title="Sampling:Members"
      ReactLayout.render(HomeView);
    }
});


FlowRouter.route('/Sampling/Products', {
    name:'Sampling-Products',
    action: function(params, queryParams) {
      params.active='Sampling'
      params.current='Sampling-Products'
      params.title="Sampling:Products"
      ReactLayout.render(HomeView);
    }
});


FlowRouter.route('/Sampling/Vendors', {
    name:'Sampling-Vendors',
    action: function(params, queryParams) {
      params.active='Sampling'
      params.current='Sampling-Vendors'
      params.title="Sampling:Vendors"
      ReactLayout.render(HomeView);
    }
});
