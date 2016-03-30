import React from 'react';
FlowRouter.route('/Stories', {
    name:'Stories',
    action: function(params, queryParams) {
      params.active='Stories'
      params.current='Stories'
      params.title="Stories"
      ReactLayout.render(HomeView, {
        title:"Stories:"
      });
    }
});

FlowRouter.route('/Stories/Dashboard', {
    name:'Stories-Dashboard',
    action: function(params, queryParams) {
      params.active='Stories'
      params.current='Stories-Dashboard'
      params.title="Stories:Dashboard"
      ReactLayout.render(HomeView, {
        title:"Stories:Dashboard"
      });
    }
});


FlowRouter.route('/Stories/Manage', {
    name:'Stories-Manage',
    action: function(params, queryParams) {
      params.active='Stories'
      params.current='Stories-Manage'
      params.title="Stories:Manage"
      ReactLayout.render(HomeView, {
        title:"Stories:Manage"
      });
    }
});


FlowRouter.route('/Stories/Reports', {
    name:'Stories-Reports',
    action: function(params, queryParams) {
      params.active='Stories'
      params.current='Stories-Reports'
      params.title="Stories:Reports"
      ReactLayout.render(HomeView, {
        title:"Stories:Reports",
        nav: {
          primary:[
            {name:"Analyst Reports"},
            {name:"Analyst Report Templates"},
          ],
          content:[
            <div></div>
          ]
        }
      });
    }
});
