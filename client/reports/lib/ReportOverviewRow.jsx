ReportOverviewRow = class ReportOverviewRow extends React.Component {
  render(){
    return(
      <div className="report-overview-row">
        {
          this.props.data.map((item, index)=>{
            return (
              <div key={index} className={"overview-cell "+item.className}>
                <p className={"block-number"}>{item.num} {item.icon ? <i className={"fa "+item.icon}></i> : null} </p>
                {item.name ? <p className={"block-name"}>{item.name}</p> : null}
                {item.description ? <p className={"block-description"}>{item.description}</p> : null}
              </div>
            )
          })
        }
      </div>
    )
  }

}
ReportOverviewRow.defaultProps = {
  data:[]
}
