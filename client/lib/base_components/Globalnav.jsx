

GlobalNav = React.createClass({
  getInitialState:function(){
    return({
      nav:Nav
    })
  },
  renderDropdown:function(subnav, parent, index){
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
  },
  render: function() {
    return (
      <div id="portal_sidebar">

        <div id="portal_nav">
            <div id="global_brand" className="clearfix">
              <a className="brand-icon" href="/" />
              <a className href="#" role="button">☰</a>
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

      </div>

    );
  }

});
