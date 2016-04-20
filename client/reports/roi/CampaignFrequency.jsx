import React from 'react';
CampaignFrequency = class CampaignFrequency extends React.Component{
  render(){
    return(
      <div className="card report-card">
        <ReportCardHeader title="Campaign Performance" />

        <ReportOverviewRow data={this.props.performanceOverview} />

        <div className="card-block">
          {
            /*
            <div className="row">
              <div className="col-md-12">
                <ChartContainer title="Daily Campaign ROAS">
                  <GraphSpline data={this.props.DailyCampaignROAS}/>
                </ChartContainer>
              </div>
              <div className="col-md-12 m-t-2">
                <ChartContainer title="ROAS by Frequency">
                  <GraphBar data={this.props.ROASbyFrequency}/>
                </ChartContainer>
              </div>
            </div>
            */
          }

          <div className="row">
            <div className="col-md-6">
              <ChartContainer title="Daily Campaign ROAS">
                <GraphSpline data={this.props.DailyCampaignROAS}/>
              </ChartContainer>
            </div>
            <div className="col-md-6">
              <ChartContainer title="ROAS by Frequency">
                <GraphBar data={this.props.ROASbyFrequency}/>
              </ChartContainer>
            </div>
          </div>




        </div>

      </div>
    )
  }
}
