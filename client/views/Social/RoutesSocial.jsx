FlowRouter.route('/Social', {
    name:'Social',
    action: function(params, queryParams) {
      params.active='Social'
      params.current='Social'
      params.title="Social"
      ReactLayout.render(HomeView);
    }
});

FlowRouter.route('/Social/Dashboard', {
    name:'Social-Dashboard',
    action: function(params, queryParams) {
      params.active='Social'
      params.current='Social-Dashboard'
      params.title="Social:Dashboard"
      ReactLayout.render(HomeView);
    }
});

FlowRouter.route('/Social/Content', {
    name:'Social-Content',
    action: function(params, queryParams) {
      params.active='Social'
      params.current='Social-Content'
      params.title="Social:Content"
      ReactLayout.render(HomeView);
    }
});

FlowRouter.route('/Social/Search', {
    name:'Social-Search',
    action: function(params, queryParams) {
      params.active='Social'
      params.current='Social-Search'
      params.title="Social:Search"
      ReactLayout.render(HomeView);
    }
});

FlowRouter.route('/Social/Groups', {
    name:'Social-Groups',
    action: function(params, queryParams) {
      params.active='Social'
      params.current='Social-Groups'
      params.title="Social:Groups"
      ReactLayout.render(HomeView);
    }
});

FlowRouter.route('/Social/Tags', {
    name:'Social-Tags',
    action: function(params, queryParams) {
      params.active='Social'
      params.current='Social-Tags'
      params.title="Social:Tags"
      ReactLayout.render(HomeView);
    }
});

FlowRouter.route('/Social/Filters', {
    name:'Social-Filters',
    action: function(params, queryParams) {
      params.active='Social'
      params.current='Social-Filters'
      params.title="Social:Filters"
      ReactLayout.render(HomeView);
    }
});
