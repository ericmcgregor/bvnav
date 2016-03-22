ContentView = class ContentView extends HomeView {
  renderPageHeader() {
    if(this.props.pageHeader) {
      return (
        <div className="">
          {this.props.pageHeader}
        </div>
      )
    }
    return (
      <div className="">
        <div className="report-header">
          <div className="report-details">
          </div>
          <div className="report-actions">
          </div>
        </div>
      </div>
    )
  }
  render(){
    return(
      <div>
        {this.renderPageHeader()}
        {this.renderContent()}
      </div>
    )
  }
}
ContentView.defaultProps = {
  pageContent:<div></div>
}
