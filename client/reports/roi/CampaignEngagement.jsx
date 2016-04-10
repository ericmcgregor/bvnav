import React from 'react';
CampaignEngagement = class CampaignPerformance extends React.Component{
  render() {
    return(
      <div className="card report-card">
        <ReportCardHeader title="Engagement" />


      <div className="card-block">
          <div className="row">
            <div className="col-xl-8 col-lg-8 col-xs-12 col-sm-12  col-md-12">
              <div className="chart-summary-container">
                <ChartSummaryColumn data={this.props.DailyViewThrough}  title={"Daily Campaign Viewthroughs"} />
                <ChartSummaryColumn data={this.props.DailyClickThrough} title={"Daily Campaign Clickthroughs"} />
              </div>
            </div>

            <div className="col-xl-4 col-lg-4 col-xs-12 col-sm-12 col-md-12">
              <div className="chart-averages-container">
                <h6 className="text-muted">Customer Insights</h6>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>With Shopper Advertising</th>
                      <th className="text-xs-center">Average</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Reviews Read</td>
                      <td className="text-xs-center">{this.props.AvgUserCGC.read}</td>
                    </tr>
                    <tr>
                      <td>Pageviews</td>
                      <td className="text-xs-center">{this.props.AvgUserCGC.pageviews}</td>
                    </tr>
                    <tr>
                      <td>Order Value</td>
                      <td className="text-xs-center">{this.props.AvgUserCGC.order}</td>
                    </tr>
                  </tbody>
                </table>

              </div>
            </div>
          </div>
        </div>

      </div>

    )
  }
}



// <ReportOverviewRow data={this.props.EngagementOverview} />



// <div hidden className="split-third">
//
//   <div className="chart-summary-container">
//     <ChartSummaryColumn data={this.props.DailyViewThrough} />
//     <ChartSummaryColumn data={this.props.DailyClickThrough} />
//   </div>
//
//     <div className="chart-container-averages">
//       <h6 className="text-muted">Average User Consumption</h6>
//       <table className="table table-bordered">
//         <thead>
//           <tr>
//             <th></th>
//             <th>Average</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>Reveiews Read</td>
//             <td>{this.props.AvgUserCGC.read}</td>
//           </tr>
//           <tr>
//             <td>Page Views:</td>
//             <td>{this.props.AvgUserCGC.pageviews}</td>
//           </tr>
//           <tr>
//             <td>Purchase Order</td>
//             <td>{this.props.AvgUserCGC.order}</td>
//           </tr>
//         </tbody>
//       </table>
//
//     </div>
// </div>
