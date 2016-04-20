import React from 'react';
GraphBar = class GraphBar extends React.Component{
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
          // type:'timeseries',
          tick: {
            centered: true,
            // format: '%Y-%m-%d'
            // format:"%yyyy-%MM-%dd"
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
            columns: [
              ['x', ...this.props.data.dates],
              ...this.props.data.columns
            ],
            type: 'bar',
        }
    });
  }

  // componentDidMount() {
  //   var chart = c3.generate({
  //     bindto:"#"+this.props.data.chartID,
  //     size:{
  //       height:this.props.data.height
  //     },
  //     data: {
  //       columns:this.props.data.columns,
  //       colors: {
  //         [this.props.data.columns[0][0]]: GraphPrimary,
  //         [this.props.data.columns[1][0]]: GraphSecondary,
  //       },
  //       type:'bar',
  //     },
  //     grid: {
  //         y: {
  //             lines: [{value:0}]
  //         }
  //     },
  //     legend: this.props.data.legend,
  //     axis:{
  //       x:{
  //         type:'category',
  //         categories: this.props.data.categories,
  //         tick: {
  //           centered: true
  //         }
  //       },
  //     },
  //   });
  // }
  render(){
    return (
      <div id={this.props.data.chartID}></div>
    )
  }
}
// GraphBar.defaultProps = {
//   data: {
//     height:200,
//     type:'area-spline',
//     chartID:'test',
//     categories: ["test18-24", "25-34", "35-44", "45-54",],
//     columns:[40,23,12,18],
//     legend:{
//       show:false
//     }
//   }
// }
