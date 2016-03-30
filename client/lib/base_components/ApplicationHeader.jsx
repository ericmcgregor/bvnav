import React from 'react';
ApplicationHeader  = React.createClass({
  getDefaultProps:function(){
    return {
      title:'',
      titleLink:'/',
      detail:null,
      primaryNav:[''],
      secondaryNav:[''],
    }
  },
  handleClick:function(){

  },
  renderDetail:function(){
    if (!this.props.detail) { return; }
    return (
      <a className="navbar-brand" href="#">
        > {this.props.detail}
      </a>
    )
  },
  render: function() {
    return (
      <div id="application_header">
      <nav
        id="application_nav"
        className="navbar navbar-light bg-faded">
        <a className="navbar-brand" href={this.props.titleLink}>
          {this.props.title}
        </a>

        <ul className="nav navbar-nav">
          {this.props.primaryNav.map((item, index)=>{
            return (
              <li key={index} className="nav-item active">
                <a className="nav-link" href="#">
                  {item}
                </a>
              </li>
            )
          })}
      </ul>

      <ul className="nav navbar-nav pull-xs-right">
        <ProfileMenu />
      </ul>

      <form hidden className="form-inline pull-xs-right">
        <input
          className="form-control"
          type="text"
          placeholder="Search" />
        <button
          className="btn btn-success-outline"
          type="submit">Search</button>
      </form>
    </nav>
  </div>


    );
  }

});
