AdProdcutsManage = class AdProdcutsManage extends React.Component {
  render() {
    return (
      <div id="portal_container">

        <GlobalNav />

        <div id="application_container">

          <ApplicationHeader title="Advertising: Manage Product Sets" />


          <div id="task_container">
            <div id="task_content">

              <div  className="p-a-1">
              <div className="report-header">
                <div className="report-details">
                </div>
                <div hidden className="report-actions">
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
