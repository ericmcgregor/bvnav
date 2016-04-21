import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';

AudienceHeaderPrintClass = class AudienceHeaderPrintClass extends PageHeaderComponent {
  details(){
    let Data = Session.get('ABRdata')
    return (
      <div>
        {this.renderForm('Client',this.props.name)}
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
  optional(){
    LineItemData.colors[0] = GraphSecondary;
    return (
      <div>
        {this.renderForm('Date',Session.get('ROIdata').flightdates.substring(0,10))}
      </div>
    )
  }

  render(){
    return(
      <div className="page-header m-b-1">
        <div className="m-b-1">
          <h3 className="lead">
            <strong>Audience Snapshot</strong>
          </h3>
          <hr/>
        </div>
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
