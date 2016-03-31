import React from 'react';
CreativesList = class CreativesList extends React.Component {
  componentDidMount() {
    Holder.run()
  }
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
                              <td style={{width:"150px"}} key={index}>{item[key]}</td>
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
    )
  }
}

let  myData = [
  {img:"holder.js/50x50", name: 'Creative 1', id:"1234565", ['line item']:"line item link", impresions:"100", clicks:"89", "ad spend":"$12,000", CTR:"0.5%", CPC:"$4.50", CPA:"$8.90", VTR:"0.9%", purchases:"32", ROAS:"$4.85"},
  {img:"holder.js/50x50", name: 'Creative 1', id:"1234565", ['line item']:"line item link", impresions:"100", clicks:"89", "ad spend":"$12,000", CTR:"0.5%", CPC:"$4.50", CPA:"$8.90", VTR:"0.9%", purchases:"32", ROAS:"$4.85"},
  {img:"holder.js/50x50", name: 'Creative 1', id:"1234565", ['line item']:"line item link", impresions:"100", clicks:"89", "ad spend":"$12,000", CTR:"0.5%", CPC:"$4.50", CPA:"$8.90", VTR:"0.9%", purchases:"32", ROAS:"$4.85"},
  {img:"holder.js/50x50", name: 'Creative 1', id:"1234565", ['line item']:"line item link", impresions:"100", clicks:"89", "ad spend":"$12,000", CTR:"0.5%", CPC:"$4.50", CPA:"$8.90", VTR:"0.9%", purchases:"32", ROAS:"$4.85"},
  {img:"holder.js/50x50", name: 'Creative 1', id:"1234565", ['line item']:"line item link", impresions:"100", clicks:"89", "ad spend":"$12,000", CTR:"0.5%", CPC:"$4.50", CPA:"$8.90", VTR:"0.9%", purchases:"32", ROAS:"$4.85"},
  {img:"holder.js/50x50", name: 'Creative 1', id:"1234565", ['line item']:"line item link", impresions:"100", clicks:"89", "ad spend":"$12,000", CTR:"0.5%", CPC:"$4.50", CPA:"$8.90", VTR:"0.9%", purchases:"32", ROAS:"$4.85"},
  {img:"holder.js/50x50", name: 'Creative 1', id:"1234565", ['line item']:"line item link", impresions:"100", clicks:"89", "ad spend":"$12,000", CTR:"0.5%", CPC:"$4.50", CPA:"$8.90", VTR:"0.9%", purchases:"32", ROAS:"$4.85"},
  {img:"holder.js/50x50", name: 'Creative 1', id:"1234565", ['line item']:"line item link", impresions:"100", clicks:"89", "ad spend":"$12,000", CTR:"0.5%", CPC:"$4.50", CPA:"$8.90", VTR:"0.9%", purchases:"32", ROAS:"$4.85"},
]

let myTableData = myData.map((item, index)=>{
  let SmallData = Object.create(LineItemData);
  SmallData.height=45;
  SmallData.chartID='graph'+index
  item.activity = <div className="spark"><GraphSpline data={SmallData}/></div>
  return item;
})
