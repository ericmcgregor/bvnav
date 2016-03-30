import React from 'react';
AudiencePerformance = class AudiencePerformance extends React.Component{

  renderthing(){
    let performanceOverview = [
      {name:<span>BV Network</span>,               num:this.props.lastAudienceEstimate.network,     className:"secondary"},
      {name:<span>Facebook</span>,                 num:this.props.lastAudienceEstimate.facebook,     className:"secondary"},
      {name:<span>Mobile</span>,                   num:this.props.lastAudienceEstimate.mobile,      className:"secondary"},
      {name:<span>Email</span>,                    num:this.props.lastAudienceEstimate.email,     className:"secondary"},
      {name:<span>Overall</span>,                  num:this.props.lastAudienceEstimate.overall,  className:"primary divider-left"},
    ]
    return (
      <div className="report-overview-row align-top">
        {performanceOverview.map((item, index)=>{
          return (
            <div key={index} className={"overview-cell "+item.className}>
              <p className={"block-number"}>{item.num}</p>
              <p className={"block-name"}>{item.name}</p>
            </div>
          )
        })}
      </div>
    )
  }
  render(){
    return(
      <div className="card report-card">
        <ReportCardHeader title="Audience Performance" />

        {this.renderthing()}

      </div>
    )
  }
}
