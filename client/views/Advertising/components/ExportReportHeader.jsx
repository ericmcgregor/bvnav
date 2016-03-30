import React from 'react';
ExportReportHeader = class ExportReportHeader extends PageHeaderComponent {
  details(){
    return (
      <div></div>
    )
  }
  actions(){
    return (
      <div className="btn-group btn-group-sm" role="group">
          <div className="btn-group btn-group-sm" role="group">
            <button
              id="btnGroupDrop1"
              type="button"
              className="btn btn-secondary dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false">
              Export
            </button>
            <div
              className="dropdown-menu dropdown-menu-right"
              aria-labelledby="btnGroupDrop1">
              <a className="dropdown-item" href="#">
                PDF
              </a>
              <a className="dropdown-item" href="#">
                Excel
              </a>
            </div>
          </div>
      </div>
    )
  }

}
