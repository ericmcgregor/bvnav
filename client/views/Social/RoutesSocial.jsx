import React from 'react';
import {mount} from 'react-mounter';
FlowRouter.route('/Social', {
    name:'Social',
    action: function(params, queryParams) {
      params.active='Social'
      params.current='Social'
      params.title="Social"
      mount(HomeView, {
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
      mount(HomeView, {
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
      mount(HomeView, {
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
      mount(HomeView, {
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
      mount(HomeView, {
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
      mount(HomeView, {
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
      mount(HomeView, {
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
      mount(HomeView, {
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
      mount(HomeView, {
        title:"Social:Reports"
      });
    }
});
