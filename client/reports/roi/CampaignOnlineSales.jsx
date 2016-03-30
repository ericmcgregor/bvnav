import React from 'react';
CampaignOnlineSales = class CampaignPerformance extends React.Component{
  render(){
    return (
      <div className="card report-card">
        <ReportCardHeader title="Online Sales" />



        <div className="card-block">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 ">
                <ChartContainer title="Daily Sales">
                  <GraphSpline data={this.props.DailyCampaignSales}/>
                </ChartContainer>
              </div>
              <div className="col-xl-6 col-lg-6 col-xs-12 col-sm-12 col-md-12">
                <ChartContainer title="Comparative Sales">
                  <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th></th>
                          <th>Online</th>
                          <th>Offline</th>
                          <th>Total Sales</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th>My Product</th>
                          <td><strong>{this.props.CompetitiveSales.MyProducts.online}</strong></td>
                          <td>{this.props.CompetitiveSales.MyProducts.offline}</td>
                          <td>{this.props.CompetitiveSales.MyProducts.total}</td>
                        </tr>
                        <tr>
                          <th>Competitive Products</th>
                          <td>{this.props.CompetitiveSales.CompetitiveProducts.online}</td>
                          <td>{this.props.CompetitiveSales.CompetitiveProducts.offline}</td>
                          <td>{this.props.CompetitiveSales.CompetitiveProducts.total}</td>
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
