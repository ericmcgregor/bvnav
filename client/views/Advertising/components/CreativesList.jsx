CreativesList = class CreativesList extends React.Component {
  componentDidMount() {
    Holder.run()
  }
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
                          if(key==='img') {
                            return(
                              <td style={{width:"60px"}} key={index}><img src={item[key]} /></td>
                            )
                          }
                          if(key==='name') {
                            return(
                              <td style={{verticalAlign:"middle"}} key={index}>
                                <a href="#"
                                  onClick={()=>{
                                    Meteor.call('modal', <div>edit creative form</div>, {title:"Edit Creative"})
                                  }}>{item[key]}</a>

                              </td>
                            )
                          }
                          if(key==='activity') {
                            return(
                              <td style={{width:"200px"}} key={index}>{item[key]}</td>
                            )
                          }
                          return(
                            <td style={{verticalAlign:"middle"}} key={index}>{item[key]}</td>
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
  {img:"holder.js/50x50", name: 'Creative 1', id:"1234565", impresions:"100", clicks:"89", "ad spend":"", CTR:"", CPC:"", CPA:"", VTR:"", purchases:"", ROAS:""},
  {img:"holder.js/50x50", name: 'Creative 1', id:"1234565", impresions:"100", clicks:"89", "ad spend":"", CTR:"", CPC:"", CPA:"", VTR:"", purchases:"", ROAS:""},
  {img:"holder.js/50x50", name: 'Creative 1', id:"1234565", impresions:"100", clicks:"89", "ad spend":"", CTR:"", CPC:"", CPA:"", VTR:"", purchases:"", ROAS:""},
  {img:"holder.js/50x50", name: 'Creative 1', id:"1234565", impresions:"100", clicks:"89", "ad spend":"", CTR:"", CPC:"", CPA:"", VTR:"", purchases:"", ROAS:""},
  {img:"holder.js/50x50", name: 'Creative 1', id:"1234565", impresions:"100", clicks:"89", "ad spend":"", CTR:"", CPC:"", CPA:"", VTR:"", purchases:"", ROAS:""},
  {img:"holder.js/50x50", name: 'Creative 1', id:"1234565", impresions:"100", clicks:"89", "ad spend":"", CTR:"", CPC:"", CPA:"", VTR:"", purchases:"", ROAS:""},
  {img:"holder.js/50x50", name: 'Creative 1', id:"1234565", impresions:"100", clicks:"89", "ad spend":"", CTR:"", CPC:"", CPA:"", VTR:"", purchases:"", ROAS:""},


]

let myTableData = myData.map((item, index)=>{
  let SmallData = Object.create(LineItemData);
  SmallData.height=45;
  SmallData.chartID='graph'+index
  item.activity = <div className="spark"><GraphSpline data={SmallData}/></div>
  return item;
})
