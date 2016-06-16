import React from 'react';

GraphSpline = class GraphSpline extends React.Component{
  componentDidUpdate(){
    this.renderChart();
  }
  componentDidMount(){
    this.renderChart();
  }
  renderChart() {
    var chart = c3.generate({
      bindto:"#"+this.props.data.chartID,
      size:{
        height:this.props.data.height
      },
      legend: {
        show: false
      },
      axis:{
        x:{
          type:'timeseries',
          tick: {
            centered: true,
            // format: '%m-%d-%y',
            // format:"%yyyy-%MM-%dd",
            values:[...this.props.data.dates]
          }
        },
        y:{
          tick: {
            count: 3,
            format:this.props.data.formatY
          }
        }
      },
      color:{
        pattern:this.props.data.colors
      },
      data: {
            x: 'x',
            // xFormat: '%m-%d-%y',
            columns: [
              ['x', ...this.props.data.dates],
              ...this.props.data.columns
            ],
            type: this.props.type,
        }
    });
  }

  render(){
    return (
      <div id={this.props.data.chartID}></div>
    )
  }
}
GraphSpline.defaultProps = {
  data: {
    height:400,
  },
  type:'area-spline'
}
