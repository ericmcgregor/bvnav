ContentView = class ContentView extends HomeView {
  renderPageHeader() {
    if(this.props.pageHeader) {
      return (
        <div className="">
          {this.props.pageHeader}
        </div>
      )
    }
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
