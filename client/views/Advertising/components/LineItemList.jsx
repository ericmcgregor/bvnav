LineItemList = class LineItemList extends React.Component {
  render() {
    return (
    <div className="container-fluid">

      <div className="row">
        <div className="col-md-12">

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
                              <td key={index}><a href="/advertising/campaigns/detail/line-item">{item[key]}</a></td>
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

let  myTableData = [
  {name: 'Campaign Line Item 1', status:"In Progress", spend:"$100,000", start:"Jan 21, 2016", end:"Feb 21, 2016"},
  {name: 'Campaign Line Item 2', status:"In Progress", spend:"$100,000", start:"Jan 21, 2016", end:"Feb 21, 2016"},
  {name: 'Campaign Line Item 3', status:"In Progress", spend:"$100,000", start:"Jan 21, 2016", end:"Feb 21, 2016"},
  {name: 'Campaign Line Item 4', status:"In Progress", spend:"$100,000", start:"Jan 21, 2016", end:"Feb 21, 2016"},
  {name: 'Campaign Line Item 5', status:"In Progress", spend:"$100,000", start:"Jan 21, 2016", end:"Feb 21, 2016"},
  {name: 'Campaign Line Item 6', status:"In Progress", spend:"$100,000", start:"Jan 21, 2016", end:"Feb 21, 2016"},
  {name: 'Campaign Line Item 7', status:"In Progress", spend:"$100,000", start:"Jan 21, 2016", end:"Feb 21, 2016"},
  {name: 'Campaign Line Item 8', status:"In Progress", spend:"$100,000", start:"Jan 21, 2016", end:"Feb 21, 2016"},
  {name: 'Campaign Line Item 9', status:"In Progress", spend:"$100,000", start:"Jan 21, 2016", end:"Feb 21, 2016"},
  {name: 'Campaign Line Item 10', status:"In Progress", spend:"$100,000", start:"Jan 21, 2016", end:"Feb 21, 2016"},
]
