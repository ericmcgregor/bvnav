import React from 'react';
import {mount} from 'react-mounter';

FlowRouter.route('/Advertising/Campaigns', {
    name:'Advertising-Campaigns',
    action: function(params, queryParams) {
      params.active='Advertising'
      params.current='Advertising-Campaigns'
      mount(HomeView, {
        title:"Advertising",
        pageHeader:<CampaignListHeader />,
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
          mount(HomeView, {
            title:"Advertising",
            titleLink:"/advertising/campaigns",
            pageHeader:<div><CampaignDetailHeader {...params}/><ROIfrequencyClass  /></div>,
            nav:{
              primary:[
                {name:"Line Items (10)"},
                {name:"Creatives (8)"},
              ],
              secondary:[],
              content:[
                <ContentView pageHeader={<LineItemListHeader />} pageContent={<LineItemList />} />,
                <ContentView pageHeader={<CreativesListHeader />} pageContent={<CreativesList />} />
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

              mount(HomeView, {
                title:"Advertising",
                titleLink:"/advertising/campaigns/detail",
                pageHeader:<LineItemDetailHeader  {...params}/>,
                nav:{
                  primary:[
                    {name:"Conversion Report"},
                    {name:"Audience Snapshot"},
                    {name:"Consideration Report"},
                    {name:"Creatives (8)"},
                    {name:"Product Sets (0)"},
                    {name:"Details"},
                  ],
                  secondary:[],
                  content:[
                    <ContentView pageHeader={<ExportReportHeader print="/print/roi"/>} pageContent={FlowRouter.current().queryParams.hvt ? <NonCommerceRoi /> : <ROIreportClass />} />,
                    <ContentView pageHeader={<ExportReportHeader print="/print/abr"/>} pageContent={<AudienceReportClass />} />,
                    <ContentView pageHeader={<ExportReportHeader print="/print/consideration"/>} pageContent={<ConsiderationReport />} />,
                    <ContentView pageHeader={<ExportReportHeader />} pageContent={<CreativesList />} />,
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
      mount(HomeView, {
        title:"Advertising:Advertisers",
      });
    }
});


FlowRouter.route('/advertising/Creatives', {
    name:'Advertising-Creatives',
    action: function(params, queryParams) {
      params.active='Advertising'
      params.current='Advertising-Creatives'
      mount(HomeView, {
        title:"Advertising:Creatives",
         pageHeader:<CreativesHeader />,
        pageContent:<CreativesList />,
      });
    }
});
