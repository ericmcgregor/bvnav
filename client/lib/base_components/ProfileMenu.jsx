import React from 'react';
ProfileMenu = React.createClass({
  getDefaultProps:function(){
    return {
      src:'/images/profile.jpg'
    }
  },
  render: function() {
    return (
      <li className="nav-item nav-item-profile dropdown">
        <a
          className="nav-link dropdown-toggle"
          data-toggle="dropdown"
          href="#"
          role="button"
          aria-haspopup="true"
          aria-expanded="false">
          <span>username</span>
          <img
            src={this.props.src}
            className="img-circle img-profile" />
        </a>
        <div className="dropdown-menu dropdown-menu-right">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">
            Another action
          </a>
          <a className="dropdown-item" href="#">
            Something else here
          </a>
          <div className="dropdown-divider" />
          <a className="dropdown-item" href="#">
            Separated link
          </a>
        </div>
      </li>
    );
  }

});
