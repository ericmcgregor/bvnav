import React from 'react';

GraphStackedBar = class GraphStackedBar extends React.Component{
  componentDidMount() {

      let order = "asc";
      console.log(this.props.data.columns.considered)
      console.log(this.props.data.columns.notConsidered)
      if(this.props.data.columns.considered[0] > this.props.data.columns.notConsidered[0]) {
        order = "desc";
      }
      console.log(order)
      var chart = c3.generate({
        bindto:"#"+this.props.data.chartID,
        size:{
          height:this.props.data.height
        },
        data: {
          columns:[
            ['% Brand Considered', ...this.props.data.columns.considered],
            ['% Brand Not Considered', ...this.props.data.columns.notConsidered],
          ],
          colors: {
            '% Brand Not Considered': GraphNeutral,
            '% Brand Considered': GraphPrimary,
          },
          type:'bar',
          groups:[
              ['% Brand Not Considered', '% Brand Considered',]
          ],
          order:order
        },
        grid: {
            y: {
                lines: [{value:0}]
            }
        },

        axis:{
          rotated: true,
          y:{
            max:100,
            padding:{top:0,bottom:0},
          },
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
      <div id={this.props.data.chartID}>test</div>
    )
  }
}
GraphStackedBar.defaultProps = {
  data: {
    chartID:"stackedBar",
    height:200,
    type:'area-spline',
    columns:{
      considered:[130, 100, 100, 200, 150, 50],
      notConsidered:[30, 200, 200, 400, 150, 250]
    },
    categories: ['Brand A', 'Brand B', 'Brand C', 'Brand D', 'Brand E', 'Brand F',]
  }
}
