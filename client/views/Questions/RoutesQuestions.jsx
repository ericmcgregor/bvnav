FlowRouter.route('/questions', {
    name:'Questions',
    action: function(params, queryParams) {
      params.active='Questions'
      params.current='Questions'
      params.title="Questions"
      ReactLayout.render(HomeView);
    }
});

FlowRouter.route('/questions/Dashboard', {
    name:'Questions-Dashboard',
    action: function(params, queryParams) {
      params.active='Questions'
      params.current='Questions-Dashboard'
      params.title="Questions:Dashboard"

      let layout = {
        nav: {
          primary:[
            {name:"test"},
          ],
          content:[
            <div></div>
          ]
        }
      }
      ReactLayout.render(HomeView, layout);
    }
});

FlowRouter.route('/questions/Manage', {
    name:'Questions-Manage',
    action: function(params, queryParams) {
      params.active='Questions'
      params.current='Questions-Manage'
      params.title="Questions:Manage"
      ReactLayout.render(HomeView);
    }
});

FlowRouter.route('/questions/Configure', {
    name:'Questions-Configure',
    action: function(params, queryParams) {
      params.active='Questions'
      params.current='Questions-Configure'
      params.title="Questions:Configure"
      ReactLayout.render(HomeView);
    }
});
