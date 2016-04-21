import React from 'react';
import {mount} from 'react-mounter';

FlowRouter.triggers.enter([(context)=>{
  $(()=>{
    $('.nav-tabs a:first').tab('show')
  })
}])


FlowRouter.route('/', {
    name:'home',
    action: function(params, queryParams) {
      params.active='home'
      params.current='home'
      mount(HomeView);
    }
});

FlowRouter.route('/all', {
    name:'all',
    action: function(params, queryParams) {
      mount(HomeView);
    }
});



FlowRouter.route('/products', {
    name:'products',
    action: function(params, queryParams) {
      params.active='products'
      params.current='products'
      mount(HomeView);
    }
});
