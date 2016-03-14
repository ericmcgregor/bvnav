Nav = [
  {name:"Insights"},
  {name:"Reviews",
    active:'rr',
    link:'/rr',
    subnav:[
      {name:"Dashboard", link:"/rr/collect", current:"rr"},
      {name:"Collect", link:"/rr/collect", current:"rrcollect"},
      {name:"Manage", link:"/rr/manage", current:"rrmanage"},
      {name:"Display", link:"/rr/display", current:"rrdisplay"},
      {name:"Syndicate", link:"/rr/syndicate", current:"rrsyndicate"},
      {name:"Notifications", link:"/rr/notifications", current:"rrnotifications"},
      {name:"Reports", link:"/rr/reports", current:"rrreports"}
    ]
  },
  {name:"Questions",
    subnav:[]
  },
  {name:"Social",
    subnav:[]
  },
  {name:"Sampling",
    subnav:[]
  },
  // {name:"Products",
  //   subnav:[]
  // },
  {name:"Advertising",
    active:"advertising",
    subnav:[
      {name:"Campaigns", link:"/advertising/campaigns", current:"adcampaigns"},
      {name:"Audiences", link:"/advertising/audiences", current:"adaudiences"},
      {name:"Product Sets", link:"/advertising/product-sets", current:"adproducts"},
      {name:"Recommendations", link:"/advertising/recommendations", current:"adrecommendations"}
    ]
  },
  {name:"Configure",
    subnav:[
      {name:"Product feed"}
    ]
  }
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
