import React from 'react';
PrintView = class PrintView extends HomeView {
  render() {
    return (
      <div id="portal_container">

        <div id="application_container">

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
