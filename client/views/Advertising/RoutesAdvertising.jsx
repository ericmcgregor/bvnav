
FlowRouter.route('/Advertising/Campaigns', {
    name:'Advertising-Campaigns',
    action: function(params, queryParams) {
      params.active='Advertising'
      params.current='Advertising-Campaigns'
      ReactLayout.render(HomeView, {
        title:"Advertising:Advertisers",
        pageHeader:<CampaignListHeader  {...params}/>,
        nav:{
          primary:[
            {name:"Active (23)"},
            {name:"Pending (11)"},
            {name:"Completed (4)"},
          ],
          secondary:[],
          content:[
            <ContentView pageContent={<CampaignList />} />,
            <div />
          ]
        }
      });
    }
});
    FlowRouter.route('/advertising/Campaigns/detail', {
        name:'Advertising-Campaigns-Detail',
        action: function(params, queryParams) {
          params.crumbs=[{name:"Campaigns", link:"/advertising/campaigns"}, {name:"Detail", className:"active"}]
          params.active='Advertising'
          params.current='Advertising-Campaigns'
          ReactLayout.render(HomeView, {
            title:"Advertising",
            titleLink:"/advertising/campaigns",
            pageHeader:<CampaignDetailHeader {...params}/>,
            nav:{
              primary:[
                {name:"Line Items (10)"},
                {name:"Creatives (8)"},
                {name:"Brand Consideration"},
              ],
              secondary:[],
              content:[
                <ContentView pageHeader={<LineItemHeader />} pageContent={<LineItemList />} />,
                <CreativesList />,
              ]
            }
          });
        }
    });
        FlowRouter.route('/advertising/campaigns/detail/line-item/:id', {
            name:'Advertising-Campaigns-Detail-Line',
            action: function(params, queryParams) {
              params.active='Advertising'
              params.current='Advertising-Campaigns'
              params.crumbs=[
                              {name:"Campaigns", link:"/advertising/campaigns"},
                              {name:"Detail", link:"/advertising/campaigns/detail"},
                              {name:"Line-Item", className:"active"}
                            ]

              ReactLayout.render(HomeView, {
                title:"Advertising",
                titleLink:"/advertising/campaigns/detail",
                pageHeader:<LineItemDetailHeader  {...params}/>,
                nav:{
                  primary:[
                    {name:"Details"},
                    {name:"Conversion Report"},
                    {name:"Creatives (3)"},
                    {name:"Audiences (0)"},
                    {name:"Product Sets (0)"},
                  ],
                  secondary:[],
                  content:[
                    <div></div>,
                    <div></div>,
                    <ContentView pageHeader={<CreativesHeader />} pageContent={<CreativesList />} />,
                  ]
                }
              });


            }
        });


FlowRouter.route('/advertising/Advertisers', {
    name:'Advertising-Advertisers',
    action: function(params, queryParams) {
      params.active='Advertising'
      params.current='Advertising-Advertisers'
      ReactLayout.render(HomeView, {
        title:"Advertising:Advertisers",
      });
    }
});


FlowRouter.route('/advertising/Creatives', {
    name:'Advertising-Creatives',
    action: function(params, queryParams) {
      params.active='Advertising'
      params.current='Advertising-Creatives'
      ReactLayout.render(HomeView, {
        title:"Advertising:Creatives",
         pageHeader:<CreativesHeader />,
        pageContent:<CreativesList />,
      });
    }
});
