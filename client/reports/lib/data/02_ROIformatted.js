

formatROIData = (ROIdata) => {



  DailyStats = {
    dates:ROIdata.dailyStats.map((item, index)=>{
      let date = item.date.split("T")
      return date[0];
    }),
    sales:ROIdata.dailyStats.map((item, index)=>{
      return item.onlineSales;
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

  shareOfSales.notViewedAd = {
    source:Source,
    all:All,
    percent:nFormatter(Percent)
  }

  // share of sales viewed
  Source = Math.round(ROIdata.shareOfSales.viewedAd.source)
  All = (Source + Math.round(ROIdata.shareOfSales.viewedAd.competitor) )
  Percent = ((Source/All))

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

  shareOfVoice.viewedAd = {
    source:Source,
    all:All,
    percent:nFormatter(Percent)
  }
  shareOfVoice.allsales = nFormatter(shareOfVoice.viewedAd.all + shareOfVoice.notViewedAd.all);
  shareOfVoice.lift = ((shareOfVoice.viewedAd.percent - shareOfVoice.notViewedAd.percent)/shareOfVoice.notViewedAd.percent * 100).toFixed(2);






  ROIdataFormatted = {
    "name": ROIdata.name,
    "campaignIds": ROIdata.campaignIds,
    "client": ROIdata.client,
    "retailer": ROIdata.retailer,
    "categoryId": ROIdata.categoryId,
    "startTime": "2015-11-25T00:00:00.000Z",
    "endTime": "2015-12-15T00:00:00.000Z",
    "totalAdSpend": addCommas(ROIdata.totalAdSpend),
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
      "source": nFormatter(ROIdata.onlineSales.source),
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
        online:nFormatter(ROIdata.onlineSales.source),
        offline:nFormatter(ROIdata.offlineSales.source),
        total:nFormatter(ROIdata.onlineSales.source+ROIdata.offlineSales.source)
      },
      CompetitiveProducts:{
        online:nFormatter(ROIdata.onlineSales.competitor),
        offline:nFormatter(ROIdata.offlineSales.competitor),
        total:nFormatter(ROIdata.onlineSales.competitor+ROIdata.offlineSales.competitor)
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
