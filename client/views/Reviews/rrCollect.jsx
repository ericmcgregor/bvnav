RRcollect = class RRmanagea extends React.Component {
  render() {
    return (
      <div id="portal_container">

        <GlobalNav />

        <div id="application_container">

          <ApplicationHeader title="Ratings & Reviews: Collect Reviews"/>


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

        <div id="modal_container"></div>
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

//<ReviewList />
let nav = {
  primary:[
    {name:"Campaigns"},
    {name:"Manage Customers"},
  ],
  secondary:[],
  content:[
    <div>
      <div className="jumbotron text-xs-center">
        <h4 className="display-5">You currently do not have any review collection campaigns</h4>
        <p className="lead">That's ok, we can help!</p>
          <button
            type="button"
            className="btn btn-success btn-lg"
            onClick={()=>{
              Meteor.call('modal', <ReviewList />, {title:"test"})
            }}>
            Create Campaign</button>
      </div>
      <div hidden className="p-a-1">
      <div className="report-header">
        <div className="report-details">
        </div>
        <div className="report-actions">
          <div
            className="btn-group btn-group-sm"
            role="group"
            aria-label="Basic example">
            <button
              type="button"
              className="btn btn-success"
              data-toggle="modal" data-target="#myModal" >
              test Create Campaign</button>
          </div>

        </div>
      </div>
      </div>
    </div>
  ]
}
