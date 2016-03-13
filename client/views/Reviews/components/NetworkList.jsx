NetworkList = class NetworkList extends React.Component {
  render() {
    return (
    <div className="container-fluid">

      <div className="row">
        <div className="col1">
          <div>
            <div className="jumbotron text-xs-center">
              <h4 className="display-5">You currently do not have Network Reviews or Syndication enabled</h4>
              <p className="lead">That's ok, we can help!</p>
              <div className="container-fluid m-t-2">
                <div className="row">
                <div className="col-md-6"><button className="btn btn-lg btn-info">Access Network Reviews</button> <p><a href="#">learn more about network reviews</a></p></div>
                <div className="col-md-6"><button className="btn btn-lg btn-info">Enable Network Syndication</button> <p><a href="#">learn more about network synidcation</a></p></div>
                </div>
              </div>

            </div>
            <div hidden className="p-a-1">
            <div className="report-header">
              <div className="report-details">
              </div>
              <div className="report-actions">
                <div
                  className="btn-group btn-group-sm"
                  role="group"
                  aria-label="Basic example">
                  <button
                    type="button"
                    className="btn btn-success">Create Campaign</button>
                </div>

              </div>
            </div>
            </div>
          </div>
        </div>

        <div className="col2">

        </div>
      </div>
    </div>
    )
  }
}
