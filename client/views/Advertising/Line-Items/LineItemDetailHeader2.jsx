import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';

LineItemDetailHeaderClass2 = class LineItemDetailHeaderClass2 extends PageHeaderComponent {
  details(){
    let Data = Session.get('ABRdata')
    return (
      <div style={{minWidth:"70%!important"}}>
        {this.renderForm('Audience Snapshot',Data.name)}

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
    return (
      <div hidden>
      {this.renderForm('Spend',"$"+this.props.totalAdSpend)}
      {this.renderForm('Flight Dates',"xx/xx/xx - xx/xx/xx")}
      </div>
    )
  }
}

LineItemDetailHeader2 = createContainer(({ params }) => {
  let Data = Session.get('ROIdata');

  if(!Data) {
    return {
      loaded:false
    }
  }

  return {
    ...Data
  }
}, LineItemDetailHeaderClass2);


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
