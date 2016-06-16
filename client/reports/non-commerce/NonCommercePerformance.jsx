import React from 'react';

let hvt = [
  ["Product Detail Page HVT",	100,	10000,	300,	324,	"$129,454"],
  ["Product Reviews HVT",	90,	9000,	350,	367,	"$154,234"],
  ["Where to Buy HVT",	70,	7000,	50,	52,	"$21,322"],
  ["Educational Browsing HVT",	50,	5000,	40,	41,	"$16,435"],
  ["Any",	310,	31000,	740,	784,	"$321,445"],
  ["None",	0,	0,	1850,	1960,	"$803,613"],
]


NonCommercePerformance = class NonCommercePerformance extends React.Component{
  render(){
    return(
      <div>
      <div className="card report-card">
        <ReportCardHeader title="Campaign Performance" />
          <div className="report-overview-row">
            {this.props.performanceOverview.map((item, index)=>{
              return (
                <div key={index} className={"overview-cell "+item.className}>
                  <p className={"block-number"}>{item.num}</p>
                  <p className={"block-name"}>{item.name}</p>
                </div>
              )
            })}
          </div>




        <div className="card-block">

          <div className="flex flex-row">
            <div>
              <h3 className="lead">Conversion Metric: <strong>Find a Dealership</strong></h3>
            </div>
            <div className="p-x-1">|</div>
            <div>
              <p className="m-b-0">Description: user submits form at http://site.com/submit</p>
            </div>
          </div>
          <div>
            <small className="text-muted m-t-1">Conversion metric accounts for both click-through and view-through conversions.</small>
          </div>

          <div hidden>
            <div>
              <h3 className="lead m-b-0">Conversion Event: <strong>Find a Dealership</strong></h3>
            </div>
            <div>
              <p className="m-b-0">Description: "user submits form at http://site.com/submit"</p>
            </div>
            <div>
              <small className="text-muted m-t-1">* A conversion is a completed event after clicking on or viewing an ad impression.</small>
            </div>
          </div>
          <br/>
          <ChartContainer title={"Daily Campaign Conversions"}>
            <GraphSpline data={this.props.DailyCampaignConversions}/>
          </ChartContainer>
        </div>


                  <div className="m-t-1" hidden>
                    <table className="table table-text-center table-bordered">
                      <thead >
                        <tr>
                          <th>Task</th>
                          <th>Ad Exposed Clicks</th>
                          <th>Clicks</th>
                          <th>Conversions</th>
                        </tr>
                      </thead>
                      <tbody >
                        {hvt.map((item, i)=>{
                          return (
                            <tr key={i}>
                              <td>{item[0]}</td>
                              <td>{item[1]}</td>
                              <td>{item[2]}</td>
                              <td>{item[3]}</td>
                            </tr>
                          )
                        })}
                      </tbody>
                    </table>
                  </div>

      </div>

      <div className="card report-card">
        <ReportCardHeader title="Engagement" />

        <div className="card-block">
            <div className="flex flex-row">

              <div className="p-r-1"  style={{flex:"0 1 50%"}}>
                <div className="flex flex-row">
                  <div className="p-r-2">
                    <h5 className="lead">{this.props.DailyClickThrough.totalType}: <strong>{this.props.DailyClickThrough.total}</strong></h5>
                  </div>
                  <div>
                    <h5 className="lead">{this.props.DailyClickThrough.rateType}: <strong>{this.props.DailyClickThrough.rate}</strong></h5>
                  </div>
                </div>

                <ChartContainer title={"Daily Campaign Click-throughs"}>
                  <GraphSpline data={this.props.DailyClickThrough}/>
                </ChartContainer>
              </div>


              <div className="p-l-1" style={{flex:"0 1 50%"}}>
                <div className="flex flex-row">
                  <div className="p-r-2">
                    <h5 className="lead">{this.props.DailyViewThrough.totalType}: <strong>{this.props.DailyViewThrough.total}</strong></h5>
                  </div>
                  <div>
                    <h5 className="lead">{this.props.DailyViewThrough.rateType}: <strong>{this.props.DailyViewThrough.rate}</strong></h5>
                  </div>
                </div>

                <ChartContainer title={"Daily Campaign View-throughs"}>
                  <GraphSpline ref="graph" data={this.props.DailyViewThrough}/>
                </ChartContainer>
              </div>

          </div>
        </div>

      </div>
      </div>
    )
  }
}
