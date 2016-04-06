import React from 'react';
CampaignShareOfVoice = class CampaignShareOfVoice extends React.Component{

  render(){
    return (
      <div className="card report-card">
        <ReportCardHeader title="Share of Voice" />
        <GraphPyramid data={{chartID:'shareofvoice'}} shared={"Pageviews"} with={shareOfVoice.viewedAd.percent} without={shareOfVoice.notViewedAd.percent} lift={shareOfVoice.lift} />

        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-6 p-x-3">
              <div hidden className="p-r-1">
                <ChartContainer title="">
                        <table className="table table-sm table-bordered">
                            <thead>
                              <tr>
                                <th>Rank</th>
                                <th>Brand</th>
                                <th className="text-xs-center">Number of Pageviews</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="highlightPrimary">
                                <td>1</td>
                                <td><strong>My Brand</strong></td>
                                <td className="text-xs-center">120k</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>Brand A</td>
                                <td className="text-xs-center">110k</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>Brand B</td>
                                <td className="text-xs-center">100k</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>Brand C</td>
                                <td className="text-xs-center">90k</td>
                              </tr>
                              <tr>
                                <td>5</td>
                                <td>Brand D</td>
                                <td className="text-xs-center">80k</td>
                              </tr>
                            </tbody>
                          </table>
                        </ChartContainer>
                      </div>
            </div>
            <div className="col-xs-6 p-x-3">
              <div hidden className="p-l-1">
                <ChartContainer title="">
                        <table className="table table-sm table-bordered">
                            <thead>
                              <tr>
                                <td>Rank</td>
                                <th>Brand</th>
                                <th className="text-xs-center">Number of Pageviews</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>Brand A</td>
                                <td className="text-xs-center">120k</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>Brand B</td>
                                <td className="text-xs-center">110k</td>
                              </tr>
                              <tr className="highlightNeutral">
                                <td>3</td>
                                <td><strong>My Brand</strong></td>
                                <td className="text-xs-center">100k</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>Brand C</td>
                                <td className="text-xs-center">90k</td>
                              </tr>
                              <tr>
                                <td>5</td>
                                <td>Brand D</td>
                                <td className="text-xs-center">80k</td>
                              </tr>
                            </tbody>
                          </table>
                        </ChartContainer>
                      </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}





        //
        //
        //   <div className="report-overview-row flex flex-row">
        //
        //     <div className={"overview-cell cel-fl-1"}>
        //       <div className="flex flex-row">
        //         <p className={"block-number p-r-2"}><i className={"fa fa-arrow-up"}></i> {this.props.ShareOfVoiceData.lift}%</p>
        //         <p className="block-description text-xs-left cel-fl-1">
        //           In consideration for your brand compared to your competitors when leveraging Bazaarvoice Advertising.
        //         </p>
        //       </div>
        //     </div>
        //     <div className={"overview-cell cel-fl-1"}>
        //
        //     </div>
        //
        //   </div>
        //
        //
        //
        // <div className="card-block">
        //     <div className="row">
        //       <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-xs-12 ">
        //         <ChartContainer title="Percentage of pageviews">
        //           <GraphBar data={this.props.ShareOfVoiceData}/>
        //         </ChartContainer>
        //       </div>
        //       <div className="col-xl-4 col-lg-4 col-xs-12 col-sm-12 col-md-12">
        //         <ChartContainer title="Top Brands by number of shoppers">
        //           <table className="table table-bordered">
        //               <thead>
        //                 <tr>
        //                   <th>Rank</th>
        //                   <th>Brand</th>
        //                   <th>Number of Shoppers</th>
        //                 </tr>
        //               </thead>
        //               <tbody>
        //                 <tr>
        //                   <th>1</th>
        //                   <td><strong>My Brand</strong></td>
        //                   <td>120k</td>
        //                 </tr>
        //                 <tr>
        //                   <th>2</th>
        //                   <td>Brand A</td>
        //                   <td>110k</td>
        //                 </tr>
        //                 <tr>
        //                   <th>3</th>
        //                   <td>Brand B</td>
        //                   <td>110k</td>
        //                 </tr>
        //                 <tr>
        //                   <th>4</th>
        //                   <td>Brand C</td>
        //                   <td>110k</td>
        //                 </tr>
        //                 <tr>
        //                   <th>5</th>
        //                   <td>Brand D</td>
        //                   <td>110k</td>
        //                 </tr>
        //               </tbody>
        //             </table>
        //           </ChartContainer>
        //       </div>
        //     </div>
        //   </div>
