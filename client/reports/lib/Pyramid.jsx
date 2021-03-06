import React from 'react';
GraphPyramid = class GraphPyramid extends React.Component {
  renderChart(){
    let data1 = [
      {"sharedLabel": this.props.shared, "barData1": this.props.without, "barData2": this.props.with},
    ]
    let options1 = {
      width:$('#'+this.props.data.chartID).width(),
      leftLabel:"With Shopper Advertising",
      rightLabel:"Without Shopper Advertising",
      lift:this.props.lift,
      shared:this.props.shared
    }
    Pyramid(this.props.data.chartID, data1, options1)
  }
  componentDidMount(){
    this.renderChart()
  }
  componentDidUpdate(){
    $('#'+this.props.data.chartID+'>svg').remove()
    this.renderChart()
  }
  render() {
    return (
      <div id={this.props.data.chartID} />
    )
  }
}
GraphPyramid.defaultProps = {
  data:{
    chartID:'pyramid'
  },
  shared:"Pageviews",
  with:33,
  without:31,
  lift:1.23
}
