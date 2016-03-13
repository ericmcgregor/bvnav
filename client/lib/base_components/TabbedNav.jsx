TabbedNav = React.createClass({
  render: function() {
    return (
      <div className="">
        {this.props.children}
      </div>
    );
  }

});

TabNav = React.createClass({
  getDefaultProps:function(){
    return {
      primary:[
        {name:"Active"},
        {name:"Completed"},
        {name:"Reports"},
      ],
      secondary:[
        // {
        //   className:"btn btn-secondary text-success",
        //   icon:"fa fa-plus-square",
        //   text:"new",
        //   link:"/new"
        // }
      ]
    }
  },
  render: function() {
    return (
      <div className="task-nav-container">

        <ul  className="nav nav-tabs" role="tablist">
          {this.props.primary.map((item, index)=>{
            active = index>0 ? null : 'active';
            return (
              <li key={index} className="nav-item">
                <a
                  className={"nav-link "+active}
                  data-toggle="tab"
                  href={"#tab-"+index}
                  role="tab">{item.name}</a>
              </li>
            )
          })}
        </ul>

        <div hiiden className="task-nav-options">
          <div
            className="btn-group btn-group-sm"
            role="group"
            aria-label="Basic example">
            {this.props.secondary.map((item, index)=>{
              return (
                <a
                  href={item.link}
                  key={index}
                  type="button"
                  className={item.className}><i className={item.icon}></i> {item.text}</a>
              )
            })}
          </div>
        </div>

      </div>
      )
    }
});




        //
        //
        // <nav hidden className="navbar navbar-light bg-faded">
        //     <div className="nav navbar-nav" role="tablist">
        //       <a
        //         className="nav-item nav-link active"
        //         data-toggle="tab"
        //         href="#home"
        //         role="tab">Home
        //       </a>
        //       <a
        //         className="nav-item nav-link"
        //         data-toggle="tab"
        //         href="#profile"
        //         role="tab">Features</a>
        //       <a
        //         className="nav-item nav-link"
        //         data-toggle="tab"
        //         href="#messages"
        //         role="tab">Pricing</a>
        //       <a
        //         className="nav-item nav-link"
        //         data-toggle="tab"
        //         href="#settings"
        //         role="tab">About</a>
        //   </div>
        //   <div className="nav navbar-nav pull-xs-right">
        //     <a className="nav-item nav-link active" href="#">
        //         Home <span className="sr-only">(current)</span>
        //     </a>
        //   </div>
        // </nav>
