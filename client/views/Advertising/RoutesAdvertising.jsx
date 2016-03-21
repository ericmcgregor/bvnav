
FlowRouter.route('/Advertising/Campaigns', {
    name:'Advertising-Campaigns',
    action: function(params, queryParams) {
      params.active='Advertising'
      params.current='Advertising-Campaigns'
      ReactLayout.render(CampaignsManage);
    }
});
    FlowRouter.route('/advertising/Campaigns/detail', {
        name:'Advertising-Campaigns-Detail',
        action: function(params, queryParams) {
          params.active='Advertising'
          params.current='Advertising-Campaigns'
          ReactLayout.render(CampaignsDetail);
        }
    });
        FlowRouter.route('/advertising/campaigns/detail/line-item/123456', {
            name:'Advertising-Campaigns-Detail-Line',
            action: function(params, queryParams) {
              params.active='Advertising'
              params.current='Advertising-Campaigns'
              ReactLayout.render(CampaignsDetailLineItem);
            }
        });


FlowRouter.route('/advertising/Advertisers', {
    name:'Advertising-Advertisers',
    action: function(params, queryParams) {
      params.active='Advertising'
      params.current='Advertising-Advertisers'
      ReactLayout.render(AudiencesManage);
    }
});


FlowRouter.route('/advertising/Creatives', {
    name:'Advertising-Creatives',
    action: function(params, queryParams) {
      params.active='Advertising'
      params.current='Advertising-Creatives'
      ReactLayout.render(AdProdcutsManage);
    }
});
FlowRouter.route('/advertising/recommendations', {
    name:'Advertising-',
    action: function(params, queryParams) {
      params.active='Advertising'
      params.current='Advertising-'
      ReactLayout.render(AdRecommendationsManage);
    }
});
