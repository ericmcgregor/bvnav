RRmanagea = class RRmanagea extends React.Component {
  render() {
    return (
      <div id="portal_container">

        <GlobalNav />

        <div id="application_container">

          <ApplicationHeader title="Ratings & Reviews: Manage Reviews"/>


          <div id="task_container">
            <div id="task_content">

              <div className="p-a-1">
              <div className="report-header">
                <div className="report-details">
                  <div hidden className="container-fluid">
                    <div className="row">
                      <div className="col-md-4">
                        <div
                          className="alert "
                          role="alert">

                          <p className="lead">
                            <strong>
                            0  reivew collection campaigns
                            </strong>
                          </p>
                          <p>Learn how you can be better at getting reviews with our review marketing campaign.</p>
                          <hr />
                          <a href="/rr/collect" className="btn btn-info btn-sm">Start collecting reviews</a>
                        </div>
                      </div>

                      <div hidden className="col-md-9" style={{alignSelf:"stretch", height:"100%"}}>
                        <div className="card">
                          <div className="card-block">
                            other content
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

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
    {name:"Native Reviews"},
    {name:"Network Reviews"},
    {name:"By Product"},
  ],
  secondary:[],
  content:[
    <ReviewList />,
    <NetworkList />
  ]
}













RRmanageb = class RRmanageb extends React.Component {
  render() {
    return (
      <div id="portal_container">

        <GlobalNav />

        <div id="application_container">

          <ApplicationHeader primaryNav={['My R&R', 'Network R&R', 'By Product']} title="Ratings & Reviews: Manage Reviews"/>


          <div id="task_container">
            <div id="task_content">
              <ManageMyRR />
            </div>
          </div>
        </div>

      </div>
    )
  }
}

ManageMyRR = class ManageMyRR extends React.Component {
  render() {
    return (
      <div className="box"></div>
    )
  }
}
