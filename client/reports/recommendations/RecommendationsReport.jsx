import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';

RecommendationsReportClass = class RecommendationsReportClass extends React.Component{
    render() {
      console.log(this.props)
      return (
        <div>
          <div className="card report-card">
            <ReportCardHeader title="Campaign Performance" />

            <ReportOverviewRow data={this.props.performanceOverview} />

              <div className="card-block">
                  <ChartContainer title="Daily Orders">
                    <GraphSpline data={this.props.DailyCampaignOrders} type="area"/>
                  </ChartContainer>
              </div>

              <div className="card-block">
                <ChartContainer title="Daily Impressions">
                  <GraphSpline data={this.props.DailyCampaignImpressions} type="area"/>
                </ChartContainer>
              </div>

          </div>

          <div  className="row">

            <div className="col-md-12">
              <div className="card report-card text-xs-center">
                <ReportCardHeader title="Strategy Performance" />

                  {
                    Object.keys(this.props.strategies).map((key, i)=>{
                      let strategy = this.props.strategies[key];
                      return (
                        <div key={i} className="card-block p-b-0 text-xs-center">
                          <h6 className="m-b-1">{strategy.label}</h6>
                          <div className="flex flex-row strategy-container">
                            <div className="cel-fl-1">
                              <h3 className="lead">{strategy.orders}</h3>
                              <p className="text-muted">Orders</p>
                            </div>
                            <div className="cel-fl-1">
                              <h3 className="lead text-success">${addCommas(strategy.orderAmount)}</h3>
                              <p className="text-muted">Sales</p>
                            </div>
                          </div>
                          <hr/>
                        </div>
                      )
                    })
                  }
              </div>
            </div>

            <div className="col-md-12">
                  <div className="card report-card">
                    <ReportCardHeader title="Top Performing Products" />
                      <table className="table table-bordered table-striped m-b-0">
                          <thead>
                            <tr>
                              <th></th>
                              <th>Transactions</th>
                              <th>Product Name</th>
                              <th>Category</th>
                            </tr>
                          </thead>
                          <tbody>
                            {this.props.products.slice(0,15).map((item, i)=>{
                              return(
                                <tr key={i}>
                                  <td className="recommendations-image"><img src={item.imageURL} alt=""/></td>
                                  <td className="text-xs-center"><strong>{item.orders}</strong></td>
                                  <td>
                                    {item.name}
                                  </td>
                                  <td>{item.category}</td>

                                </tr>
                              )
                            })}
                          </tbody>

                      </table>
                  </div>
              </div>


            </div>


          <div  className="card report-card">
                  <ReportCardHeader title="Recommendation Strategies from BV Customer Insights" />

                  <div  className="card-block">
                    <div className="row">
                      <div className="col-xs-4 align-last text-xs-center p-t-3">
                        <h4 className="lead">BV saw:</h4>
                        <h4>5M [yoursite] visitors</h4>
                        <p>before they arrived at your site on our network</p>
                      </div>
                    </div>
                  </div>

                </div>

        </div>
      );
    }

}


RecommendationsReport = createContainer(({ params }) => {
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



  Data = RecData;

  let strategies = Object.keys(Data.strategies).map((key)=>{
    console.log(key)
    switch (key) {
      case "vab" : Data.strategies[key].label = "Viewed also Bought"
      break;

      case "vav" : Data.strategies[key].label = "Viewed also Viewed"
      break;

      case "interests" : Data.strategies[key].label = "BV Network Intersts"
      break;

      case "clients" : Data.strategies[key].label = "BV Network Clients"
      break;

      case "bab" : Data.strategies[key].label = "Bought also Bought"
      break;

      case "bav" : Data.strategies[key].label = "Bought also Viewed"
      break;
    }
  })


//   "strategies":{
//         "vab":{
//           "label":"Viewed also Bought",
//           "orders": 184,
//           "orderAmount":15298.36
//         },
//         "vav" :{
//           "label":"Viewed also Viewed",
//           "orders": 27,
//           "orderAmount":4062.68
//       },
//         "interests":{
//           "label":"BV Network Intersts",
//           "orders": 34,
//           "orderAmount": 2846
//       },
//         "clients":{
//           "label":"BV Network Clients",
//           "orders": 33,
//           "orderAmount":3258
//     }
//     },

  let dailydates = Data.dailyStats.map((item)=>{
    let date = item.startDate.substring(0, 10)
    console.log(date)
    return date

  });
  let dailyorders = Data.dailyStats.map((item)=>{return item.totalOrders})
  let dailyimpressions = Data.dailyStats.map((item)=>{return item.impressions})

    console.log(dailydates)

  return {
    params,
    ...Data,
    // DailyCampaignROAS:{
    //     title:"Daily Campaign ROAS",
    //     height:100,
    //     chartID:"roas",
    //     dates: Data.DailyStats.dates,
    //     columns: [['ROAS', ...Data.DailyStats.conversions]],
    //     colors:[GraphPrimary],
    //     formatY:function (d) { return d.toFixed(0); }
    //   },

      DailyCampaignOrders:{
          title:"Daily Campaign Orders",
          height:200,
          chartID:"orders",
          dates: dailydates,
          columns: [['ROAS', ...dailyorders]],
          colors:[GraphPrimary],
          formatY:function (d) { return addCommas(d.toFixed(0)); }
        },
        DailyCampaignImpressions:{
            title:"Daily Campaign impressions",
            height:80,
            chartID:"impressions",
            dates: dailydates,
            columns: [['ROAS', ...dailyimpressions]],
            colors:[GraphPrimary],
            formatY:function (d) { return addCommas(d.toFixed(0)); }
          },
    // performanceOverview:[
    //   {name:'Carousel Impressions', num:Data.impressions,                 className:"sm secondary"},
    //   {name:'Engagement Non CT Events', num:Data.views.source,            className:"sm secondary"},
    //   {name:'Click-Throughs', num:Data.clicks,                            className:"sm align-top secondary  divider-right"},
    //   {name:'Click-Through Conversions', num:"$"+Data.ecpm,               className:"sm secondary"},
    //   {name:'View-Through Conversions', num:"$"+Data.ecpc,                className:"sm secondary"},
    //   {name:'Orders', num:"$"+Data.ecpc,                                  className:"sm align-top primary"},
    //   {name:'Avg Order', num:"$"+Data.ecpc,                               className:"sm align-top primary"},
    //   {name:'Recommendation Sales', num:"$"+Data.ecpc,                    className:"sm primary"},
    //   // {name:'Spend', num:"$"+ROIdata.totalAdSpend,                  className:"primary"},
    // ],
    performanceOverview:[
      {name:'Carousel Impressions', num:addCommas(Data.impressions),                 className:"sm secondary"},
      {name:'Engagement Events', num:addCommas(Data.nonclicks),            className:"sm align-top secondary"},
      {name:'Click-Throughs', num:addCommas(Data.clicks),                            className:"sm align-top secondary  divider-right"},
      {name:'Click-Through Conversions', num:addCommas(Data.orders.clickthrough),               className:"sm secondary"},
      // {name:'View-Through Conversions', num:Data.orders.viewthrough,                className:"sm secondary"},
      {name:'Orders', num:addCommas(Data.totalOrders),                                  className:"sm align-top primary"},
      {name:'Avg Order', num:"$"+Data.avgOrder,                               className:"sm align-top primary"},
      {name:'Recommendation Sales', num:"$"+addCommas(Data.totalSales.toFixed(2)),                    className:"sm primary"},
      // {name:'Spend', num:"$"+ROIdata.totalAdSpend,                  className:"primary"},
    ],

  };

}, RecommendationsReportClass);
