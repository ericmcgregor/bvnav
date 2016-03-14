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
                              <td key={index}><a href="/advertising/campaigns/detail">{item[key]}</a></td>
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
  {name: 'Macy’s Columbus Day Promo', status:"In Progress", spend:"$100,000", start:"Jan 21, 2016", end:"Feb 21, 2016"},
  {name: 'LG HA AO WM 2015', status:"In Progress", spend:"$100,000", start:"Jan 21, 2016", end:"Feb 21, 2016"},
  {name: 'Finish Line Holiday Test 2015 3rd Party Data', status:"In Progress", spend:"$100,000", start:"Jan 21, 2016", end:"Feb 21, 2016"},
  {name: 'Linksys Post Holiday Campaign (updated)', status:"In Progress", spend:"$100,000", start:"Jan 21, 2016", end:"Feb 21, 2016"},
  {name: 'Finish Line Holiday Test 2015 1st Party All Products', status:"In Progress", spend:"$100,000", start:"Jan 21, 2016", end:"Feb 21, 2016"},
  {name: 'Macy’s Columbus Day Promo', status:"In Progress", spend:"$100,000", start:"Jan 21, 2016", end:"Feb 21, 2016"},
  {name: 'LG HA AO WM 2015', status:"In Progress", spend:"$100,000", start:"Jan 21, 2016", end:"Feb 21, 2016"},
  {name: 'Finish Line Holiday Test 2015 3rd Party Data', status:"In Progress", spend:"$100,000", start:"Jan 21, 2016", end:"Feb 21, 2016"},
  {name: 'Linksys Post Holiday Campaign (updated)', status:"In Progress", spend:"$100,000", start:"Jan 21, 2016", end:"Feb 21, 2016"},
  {name: 'Finish Line Holiday Test 2015 1st Party All Products', status:"In Progress", spend:"$100,000", start:"Jan 21, 2016", end:"Feb 21, 2016"},
]
