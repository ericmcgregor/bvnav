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
      ReactLayout.render(HomeView);
    }
});
FlowRouter.route('/rr/collect', {
    name:'rrcollect',
    action: function(params, queryParams) {
      params.active='rr'
      ReactLayout.render(RRcollect);
    }
});
FlowRouter.route('/rr/manage', {
    name:'rrmanage',
    action: function(params, queryParams) {
      params.active='rr'
      switch (queryParams.view) {
        case "a":
          ReactLayout.render(RRmanagea);
          break;
        case "b":
          ReactLayout.render(RRmanageb);
          break;
        default:
          ReactLayout.render(RRmanagea);
      }
    }
});
FlowRouter.route('/rr/manage/native/detail', {
    name:'rrnativedetail',
    action: function(params, queryParams) {
      params.active='rr'
      ReactLayout.render(RRnativedetail);
    }
});




FlowRouter.route('/advertising/campaigns', {
    name:'adcampaign',
    action: function(params, queryParams) {
      params.active='advertising'
      ReactLayout.render(CampaignsManage);
    }
});
FlowRouter.route('/advertising/campaigns/detail', {
    name:'adcampaign',
    action: function(params, queryParams) {
      params.active='advertising'
      ReactLayout.render(CampaignsDetail);
    }
});

FlowRouter.route('/advertising/audiences', {
    name:'adaudiences',
    action: function(params, queryParams) {
      params.active='advertising'
      ReactLayout.render(AudiencesManage);
    }
});
