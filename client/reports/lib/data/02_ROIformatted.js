import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';


getROIdata = (id) => {

    Meteor.call('GetROIdata', id, (error, result)=>{
      if(error) {
        console.log(error)
        return;
      }

      let data = formatROIData(result.report);

      Session.setPersistent({
        ROIid:id,
        ROIdata:data
      });

    });

}

Meteor.startup(function () {
    let id = Session.get('ROIid');
    if(!id) {
      Session.set('ROIid', 'e0b60b51-a441-400d-baa7-f5404f7e2f09')
    }
    if(FlowRouter.current().queryParams.roi) {
      Session.setPersistent('ROIid', FlowRouter.current().queryParams.roi)
    }

    Tracker.autorun(() => {
      let idChange = Session.get('ROIid')

      if(idChange && idChange !== id) {
        getROIdata(Session.get('ROIid'));
        id=idChange;
      }
    });

});

fakeTheData = (ROIdata, roas, spend, conversions) => {
  console.log(ROIdata.onlineSales.competitor);
  console.log(ROIdata.onlineSales.source);

  let MyOnlineSales = spend*roas;

  let Data = {
    totalAdSpend:spend,
    roas:roas,
    onlineSales:{
      competitor:(MyOnlineSales)*10.2,
      source:MyOnlineSales
    },
    offlineSales:{
      competitor:(MyOnlineSales*1.7)*10.2,
      source:MyOnlineSales*1.7
    },
    "ecpm": spend/(ROIdata.impressions/1000),
    "ecpc": spend/ROIdata.clicks,
    "vtr": ROIdata.vtr,
    "ctr": 0.02,
    "impressions": ROIdata.impressions,
    "views": {
      "source": ROIdata.views.source
    },
    conversions:conversions,
    cpc:addCommas( (spend/conversions).toFixed(2) )
  }

  for (var attrname in Data) {
    ROIdata[attrname] = Data[attrname];
  }

  console.log(ROIdata);

  return ROIdata;
}

formatROIData = (ROIdata) => {
  if(roas) {
    ROIdata = fakeTheData(ROIdata, roas, spend, conversions);
  }
  DailyStats = {
    dates:ROIdata.dailyStats.map((item, index)=>{
      let date = item.date.split("T")
      return date[0];
    }),
    sales:ROIdata.dailyStats.map((item, index)=>{
      return item.onlineSales.toFixed(0);
    }),
    ctr:ROIdata.dailyStats.map((item, index)=>{
      return item.ctr.toFixed(2);
    }),
    vtr:ROIdata.dailyStats.map((item, index)=>{
      return item.vtr.toFixed(2);
    }),
    conversions:ROIdata.dailyStats.map((item, index)=>{
      return item.conversions;
    })
  }


  shareOfSales = {}

  // share of sales not viewed
  let Source = Math.round(ROIdata.shareOfSales.notViewedAd.source)
  let All = (Source + Math.round(ROIdata.shareOfSales.notViewedAd.competitor) )
  let Percent = ((Source/All))

  // Percent = 21.2;

  shareOfSales.notViewedAd = {
    source:Source,
    all:All,
    percent:nFormatter(Percent)
  }

  // share of sales viewed
  Source = Math.round(ROIdata.shareOfSales.viewedAd.source)
  All = (Source + Math.round(ROIdata.shareOfSales.viewedAd.competitor) )
  Percent = ((Source/All))

  // Percent = 23.6;
  Percent = parseFloat(shareOfSales.notViewedAd.percent)+0.2

  shareOfSales.viewedAd = {
    source:Source,
    all:All,
    percent:nFormatter(Percent)
  }
  shareOfSales.allsales = nFormatter(shareOfSales.viewedAd.all + shareOfSales.notViewedAd.all);
  shareOfSales.lift = ((shareOfSales.viewedAd.percent - shareOfSales.notViewedAd.percent)/shareOfSales.notViewedAd.percent * 100).toFixed(2);




  shareOfVoice = {}

  // share of sales not viewed
  Source = Math.round(ROIdata.shareOfVoice.notViewedAd.source)
  All = (Source + Math.round(ROIdata.shareOfVoice.notViewedAd.competitor) )
  Percent = ((Source/All))

  shareOfVoice.notViewedAd = {
    source:Source,
    all:All,
    percent:nFormatter(Percent)
  }


  // share of sales viewed
  Source = Math.round(ROIdata.shareOfVoice.viewedAd.source)
  All = (Source + Math.round(ROIdata.shareOfVoice.viewedAd.competitor) )
  Percent = ((Source/All))

  Percent = parseFloat(shareOfVoice.notViewedAd.percent)+0.38


  shareOfVoice.viewedAd = {
    source:Source,
    all:All,
    percent:nFormatter(Percent)
  }
  shareOfVoice.allsales = nFormatter(shareOfVoice.viewedAd.all + shareOfVoice.notViewedAd.all);
  shareOfVoice.lift = ((shareOfVoice.viewedAd.percent - shareOfVoice.notViewedAd.percent)/shareOfVoice.notViewedAd.percent * 100).toFixed(2);


  /*
  remove me

  ROIdata.totalAdSpend = ROIdata.totalAdSpend+100000;
  console.log(ROIdata)
  ROIdata.roas = ROIdata.roas+4;
  shareOfSales.lift = (parseInt(shareOfSales.lift)*0.52).toString();
  */
  // ROIdata.totalAdSpend = ROIdata.totalAdSpend+100000;

  let dateformatstart = ROIdata.startTime.split("T")[0].substring(5)+"-"+ROIdata.startTime.slice(0, 4)
  let dateformatend= ROIdata.endTime.split("T")[0].substring(5)+"-"+ROIdata.endTime.slice(0, 4)
  console.log()


  ROIdataFormatted = {
    ...ROIdata,
    "name": ROIdata.name,
    "campaignIds": ROIdata.campaignIds,
    "client": ROIdata.client,
    "retailer": ROIdata.retailer,
    "categoryId": ROIdata.categoryId,
    "startTime": ROIdata.startTime,
    "endTime": ROIdata.endTime,
    "flightdates":dateformatstart.split('-').join('.')+' - '+dateformatend.split('-').join('.'),
    "totalAdSpend": addCommas( ROIdata.totalAdSpend.toFixed(2)),
    "roas": ROIdata.roas.toFixed(2),
    "ecpm": ROIdata.ecpm.toFixed(2),
    "ecpc": ROIdata.ecpc.toFixed(2),
    "vtr": ROIdata.vtr.toFixed(2),
    "ctr": ROIdata.ctr.toFixed(2),
    "impressions": addCommas(ROIdata.impressions),
    "views": {
      "source": addCommas(ROIdata.views.source)
    },
    "viewThroughs": {
      "source": addCommas(ROIdata.viewThroughs.source),
      "competitor": addCommas(ROIdata.viewThroughs.competitor)
    },
    "clicks": addCommas(ROIdata.clicks),
    "conversions": addCommas(ROIdata.conversions),
    "onlineSales": {
      "source": addCommas(Math.round(ROIdata.onlineSales.source)),
      "competitor": nFormatter(ROIdata.onlineSales.competitor)
    },
    "offlineSales": {
      "source": nFormatter(ROIdata.offlineSales.source),
      "competitor": nFormatter(ROIdata.offlineSales.competitor),
    },
    "postViewConversions": addCommas(ROIdata.postViewConversions),
    "postClickConversions": addCommas(ROIdata.postClickConversions),
    "adExposedReviewImpressions": addCommas(ROIdata.adExposedReviewImpressions),
    "totalReviewImpressions": addCommas(ROIdata.totalReviewImpressions),
    "shareOfSales": {
      ...shareOfSales
    },
    "shareOfVoice": {
      ...shareOfVoice
    },
    "reviewsRead": {
      "viewedAd": {
        "source": nFormatter(ROIdata.reviewsRead.viewedAd.source),
      },
      "notViewedAd": {
        "source": nFormatter(ROIdata.reviewsRead.notViewedAd.source),
      }
    },
    "averageOrderValue": {
      "viewedAd": {
        "source": nFormatter(ROIdata.averageOrderValue.viewedAd.source),
      },
      "notViewedAd": {
        "source": nFormatter(ROIdata.averageOrderValue.notViewedAd.source),
      }
    },
    "averagePageViews": {
      "viewedAd": {
        "source": nFormatter(ROIdata.averagePageViews.viewedAd.source),
      },
      "notViewedAd": {
        "source": nFormatter(ROIdata.averagePageViews.notViewedAd.source),
      }
    },
    DailyStats:DailyStats,
    CompetitiveSales:{
      MyProducts:{
        online:"$"+nFormatter(ROIdata.onlineSales.source),
        offline:"$"+nFormatter(ROIdata.offlineSales.source),
        total:"$"+nFormatter(ROIdata.onlineSales.source+ROIdata.offlineSales.source)
      },
      CompetitiveProducts:{
        online:"$"+nFormatter(ROIdata.onlineSales.competitor),
        offline:"$"+nFormatter(ROIdata.offlineSales.competitor),
        total:"$"+nFormatter(ROIdata.onlineSales.competitor+ROIdata.offlineSales.competitor)
      }
    },
    AvgUserCGC:{
      read:ROIdata.reviewsRead.viewedAd.source.toFixed(1),
      pageviews:ROIdata.averagePageViews.viewedAd.source.toFixed(1),
      order:"$"+ROIdata.averageOrderValue.viewedAd.source.toFixed(2)
    }
  }

  return ROIdataFormatted;

}




//
//
//
//
//
//
//
//
//
//
// DailyStats = {
//   dates:ROIdata.dailyStats.map((item, index)=>{
//     let date = item.date.split("T")
//     return date[0];
//   }),
//   sales:ROIdata.dailyStats.map((item, index)=>{
//     return item.onlineSales;
//   }),
//   ctr:ROIdata.dailyStats.map((item, index)=>{
//     return item.ctr.toFixed(2);
//   }),
//   vtr:ROIdata.dailyStats.map((item, index)=>{
//     return item.vtr;
//   })
// }
//
//
//
//
// shareOfSales = {}
//
// // share of sales not viewed
// let Source = Math.round(ROIdata.shareOfSales.notViewedAd.source)
// let All = (Source + Math.round(ROIdata.shareOfSales.notViewedAd.competitor) )
// let Percent = ((Source/All))
//
// shareOfSales.notViewedAd = {
//   source:Source,
//   all:All,
//   percent:nFormatter(Percent)
// }
//
// // share of sales viewed
// Source = Math.round(ROIdata.shareOfSales.viewedAd.source)
// All = (Source + Math.round(ROIdata.shareOfSales.viewedAd.competitor) )
// Percent = ((Source/All))
//
// shareOfSales.viewedAd = {
//   source:Source,
//   all:All,
//   percent:nFormatter(Percent)
// }
// shareOfSales.allsales = nFormatter(shareOfSales.viewedAd.all + shareOfSales.notViewedAd.all);
// shareOfSales.lift = (shareOfSales.viewedAd.percent - shareOfSales.notViewedAd.percent).toFixed(2);
//
//
//
// shareOfVoice = {}
//
// // share of sales not viewed
// Source = Math.round(ROIdata.shareOfVoice.notViewedAd.source)
// All = (Source + Math.round(ROIdata.shareOfVoice.notViewedAd.competitor) )
// Percent = ((Source/All))
//
// shareOfVoice.notViewedAd = {
//   source:Source,
//   all:All,
//   percent:nFormatter(Percent)
// }
//
//
// // share of sales viewed
// Source = Math.round(ROIdata.shareOfVoice.viewedAd.source)
// All = (Source + Math.round(ROIdata.shareOfVoice.viewedAd.competitor) )
// Percent = ((Source/All))
//
// shareOfVoice.viewedAd = {
//   source:Source,
//   all:All,
//   percent:nFormatter(Percent)
// }
// shareOfVoice.allsales = nFormatter(shareOfVoice.viewedAd.all + shareOfVoice.notViewedAd.all);
// shareOfVoice.lift = (shareOfVoice.viewedAd.percent - shareOfVoice.notViewedAd.percent).toFixed(2);
//
//
//
