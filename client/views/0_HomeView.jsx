import React from 'react';
HomeView = class HomeView extends React.Component {
  renderApplicationHeader(){
    return (
      <ApplicationHeader titleLink={this.props.titleLink} title={this.props.title}/>
    )
  }
  renderPageHeader() {
    if(this.props.pageHeader) {
      return (
        <div className="p-x-1 p-t-1">
          {this.props.pageHeader}
        </div>
      )
    }
  }
  renderContent() {
    if(this.props.pageContent) {
      return this.props.pageContent;
    }
    if(this.props.nav) {
      return (
        <TabbedNav>
          <TabNav {...this.props.nav} />
          <TabContent {...this.props.nav} />
        </TabbedNav>
      )
    }
    return null;
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
        <div id="modal_container"></div>
      </div>
    )
  }
}
HomeView.defaultProps = {
  // pageContent:<div></div>,
  // pageHeader:null,
  // nav: {
  //   primary:[
  //     {name:"Dashabaord"},
  //     {name:"Activities"},
  //     {name:"Getting Started"},
  //   ],
  //   secondary:[],
  //   content:[
  //     <div>
  //     </div>
  //   ]
  // }
}
