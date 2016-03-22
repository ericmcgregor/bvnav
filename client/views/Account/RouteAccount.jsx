FlowRouter.route('/account', {
    name:'account',
    action: function(params, queryParams) {
      params.active='account'
      params.current='account'
      params.title="Account"
      ReactLayout.render(HomeView, {
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
      ReactLayout.render(HomeView, {
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
      ReactLayout.render(HomeView, {
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
      ReactLayout.render(HomeView, {
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
      ReactLayout.render(HomeView, {
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
      ReactLayout.render(HomeView, {
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
      ReactLayout.render(HomeView, {
        title:"Account:Validate"
      });
    }
});
