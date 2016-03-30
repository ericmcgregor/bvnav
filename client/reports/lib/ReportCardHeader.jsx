ReportCardHeader = class ReportCardHeader extends React.Component{
  render() {
    return (
      <h3 className="card-header">
        {this.props.title}
      </h3>
    )
  }
}
