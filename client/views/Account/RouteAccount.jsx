import React from 'react';
import {mount} from 'react-mounter';
FlowRouter.route('/account', {
    name:'account',
    action: function(params, queryParams) {
      params.active='account'
      params.current='account'
      params.title="Account"
      mount(HomeView, {
        title:"Account:"
      });
    }
});

FlowRouter.route('/account/billing', {
    name:'account-billing',
    action: function(params, queryParams) {
      params.active='account'
      params.current='account-billing'
      params.title="Account:billing"
      mount(HomeView, {
        title:"Account:Billing"
      });
    }
});
FlowRouter.route('/account/configure', {
    name:'account-configure',
    action: function(params, queryParams) {
      params.active='account'
      params.current='account-configure'
      params.title="Account:configure"
      mount(HomeView, {
        title:"Account:Configure"
      });
    }
});
FlowRouter.route('/account/profile', {
    name:'account-profile',
    action: function(params, queryParams) {
      params.active='account'
      params.current='account-profile'
      params.title="Account:profile"
      mount(HomeView, {
      title:"Account:Profile"
    });
    }
});
FlowRouter.route('/account/roles', {
    name:'account-roles',
    action: function(params, queryParams) {
      params.active='account'
      params.current='account-roles'
      params.title="Account:roles"
      mount(HomeView, {
        title:"Account:Roles"
      });
    }
});
FlowRouter.route('/account/users', {
    name:'account-users',
    action: function(params, queryParams) {
      params.active='account'
      params.current='account-users'
      params.title="Account:users"
      mount(HomeView, {
        title:"Account:Users"
      });
    }
});
FlowRouter.route('/account/validate', {
    name:'account-validate',
    action: function(params, queryParams) {
      params.active='account'
      params.current='account-validate'
      params.title="Account:validate"
      mount(HomeView, {
        title:"Account:Validate"
      });
    }
});
