RRmanagea = class RRmanagea extends React.Component {
  render() {
    return (
      <div id="portal_container">

        <GlobalNav />

        <div id="application_container">

          <ApplicationHeader title="Ratings & Reviews: Manage Reviews"/>


          <div id="task_container">
            <div id="task_content">

              <div className="report-header">
                <div className="report-details">

                  <div hidden  className="container-fluid">
                    <div className="row">
                      <div className="col-md-3">
                        <div className="card card-inverse card-info text-xs-center">
                          <div className="card-block">
                            <blockquote className="card-blockquote">
                              <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
                              </p>
                              <footer>
                                Someone famous in <cite title="Source Title">
                                Source Title
                              </cite>
                            </footer>
                          </blockquote>
                        </div>
                      </div>

                      </div>
                      <div className="col-md-9" style={{alignSelf:"stretch", height:"100%"}}>
                        <div className="card">
                          <div className="card-block">
                            other content
                          </div>
                        </div>
                      </div>
                    </div>
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


let  myTableData = [
  {name: 'Macy’s Columbus Day Promo', status:"In Progress", spend:"$100,000", start:"Jan 21, 2016", end:"Feb 21, 2016"},
  {name: 'LG HA AO WM 2015', status:"In Progress", spend:"$100,000", start:"Jan 21, 2016", end:"Feb 21, 2016"},
  {name: 'Finish Line Holiday Test 2015 3rd Party Data', status:"In Progress", spend:"$100,000", start:"Jan 21, 2016", end:"Feb 21, 2016"},
  {name: 'Linksys Post Holiday Campaign (updated)', status:"In Progress", spend:"$100,000", start:"Jan 21, 2016", end:"Feb 21, 2016"},
  {name: 'Finish Line Holiday Test 2015 1st Party All Products', status:"In Progress", spend:"$100,000", start:"Jan 21, 2016", end:"Feb 21, 2016"},
  {name: 'Macy’s Columbus Day Promo', status:"In Progress", spend:"$100,000", start:"Jan 21, 2016", end:"Feb 21, 2016"},
  {name: 'LG HA AO WM 2015', status:"In Progress", spend:"$100,000", start:"Jan 21, 2016", end:"Feb 21, 2016"},
  {name: 'Finish Line Holiday Test 2015 3rd Party Data', status:"In Progress", spend:"$100,000", start:"Jan 21, 2016", end:"Feb 21, 2016"},
  {name: 'Linksys Post Holiday Campaign (updated)', status:"In Progress", spend:"$100,000", start:"Jan 21, 2016", end:"Feb 21, 2016"},
  {name: 'Finish Line Holiday Test 2015 1st Party All Products', status:"In Progress", spend:"$100,000", start:"Jan 21, 2016", end:"Feb 21, 2016"},
]

MyReviewContainer = class MyReviewContainer extends React.Component {
  render() {
    return (
      <div className="flex flex-row">
        <div className="flex-main p-r-3">
          <div className="report-header">
            <div className="report-details">
              <h3 className="title">Moderate Reviews</h3>
            </div>
            <div className="report-actions">
              <div
                className="btn-group btn-group-sm"
                role="group"
                aria-label="Basic example">
                <button
                  type="button"
                  className="btn btn-secondary">Migrate</button>
                <button
                  type="button"
                  className="btn btn-secondary">Export</button>
              </div>

            </div>
          </div>
          <div>
            <DataTable myTableData={myTableData} link="/rr/manage/native/detail" />
          </div>
        </div>
        <div className="fixed-col--md">
          <div className="card">
            <div className="card-header">Moderation Info</div>
              <div className="card-block">
                <p className="lead m-b-0">User: Joe Pollard</p>
              </div>
              <table className="table m-b-0">
                <tbody>
                  <tr>
                    <th>Moderated</th>
                    <td>300</td>
                  </tr>
                  <tr>
                    <th>Responses</th>
                    <td>290</td>
                  </tr>
                  <tr>
                    <th>Approved</th>
                    <td>183</td>
                  </tr>
                  <tr>
                    <th>Rejected</th>
                    <td>11</td>
                  </tr>
                </tbody>
              </table>
          </div>

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

      </div>
    )
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
    <MyReviewContainer />
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
