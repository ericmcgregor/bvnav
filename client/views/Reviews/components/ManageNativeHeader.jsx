import React from 'react';
ManageNativeHeader = class ManageNativeHeader extends React.Component {
  render() {
    return (
      <div className="report-header">
        <div className="report-details">
          <h3 className="title">Moderate Reviews From yoursite.com</h3>
        </div>
        <div className="report-actions">
          <div
            className="btn-group btn-group-sm"
            role="group"
            aria-label="Basic example">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={()=>{
                Meteor.call('modal', <div></div>, {title:"test"})
              }}
              >Migrate</button>
            <button
              type="button"
              className="btn btn-secondary">Export</button>
          </div>

        </div>
      </div>
    )
  }
}
