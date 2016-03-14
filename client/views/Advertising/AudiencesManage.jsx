AudiencesManage = class AudiencesManage extends React.Component {
  render() {
    return (
      <div id="portal_container">

        <GlobalNav />

        <div id="application_container">

          <ApplicationHeader title="Advertising: Manage Audience Segments"/>


          <div id="task_container">
            <div id="task_content">

              <div className="p-a-1">
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
                      className="btn btn-success">Create Audience</button>
                  </div>

                </div>
              </div>
              </div>

              <div className="p-a-1">
                <AudienceList />
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
    {name:"Active (23)"},
    {name:"Pending (11)"},
    {name:"Completed (4)"},
  ],
  secondary:[],
  content:[
    <div />,
    <div />
  ]
}
