Nav = [
  {name:"Ratings & Reviews",
    active:'rr',
    link:'/rr',
    subnav:[
      {name:"Dashboard", link:"/rr/collect"},
      {name:"Collect", link:"/rr/collect"},
      {name:"Manage", link:"/rr/manage"},
      {name:"Display"},
      {name:"Amplify"},
      {name:"Notifications"},
      {name:"Reports"}
    ]
  },
  {name:"Q & A",
    subnav:[]
  },
  {name:"Social",
    subnav:[]
  },
  {name:"Sampling",
    subnav:[]
  },
  {name:"Products",
    subnav:[]
  },
  {name:"Advertising",
    active:"advertising",
    subnav:[
      {name:"Campaigns", link:"/advertising/campaigns"},
      {name:"Audiences", link:"/advertising/audiences"},
      {name:"Product Sets", link:"/advertising/productsets"},
      {name:"Recommendations", link:"/advertising/recommendations"}
    ]
  },
]

Nav2 = [
  {name:"Ratings & Reviews",
    link:'/rr',
    subnav:[
      {name:"Collect"},
      {name:"Native Reviews"},
      {name:"Network Reviews", link:"/rr/manage"},
      {name:"By Product"},
      {name:"Syndicate Reviews"},
      {name:"Reports"}
    ]
  },
  {name:"Q & A",
    subnav:[]
  },
  {name:"Social",
    subnav:[]
  },
  {name:"Sampling",
    subnav:[]
  },
  {name:"Products",
    subnav:[]
  },
  {name:"Advertising",
    subnav:[
      {name:"Campaigns"},
      {name:"Audiences"},
      {name:"Product Sets"},
      {name:"Recommendations"}
    ]
  },
]

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
          return (
            <a key={index} href={item.link} className="list-group-item">{item.name}</a>
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
                )
              })}
            </div>
        </div>

      </div>

    );
  }

});
