import React from 'react';
GraphPie = class GraphPie extends React.Component{
  componentWillMount() {
    if(!this.props.data.legend) {
      this.props.data.legend = {
        hide:false
      }
    }

  }
  componentDidMount() {
    let columnKeys = Object.keys(this.props.data.columns);

    let chart = c3.generate({
      bindto:"#"+this.props.data.chartID,
      size:{
        height:this.props.data.height
      },
      legend: {
        hide: this.props.data.legend.hide
      },
      data: {

        columns:[
          [ columnKeys[0],this.props.data.columns[columnKeys[0]] ],
          [ columnKeys[1],this.props.data.columns[columnKeys[1]] ],
        ],
        colors: {
          [columnKeys[0]]: GraphPrimary,
          [columnKeys[1]]: GraphSecondary,
        },
        type:'pie',

      }
    });
  }
  render(){
    return (
      <div id={this.props.data.chartID}></div>
    )
  }
}
GraphPie.defaultProps = {
  data: {
    height:200,
    chartID:'pie',
    columns:{
      male:20,
      female:80,
    },
    legend: {
      hide: false
    },
  }
}
