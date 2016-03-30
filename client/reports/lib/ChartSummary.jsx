ChartSummary = class ChartSummary extends React.Component{

  render() {
    return (
        <div className="chart-summary-row">
          <div className="summary-chart">
            <LineChart data={this.props.data}/>
          </div>
          <div className="summary-detail">
            <div className="summary-detail-item">
              <h5>{this.props.data.totalType}:</h5>
              <h5><strong>{this.props.data.total}</strong></h5>
            </div>
            <div className="summary-detail-item">
              <h5>{this.props.data.rateType}:</h5>
              <h5><strong>{this.props.data.rate}</strong></h5>
            </div>
          </div>
        </div>
    );
  }

}

ChartSummaryColumn = class ChartSummaryColumn extends React.Component{

  render() {
    return (
        <div className="chart-summary-column">

          <div className="summary-detail">
            <div className="summary-detail-item">
              <h5>{this.props.data.totalType}: <strong>{this.props.data.total}</strong></h5>
            </div>
            <div className="summary-detail-item">
              <h5>{this.props.data.rateType}: <strong>{this.props.data.rate}</strong></h5>
            </div>
          </div>

          <div className="summary-chart">
            <ChartContainer title={this.props.title}>
              <GraphSpline data={this.props.data}/>
            </ChartContainer>
          </div>
        </div>
    );
  }

}
