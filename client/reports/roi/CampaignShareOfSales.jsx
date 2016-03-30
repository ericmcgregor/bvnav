import React from 'react';
CampaignShareOfSales = class CampaignShareOfSales extends React.Component{

  render(){
    return (
      <div className="card report-card">
        <ReportCardHeader title="Share of Sales" />

        <GraphPyramid data={{chartID:'shareofsales'}} shared={"Sales"} with={29} without={21} lift={8.21}/>

        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-6 p-r-3">
                      <ChartContainer title="">
                        <table className="table table-sm table-bordered">
                            <thead>
                              <tr>
                                <th>Rank</th>
                                <th>Brand</th>
                                <th className="text-xs-center">Number of Sales</th>
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
            <div className="col-xs-6 p-l-3">
                      <ChartContainer title="">
                        <table className="table table-sm table-bordered">
                            <thead>
                              <tr>
                                <td>Rank</td>
                                <th>Brand</th>
                                <th className="text-xs-center">Number of Sales</th>
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
    )
  }
}
