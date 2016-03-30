import React from 'react';
CreativesListHeader = class CreativesListHeader extends PageHeaderComponent {
  details(){
    return (
      <div></div>
    )
  }
  actions(){
    return (
      <div className="btn-group btn-group-sm" role="group">
        <button
          className="btn btn-success btn-sm"
          onClick={()=>{
            Meteor.call('modal', <FormComponent />, {title:"New Creative"})
          }}>New Creative</button>
      </div>
    )
  }

}
