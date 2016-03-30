import React from 'react';
ReviewList = class ReviewList extends React.Component {
  render() {
    return (
    <div>

          <DataTableHeader />
          <table className="table table-bordered table-striped">
            <tbody>
                {
                  myTableData.map((item, index)=>{
                    return (
                      <tr key={index}>
                        {Object.keys(item).map((key, index)=>{
                          if(index===0) {
                            return(
                              <td key={index}><a href="/reviews/manage/native/detail">{item[key]}</a></td>
                            )
                          }
                          return(
                            <td key={index}>{item[key]}</td>
                          )
                        })}
                      </tr>
                    )
                  })
                }
            </tbody>
          </table>

    </div>
    )
  }
}


// ReviewList = class ReviewList extends React.Component {
//   render() {
//     return (
//     <div className="container-fluid">
//
//       <div className="row">
//       <div className="col1">
//
//
//           <div className="report-header">
//             <div className="report-details">
//               <h3 className="title">Moderate Reviews From yoursite.com</h3>
//             </div>
//             <div className="report-actions">
//               <div
//                 className="btn-group btn-group-sm"
//                 role="group"
//                 aria-label="Basic example">
//                 <button
//                   type="button"
//                   className="btn btn-secondary">Migrate</button>
//                 <button
//                   type="button"
//                   className="btn btn-secondary">Export</button>
//               </div>
//
//             </div>
//           </div>
//
//           <DataTableHeader />
//           <table className="table table-bordered table-striped">
//             <tbody>
//                 {
//                   myTableData.map((item, index)=>{
//                     return (
//                       <tr key={index}>
//                         {Object.keys(item).map((key, index)=>{
//                           if(index===0) {
//                             return(
//                               <td key={index}><a href="/reviews/manage/native/detail">{item[key]}</a></td>
//                             )
//                           }
//                           return(
//                             <td key={index}>{item[key]}</td>
//                           )
//                         })}
//                       </tr>
//                     )
//                   })
//                 }
//             </tbody>
//           </table>
//       </div>
//
//       <div className="col2">
//
//           <div className="card">
//             <div className="card-header">Moderation Info</div>
//               <div className="card-block">
//                 <p className="lead m-b-0">User: Joe Pollard</p>
//               </div>
//               <table className="table m-b-0">
//                 <tbody>
//                   <tr>
//                     <th>Moderated</th>
//                     <td>300</td>
//                   </tr>
//                   <tr>
//                     <th>Responses</th>
//                     <td>290</td>
//                   </tr>
//                   <tr>
//                     <th>Approved</th>
//                     <td>183</td>
//                   </tr>
//                   <tr>
//                     <th>Rejected</th>
//                     <td>11</td>
//                   </tr>
//                 </tbody>
//               </table>
//           </div>
//
//           <div
//             className="alert "
//             role="alert">
//
//             <p className="lead">
//               <strong>
//               0  reivew collection campaigns
//               </strong>
//             </p>
//             <p>Learn how you can be better at getting reviews with our review marketing campaign.</p>
//             <hr />
//             <a href="/rr/collect" className="btn btn-info btn-sm">Start collecting reviews</a>
//           </div>
//
//       </div>
//       </div>
//     </div>
//     )
//   }
// }

let  myTableData = [
  {
    name: 'charter club striped-crochet trim top',
    category:"tops",
    status:"Pending",
    stars:<div><i className="text-warning fa fa-star"></i><i className="text-warning fa fa-star"></i><i className="text-warning fa fa-star"></i><i className="text-warning fa fa-star"></i></div>
  },
  {
    name: 'charter club striped-crochet trim top',
    category:"tops",
    status:"Pending",
    stars:<div><i className="text-warning fa fa-star"></i><i className="text-warning fa fa-star"></i><i className="text-warning fa fa-star"></i><i className="text-warning fa fa-star"></i></div>
  },
  {
    name: 'charter club striped-crochet trim top',
    category:"tops",
    status:"Pending",
    stars:<div><i className="text-warning fa fa-star"></i><i className="text-warning fa fa-star"></i><i className="text-warning fa fa-star"></i><i className="text-warning fa fa-star"></i></div>
  },
  {
    name: 'charter club striped-crochet trim top',
    category:"tops",
    status:"Pending",
    stars:<div><i className="text-warning fa fa-star"></i><i className="text-warning fa fa-star"></i><i className="text-warning fa fa-star"></i><i className="text-warning fa fa-star"></i></div>
  },
  {
    name: 'charter club striped-crochet trim top',
    category:"tops",
    status:"Pending",
    stars:<div><i className="text-warning fa fa-star"></i><i className="text-warning fa fa-star"></i><i className="text-warning fa fa-star"></i><i className="text-warning fa fa-star"></i></div>
  },
  {
    name: 'charter club striped-crochet trim top',
    category:"tops",
    status:"Pending",
    stars:<div><i className="text-warning fa fa-star"></i><i className="text-warning fa fa-star"></i><i className="text-warning fa fa-star"></i><i className="text-warning fa fa-star"></i></div>
  },
  {
    name: 'charter club striped-crochet trim top',
    category:"tops",
    status:"Pending",
    stars:<div><i className="text-warning fa fa-star"></i><i className="text-warning fa fa-star"></i><i className="text-warning fa fa-star"></i><i className="text-warning fa fa-star"></i></div>
  },
  {
    name: 'charter club striped-crochet trim top',
    category:"tops",
    status:"Pending",
    stars:<div><i className="text-warning fa fa-star"></i><i className="text-warning fa fa-star"></i><i className="text-warning fa fa-star"></i><i className="text-warning fa fa-star"></i></div>
  },
  {
    name: 'charter club striped-crochet trim top',
    category:"tops",
    status:"Pending",
    stars:<div><i className="text-warning fa fa-star"></i><i className="text-warning fa fa-star"></i><i className="text-warning fa fa-star"></i><i className="text-warning fa fa-star"></i></div>
  },
  {
    name: 'charter club striped-crochet trim top',
    category:"tops",
    status:"Pending",
    stars:<div><i className="text-warning fa fa-star"></i><i className="text-warning fa fa-star"></i><i className="text-warning fa fa-star"></i><i className="text-warning fa fa-star"></i></div>
  },
  {
    name: 'charter club striped-crochet trim top',
    category:"tops",
    status:"Pending",
    stars:<div><i className="text-warning fa fa-star"></i><i className="text-warning fa fa-star"></i><i className="text-warning fa fa-star"></i><i className="text-warning fa fa-star"></i></div>
  },
  {
    name: 'charter club striped-crochet trim top',
    category:"tops",
    status:"Pending",
    stars:<div><i className="text-warning fa fa-star"></i><i className="text-warning fa fa-star"></i><i className="text-warning fa fa-star"></i><i className="text-warning fa fa-star"></i></div>
  },
  {
    name: 'charter club striped-crochet trim top',
    category:"tops",
    status:"Pending",
    stars:<div><i className="text-warning fa fa-star"></i><i className="text-warning fa fa-star"></i><i className="text-warning fa fa-star"></i><i className="text-warning fa fa-star"></i></div>
  },


]
