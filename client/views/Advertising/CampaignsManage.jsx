CampaignsManage = class CampaignsManage extends React.Component {
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
                </div>
                <div className="report-actions">
                  <div
                    className="btn-group btn-group-sm"
                    role="group"
                    aria-label="Basic example">
                    <button
                      type="button"
                      className="btn btn-success">Create Campaign</button>
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
    {name:"Active (23)"},
    {name:"Pending (11)"},
    {name:"Completed (4)"},
  ],
  secondary:[],
  content:[
    <CampaignList />,
    <div />
  ]
}
