import React from 'react';
CampaignListHeader = class CampaignListHeader extends PageHeaderComponent {
  actions(){
    return (
      <div className="btn-group btn-group-sm" role="group">
        <button
          className="btn btn-success btn-sm"
          onClick={()=>{
            Meteor.call('modal', <FormComponent />, {title:"New Campaign"})
          }}>New Campaign</button>
      </div>
    )
  }
  details(){
    return (
      <h3 className="title">Campaigns</h3>
    )
  }
}
