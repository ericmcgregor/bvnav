RRnativedetail = class RRnativedetail extends React.Component {
  render() {
    return (
      <div id="portal_container">

        <GlobalNav />

        <div id="application_container">

          <ApplicationHeader titleLink="/rr/manage" title="Ratings & Reviews > Manage Reviews > Native "/>


          <div id="task_container">
            <div id="task_content">

              <div className="p-a-1">
                <ReviewDetailHeader />
              </div>

              <TabbedNav>
                <TabNav {...nav} />
                <TabContent {...nav} />
              </TabbedNav>

            </div>
          </div>
        </div>

      </div>
    )
  }
}

let ReviewDetailHeader = class ReviewDetailHeader extends React.Component {
  renderForm(label, value) {
      return (
        <div className="form-group row">
          <label className="col-sm-3 form-control-label">{label}:</label>
          <div className="col-sm-9">
            <p className="form-control-static">{value}</p>
          </div>
        </div>
      )
  }
  render() {
    return(
      <div className="report-header">
        <div className="border m-r-2" style={{width:"150px"}}></div>
        <div className="report-details">
          {this.renderForm('Product', "Charter Club Striped Crochet-Trim Top Only at Macys (2449645)")}
          {this.renderForm('Category', 'Tops')}
          {this.renderForm('Brand', 'Charter Club')}
          {this.renderForm('Submitted', '@mysite.com - 03/12/2016 17:14:42 CST')}
          {this.renderForm('Reviewed By', 'torretta (3 reivews) - Staten Island Mall')}
          {this.renderForm('Status', 'Pending...')}
        </div>
        <div className="report-actions">
          <div
            className="btn-group btn-group-sm"
            role="group"
            aria-label="Basic example">
            <div className="btn-group btn-group-sm" role="group">
              <button
                id="btnGroupDrop1"
                type="button"
                className="btn btn-secondary dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false">
                <i className="fa fa-gear"> Options</i>
              </button>
              <div
                className="dropdown-menu dropdown-menu-right"
                aria-labelledby="btnGroupDrop1">
                <a className="dropdown-item" href="#">
                  Email Review
                </a>
                <a className="dropdown-item" href="#">
                  Migrate Review
                </a>
                <a className="dropdown-item" href="#">
                  Feature
                </a>
              </div>
            </div>
            <button
              type="button"
              className="btn btn-secondary"><i className="fa fa-chevron-right"></i> </button>

          </div>

        </div>
      </div>
    )
  }
}
let nav = {
  primary:[
    {name:"Review"},
    {name:"Photos (0)"},
    {name:"Videos (0)"},
    {name:"Comments (0)"},
    {name:"Responses (0)"},
  ],
  secondary:[],
  content:[
    <div />
  ]
}
