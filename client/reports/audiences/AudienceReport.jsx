AudienceReport = class AudienceReport extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      loaded:false,
      headerProps:{
        title:"",
        flightdates:"",
        name:SegmentData.name,
        actions:{
          sync:true,
          export:true,
          before:()=>{
            return (
              <a
                  href="/Advertising/Audiences/edit"
                  type="button"
                  className="btn btn-secondary">
                  <i className="fa fa-pencil"></i> Edit
                </a>
            )
          },
          after:()=>{}
        }
      }
    }
  }
  componentDidMount(){
    let setReport = ()=>{
      this.setState({
        loaded:true,
        headerProps:{
          name:Session.get('ABR').name
        },
        ...Session.get('ABR')
      });
    }

    let id = '50c5c303-0c59-4038-922a-ba98478777cc';
    // id="1ddd5b6f-0067-46b1-b566-1c5e1ca6c191";
    // id="ef98eff4-ff1c-4c57-a209-9b9f0cd47961";
    // id="88d9bc94-4e4b-406c-8020-87b94ef0ac88";
    // id="88d9bc94-4e4b-406c-8020-87b94ef0ac88"
    // id="df845635-ead5-4380-a9c0-988a9f709348";
    // id="f472f281-9c49-421a-ad6f-82d7f59d295d";
    // id="df845635-ead5-4380-a9c0-988a9f709348";
    id="88d9bc94-4e4b-406c-8020-87b94ef0ac88";

    if(!Session.get('ABR') || Session.get('ABR').id !== id) {
      Meteor.call('test', id, (err, result)=>{

        AudienceDataFormatted = formatAudienceData(result.report, result.segment);
        console.log('setting session')
        Session.setPersistent({
          ABR:{
            ...AudienceDataFormatted
          }
        });
        console.log('setting state')
        setReport()

      })
      return;
    }

    console.log('setting state')
    setReport()

  }

  renderReport(){
    return (
      <div>

        <AudienceShoppingBehavior {...this.state} />

      </div>
    )
  }
  render() {
    return (
      <div>
        {!this.state.loaded ? 'loading...' : this.renderReport()}
      </div>
    )
  }
}

{
  //<AudiencePerformance {...this.props}/>

}

// <div className="report-header">
//   <div className="report-details">
//     <h6>Audience Report</h6>
//   </div>
//   <div className="report-actions icon-bv color">
//   </div>
// </div>

// LocationTable = AudienceData.location.sort((a, b)=>{
//   return parseFloat(b.size) - parseFloat(a.size);
// }).slice(0, 4)


let AudienceDataFormatted = formatAudienceData(AudienceData, SegmentData);

AudienceReport.defaultProps = {
  // performanceOverview:[
  //   {name:<span>BV Network</span>,               num:AudienceDataFormatted.lastAudienceEstimate.network,     className:"secondary"},
  //   {name:<span>Facebook</span>,                 num:AudienceDataFormatted.lastAudienceEstimate.facebook,     className:"secondary"},
  //   {name:<span>Mobile</span>,                   num:AudienceDataFormatted.lastAudienceEstimate.mobile,      className:"secondary"},
  //   {name:<span>Email</span>,                    num:AudienceDataFormatted.lastAudienceEstimate.email,     className:"secondary"},
  //   {name:<span>Overall</span>,                  num:AudienceDataFormatted.lastAudienceEstimate.overall,  className:"primary divider-left"},
  // ],

  ...AudienceDataFormatted,


}
