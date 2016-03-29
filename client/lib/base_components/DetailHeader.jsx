DetailHeader = React.createClass({
  getDefaultProps:function(){
    return {
      title:"",
      back:"Back",
      backLink:"/",
      detailHeaderOptions:""
    }
  },
  render: function() {
    return (
      <div className="detail-header">
        {
          // <p>
          //   <a className="nav-link text-info" href="/">
          //     <i className="fa fa-chevron-left"></i>
          //     {this.props.back}
          //   </a>
          // </p>
        }


        <h2 className="lead detail-title">{this.props.title}</h2>

        <div className="detail-options">{this.props.detailHeaderOptions}</div>
      </div>
      )
    }
});






ReportHeader = class ReportHeader extends React.Component{
  constructor() {
    super();
  }
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
  renderSync() {
    if(this.props.actions.sync) {
      return (
        <div className="btn-group btn-group-sm">
          <button
            type="button"
            className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i className="fa fa-download"></i> Sync
          </button>
          <div className="dropdown-menu dropdown-menu-right">
            <a className="dropdown-item" href="#">Facebook</a>
            <a className="dropdown-item" href="#">Crux</a>
          </div>
        </div>
      )
    }
  }
  renderExport() {
    if(this.props.actions.export) {
      return (
        <div
          className="btn-group btn-group-sm">
          <button
            type="button"
            className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i className="fa fa-download"></i> export
          </button>
          <div className="dropdown-menu dropdown-menu-right">
            <a className="dropdown-item" href="#">PDF</a>
            <a className="dropdown-item" href="#">Excel</a>
          </div>
        </div>
      )
    }
  }
  renderActions() {
    return (
      <div
        className="btn-group btn-group-sm right"
        role="group"
        aria-label="Actions">
        {this.props.actions.before()}
        {this.renderExport()}
        {this.renderSync()}
        {this.props.actions.after()}
      </div>
    )
  }
  render(){
    return (
      <div className="report-header">
        <div className="report-details">

          <p className="title">{this.props.title}</p>

          {this.props.name ? this.renderForm('Name', this.props.name) : null}
          {this.props.flightdates ? this.renderForm('Flight Dates', this.props.flightdates) : null}

          <div className="additional-fields">
              {this.props.additionalfields()}
          </div>

        </div>
        <div className="report-actions">
          {this.renderActions()}
        </div>
      </div>
    )
  }
}
ReportHeader.defaultProps = {
  title: "",
  flightdates: "",
  actions:{
    before:()=>{},
    export: true,
    sync:true,
    after:()=>{}
  },
  additionalfields:()=>{}
}






PageHeaderComponent = class PageHeaderComponent extends React.Component{
  constructor(props) {
    super(props);
  }
  componentDidMount(){

  }
  renderForm(label, value) {
      return (
        <div className="form-group row">
          <label className="col-sm-3 form-control-label">{label}:</label>
          <div className="col-sm-9">
            {typeof value === 'object' ? value : <p className="form-control-static">{value}</p>}
          </div>
        </div>
      )
  }
  // details(){
  //   return null
  // }
  // actions(){
  //   return null
  // }
  // optional(){
  //   return null
  // }
  renderDetails() {
    if(!this.details || typeof this.details !== 'function') return;
    return (
      <div className="page-header-details">
        {this.details()}
      </div>
    )
  }
  renderActions() {
    if(!this.actions || typeof this.actions !== 'function') return;
    return (
      <div className="page-header-actions">
        <div
          className="btn-group btn-group-sm right"
          role="group"
          aria-label="Actions">
          {this.actions()}
        </div>
      </div>
    )
  }
  renderOptional(){
    if(!this.optional || typeof this.optional !== 'function') return;
    return (
      <div className="page-header-optional">
        {this.optional()}
      </div>
    )
  }
  renderLocation(){
    if(!this.props.crumbs.length) return;
    return (
      <div className="page-header-location flex flex-row">
        <ol
          className="breadcrumb">
          {this.props.crumbs.map((item, index)=>{
            return (
              <li key={index} className={item.className}>
                {item.link ? <a href={item.link}>{item.name}</a> : <span>{item.name}</span>}
              </li>
            )
          })}
        </ol>
        {this.renderActions()}
      </div>
    )
  }
  render(){
    return(
      <div className="page-header">
        <div className="print-bv-report icon-bv color"></div>
        {this.renderLocation()}


        <div className="flex flex-row">
          {this.renderDetails()}
          {this.renderOptional()}
          {this.props.crumbs.length ? null : this.renderActions()}
        </div>
      </div>
    )
  }
}
PageHeaderComponent.defaultProps = {
  crumbs:[]
}
