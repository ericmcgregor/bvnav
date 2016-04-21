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
              <ChartContainer title="Daily Impressions">
                <GraphSpline data={this.props.DailyCampaignImpressions}/>
              </ChartContainer>
            </div>

            <div className="card-block">
              <ChartContainer title="Daily Orders">
                <GraphSpline data={this.props.DailyCampaignOrders}/>
              </ChartContainer>
            </div>


          </div>

          <div className="card report-card">
            <ReportCardHeader title="Top Performing Products by Category" />
              <table className="table table-bordered table-striped m-b-0">
                <thead>
                  <tr>
                    <th>Category</th>
                    <th>Product</th>
                    <th>Units Sold</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.products.map((item, i)=>{
                    return(
                    <tr key={i}>
                      <td>{item.category}</td>
                      <td>{item.name}</td>
                      <td>{item.orders}</td>
                    </tr>
                    )
                  })}

                </tbody>
              </table>

          </div>


          <div className="card report-card">
                  <ReportCardHeader title="Recommendation Strategies from BV Customer Insights" />

                    <table className="table table-bordered m-b-0">
                      <thead>
                        <tr>
                          <th>Type</th>
                          <th>Orders</th>
                          <th>Sales</th>
                        </tr>
                      </thead>
                      <tbody className="last-sm">
                        {
                          Object.keys(this.props.strategies).map((key, i)=>{
                            let strategy = this.props.strategies[key];
                            return (
                              <tr key={i}>
                                <td>{strategy.label}</td>
                                <td>{strategy.orders}</td>
                                <td>${addCommas(strategy.orderAmount)}</td>
                              </tr>
                            )
                          })
                        }
                      </tbody>
                    </table>

                  <div hidden className="card-block">
                    <div className="row">
                      <div hidden className="col-xs-4 align-last text-xs-center p-t-3">
                        <h4 className="lead">BV saw:</h4>
                        <h4>5M [yoursite] visitors</h4>
                        <p>before they arrived at your site on our network</p>
                      </div>

                      <div className="col-xs-12">
                        <ChartContainer title="Top Performing types of recommendations:">
                          <table className="table table-bordered">
                            <thead>
                              <tr>
                                <th>Type</th>
                                <th>Conversions</th>
                              </tr>
                            </thead>
                            <tbody className="last-sm">
                              <tr>
                                <td>BV user interests</td>
                                <td>3,012</td>
                              </tr>
                              <tr>
                                <td>BV network pageviews</td>
                                <td>1,762</td>
                              </tr>
                              <tr>
                                <td>Comparative BV profiles</td>
                                <td>912</td>
                              </tr>
                            </tbody>
                          </table>
                        </ChartContainer>

                        </div>

                        <div hidden className="col-xs-4">


                        <ChartContainer title="Interests of users who converted on Recommendations:">
                          <table className="table table-bordered">
                            <thead>
                              <tr>
                                <th></th>
                                <th>users</th>
                              </tr>
                            </thead>
                            <tbody className="last-sm">
                              <tr>
                                <td>Consumer Electronics</td>
                                <td>400</td>
                              </tr>
                              <tr>
                                <td>Audio</td>
                                <td>330</td>
                              </tr>
                              <tr>
                                <td>Home and Garden</td>
                                <td>210</td>
                              </tr>
                            </tbody>
                          </table>
                        </ChartContainer>
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


  Data = {
    "startDate": "4/18/16",
    "endDate":"4/20/16",
    "rendered" :1430692,
    "impressions":206717,
    "nonclick":35067,
    "clicks":28430,
    "orders":{
      "viewthrough":278,
      "clickthrough":271,
    },
    "totalOrders":278,
    "avgOrder" :92.5,
    "totalSales":25734,
    "strategies":{
        "vab":{
          "label":"Viewed also Bought",
          "orders": 184,
          "orderAmount":15298.36
        },
        "vav" :{
          "label":"Viewed also Viewed",
          "orders": 27,
          "orderAmount":4062.68
  		},
        "interests":{
          "label":"BV Network Intersts",
          "orders": 34,
          "orderAmount": 2846
  		},
        "clients":{
          "label":"BV Network Clients",
          "orders": 33,
          "orderAmount":3258
  	}
    },
    "products":[
      {
        "category":"Fashion",
        "name":"Marc Fisher Suede Lace-up Block Heel Sandals - Paradox",
        "orders":10
      },
      {
        "category":"For the home",
        "name":"Bernini Dancing Waters Rechargeable Fountain",
        "orders":8
      },
      {
        "category":"For the home",
        "name":"Plow & Hearth Oversized Four Tiered Double Sided Garden Spinner",
        "orders":6
      },
      {
        "category":"Fashion",
        "name":"Isaac Mizrahi Live! Regular 24/7 Stretch Ankle Pants w/ Seam",
        "orders":4
      },
      {
        "category":"N/A",
        "name":"Isaac Mizrahi Live! 3/4 Sleeve Mixed Lace Tunic",
        "orders":4
      }
    ],
    "dailyStats" : [
      {
        "date":"2016-4-18",
  	 "rendered" :410000,
  	  "impressions":60000,
  	  "nonclick":65000,
  	  "clicks":9200,
  	  "orders":{
  	    "viewthrough":77,
  	    "clickthrough":77,
  	  },
  	  "totalOrders":77,
  	  "avgOrder" :68.2,
  	  "totalSales":5252,
  	  "strategies":{
  	      "vab":{
  	        "orders": 54,
  	        "orderAmount":3738.36
  	      },
  	      "vav" :{
  	        "orders": 8,
  	        "orderAmount":464.68
  			},
  				      "clients":{
  	        "orders": 8,
  	        "orderAmount":647
  		   },
  	      "interests":{
  	        "orders": 7,
  	        "orderAmount": 403
  		}

  	  }
      },
  	 {
        "date":"2016-4-19",
  	 "rendered" :583000,
  	  "impressions":85000,
  	  "nonclick":19000,
  	  "clicks":12000,
  	  "orders":{
  	    "viewthrough":112,
  	    "clickthrough":108,
  	  },
  	  "totalOrders":112,
  	  "avgOrder" :88.7,
  	  "totalSales":9936,
  	  "strategies":{
  	      "vab":{
  	        "orders": 67,
  	        "orderAmount": 5678
  	      },
  	      "vav" :{
  	        "orders": 11,
  	        "orderAmount":1155
  			},
  		"clients":{
  	        "orders": 15,
  	        "orderAmount": 1509
  		   },
  	      "interests":{
  	        "orders": 19,
  	        "orderAmount": 1594
  		}

  	  }
      },

          {
        "date":"2016-4-20",
  	 "rendered" :502000,
  	  "impressions":70759,
  	  "nonclick":10871,
  	  "clicks":8580,
  	  "orders":{
  	    "viewthrough":92,
  	    "clickthrough":86,
  	  },
  	  "totalOrders":92,
  	  "avgOrder" :114.6,
  	  "totalSales":10546,
  	  "strategies":{
  	      "vab":{
  	        "orders": 63,
  	        "orderAmount":3738.36
  	      },
  	      "vav" :{
  	        "orders": 8,
  	        "orderAmount":464.68
  			},
  				      "clients":{
  	        "orders": 10,
  	        "orderAmount":647
  		   },
  	      "interests":{
  	        "orders": 11,
  	        "orderAmount": 403
  		}

  	  }
      },


    ]
  }
  let dailydates = Data.dailyStats.map((item)=>{return item.date});
  let dailyorders = Data.dailyStats.map((item)=>{return item.totalOrders})
  let dailyimpressions = Data.dailyStats.map((item)=>{return item.impressions})
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
          height:100,
          chartID:"orders",
          dates: dailydates,
          columns: [['ROAS', ...dailyorders]],
          colors:[GraphPrimary],
          formatY:function (d) { return addCommas(d.toFixed(0)); }
        },
        DailyCampaignImpressions:{
            title:"Daily Campaign impressions",
            height:100,
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
      {name:'Engagement Non CT Events', num:addCommas(Data.nonclick),            className:"sm secondary"},
      {name:'Click-Throughs', num:addCommas(Data.clicks),                            className:"sm align-top secondary  divider-right"},
      {name:'Click-Through Conversions', num:Data.orders.clickthrough,               className:"sm secondary"},
      // {name:'View-Through Conversions', num:Data.orders.viewthrough,                className:"sm secondary"},
      {name:'Orders', num:Data.totalOrders,                                  className:"sm align-top primary"},
      {name:'Avg Order', num:"$"+Data.avgOrder,                               className:"sm align-top primary"},
      {name:'Recommendation Sales', num:"$"+addCommas(Data.totalSales),                    className:"sm primary"},
      // {name:'Spend', num:"$"+ROIdata.totalAdSpend,                  className:"primary"},
    ],

  };

}, RecommendationsReportClass);
