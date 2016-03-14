GraphSpline = class GraphSpline extends React.Component{
  componentDidMount() {
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
            // format: '%Y-%m-%d'
            format:"%yyyy-%MM-%dd"
          }
        },
        y:{
          tick: {
            count: 3
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
            type: 'area-spline',
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
    height:400
  }
}
