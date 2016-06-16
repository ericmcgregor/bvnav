import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';

RecommendationsHeaderPrintClass = class RecommendationsHeaderPrintClass extends PageHeaderComponent {
  details(){
    return (
      <div>
        {this.renderForm('Client',"QVC")}
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
    let date1 = this.props.startTime.split("T")[0];
    // .substring(5)
    console.log(date1.slice(0, 4))
    return (
      <div>
      </div>
    )
  }


  render(){
    return(
      <div className="page-header m-b-1">
        <div className="m-b-1">
          <h3 className="lead">
            <strong>Recommendations Report</strong>
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

RecommendationsHeaderPrint = createContainer(({ params }) => {
  let Data = Session.get('ROIdata');

  if(!Data) {
    return {
      loaded:false
    }
  }

  let fakeData = {};
  if(FlowRouter.current().queryParams.hvt) {
    fakeData = {
      "name": "Honda_Find_Dealership_Event_Campaign",
      "client": 'Honda',
    }
  }


  return {
    ...Data,
    ...fakeData
  }
}, RecommendationsHeaderPrintClass);
