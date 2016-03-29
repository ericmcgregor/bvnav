NewAudienceReportHeader = class NewAudienceReportHeader extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      name:'',
      value:'',
      touched:false
    }
    this.handleUpdate = this.handleUpdate.bind(this)
  }

  handleUpdate(e){
    this.setState({
      value:e.target.value
    })
  }

  renderNewHeader() {
    return (
      <div className="card card-secondary">
        <div className="card-block">
          <div className="row">
            <div className="col-xs-9">
              <input
                type="text"
                className="form-control"
                placeholder="Audience name"
                onChange={this.handleUpdate}/>
            </div>
            <div className="col-xs-3">
              <a href="/Advertising/Audiences/detail" className="btn btn-primary">
                Save Audience
              </a>
            </div>
          </div>

        </div>
      </div>
    )
  }
  headerProps(){
    let options = {
      title:null,
      name:this.state.name,
      sync:true,
      export:true,
      flightdates:null,
      actions:''
    }
    if(this.state.touched === true) {
      options.export = false,
      options.sync = false,
      options.actions = headerActions(this)
    }
    return options
  }
  render(){
    return (
      <div>
        {!this.state.name ? this.renderNewHeader() : null}
        {this.state.name ? <ReportHeader {...this.headerProps()} /> : null}
        {this.state.name ? <div onClick={this.handleTouch}>edit</div> : null }
      </div>
    )
  }
}

let headerActions = (component) => {
  return (
    <div
      className="btn-group btn-group-sm"
      role="group"
      aria-label="Basic example">
      <button
        type="button"
        className="btn btn-primary"
        onClick={component.handleTouch} >
        Save Audience
      </button>
    </div>
  )
}
