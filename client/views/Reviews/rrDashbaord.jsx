RRdashboard = class RRdashboard extends React.Component {
  render() {
    return (
      <div id="portal_container">

        <GlobalNav />

        <div id="application_container">

          <ApplicationHeader title="Ratings & Reviews: Dashboard"/>


          <div id="task_container">
            <div id="task_content">

              <div className="p-a-1">
              <div className="report-header">
                <div className="report-details">
                </div>
                <div className="report-actions">

                </div>
              </div>
              </div>

              <TabbedNav>
                <TabNav {...nav} />
                <TabContent {...nav} />
              </TabbedNav>

            </div>
          </div>
        </div>

      </div>
    )
  }
}

let HeaderProps = {
  title: "",
  flightdates: "",
  actions:{
    export: false,
    sync:false,
    before:()=>{
      return (
        <a href="/Advertising/Campaigns/new" className="btn btn-success">New Campaign</a>
      )
    },
    after:()=>{}
  }
}


let nav = {
  primary:[
    {name:"Activity"},
    {name:"Executive Summary"},
    {name:"Highest Rated"},
    {name:"Most Viewed"},
  ],
  secondary:[],
  content:[
    <div>
    </div>
  ]
}
