CampaignDetailHeader = class CampaignDetailHeader extends PageHeaderComponent {
  details(){
    return (
      <div>
        {this.renderForm('Campaign',"Macy's Black Firday")}
        {this.renderForm('Client',"Macy's")}
        {this.renderForm('Flight Dates',"xx/xx/xx - xx/xx/xx")}
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
    )
  }
  actions(){
    return (
        <div className="btn-group btn-group-sm" role="group">
          <button
            id="btnGroupDrop1"
            type="button"
            className="btn btn-secondary">
            Edit Campaign
          </button>
        </div>
    )
  }
  // optional(){
  //   LineItemData.colors[0] = GraphPrimary;
  //   <div className="graph-container">
  //     <h5 className="heading">campaign performance</h5>
  //     <GraphSpline data={CampaignData} />
  //   </div>
  //   return (
  //
  //   )
  // }
}

// CampaignDetailHeader = class CampaignDetailHeader extends React.Component {
//   render() {
//     return (
//       <div className="report-header">
//         <div className="report-details">
//           <div className="form-group row">
//             <label className="col-sm-3 form-control-label">Campaign:</label>
//             <div className="col-sm-9">
//               <p className="form-control-static">Macy's Black Firday</p>
//             </div>
//           </div>
//
//           <div className="form-group row">
//             <label className="col-sm-3 form-control-label">Client:</label>
//             <div className="col-sm-9">
//               <p className="form-control-static">Macy's</p>
//             </div>
//           </div>
//
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
//                     Active
//                   </button>
//                   <div
//                     className="dropdown-menu dropdown-menu-right"
//                     aria-labelledby="btnGroupDrop1">
//                     <a className="dropdown-item" href="#">
//                       Complete
//                     </a>
//                   </div>
//                 </div>
//             </div>
//           </div>
//
//         </div>
//
//         <div className=" m-r-2" style={{minWidth:"800px", flex:"1 0 1px"}}>
//           <GraphSpline data={LineItemData}/>
//         </div>
//
//         <div className="report-actions">
//           <div className="btn-group btn-group-sm" role="group">
//             <button
//               id="btnGroupDrop1"
//               type="button"
//               className="btn btn-secondary dropdown-toggle"
//               data-toggle="dropdown"
//               aria-haspopup="true"
//               aria-expanded="false">
//               Export Campaign
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
