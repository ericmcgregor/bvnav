import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';

LineItemDetailHeaderClass = class LineItemDetailHeader extends PageHeaderComponent {
  details(){
    return (
      <div>
        {this.renderForm('Client',this.props.client)}
        {this.renderForm('Campaign',"Campaign Name")}
        {this.renderForm('Segment',this.props.name)}
        {
          FlowRouter.current().queryParams.hvt ? this.renderForm('Type',"HVT Conversion") : null
        }
        <div hidden>
        {this.renderForm('Status',<div className="btn-group btn-group-sm" role="group">
                          <button
                            id="btnGroupDrop1"
                            type="button"
                            className="btn btn-secondary dropdown-toggle"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false">
                            Active
                          </button>
                          <div
                            className="dropdown-menu dropdown-menu-right"
                            aria-labelledby="btnGroupDrop1">
                            <a className="dropdown-item" href="#">
                              Complete
                            </a>
                          </div>
                        </div>)}
          </div>
      </div>
    )
  }
  actions(){
    return (
        <div className="btn-group btn-group-sm" role="group">
          <button
            id="btnGroupDrop1"
            type="button"
            className="btn btn-secondary">
            Edit Line Item
          </button>
        </div>
    )
  }
  optional(){
    LineItemData.colors[0] = GraphSecondary;
    let date1 = this.props.startTime.split("T")[0].substring(5);
    console.log(date1)
    return (
      <div>
      {this.renderForm('Spend',"$"+this.props.totalAdSpend)}
      {this.renderForm('Flight Dates',this.props.startTime.split("T")[0].substring(5)+" | "+this.props.endTime.split("T")[0].substring(5))}
      </div>
    )
  }
}

LineItemDetailHeader = createContainer(({ params }) => {
  let Data = Session.get('ROIdata');

  if(!Data) {
    return {
      loaded:false
    }
  }

  return {
    ...Data
  }
}, LineItemDetailHeaderClass);


// LineItemDetailHeader = class LineItemDetailHeader extends React.Component {
//   render() {
//     return (
//       <div className="report-header">
//         <div className="report-details " style={{minWidth:"400px", flex:"0 1 400px", width:'400px'}}>
//
//           <div className="form-group row">
//             <label className="col-sm-3 form-control-label">Line Item:</label>
//             <div className="col-sm-9">
//               <p className="form-control-static">Campaign Line Item 1</p>
//             </div>
//           </div>
//
//           <div className="form-group row">
//             <label className="col-sm-3 form-control-label">Campaign:</label>
//             <div className="col-sm-9">
//               <p className="form-control-static">Macy's Black Firday</p>
//             </div>
//           </div>
//
//           <div className="form-group row">
//             <label className="col-sm-3 form-control-label">Flight Dates:</label>
//             <div className="col-sm-9">
//               <p className="form-control-static">xx/xx/xx - xx/xx/xx</p>
//             </div>
//           </div>
//
//           <div className="form-group row">
//             <label className="col-sm-3 form-control-label">Status:</label>
//             <div className="col-sm-9">
//                 <div className="btn-group btn-group-sm" role="group">
//                   <button
//                     id="btnGroupDrop1"
//                     type="button"
//                     className="btn btn-secondary dropdown-toggle"
//                     data-toggle="dropdown"
//                     aria-haspopup="true"
//                     aria-expanded="false">
//                     Pending
//                   </button>
//                   <div
//                     className="dropdown-menu dropdown-menu-right"
//                     aria-labelledby="btnGroupDrop1">
//                     <a className="dropdown-item" href="#">
//                       Active
//                     </a>
//                     <a className="dropdown-item" href="#">
//                       Complete
//                     </a>
//                   </div>
//                 </div>
//             </div>
//           </div>
//
//         </div>
//         <div className=" m-r-2" style={{minWidth:"600px", flex:"1 0 1px"}}>
//           <GraphSpline data={LineItemData}/>
//         </div>
//         <div className="report-actions">
//           <div className="btn-group btn-group-sm" role="group">
//             <button
//               id="btnGroupDrop1"
//               type="button"
//               className="btn btn-secondary dropdown-toggle"
//               data-toggle="dropdown"
//               aria-haspopup="true"
//               aria-expanded="false">
//               Export
//             </button>
//             <div
//               className="dropdown-menu dropdown-menu-right"
//               aria-labelledby="btnGroupDrop1">
//               <a className="dropdown-item" href="#">
//                 PDF
//               </a>
//               <a className="dropdown-item" href="#">
//                 Excel
//               </a>
//             </div>
//           </div>
//
//         </div>
//       </div>
//
//     )
//   }
// }
