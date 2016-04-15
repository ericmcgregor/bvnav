import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';

AudienceHeaderPrintClass = class AudienceHeaderPrintClass extends PageHeaderComponent {
  details(){
    let Data = Session.get('ABRdata')
    return (
      <div>
        {this.renderForm('Audience',Data.name)}
      </div>
    )
  }
  // actions(){
  //   return (
  //       <div className="btn-group btn-group-sm" role="group">
  //         <button
  //           id="btnGroupDrop1"
  //           type="button"
  //           className="btn btn-secondary">
  //           Edit Line Item
  //         </button>
  //       </div>
  //   )
  // }
  // optional(){
  //   LineItemData.colors[0] = GraphSecondary;
  //   return (
  //     <div hidden>
  //     {this.renderForm('Spend',"$"+this.props.totalAdSpend)}
  //     {this.renderForm('Flight Dates',"xx/xx/xx - xx/xx/xx")}
  //     </div>
  //   )
  // }

  render(){
    return(
      <div className="page-header">
        <div className="print-bv-report icon-bv color"></div>

        <div className="row">
          <div className="col-md-6">
            {this.renderDetails()}

          </div>
          <div className="col-md-6">
            {this.renderOptional()}

          </div>
        </div>

      </div>
    )
  }
}

AudienceHeaderPrint = createContainer(({ params }) => {
  let Data = Session.get('ABRdata');

  if(!Data) {
    return {
      loaded:false
    }
  }

  return {
    ...Data
  }
}, AudienceHeaderPrintClass);
