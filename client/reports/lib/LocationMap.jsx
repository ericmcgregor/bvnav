import React from 'react';
LocationMap = class LocationMap extends React.Component {
  componentDidMount(){
    var bubbles = this.props.location.map((item, index)=>{
      item.radius = item.size/100;
      item.fillKey = 'BUBBLE';
      return item;
    })


    var Map = new Datamap({
        height:350,
        element: document.getElementById('map'),
        scope: 'usa',
        responsive: true,
        geographyConfig: {
            popupOnHover: false,
            highlightOnHover: false,
            highlightBorderWidth:0,
        },
        fills: {
            // 'USA': '#1f77b4',
            // 'RUS': '#9467bd',
            // 'PRK': '#ff7f0e',
            // 'PRC': '#2ca02c',
            // 'IND': '#e377c2',
            // 'GBR': '#8c564b',
            // 'FRA': '#d62728',
            // 'PAK': '#7f7f7f',
            'BUBBLE':GraphPrimary,
            defaultFill: GraphNeutral
        },
        data: {
            'BUBBLE': {fillKey: 'BUBBLE'},
        //     'PRK': {fillKey: 'PRK'},
        //     'PRC': {fillKey: 'PRC'},
        //     'IND': {fillKey: 'IND'},
        //     'GBR': {fillKey: 'GBR'},
        //     'FRA': {fillKey: 'FRA'},
        //     'PAK': {fillKey: 'PAK'},
        //     'USA': {fillKey: 'USA'}
        }
    });

    //draw bubbles for bombs
    Map.bubbles(bubbles, {
        popupTemplate:function (geography, data) {
                return ['<div class="hoverinfo"><strong>' +  data.name + '</strong>',
                '<br/>Views: ' +  data.size,
                '</div>'].join('');
        }
    });

    // Alternatively with d3
    d3.select(window).on('resize', function() {
        Map.resize();
    });
  }
  render() {
    return(
      <div id="map"></div>
    )
  }
}
