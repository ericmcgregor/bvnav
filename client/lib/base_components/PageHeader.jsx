import React from 'react';

PageHeaderComponent = class PageHeaderComponent extends React.Component{
  constructor(props) {
    super(props);
  }
  componentDidMount(){

  }
  renderForm(label, value) {
      return (
        <div className="form-group row">
          <label className="col-sm-4 form-control-label">{label}:</label>
          <div className="col-sm-8">
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
