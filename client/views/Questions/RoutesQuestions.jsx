import React from 'react';
import {mount} from 'react-mounter';
FlowRouter.route('/questions', {
    name:'Questions',
    action: function(params, queryParams) {
      params.active='Questions'
      params.current='Questions'
      params.title="Questions"
      mount(HomeView, {
        title:"Questions:"
      });
    }
});

FlowRouter.route('/questions/Dashboard', {
    name:'Questions-Dashboard',
    action: function(params, queryParams) {
      params.active='Questions'
      params.current='Questions-Dashboard'
      params.title="Questions:Dashboard"

      mount(HomeView, {
        title:"Questions:Dashboard"
      });
    }
});

FlowRouter.route('/questions/Manage', {
    name:'Questions-Manage',
    action: function(params, queryParams) {
      params.active='Questions'
      params.current='Questions-Manage'
      params.title="Questions:Manage"
      mount(HomeView, {
        title:"Questions:Manage",
        nav: {
          primary:[
            {name:"Native"},
            {name:"Network"},
          ],
          content:[
            <div></div>
          ]
        }
      });
    }
});

FlowRouter.route('/questions/Configure', {
    name:'Questions-Configure',
    action: function(params, queryParams) {
      params.active='Questions'
      params.current='Questions-Configure'
      params.title="Questions:Configure"
      mount(HomeView, {
        title:"Questions:Configure",
        nav: {
          primary:[
            {name:"Display"},
            {name:"Facebook"},
          ],
          content:[
            <div></div>
          ]
        }
      });
    }
});
FlowRouter.route('/questions/Reports', {
    name:'Questions-Reports',
    action: function(params, queryParams) {
      params.active='Questions'
      params.current='Questions-Reports'
      params.title="Questions:Reports"
      mount(HomeView, {
        title:"Questions:Reports",
        nav: {
          primary:[
            {name:"Brand Participation"},
          ],
          content:[
            <div></div>
          ]
        }
      });
    }
});
