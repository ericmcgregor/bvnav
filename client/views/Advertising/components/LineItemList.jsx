LineItemList = class LineItemList extends React.Component {
  render() {
    return (
    <div className="container-fluid">

      <div className="row">
        <div className="col-md-12">

          <DataTableHeader />
          <table className="table table-bordered table-striped">
            <thead>
              {
                myTableData.map((item, index)=>{
                  if(index===0) {
                    return (
                      <tr key={index}>
                        {Object.keys(item).map((key, index)=>{
                          return(
                            <th key={index}>{key}</th>
                          )
                        })}
                      </tr>
                    )
                  }
                })
              }
            </thead>
            <tbody>
                {
                  myTableData.map((item, index)=>{
                    return (
                      <tr key={index}>
                        {Object.keys(item).map((key, index)=>{
                          if(index===0) {
                            return(
                              <td key={index}><a href="/advertising/campaigns/detail/line-item/123456">{item[key]}</a></td>
                            )
                          }
                          if(key==='activity') {
                            return(
                              <td style={{width:"200px"}} key={index}>{item[key]}</td>
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
        <div hidden className="col2">
          <div
            className="alert "
            role="alert">

            <p className="lead">
              <strong>
              0  reivew collection campaigns
              </strong>
            </p>
            <p>Learn how you can be better at getting reviews with our review marketing campaign.</p>
            <hr />
            <a href="/rr/collect" className="btn btn-info btn-sm">Start collecting reviews</a>
          </div>

        </div>
      </div>
    </div>
    )
  }
}



let  myData = [
  {name: 'Line Item 1', type:"conversion", status:"In Progress", spend:"$100,000", start:"Jan 21, 2016", end:"Feb 21, 2016"},
  {name: 'Line Item 2', type:"conversion", status:"In Progress", spend:"$100,000", start:"Jan 21, 2016", end:"Feb 21, 2016"},
  {name: 'Line Item 3', type:"non-commerce", status:"In Progress", spend:"$100,000", start:"Jan 21, 2016", end:"Feb 21, 2016"},
  {name: 'Line Item 4', type:"conversion", status:"In Progress", spend:"$100,000", start:"Jan 21, 2016", end:"Feb 21, 2016"},
  {name: 'Line Item 5', type:"conversion", status:"In Progress", spend:"$100,000", start:"Jan 21, 2016", end:"Feb 21, 2016"},
  {name: 'Line Item 6', type:"conversion", status:"In Progress", spend:"$100,000", start:"Jan 21, 2016", end:"Feb 21, 2016"},
  {name: 'Line Item 7', type:"conversion", status:"In Progress", spend:"$100,000", start:"Jan 21, 2016", end:"Feb 21, 2016"},
  {name: 'Line Item 8', type:"conversion", status:"In Progress", spend:"$100,000", start:"Jan 21, 2016", end:"Feb 21, 2016"},
  {name: 'Line Item 9', type:"conversion", status:"In Progress", spend:"$100,000", start:"Jan 21, 2016", end:"Feb 21, 2016"},
  {name: 'Line Item 10', type:"conversion", status:"In Progress", spend:"$100,000", start:"Jan 21, 2016", end:"Feb 21, 2016"},
]
let myTableData = myData.map((item, index)=>{
  let SmallData = Object.create(LineItemData);
  SmallData.height=45;
  SmallData.chartID='graph'+index
  item.activity = <div className="spark"><GraphSpline data={SmallData}/></div>
  return item;
})
