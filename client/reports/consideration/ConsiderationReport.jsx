import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';

ConsiderationReportClass = class ConsiderationReportClass extends React.Component{
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


ConsiderationReport = createContainer(({ params }) => {
  let Data = Session.get('ROIdata');
  if(!Data) {
    console.log('no data', Data)
    return {
      loaded:false
    }
  }

  // if (Data.roas > 5) {
  //   Data.roas = 4.32;
  // }

  return {
    params,
    ...Data,
    performanceOverview:[
      {name:'Impressions', num:Data.impressions,                 className:"secondary"},
      {name:'Views', num:Data.views.source,                      className:"secondary"},
      {name:'Clicks', num:Data.clicks,                  className:"secondary"},
      {name:'eCPM', num:"$"+Data.ecpm,                className:"secondary"},
      {name:'eCPC', num:"$"+Data.ecpc,                className:"secondary"},
      // {name:'Spend', num:"$"+ROIdata.totalAdSpend,                  className:"primary"},
    ],
    ShareOfVoiceData: {
      ...Data.shareOfVoice,
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
      dates: Data.DailyStats.dates,
      columns: [['View-Through', ...Data.DailyStats.vtr]],
      colors:[GraphPrimary],
      totalType:"View-Throughs",
      total:Data.viewThroughs.source,
      rateType:"VTR",
      rate:Data.vtr+"%",
      formatY:function (d) { return d.toFixed(2)+"%"; }
    },
    DailyClickThrough:{
      title:"Daily Click Through",
      height:100,
      chartID:"clickthrough",
      dates: Data.DailyStats.dates,
      columns: [['Click-Through', ...Data.DailyStats.ctr]],
      colors:[GraphPrimary],
      totalType:"Click-Throughs",
      total:Data.clicks,
      rateType:"CTR",
      rate:Data.ctr+"%",
      formatY:function (d) { return d.toFixed(2)+"%"; }
    },
    AvgUserCGC:Data.AvgUserCGC,
  };

}, ConsiderationReportClass);
