import React from 'react';
AudienceDemographics = class AudienceDemographics extends React.Component{
  componentDidMount(){
    let data1 = [
      {"sharedLabel": "Pageviews", "barData1": this.props.behaviorByDeviceType["Mobile/Tablet"].peopleViewed, "barData2": this.props.behaviorByDeviceType["Desktop"].peopleViewed},
      {"sharedLabel": "Purchases", "barData1": this.props.behaviorByDeviceType["Mobile/Tablet"].peoplePurchased, "barData2": this.props.behaviorByDeviceType["Desktop"].peoplePurchased},
    ]
    let options1 = {
      width:$('#demographics-device').width(),
      leftLabel:"Desktop",
      rightLabel:"Mobile"
    }
    Pyramid('#demographics-device', data1, options1)

    // let data = [
    //   {"sharedLabel": "18-24", "barData1": 43041, "barData2": 40852},
    //   {"sharedLabel": "25-34", "barData1": 33041, "barData2": 2852},
    //   {"sharedLabel": "35-44", "barData1": 13041, "barData2": 20852},
    //   {"sharedLabel": "45-54", "barData1": 3041, "barData2": 10852},
    // ]
    // let options = {
    //   width:$('#demographics-gender').width(),
    //   leftLabel:"Men",
    //   rightLabel:"Women"
    // }
    // Pyramid('#demographics-gender', data, options)
    // var map = new Datamap({
    //   scope: 'usa', //currently supports 'usa' and 'world', however with custom map data you can specify your own
    //   element: document.getElementById('map'),
    //   height:800,
    //   width:600,
    // });
    //
    // map.bubbles = AudienceData.location.map((item, index)=>{
    //   item.radius = 23;
    //   console.log(item)
    //   return item;
    // })


//     var bombs = [{
//     name: 'Joe 4',
//     radius: 25,
//     yeild: 400,
//     country: 'USSR',
//     fillKey: 'RUS',
//     significance: 'First fusion weapon test by the USSR (not "staged")',
//     date: '1953-08-12',
//     latitude: 50.07,
//     longitude: 78.43
//   },{
//     name: 'RDS-37',
//     radius: 40,
//     yeild: 1600,
//     country: 'USSR',
//     fillKey: 'RUS',
//     significance: 'First "staged" thermonuclear weapon test by the USSR (deployable)',
//     date: '1955-11-22',
//     latitude: 50.07,
//     longitude: 78.43
//
//   },{
//     name: 'Tsar Bomba',
//     radius: 75,
//     yeild: 50000,
//     country: 'USSR',
//     fillKey: 'RUS',
//     significance: 'Largest thermonuclear weapon ever tested—scaled down from its initial 100 Mt design by 50%',
//     date: '1961-10-31',
//     latitude: 73.482,
//     longitude: 54.5854
//   }
// ];



  }
  render(){
    return(
      <div className="card report-card">
        <ReportCardHeader title="Audience Demographics" />
        {
          // <div className="card-block">
          //   <ChartContainer title="Age Gender">
          //     <div id="demographics-gender"></div>
          //   </ChartContainer>
          //
          // </div>
        }

        <div className="card-block">
          <div className="row">

            <div hidden className="col-xs-12">
              <ChartContainer title="Behvaior by Device Type">
                <div id="demographics-device"></div>
              </ChartContainer>
            </div>
          </div>
        </div>


        <div className="card-block">

          <ReportLocationMap {...this.props} />

        </div>

      </div>
    )
  }
}






// <div  hidden className="container-fluid">
//   <div className="row">
//     <div className="col-xs-6">
//       <ChartContainer title="Age">
//         <GraphBar data={this.props.AudienceDemoAgeData} />
//       </ChartContainer>
//     </div>
//     <div className="col-xs-6">
//       <ChartContainer title="Gender">
//         <GraphPie data={this.props.AudienceDemoGenderData}/>
//       </ChartContainer>
//     </div>
//   </div>
// </div>
