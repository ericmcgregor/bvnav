TabContent = React.createClass({
  getDefaultProps:function(){
    return {
      primary:[
        {name:"Active"},
        {name:"Completed"},
        {name:"Reports"},
      ],
      content:[
        <div></div>,
        <div></div>,
        <div></div>
      ]
    }
  },
  render: function() {
    return (
        <div className="tab-content">
          {this.props.primary.map((item, index)=>{
            active = index>0 ? null : 'active';
            return (
                <div key={index}
                  className={"tab-pane p-x-1 "+active}
                  id={"tab-"+index}
                  role="tabpanel">
                    {this.props.content[index] ? this.props.content[index] : null}
                </div>
            )
          })}
        </div>
    );
  }

});
