import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';

AudienceReport = class AudienceReport extends React.Component{
  renderReport(){
    return (
      <div>

        <AudienceShoppingBehavior2 {...this.props} />

      </div>
    )
  }
  render() {
    return (
      <div>
        {!this.props.loaded===false ? 'loading...' : this.renderReport()}
      </div>
    )
  }
}


AudienceReportClass = createContainer(({ params }) => {
  let Data = Session.get('ABRdata');

  if(!Data) {
    return {
      loaded:false
    }
  }
  console.log(Data)
  return {
    params,
    ...Data,
  };

}, AudienceReport);










// constructor(props){
//   super(props)
//   this.state = {
//     loaded:false,
//     headerProps:{
//       title:"",
//       flightdates:"",
//       name:SegmentData.name,
//       actions:{
//         sync:true,
//         export:true,
//         before:()=>{
//           return (
//             <a
//                 href="/Advertising/Audiences/edit"
//                 type="button"
//                 className="btn btn-secondary">
//                 <i className="fa fa-pencil"></i> Edit
//               </a>
//           )
//         },
//         after:()=>{}
//       }
//     }
//   }
// }
// componentDidMount(){
//   let setReport = ()=>{
//     this.setState({
//       loaded:true,
//       headerProps:{
//         name:Session.get('ABR').name
//       },
//       ...Session.get('ABR')
//     });
//   }
//
//   let id = '50c5c303-0c59-4038-922a-ba98478777cc';
//   // id="1ddd5b6f-0067-46b1-b566-1c5e1ca6c191";
//   // id="ef98eff4-ff1c-4c57-a209-9b9f0cd47961";
//   // id="88d9bc94-4e4b-406c-8020-87b94ef0ac88";
//   // id="88d9bc94-4e4b-406c-8020-87b94ef0ac88"
//   // id="df845635-ead5-4380-a9c0-988a9f709348";
//   // id="f472f281-9c49-421a-ad6f-82d7f59d295d";
//   id="df845635-ead5-4380-a9c0-988a9f709348";
//   // id="88d9bc94-4e4b-406c-8020-87b94ef0ac88";
//
//   if(!Session.get('ABR') || Session.get('ABR').id !== id) {
//     Meteor.call('GetABRdata', id, (err, result)=>{
//
//       AudienceDataFormatted = formatAudienceData(result.report, result.segment);
//       console.log('setting session')
//       Session.setPersistent({
//         ABR:{
//           ...AudienceDataFormatted
//         }
//       });
//       console.log('setting state')
//       setReport()
//
//     })
//     return;
//   }
//
//   console.log('setting state')
//   setReport()
//
// }
