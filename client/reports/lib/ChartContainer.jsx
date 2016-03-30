import React from 'react';
ChartContainer = class ChartContainer extends React.Component{
  renderTitle() {
    if(this.props.title){
      let icon;
      if(this.props.icon) {
        icon = <i className={"fa "+this.props.icon}></i>
      }
      return (
        <h6 className={"chart-title "+this.props.alignTitle}>{icon ? icon : null} {this.props.title}</h6>
      )
    }
  }
  render() {
    return(
      <div className={"chart-container"}>
        <div className={"chart-header"}>
          {this.renderTitle()}
          <div className="chart-header-options">
          </div>
        </div>
        <div className="chart-body">
          {this.props.children}
        </div>
      </div>
    )
  }
}
