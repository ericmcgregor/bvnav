import React from 'react';
CampaignPerformance = class CampaignPerformance extends React.Component{
  render(){
    return(
      <div className="card report-card">
        <ReportCardHeader title="Campaign Performance" />

        <ReportOverviewRow data={this.props.performanceOverview} />

        <div className="card-block">
          <ChartContainer title="Daily Conversions">
            <GraphSpline data={this.props.DailyCampaignConversions}/>
          </ChartContainer>
        </div>

      </div>
    )
  }
}
