import React from 'react';
DataTableHeader = React.createClass({
  render: function() {
    if(this.props.header===false) {
      return null;
    }
    return (
      <div>
        <div className="data-table-header">
          <form className="form-inline ">
            <input
              className="form-control"
              type="text"
              placeholder="Search" />
          </form>

          <div className="right">
            <div
              className="btn-group btn-group-sm m-r-1 right"
              role="group"
              aria-label="Basic example">
              {
                // <a
                //   href="/new"
                //   type="button"
                //   className="btn btn-secondary text-success"><i className="fa fa-plus"></i> New</a>
              }
            </div>

            <div
              className="btn-group btn-group-sm right"
              role="group"
              aria-label="Basic example">
              <button
                type="button"
                className="btn btn-secondary"><i className="fa fa-bars"></i></button>
            </div>
          </div>


        </div>
      </div>
    );
  }

});
