FlowRouter.route('/products', {
    name:'products',
    action: function(params, queryParams) {
      params.active='products'
      params.current='products'
      params.title="Products"
      ReactLayout.render(HomeView);
    }
});

FlowRouter.route('/products/Families', {
    name:'products-Families',
    action: function(params, queryParams) {
      params.active='products'
      params.current='products-Families'
      params.title="Products:Families"
      ReactLayout.render(HomeView);
    }
});
FlowRouter.route('/products/Migrate', {
    name:'products-Migrate',
    action: function(params, queryParams) {
      params.active='products'
      params.current='products-Migrate'
      params.title="Products:Migrate"
      ReactLayout.render(HomeView);
    }
});
FlowRouter.route('/products/Sets', {
    name:'products-Sets',
    action: function(params, queryParams) {
      params.active='products'
      params.current='products-Sets'
      params.title="Products:Sets"
      ReactLayout.render(HomeView);
    }
});
FlowRouter.route('/products/Reports', {
    name:'products-Reports',
    action: function(params, queryParams) {
      params.active='products'
      params.current='products-Reports'
      params.title="Products:Reports"
      ReactLayout.render(HomeView, {
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
