AudienceList = class CampaignList extends React.Component {
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
                              <td key={index}><a href="/advertising/audiences/detail">{item[key]}</a></td>
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
      </div>
    </div>
    )
  }
}

let  myTableData = [
  {name: 'Audience Name', overall:"1.397M", BV:"131k", facebook:"234k", mobile:"226k", email:"11k"},
  {name: 'Audience Name', overall:"1.397M", BV:"131k", facebook:"234k", mobile:"226k", email:"11k"},
  {name: 'Audience Name', overall:"1.397M", BV:"131k", facebook:"234k", mobile:"226k", email:"11k"},
  {name: 'Audience Name', overall:"1.397M", BV:"131k", facebook:"234k", mobile:"226k", email:"11k"},
  {name: 'Audience Name', overall:"1.397M", BV:"131k", facebook:"234k", mobile:"226k", email:"11k"},
  {name: 'Audience Name', overall:"1.397M", BV:"131k", facebook:"234k", mobile:"226k", email:"11k"},
  {name: 'Audience Name', overall:"1.397M", BV:"131k", facebook:"234k", mobile:"226k", email:"11k"},
  {name: 'Audience Name', overall:"1.397M", BV:"131k", facebook:"234k", mobile:"226k", email:"11k"},
]
