HomeView = class HomeView extends React.Component {
  renderApplicationHeader(){
    return (
      <ApplicationHeader titleLink={this.props.titleLink} title={this.props.title}/>
    )
  }
  renderPageHeader() {
    if(this.props.pageHeader) {
      return (
        <div className="p-a-1">
          {this.props.pageHeader}
        </div>
      )
    }
    return (
      <div className="p-a-1">
        <div className="report-header">
          <div className="report-details">
          </div>
          <div className="report-actions">
          </div>
        </div>
      </div>
    )
  }
  renderContent() {
    if(this.props.pageContent) {
      return this.props.pageContent;
    }
    return (
      <TabbedNav>
        <TabNav {...this.props.nav} />
        <TabContent {...this.props.nav} />
      </TabbedNav>
    )
  }
  render() {
    return (
      <div id="portal_container">

        <GlobalNav />

        <div id="application_container">

          {this.renderApplicationHeader()}

          <div id="task_container">
            <div id="task_content">

              {this.renderPageHeader()}

              {this.renderContent()}

            </div>
          </div>
        </div>

      </div>
    )
  }
}
HomeView.defaultProps = {
  pageContent:null,
  pageHeader:null,
  nav: {
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
}
