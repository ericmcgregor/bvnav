import React from 'react';
TaskNav = React.createClass({
  getInitialState:function(){
    return({
      tasks:[
        "task",
      ]
    })
  },
  render: function() {
    return (
      <div>
        <ul>
          {this.state.tasks.map((item, index)=>{
            return (
              <li key={index}><a href={"/"+item}>{item}</a></li>
            )
          })}
        </ul>
      </div>
    );
  }

});
