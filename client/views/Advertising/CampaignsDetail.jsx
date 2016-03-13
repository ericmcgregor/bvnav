CampaignsDetail = class CampaignsDetail extends React.Component {
  render() {
    return (
      <div id="portal_container">

        <GlobalNav />

        <div id="application_container">

          <ApplicationHeader titleLink="/advertising/campaigns" title="Advertising: Manage Campaigns"/>


          <div id="task_container">
            <div id="task_content">

              <div className="p-a-1">
              <div className="report-header">
                <div className="report-details">
                  <div className="form-group row">
                    <label className="col-sm-3 form-control-label">Campaign:</label>
                    <div className="col-sm-9">
                      <p className="form-control-static">Macy's Black Firday</p>
                    </div>
                  </div>

                  <div className="form-group row">
                    <label className="col-sm-3 form-control-label">Client:</label>
                    <div className="col-sm-9">
                      <p className="form-control-static">Macy's</p>
                    </div>
                  </div>


                  <div className="form-group row">
                    <label className="col-sm-3 form-control-label">Flight Dates:</label>
                    <div className="col-sm-9">
                      <p className="form-control-static">xx/xx/xx - xx/xx/xx</p>
                    </div>
                  </div>

                  <div className="form-group row">
                    <label className="col-sm-3 form-control-label">Status:</label>
                    <div className="col-sm-9">
                        <div className="btn-group btn-group-sm" role="group">
                          <button
                            id="btnGroupDrop1"
                            type="button"
                            className="btn btn-secondary dropdown-toggle"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false">
                            Pending
                          </button>
                          <div
                            className="dropdown-menu dropdown-menu-right"
                            aria-labelledby="btnGroupDrop1">
                            <a className="dropdown-item" href="#">
                              Active
                            </a>
                            <a className="dropdown-item" href="#">
                              Complete
                            </a>
                          </div>
                        </div>
                    </div>
                  </div>

                </div>
                <div className="report-actions">
                  <div className="btn-group btn-group-sm" role="group">
                    <button
                      id="btnGroupDrop1"
                      type="button"
                      className="btn btn-secondary dropdown-toggle"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false">
                      Export
                    </button>
                    <div
                      className="dropdown-menu dropdown-menu-right"
                      aria-labelledby="btnGroupDrop1">
                      <a className="dropdown-item" href="#">
                        PDF
                      </a>
                      <a className="dropdown-item" href="#">
                        Excel
                      </a>
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


let nav = {
  primary:[
    {name:"Details"},
    {name:"Conversion Report"},
    {name:"Audiences (0)"},
    {name:"Product Sets (0)"},
  ],
  secondary:[],
  content:[
    <div />,
    <div />
  ]
}
