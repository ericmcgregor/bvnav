import React from 'react';

FlowRouter.route('/print/roi', {
    name:'Print-Conversion',
    action: function(params, queryParams) {
      params.active='Advertising'
      params.current='Advertising-Campaigns'
      ReactLayout.render(PrintView, {
        title:"Conversion",
        pageHeader:<CampaignListHeader />,
      });
    }
});
