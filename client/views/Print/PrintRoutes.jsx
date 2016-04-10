import React from 'react';

FlowRouter.route('/print/roi', {
    name:'Print-Conversion',
    action: function(params, queryParams) {
      params.active='Advertising'
      params.current='Advertising-Campaigns'
      ReactLayout.render(PrintView, {
        title:"Conversion",
        pageHeader:<ConversionHeaderPrint  {...params}/>,
        pageContent:FlowRouter.current().queryParams.hvt ? <NonCommerceRoi /> : <ROIreportClass />,
      });
    }
});


FlowRouter.route('/print/abr', {
    name:'Print-Audience',
    action: function(params, queryParams) {
      params.active='Advertising'
      params.current='Advertising-Campaigns'
      ReactLayout.render(PrintView, {
        title:"Conversion",
        pageHeader:<AudienceHeaderPrint  {...params}/>,
        pageContent:<AudienceReportClass />,
      });
    }
});
