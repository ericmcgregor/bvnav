FlowRouter.route('/', {
    name:'home',
    action: function(params, queryParams) {
      ReactLayout.render(HomeView);
    }
});
