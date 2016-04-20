import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';

ROIreport = class ROIreport extends React.Component{
  componentDidMount(){
  }
  componentDidUpdate(){
  }
  renderContent(){
    if(this.props.loaded === false) {
      return (<div>...loading</div>);
    }
    return (
      <div>

        {FlowRouter.current().queryParams.frequency ? <CampaignFrequency {...this.props} /> : <CampaignPerformance {...this.props} />}

        <CampaignShareOfSales {...this.props} />

        <CampaignOnlineSales {...this.props} />

        <CampaignShareOfVoice {...this.props} />

        <CampaignEngagement {...this.props} />

      </div>
    );
  }

  render() {
    return this.renderContent()
  }
}



ROIreportClass = createContainer(({ params }) => {
  let Data = Session.get('ROIdata');
  getROIdata(Session.get('ROIid'), roas=4.21, spend=125000, conversions=451);
  if(!Data) {
    console.log('no data', Data)
    return {
      loaded:false
    }
  }

  // if (Data.roas > 5) {
  //   Data.roas = 4.32;
  // }
  // if (Data.roas < 2) {
  //   Data.roas = 4.32;
  // }
  console.log(...Data.DailyStats.conversions)
  return {
    params,
    ...Data,
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
    DailyCampaignConversions:{
        title:"Daily Campaign ROAS",
        height:100,
        chartID:"roas",
        dates: Data.DailyStats.dates,
        columns: [['ROAS', ...Data.DailyStats.conversions]],
        colors:[GraphPrimary],
        formatY:function (d) { return d.toFixed(0); }
      },
      DailyCampaignROAS:{
          title:"Daily Campaign ROAS",
          height:200,
          chartID:"roas",
          dates: Data.DailyStats.dates,
          columns: [['ROAS', ...Data.DailyStats.conversions]],
          colors:[GraphPrimary],
          formatY:function (d) { return "$"+d.toFixed(0); }
        },
      ROASbyFrequency:{
          title:"Daily Campaign ROAS",
          height:200,
          chartID:"roasfrequency",
          dates: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],
          columns: [['ROAS', 0, 0, 1, 0, 0, 0, 1, 3, 6, 1, 4, 5, 1, 11, 22, 2, 0, 1]],
          colors:[GraphPrimary],
          formatY:function (d) { return "$"+d.toFixed(0); }
        },
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
      DailyCampaignSales:{
          title:"Daily Campaign Sales",
          height:170,
          chartID:"sales",
          dates: Data.DailyStats.dates,
          columns: [['Sales', ...Data.DailyStats.sales]],
          colors:[GraphPrimary],
          formatY:function (d) {
            return "$" + addCommas(d.toFixed(0));
          }
      },
      CompetitiveSales:Data.CompetitiveSales,
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

}, ROIreport);



ROIfrequencyClass = createContainer(({ params }) => {
  let Data = Session.get('ROIdata');
  getROIdata(Session.get('ROIid'), roas=4.21, spend=125000, conversions=451);
  if(!Data) {
    console.log('no data', Data)
    return {
      loaded:false
    }
  }

  // if (Data.roas > 5) {
  //   Data.roas = 4.32;
  // }
  // if (Data.roas < 2) {
  //   Data.roas = 4.32;
  // }
  console.log(...Data.DailyStats.conversions)
  return {
    params,
    ...Data,
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
    DailyCampaignConversions:{
        title:"Daily Campaign ROAS",
        height:100,
        chartID:"roas",
        dates: Data.DailyStats.dates,
        columns: [['ROAS', ...Data.DailyStats.conversions]],
        colors:[GraphPrimary],
        formatY:function (d) { return d.toFixed(0); }
      },
      DailyCampaignROAS:{
          title:"Daily Campaign ROAS",
          height:200,
          chartID:"roas",
          dates: Data.DailyStats.dates,
          columns: [['ROAS', ...Data.DailyStats.conversions]],
          colors:[GraphPrimary],
          formatY:function (d) { return "$"+d.toFixed(0); }
        },
      ROASbyFrequency:{
          title:"Daily Campaign ROAS",
          height:200,
          chartID:"roasfrequency",
          dates: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],
          columns: [['ROAS', 0, 0, 1, 0, 0, 0, 1, 3, 6, 1, 4, 5, 1, 11, 22, 2, 0, 1]],
          colors:[GraphPrimary],
          formatY:function (d) { return "$"+d.toFixed(0); }
        },
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
      DailyCampaignSales:{
          title:"Daily Campaign Sales",
          height:170,
          chartID:"sales",
          dates: Data.DailyStats.dates,
          columns: [['Sales', ...Data.DailyStats.sales]],
          colors:[GraphPrimary],
          formatY:function (d) {
            return "$" + addCommas(d.toFixed(0));
          }
      },
      CompetitiveSales:Data.CompetitiveSales,
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

}, CampaignFrequency);
