FlowRouter.route('/', {
    name:'home',
    action: function(params, queryParams) {
      ReactLayout.render(HomeView);
    }
});




FlowRouter.route('/rr', {
    name:'rr',
    action: function(params, queryParams) {
      params.active='rr'
      params.current='rr'
      ReactLayout.render(HomeView);
    }
});
FlowRouter.route('/rr/collect', {
    name:'rrcollect',
    action: function(params, queryParams) {
      params.active='rr'
      params.current='rrcollect'
      ReactLayout.render(RRcollect);
    }
});
FlowRouter.route('/rr/manage', {
    name:'rrmanage',
    action: function(params, queryParams) {
      params.active='rr'
      params.current='rrmanage'
      ReactLayout.render(RRmanagea);
    }
});

FlowRouter.route('/rr/manage/native/detail', {
    name:'rrnativedetail',
    action: function(params, queryParams) {
      params.active='rr'
      params.current='rrmanage'
      ReactLayout.render(RRnativedetail);
    }
});

FlowRouter.route('/rr/display', {
    name:'rrdisplay',
    action: function(params, queryParams) {
      params.active='rr'
      params.current='rrdisplay'
      ReactLayout.render(RRdisplay);
    }
});
FlowRouter.route('/rr/amplify', {
    name:'rramplify',
    action: function(params, queryParams) {
      params.active='rr'
      params.current='rramplify'
      ReactLayout.render(RRamplify);
    }
});
FlowRouter.route('/rr/notifications', {
    name:'rrnotifications',
    action: function(params, queryParams) {
      params.active='rr'
      params.current='rrnotifications'
      ReactLayout.render(RRnotifications);
    }
});

FlowRouter.route('/rr/reports', {
    name:'rrreports',
    action: function(params, queryParams) {
      params.active='rr'
      params.current='rrreports'
      ReactLayout.render(RRreports);
    }
});









FlowRouter.route('/advertising/campaigns', {
    name:'adcampaigns',
    action: function(params, queryParams) {
      params.active='advertising'
      params.current='adcampaigns'
      ReactLayout.render(CampaignsManage);
    }
});
FlowRouter.route('/advertising/campaigns/detail', {
    name:'adcampaign',
    action: function(params, queryParams) {
      params.active='advertising'
      params.current='adcampaigns'
      ReactLayout.render(CampaignsDetail);
    }
});

FlowRouter.route('/advertising/audiences', {
    name:'adaudiences',

    action: function(params, queryParams) {
      params.active='advertising'
      params.current='adaudiences'
      ReactLayout.render(AudiencesManage);
    }
});
FlowRouter.route('/advertising/product-sets', {
    name:'adproducts',

    action: function(params, queryParams) {
      params.active='advertising'
      params.current='adproducts'
      ReactLayout.render(AdProdcutsManage);
    }
});
FlowRouter.route('/advertising/recommendations', {
    name:'adrecommendations',

    action: function(params, queryParams) {
      params.active='advertising'
      params.current='adrecommendations'
      ReactLayout.render(AdRecommendationsManage);
    }
});
