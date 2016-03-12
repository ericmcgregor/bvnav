Nav = [
  {name:"Ratings & Reviews",
    link:'/rr',
    subnav:[
      {name:"Collect"},
      {name:"Manage", link:"/rr/manage"},
      {name:"Display"},
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
    return (
      <div id={"dropdown-"+index} className="list-group sub-nav collapse">
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
                return (
                  <div key={index}>
                  <a
                    href={"#dropdown-"+index}
                    className="list-group-item dropdown-toggle"
                    data-toggle="collapse"
                    aria-controls={"dropdown-"+index}
                     aria-expanded="false">
                    {item.name}
                  </a>
                  {item.subnav ? this.renderDropdown(item.subnav, item.name, index) : null}
                  </div>
                )
              })}
            </div>
        </div>

      </div>

    );
  }

});
