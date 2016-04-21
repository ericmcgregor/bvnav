import React from 'react';
import {mount} from 'react-mounter';
FlowRouter.route('/audiences', {
    name:'audiences',
    action: function(params, queryParams) {
      params.active='Audiences'
      params.current='Audiences'
      params.title="Audiences"


      mount(HomeView, {
        title:"Audiences: Contributors",
      })

    }
});

FlowRouter.route('/audiences/contributors', {
    name:'Audiences-Contributors',
    action: function(params, queryParams) {
      params.active='Audiences'
      params.current='Audiences-Contributors'
      params.title="Audiences:Contributors"
      mount(HomeView, {
        title:"Audiences: Contributors",
        nav: {
          primary:[
            {name:"Activity"},
            {name:"Roles"},
            {name:"Profiles"},
            {name:"Trends"},
          ],
          content:[
            <div></div>
          ]
        }
      });
    }
});

FlowRouter.route('/audiences/Manage', {
    name:'Audiences-Manage',
    action: function(params, queryParams) {
      params.active='Audiences'
      params.current='Audiences-Manage'
      params.title="Audiences:Manage"
      mount(HomeView, {
        title:"Audiences: Manage",
      })
    }
});
