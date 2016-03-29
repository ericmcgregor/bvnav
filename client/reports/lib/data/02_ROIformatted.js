

DailyStats = {
  dates:ROIdata.dailyStats.map((item, index)=>{
    let date = item.date.split("T")
    return date[0];
  }),
  sales:ROIdata.dailyStats.map((item, index)=>{
    return item.onlineSales;
  }),
  ctr:ROIdata.dailyStats.map((item, index)=>{
    return item.ctr;
  }),
  vtr:ROIdata.dailyStats.map((item, index)=>{
    return item.vtr;
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
shareOfSales.lift = (shareOfSales.viewedAd.percent - shareOfSales.notViewedAd.percent).toFixed(2);



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
shareOfVoice.lift = (shareOfVoice.viewedAd.percent - shareOfVoice.notViewedAd.percent).toFixed(2);
