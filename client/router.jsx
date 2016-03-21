FlowRouter.triggers.enter([(context)=>{

}])


FlowRouter.route('/', {
    name:'home',
    action: function(params, queryParams) {
      params.active='home'
      params.current='home'
      ReactLayout.render(HomeView);
    }
});

FlowRouter.route('/all', {
    name:'all',
    action: function(params, queryParams) {
      ReactLayout.render(HomeView);
    }
});



FlowRouter.route('/products', {
    name:'products',
    action: function(params, queryParams) {
      params.active='products'
      params.current='products'
      ReactLayout.render(HomeView);
    }
});
