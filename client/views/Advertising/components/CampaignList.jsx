CampaignList = class CampaignList extends React.Component {
  render() {
    return (
    <div className="">
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
    )
  }
}

let  myTableData = [
  {name: 'Macy’s Black Friday Campaign', client:"Macy's", items:"12", spend:"$100,000", start:"Jan 21, 2016", end:"Feb 21, 2016"},
  {name: 'Client Campaign 2', client:"Client", items:"12", spend:"$100,000", start:"Jan 21, 2016", end:"Feb 21, 2016"},
  {name: 'Client Campaign 3', client:"Client", items:"12", spend:"$100,000", start:"Jan 21, 2016", end:"Feb 21, 2016"},
  {name: 'Client Campaign 4', client:"Client", items:"12", spend:"$100,000", start:"Jan 21, 2016", end:"Feb 21, 2016"},
  {name: 'Client Campaign 5', client:"Client", items:"12", spend:"$100,000", start:"Jan 21, 2016", end:"Feb 21, 2016"},
  {name: 'Client Campaign 6', client:"Client", items:"12", spend:"$100,000", start:"Jan 21, 2016", end:"Feb 21, 2016"},
  {name: 'Client Campaign 7', client:"Client", items:"12", spend:"$100,000", start:"Jan 21, 2016", end:"Feb 21, 2016"},

]
