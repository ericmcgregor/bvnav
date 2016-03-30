import React from 'react';
ROIreport = class ROIreport extends React.Component{
  render() {
    return (
      <div>


        <CampaignPerformance {...this.props} />

        <CampaignShareOfSales {...this.props} />

        <CampaignOnlineSales {...this.props} />

        <CampaignShareOfVoice {...this.props} />

        <CampaignEngagement {...this.props} />


      </div>
    );
  }
}


var Data = formatROIData(ROIdata);


ROIreport.defaultProps = {
  performanceOverview:[
    {name:'Impressions', num:Data.impressions,                 className:"secondary"},
    {name:'Views', num:Data.views.source,                      className:"secondary"},
    {name:'Clicks', num:Data.clicks,                  className:"secondary"},
    {name:'Conversions', num:Data.conversions,                 className:"secondary"},
    {name:'eCPM', num:"$"+Data.ecpm,                className:"secondary"},
    {name:'eCPC', num:"$"+Data.ecpc,                className:"secondary"},
    {name:'Sales', num:"$"+Data.onlineSales.source,         className:"primary"},
    {name:'ROAS', num:"$"+Data.roas,                className:"primary"},
  ],
  DailyCampaignROAS:{
      title:"Daily Campaign ROAS",
      height:100,
      chartID:"roas",
      dates: Data.DailyStats.dates,
      columns: [['ROAS', ...Data.DailyStats.conversions]],
      colors:[GraphPrimary]
  },
  ShareOfVoiceData: {
    ...shareOfVoice,
    height:280,
    chartID:'bar2',
    categories: ["Without Bazaarvoice Advertising", "With Bazaarvoice Advertising"],
    columns:[
      ['My Product', Data.shareOfVoice.notViewedAd.percent, Data.shareOfVoice.viewedAd.percent],
      ['Competitive Prducts', (100-Data.shareOfVoice.notViewedAd.percent), (100-Data.shareOfVoice.viewedAd.percent)]
    ],
    legend:{
      show:true
    }
  },

  DailyCampaignSales:{
      title:"Daily Campaign Sales",
      height:170,
      chartID:"sales",
      dates: Data.DailyStats.dates,
      columns: [['Sales', ...Data.DailyStats.sales]],
      colors:[GraphPrimary]
  },
  CompetitiveSales:Data.CompetitiveSales,
  // EngagementOverview:[
  //   {description:<span>Pageviews</span>, num:shareOfVoice.allsales,
  //     className:"divider-right secondary"},
  //   {description:<span><strong>Without</strong> Bazaarvoice Advertising</span>, num:shareOfVoice.notViewedAd.percent+"%",
  //     className:"", icon:"text-muted fa-eye-slash"},
  //   {description:<span><strong>With</strong> Bazaarvoice Advertising</span>, num:shareOfVoice.viewedAd.percent+"%",
  //     className:"", icon:"text-muted fa-eye"},
  //   {description:<span>Advertising <strong>lift</strong></span>, num:shareOfVoice.lift+"%",
  //     className:"", icon:"text-success fa-arrow-up"},
  // ],
  // EngagementOverview:[
  //   {description:<span>Pageviews</span>, num:shareOfVoice.allsales,
  //     className:"divider-right secondary"},
  //   {description:<span>of total Pageviews when <br/> customers <strong>didn’t view ad</strong></span>, num:shareOfVoice.notViewedAd.percent+"%",
  //     className:"", icon:"text-muted fa-eye-slash"},
  //   {description:<span>of total Pageviews when <br/> customers <strong>viewed ad</strong></span>, num:shareOfVoice.viewedAd.percent+"%",
  //     className:"", icon:"text-muted fa-eye"},
  //   {description:<span><strong>lift</strong> to total Pageviews when <br/> customers <strong>viewed ad</strong></span>, num:shareOfVoice.lift+"%",
  //     className:"", icon:"text-success fa-arrow-up"},
  // ],
  // salesOverview:[
  //   {description:<span>total online market sales</span>, num:"$"+shareOfSales.allsales,
  //     className:"divider-right secondary "},
  //   {description:<span><strong>Without</strong> Bazaarvoice Advertising</span>, num:shareOfSales.notViewedAd.percent+"%",
  //     className:"", icon:"text-muted fa-eye-slash"},
  //   {description:<span><strong>With</strong> Bazaarvoice Advertising</span>, num:shareOfSales.viewedAd.percent+"%",
  //     className:"", icon:"text-muted fa-eye"},
  //   {description:<span>Advertising <strong>lift</strong></span>, num:shareOfSales.lift+"%",
  //     className:"", icon:"text-success fa-arrow-up"},
  // ],


  DailyViewThrough:{
    title:"Daily View Through",
    height:100,
    chartID:"viewthrough",
    dates: ['2013-01-01', '2013-01-02', '2013-01-03', '2013-01-04', '2013-01-05', '2013-01-06'],
    columns: [['View Through', ...Data.DailyStats.vtr]],
    colors:[GraphPrimary],
    totalType:"View Throughs",
    total:Data.viewThroughs.source,
    rateType:"VTR",
    rate:Data.vtr+"%",
  },
  DailyClickThrough:{
    title:"Daily Click Through",
    height:100,
    chartID:"clickthrough",
    dates: ['2013-01-01', '2013-01-02', '2013-01-03', '2013-01-04', '2013-01-05', '2013-01-06'],
    columns: [['Click Through', ...Data.DailyStats.ctr]],
    colors:[GraphPrimary],
    totalType:"Click Throughs",
    total:Data.clicks,
    rateType:"CTR",
    rate:Data.ctr+"%",
  },
  AvgUserCGC:Data.AvgUserCGC,
}
