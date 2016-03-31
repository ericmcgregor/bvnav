import React from 'react';
ConsiderationReport = class ConsiderationReport extends React.Component{
    render() {
      return (
        <div>
          <div className="card report-card">
            <ReportCardHeader title="Campaign Performance" />

            <ReportOverviewRow data={this.props.performanceOverview} />

          </div>

          <CampaignShareOfVoice {...this.props} />

          <CampaignEngagement {...this.props} />
        </div>
      );
    }

}


// <CampaignEngagement {...this.props} />
var Data = formatROIData(ROIdata);

ConsiderationReport.defaultProps = {
  performanceOverview:[
    {name:'Impressions', num:Data.impressions,                 className:"secondary"},
    {name:'Views', num:Data.views.source,                      className:"secondary"},
    // {name:'Clicks', num:Data.clicks,                  className:"secondary"},
    {name:'eCPM', num:"$"+Data.ecpm,                className:"secondary"},
    {name:'eCPC', num:"$"+Data.ecpc,                className:"secondary"},
    // {name:'Spend', num:"$"+ROIdata.totalAdSpend,                  className:"primary"},
  ],
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
  // DailyCampaignSales:{
  //     title:"Daily Campaign Sales",
  //     height:170,
  //     chartID:"sales",
  //     dates: DailyStats.dates,
  //     columns: [['Sales', ...DailyStats.sales]],
  //     colors:[GraphPrimary]
  // },
  // CompetitiveSales:{
  //   MyProducts:{
  //     online:"25.8k",
  //     offline:"$108.5k",
  //     total:"$134k"
  //   },
  //   CompetitiveProducts:{
  //     online:"2.3M",
  //     offline:"28.5M",
  //     total:"$31M"
  //   }
  // },
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
  // DailyViewThrough:{
  //   title:"Daily View Through",
  //   height:100,
  //   chartID:"viewthrough",
  //   dates: ['2013-01-01', '2013-01-02', '2013-01-03', '2013-01-04', '2013-01-05', '2013-01-06'],
  //   columns: [['View Through', 75, 59, 65, 81, 66, 75, 60]],
  //   colors:[GraphPrimary],
  //   totalType:"View Throughs",
  //   total:ROIdata.viewThroughs.source,
  //   rateType:"VTR",
  //   rate:ROIdata.vtr.toFixed(2)+"%",
  //
  // },
  // DailyClickThrough:{
  //   title:"Daily Click Through",
  //   height:100,
  //   chartID:"clickthrough",
  //   dates: ['2013-01-01', '2013-01-02', '2013-01-03', '2013-01-04', '2013-01-05', '2013-01-06'],
  //   columns: [['Click Through', 65, 59, 80, 81, 56, 55, 70]],
  //   colors:[GraphPrimary],
  //   totalType:"Click Throughs",
  //   total:ROIdata.clicks,
  //   rateType:"CTR",
  //   rate:ROIdata.ctr.toFixed(2)+"%",
  // },
  // AvgUserCGC:{
  //   read:ROIdata.reviewsRead.viewedAd.source.toFixed(1),
  //   pageviews:ROIdata.averagePageViews.viewedAd.source.toFixed(1),
  //   order:"$"+ROIdata.averageOrderValue.viewedAd.source.toFixed(2)
  // }
}
