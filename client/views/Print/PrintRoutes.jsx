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


FlowRouter.route('/print/consideration', {
    name:'Print-Consideration',
    action: function(params, queryParams) {
      params.active='Advertising'
      params.current='Advertising-Campaigns'
      ReactLayout.render(PrintView, {
        title:"Conversion",
        pageHeader:<ConsiderationHeaderPrint  {...params}/>,
      pageContent:<ConsiderationReport />,
      });
    }
});


FlowRouter.route('/print/recommendations', {
    name:'Print-Recommendations',
    action: function(params, queryParams) {
      params.active='Advertising'
      params.current='Advertising-Campaigns'
      ReactLayout.render(PrintView, {
        title:"Conversion",
        pageHeader:<RecommendationsHeaderPrint  {...params}/>,
        pageContent:<RecommendationsReport {...params} />,
      });
    }
});
