import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';

NonCommerceRoiClass = class NonCommerceRoi extends React.Component{
  additionalFields() {
    return (
      <div>
        <small className="text-muted m-t-1">* A conversion is a completed signup after clicking on or viewing an ad impression.</small>
      </div>
    )
  }
  render() {
    return (
      <div>
        <NonCommercePerformance {...this.props}  />
      </div>
    );
  }
}

NonCommerceRoi = createContainer(({ params }) => {
  let Data = Session.get('ROIdata');
  getROIdata(Session.get('ROIid', roas=3.21, spend=125000, conversions=1891));

  console.log(Data)
  if(!Data) {
    console.log('no data', Data)
    return {
      loaded:false
    }
  }


  return {
    params,
    ...Data,
    performanceOverview:[
      {name:'Impressions', num:Data.impressions,                 className:"secondary"},
      {name:'Clicks', num:Data.clicks,                  className:"secondary"},
      {name:'eCPM', num:"$"+Data.ecpm,                className:"secondary"},
      {name:'eCPC', num:"$"+Data.ecpc,                className:"secondary"},
      {name:'Conversions', num:Data.conversions,                 className:"secondary"},
      {name:'Cost Per Conversion', num:"$"+Data.cpc,       className:""},

      // {name:'Impressions', num:"3,112,915", className:"secondary"},
      // // {name:'Views', num:"38,254",           className:"secondary"},
      // {name:'Clicks', num:"5,000",           className:"secondary"},
      // {name:'eCPM', num:"$3.83",            className:"secondary"},
      // {name:'eCPC', num:"$2.00",           className:"secondary"},
      // {name:'Conversions', num:"598",       className:""},
      // {name:'cost per conversion', num:"$40.23",       className:""},
    ],
    DailyCampaignConversions:{
      title:"Daily Campaign Non-Commerce Conversions",
      height:180,
      chartID:"noncomconversion",
      dates: Data.DailyStats.dates,
      columns: [['ROAS', ...Data.DailyStats.conversions]],
      colors:[GraphPrimary],
      formatY:function (d) { return d.toFixed(0);}

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
      formatY:function (d) { return d.toFixed(2)+"%";}
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
      formatY:function (d) { return d.toFixed(2)+"%";}
    },
    AvgUserCGC:Data.AvgUserCGC,
  }
}, NonCommerceRoiClass);
