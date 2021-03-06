import React from 'react';
import {mount} from 'react-mounter';

FlowRouter.route('/Reviews/Dashboard', {
    name:'Reviews-Dashboard',
    action: function(params, queryParams) {
      params.active='Reviews'
      params.current='Reviews-Dashboard'
      mount(HomeView, {
        title:"Reviews: Manage Reviews",
        nav: {
          primary:[
            {name:"Activity"},
            {name:"Executive Summary"},
          ],
          content:[]
        }
      });
    }
});
FlowRouter.route('/Reviews/Collect', {
    name:'Reviews-Collect',
    action: function(params, queryParams) {
      params.active='Reviews'
      params.current='Reviews-Collect'
      mount(HomeView, {
        title:"Reviews: Collect"
      });
    }
});
FlowRouter.route('/Reviews/manage', {
    name:'Reviews-Manage',
    action: function(params, queryParams) {
      params.active='Reviews'
      params.current='Reviews-Manage'
      mount(HomeView, {
        title:"Reviews: Manage",
        nav: {
          primary:[
            {name:"Native Reviews"},
            {name:"Network Reviews"},
          ],
          content:[
            <ContentView pageHeader={<ManageNativeHeader />} pageContent={<ReviewList />} />,
            <NetworkList />
          ]
        }
      });
    }
});

  FlowRouter.route('/Reviews/manage/native/detail', {
      name:'Reviews-Manage-Native-Detail',
      action: function(params, queryParams) {
        params.active='Reviews'
        params.current='Reviews-Manage'

        mount(HomeView, {
          title:"Reviews: Manage: Deteail",
          titleLink:"/Reviews/manage",
          pageHeader:<ReviewDetailHeader />,
          nav: {
            primary:[
              {name:"Review"},
              {name:"Photos (0)"},
              {name:"Videos (0)"},
              {name:"Comments (0)"},
              {name:"Responses (0)"},
            ],
            content:[
              <div></div>
            ]
          }
        });
      }
  });

FlowRouter.route('/Reviews/Configure', {
    name:'Reviews-Configure',
    action: function(params, queryParams) {
      params.active='Reviews'
      params.current='Reviews-Configure'

      mount(HomeView, {
        title:"Reviews: Configure",
        pageContent:<RRConfigureContent />,
        pageHeader:<RRConfigureHeader />
      });
    }
});
FlowRouter.route('/Reviews/Syndicate', {
    name:'Reviews-Syndicate',
    action: function(params, queryParams) {
      params.active='Reviews'
      params.current='Reviews-Syndicate'

      mount(HomeView, {
        title:"Reviews: Syndicate",
        pageContent:<div></div>,
        pageHeader:<div></div>
      });
    }
});
FlowRouter.route('/Reviews/Alerts', {
    name:'Reviews-Alerts',
    action: function(params, queryParams) {
      params.active='Reviews'
      params.current='Reviews-Alerts'
      mount(HomeView, {
        title:"Reviews: Alerts",
        nav: {
          primary:[
            {name:"Intelligent Alerts"},
            {name:"Native Alerts"},
            {name:"Network Alerts"},
          ],
          content:[
            <div></div>
          ]
        }
      });
    }
});

FlowRouter.route('/Reviews/Reports', {
    name:'Reviews-Reports',
    action: function(params, queryParams) {
      params.active='Reviews'
      params.current='Reviews-Reports'
      mount(HomeView, {
        title:"Reviews: Reports",
        nav: {
          primary:[
            {name:"Activity"},
            {name:"Analyst Reports"},
            {name:"Audience"},
            {name:"Inbound Syndication"},
            {name:"Outbound Syndication"},
            {name:"Network Response Reports"},
            {name:"Product Coverage"},
            {name:"Product Performance"},
          ],
          content:[
            <div></div>
          ]
        }
      });
    }
});

// Activity
// Fastest Falling
// Fastest Rising
// Highest Rated
// Lowest Rated
// Most Viewed

// Overview
// Polarized by Rating
// Polarized by Segment
// Analyst Report Templates
// Analyst Reports
// Audience
// Inbound Syndication
// Network Response Reports
// Notifications
// Outbound Syndication
// Product Coverage
// Product Performance
