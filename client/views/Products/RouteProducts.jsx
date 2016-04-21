import React from 'react';
import {mount} from 'react-mounter';
FlowRouter.route('/products', {
    name:'products',
    action: function(params, queryParams) {
      params.active='products'
      params.current='products'
      params.title="Products"
      mount(HomeView, {
        title:"Products:"
      });
    }
});

FlowRouter.route('/products/Families', {
    name:'products-Families',
    action: function(params, queryParams) {
      params.active='products'
      params.current='products-Families'
      params.title="Products:Families"
      mount(HomeView, {
        title:"Products:Families"
      });
    }
});
FlowRouter.route('/products/Migrate', {
    name:'products-Migrate',
    action: function(params, queryParams) {
      params.active='products'
      params.current='products-Migrate'
      params.title="Products:Migrate"
      mount(HomeView, {
        title:"Products:Migrate"
      });
    }
});
FlowRouter.route('/products/Sets', {
    name:'products-Sets',
    action: function(params, queryParams) {
      params.active='products'
      params.current='products-Sets'
      params.title="Products:Sets"
      mount(HomeView, {
        title:"Products:Sets"
      });
    }
});
FlowRouter.route('/products/Reports', {
    name:'products-Reports',
    action: function(params, queryParams) {
      params.active='products'
      params.current='products-Reports'
      params.title="Products:Reports"
      mount(HomeView, {
        title:"Products: Reports",
        nav: {
          primary:[
            {name:"Activity"},
            {name:"Trending (rising/falling)"},
            {name:"Highest/Lowest Rated"},
            {name:"Most Viewed"},
          ],
          content:[
            <div></div>
          ]
        }
      });
    }
});
