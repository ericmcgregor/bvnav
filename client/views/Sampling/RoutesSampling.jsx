import React from 'react';
import {mount} from 'react-mounter';
FlowRouter.route('/Sampling', {
    name:'Sampling',
    action: function(params, queryParams) {
      params.active='Sampling'
      params.current='Sampling'
      params.title="Sampling"
      mount(HomeView, {
        title:"Sampling"
      });
    }
});

FlowRouter.route('/Sampling/Campaigns', {
    name:'Sampling-Campaigns',
    action: function(params, queryParams) {
      params.active='Sampling'
      params.current='Sampling-Campaigns'
      params.title="Sampling:Campaigns"
      mount(HomeView, {
        title:"Sampling: Campaigns",
        nav: {
          primary:[
            {name:"Intelligent Alerts"},
            {name:"Native Alerts"},
            {name:"Network Alerts"},
          ],
          content:[
            <div></div>,
          ]
        }
      });
    }
});

FlowRouter.route('/Sampling/Templates', {
    name:'Sampling-Templates',
    action: function(params, queryParams) {
      params.active='Sampling'
      params.current='Sampling-Templates'
      params.title="Sampling:Templates"
      mount(HomeView, {
        title:"Sampling:Templates"
      });
    }
});


FlowRouter.route('/Sampling/Members', {
    name:'Sampling-Members',
    action: function(params, queryParams) {
      params.active='Sampling'
      params.current='Sampling-Members'
      params.title="Sampling:Members"
      mount(HomeView, {
        title:"Sampling: Members",
        nav: {
          primary:[
            {name:"Manage Members"},
            {name:"Invite Members"},
            {name:"Registration Reminders"},
          ],
          content:[
            <div></div>,
            <ContentView pageHeader={<MembersHeader />} />
          ]
        }
      });
    }
});


FlowRouter.route('/Sampling/Products', {
    name:'Sampling-Products',
    action: function(params, queryParams) {
      params.active='Sampling'
      params.current='Sampling-Products'
      params.title="Sampling:Products"
      mount(HomeView, {
        title:"Sampling:Products"
      });
    }
});


FlowRouter.route('/Sampling/Vendors', {
    name:'Sampling-Vendors',
    action: function(params, queryParams) {
      params.active='Sampling'
      params.current='Sampling-Vendors'
      params.title="Sampling:Vendors"
      mount(HomeView, {
        title:"Sampling: Vendors",
        nav: {
          primary:[
            {name:"Manage Vendors"},
            {name:"Invite Vendors"},
            {name:"Registration Reminders"},
          ],
          content:[
            <div></div>,
            <ContentView pageHeader={<MembersHeader />} />
          ]
        }
      });
    }
});
