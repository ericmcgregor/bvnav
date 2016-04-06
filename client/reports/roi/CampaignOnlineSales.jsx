import React from 'react';
CampaignOnlineSales = class CampaignPerformance extends React.Component{
  render(){
    return (
      <div className="card report-card">
        <ReportCardHeader title="Sales" />



        <div className="card-block">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 ">
                <ChartContainer title="Daily Online Sales">
                  <GraphSpline data={this.props.DailyCampaignSales}/>
                </ChartContainer>
              </div>
              <div className="col-xl-6 col-lg-6 col-xs-12 col-sm-12 col-md-12">
                <ChartContainer title="Comparative Sales">
                  <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th></th>
                          <th className="text-xs-center">Online</th>
                          <th className="text-xs-center">Offline</th>
                          <th className="text-xs-center">Total Sales</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th>My Product</th>
                          <td className="text-xs-center"><strong>{this.props.CompetitiveSales.MyProducts.online}</strong></td>
                          <td className="text-xs-center">{this.props.CompetitiveSales.MyProducts.offline}</td>
                          <td className="text-xs-center">{this.props.CompetitiveSales.MyProducts.total}</td>
                        </tr>
                        <tr>
                          <th>Similar Products</th>
                          <td className="text-xs-center">{this.props.CompetitiveSales.CompetitiveProducts.online}</td>
                          <td className="text-xs-center">{this.props.CompetitiveSales.CompetitiveProducts.offline}</td>
                          <td className="text-xs-center">{this.props.CompetitiveSales.CompetitiveProducts.total}</td>
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

//<ReportOverviewRow data={this.props.salesOverview} />
