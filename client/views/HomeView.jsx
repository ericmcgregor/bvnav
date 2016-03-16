HomeView = class HomeView extends React.Component {
  render() {
    return (
      <div id="portal_container">

        <GlobalNav />

        <div id="application_container">

          <ApplicationHeader title=""/>


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


let nav = {
  primary:[
    {name:"Dashabaord"},
    {name:"Activities"},
    {name:"Getting Started"},
  ],
  secondary:[],
  content:[
    <div>
    </div>
  ]
}
