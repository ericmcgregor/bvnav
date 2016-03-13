RRdisplay = class RRmanagea extends React.Component {
  render() {
    return (
      <div id="portal_container">

        <GlobalNav />

        <div id="application_container">

          <ApplicationHeader title="Ratings & Reviews: Configure Display" />


          <div id="task_container">
            <div id="task_content">

              <div  className="p-a-1">
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
                      className="btn btn-info">Preview Site</button>

                  </div>

                </div>
              </div>
              </div>


              <div className="p-x-1">
              <div className="container-fluid">
                <div className="row">
                  <div className="col3 ">

                    <div className="dropdown-menu static">
                      <h6 className="dropdown-header">Getting Started</h6>
                      <a className="dropdown-item" href="#">Introduction</a>
                      <a className="dropdown-item" href="#">Technical Setup</a>
                      <div className="dropdown-divider"></div>

                      <h6 className="dropdown-header">User Experience</h6>
                        <a className="dropdown-item" href="#">Style Detector</a>
                        <a className="dropdown-item" href="#">Content Display</a>
                        <a className="dropdown-item" href="#">Display Options</a>
                        <a className="dropdown-item" href="#">Submission Form Editor</a>
                        <a className="dropdown-item" href="#">Copy Editor</a>
                        <a className="dropdown-item" href="#">Badge Editor</a>

                      <div className="dropdown-divider"></div>

                      <h6 className="dropdown-header">Settings</h6>
                      <a className="dropdown-item" href="#">User Authentication</a>
                      <a className="dropdown-item" href="#">Email Configuration</a>
                      <a className="dropdown-item" href="#">Email Templates</a>
                      <a className="dropdown-item" href="#">SEO</a>
                      <a className="dropdown-item" href="#">Web Analytics</a>
                      <a className="dropdown-item" href="#">Spotlights</a>
                      <div className="dropdown-divider"></div>

                      <h6 className="dropdown-header">Resources</h6>
                      <a className="dropdown-item" href="#">Launch Prep</a>
                      <a className="dropdown-item" href="#">Post-Launch Checklist</a>
                      <a className="dropdown-item" href="#">Additional links</a>
                      <div className="dropdown-divider"></div>

                    </div>



                  </div>
                  <div className="col1 border"></div>
                </div>
              </div>
              </div>


            </div>
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
    <div />,
    <div />
  ]
}
