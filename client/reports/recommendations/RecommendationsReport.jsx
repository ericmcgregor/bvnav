import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';

RecommendationsReportClass = class RecommendationsReportClass extends React.Component{
    render() {
      return (
        <div>
          <div className="card report-card">
            <ReportCardHeader title="Campaign Performance" />

            <ReportOverviewRow data={this.props.performanceOverview} />

            <div className="card-block">
              <ChartContainer title="Daily Conversions">
                <GraphSpline data={this.props.DailyCampaignROAS}/>
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
                    <th>Rating</th>
                    <th>Units Sold</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>Apparel & Accessories</th>
                    <td>The Foundry Supply Co.™ Long-Sleeve Flannel Shirt-Big & Tall</td>
                    <td><i className="text-warning fa fa-star"></i><i className="text-warning fa fa-star"></i><i className="text-warning fa fa-star"></i><i className="text-warning fa fa-star"></i></td>
                    <td>210</td>
                  </tr>
                  <tr>
                    <th>Electronics</th>
                    <td>Samsung - Galaxy S6 with 32GB Memory Cell Phone</td>
                    <td><i className="text-warning fa fa-star"></i><i className="text-warning fa fa-star"></i><i className="text-warning fa fa-star"></i><i className="text-warning fa fa-star"></i></td>
                    <td>110</td>
                  </tr>
                  <tr>
                    <th>Home & Garden</th>
                    <td>Lysol Power and Free Multi-Purpose Citrus Sparkle Cleaner - 32 oz</td>
                    <td><i className="text-warning fa fa-star"></i><i className="text-warning fa fa-star"></i><i className="text-warning fa fa-star"></i><i className="text-warning fa fa-star"></i></td>
                    <td>90</td>
                  </tr>
                  <tr>
                    <th>Media</th>
                    <td>Star Wars: The Force Awakens (Blu-ray/DVD/Digital HD)</td>
                    <td><i className="text-warning fa fa-star"></i><i className="text-warning fa fa-star"></i><i className="text-warning fa fa-star"></i><i className="text-warning fa fa-star"></i></td>
                    <td>70</td>
                  </tr>
                </tbody>
              </table>

          </div>


          <div className="card report-card">
                  <ReportCardHeader title="BV Customer Insights" />

                  <div className="card-block">
                    <div className="row">
                      <div className="col-xs-4 align-last text-xs-center p-t-3">
                        <h4 className="lead">BV saw:</h4>
                        <h4>5M [yoursite] visitors</h4>
                        <p>before they arrived at your site on our network</p>
                      </div>

                      <div className="col-xs-4">
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

                        <div className="col-xs-4">


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

  return {
    params,
    ...Data,
    DailyCampaignROAS:{
        title:"Daily Campaign ROAS",
        height:100,
        chartID:"roas",
        dates: Data.DailyStats.dates,
        columns: [['ROAS', ...Data.DailyStats.conversions]],
        colors:[GraphPrimary],
        formatY:function (d) { return d.toFixed(0); }
      },
    performanceOverview:[
      {name:'Carousel Impressions', num:Data.impressions,                 className:"sm secondary"},
      {name:'Engagement Non CT Events', num:Data.views.source,            className:"sm secondary"},
      {name:'Click-Throughs', num:Data.clicks,                            className:"sm align-top secondary  divider-right"},
      {name:'Click-Through Conversions', num:"$"+Data.ecpm,               className:"sm secondary"},
      {name:'View-Through Conversions', num:"$"+Data.ecpc,                className:"sm secondary"},
      {name:'Orders', num:"$"+Data.ecpc,                                  className:"sm align-top primary"},
      {name:'Avg Order', num:"$"+Data.ecpc,                               className:"sm align-top primary"},
      {name:'Recommendation Sales', num:"$"+Data.ecpc,                    className:"sm primary"},
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

}, RecommendationsReportClass);
