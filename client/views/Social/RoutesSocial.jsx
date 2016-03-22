FlowRouter.route('/Social', {
    name:'Social',
    action: function(params, queryParams) {
      params.active='Social'
      params.current='Social'
      params.title="Social"
      ReactLayout.render(HomeView, {
        title:"Social"
      });
    }
});

FlowRouter.route('/Social/Dashboard', {
    name:'Social-Dashboard',
    action: function(params, queryParams) {
      params.active='Social'
      params.current='Social-Dashboard'
      params.title="Social:Dashboard"
      ReactLayout.render(HomeView, {
        title:"Social:Dashboard"
      });
    }
});

FlowRouter.route('/Social/Content', {
    name:'Social-Content',
    action: function(params, queryParams) {
      params.active='Social'
      params.current='Social-Content'
      params.title="Social:Content"
      ReactLayout.render(HomeView, {
        title:"Social:Content"
      });
    }
});

FlowRouter.route('/Social/Search', {
    name:'Social-Search',
    action: function(params, queryParams) {
      params.active='Social'
      params.current='Social-Search'
      params.title="Social:Search"
      ReactLayout.render(HomeView, {
        title:"Social:Search"
      });
    }
});

FlowRouter.route('/Social/Groups', {
    name:'Social-Groups',
    action: function(params, queryParams) {
      params.active='Social'
      params.current='Social-Groups'
      params.title="Social:Groups"
      ReactLayout.render(HomeView, {
        title:"Social:"
      });
    }
});

FlowRouter.route('/Social/Tags', {
    name:'Social-Tags',
    action: function(params, queryParams) {
      params.active='Social'
      params.current='Social-Tags'
      params.title="Social:Tags"
      ReactLayout.render(HomeView, {
        title:"Social:Tags"
      });
    }
});

FlowRouter.route('/Social/Filters', {
    name:'Social-Filters',
    action: function(params, queryParams) {
      params.active='Social'
      params.current='Social-Filters'
      params.title="Social:Filters"
      ReactLayout.render(HomeView, {
        title:"Social:Filters"
      });
    }
});

FlowRouter.route('/Social/Rights', {
    name:'Social-Rights',
    action: function(params, queryParams) {
      params.active='Social'
      params.current='Social-Rights'
      params.title="Social:Rights"
      ReactLayout.render(HomeView, {
        title:"Social:Rights Management"
      });
    }
});


FlowRouter.route('/Social/Reports', {
    name:'Social-Reports',
    action: function(params, queryParams) {
      params.active='Social'
      params.current='Social-Reports'
      params.title="Social:Reports"
      ReactLayout.render(HomeView, {
        title:"Social:Reports"
      });
    }
});
