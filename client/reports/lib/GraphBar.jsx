GraphBar = class GraphBar extends React.Component{
  componentDidMount() {
    var chart = c3.generate({
      bindto:"#"+this.props.data.chartID,
      size:{
        height:this.props.data.height
      },
      data: {
        columns:this.props.data.columns,
        colors: {
          [this.props.data.columns[0][0]]: GraphPrimary,
          [this.props.data.columns[1][0]]: GraphSecondary,
        },
        type:'bar',
      },
      grid: {
          y: {
              lines: [{value:0}]
          }
      },
      legend: this.props.data.legend,
      axis:{
        x:{
          type:'category',
          categories: this.props.data.categories,
          tick: {
            centered: true
          }
        },
      },
    });
  }
  render(){
    return (
      <div id={this.props.data.chartID}></div>
    )
  }
}
GraphBar.defaultProps = {
  data: {
    height:200,
    type:'area-spline',
    chartID:'test',
    categories: ["test18-24", "25-34", "35-44", "45-54",],
    columns:[40,23,12,18],
    legend:{
      show:false
    }
  }
}
