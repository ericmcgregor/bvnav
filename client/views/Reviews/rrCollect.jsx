RRcollect = class RRmanagea extends React.Component {
  render() {
    return (
      <div id="portal_container">

        <GlobalNav />

        <div id="application_container">

          <ApplicationHeader title="Ratings & Reviews: Collect Reviews"/>


          <div id="task_container">
            <div id="task_content">

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
    {name:"Campaigns"},
    {name:"Customers"},
  ],
  secondary:[],
  content:[
    <div></div>
  ]
}
