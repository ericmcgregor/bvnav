import React from 'react';
PrintView = class PrintView extends HomeView {
  componentDidMount(){
    $('body').attr('id', 'print');
  }
  componentWillUnmount(){
    $('body').attr('id', '');
  }
  renderPageHeader() {
    if(this.props.pageHeader) {
      return (
        <div className="p-t-1">
          {this.props.pageHeader}
        </div>
      )
    }
  }
  render() {
    return (
      <div id="portal_container">

        <div id="application_container">

          <div id="task_container">
            <div id="task_content">
              <div className="container">
              {this.renderPageHeader()}

              {this.renderContent()}
              </div>
            </div>
          </div>
        </div>
        <div id="modal_container"></div>
      </div>
    )
  }
}
