import React from 'react';
import ReactDOM from 'react-dom';

GlobalNav = class GlobalNav extends React.Component {
  constructor(props){
    super(props);
    this.closeNav = this.closeNav.bind(this)
    this.state = {
      nav:Nav,
      closed:false
    }
  }
  renderDropdown(subnav, parent, index){
    if(!subnav) {
      return;
    }
    let collapse = parent.active==FlowRouter.current().params.active ? "in" : "";
    return (
      <div id={"dropdown-"+index} className={"list-group sub-nav collapse "+collapse}>
        {subnav.map((item, index)=>{
          let current = item.current==FlowRouter.current().params.current ? "active" : "";
          return (
            <a key={index} href={item.link} className={"list-group-item "+current}>{item.name}</a>
          )
        })}
      </div>
    )
  }
  closeNav(e){
    e.preventDefault();
    console.log(e)
    this.setState({
      closed:!this.state.closed
    })
  }
  renderPopover(name){

  }
  renderOpen(){
    return (
      <div id="portal_nav">
          <div id="global_brand" className="clearfix">
            <a className="brand-icon" onClick={this.closeNav} href="/" />
            <i className="fa fa-chevron-left" style={{alignSelf:'flex-end', float:"right", position:"absolute", right:"10px", top:"20px", opacity:"0.5"}}  href="#" onClick={this.closeNav} role="button"></i>

          </div>
          <div
            id="global-content-nav"
            className="list-group">
            {this.state.nav.map((item, index)=>{
              let classname = item.active==FlowRouter.current().params.active ? "" : "collapsed";
              let expanded = item.active==FlowRouter.current().params.active ? "true" : "false";
              return (
                <div key={index}>

                  {item.dividerTop ? <div className="divider"></div> : null}

                  <div>
                  <a
                    href={"#dropdown-"+index}
                    className={"list-group-item dropdown-toggle " + classname}
                    data-toggle="collapse"
                    aria-controls={"dropdown-"+index}
                    aria-expanded={expanded}>
                    {item.name}
                  </a>
                  {item.subnav ? this.renderDropdown(item.subnav, item, index) : null}
                  </div>

                  {item.dividerBottom ? <div className="divider"></div> : null}

                </div>

              )
            })}
          </div>
      </div>
    );
  }
  renderClosed(){
    return (
      <div id="portal_nav">
          <div id="global_brand" className="clearfix">
            <a className="brand-icon" href="/" onClick={this.closeNav} />
              <i className="fa fa-chevron-right" style={{alignSelf:'flex-end', float:"right", position:"absolute", right:"10px", top:"20px", opacity:"0.5"}}  href="#" onClick={this.closeNav} role="button"></i>
          </div>
          <div
            id="global-content-nav"
            className="list-group">
            {this.state.nav.map((item, index)=>{
              let classname = item.active==FlowRouter.current().params.active ? "" : "collapsed";
              let expanded = item.active==FlowRouter.current().params.active ? "true" : "false";
              let link = item.subnav ? item.subnav[0].link : null
              let html = this.renderDropdown(item.subnav, item, index)
              return (
                <div key={index}>
                  {item.dividerTop ? <div className="divider"></div> : null}
                  <div>
                  <a href={link} className="bordered-icon" data-react="true" data-title={item.name} data-toggle="popover" >
                  </a>
                  </div>
                  {item.dividerBottom ? <div className="divider"></div> : null}
                </div>

              )
            })}
          </div>
      </div>
    )
  }
  componentDidUpdate(){

    switch (this.state.closed.toString()) {
      case 'true':
        $(this.refs.container).addClass('collapsed')
        $('[data-toggle="popover"]').popover({
           trigger: 'hover'
        })
        break;
      case 'false':
        $(this.refs.container).removeClass('collapsed')
        $('[data-toggle="popover"]').popover('dispose')
        break;
      default:
    }

  }
  componentDidMount(){

  }
  render() {
    return (
      <div id="portal_sidebar" ref={"container"}>

        {this.state.closed==false ? this.renderOpen() : this.renderClosed()}

      </div>

    );
  }
}
