NonCommerceRoi = class NonCommerceRoi extends React.Component{
  additionalFields() {
    return (
      <div>
        <small className="text-muted m-t-1">* A conversion is a completed signup after clicking on or viewing an ad impression.</small>
      </div>
    )
  }
  render() {
    return (
      <div>
        <NonCommercePerformance {...this.props}  />
      </div>
    );
  }
}
NonCommerceRoi.defaultProps = {
  performanceOverview:[
    {name:'Impressions', num:"3,112,915", className:"secondary"},
    // {name:'Views', num:"38,254",           className:"secondary"},
    {name:'Clicks', num:"5,000",           className:"secondary"},
    {name:'eCPM', num:"$3.83",            className:"secondary"},
    {name:'eCPC', num:"$2.00",           className:"secondary"},
    {name:'Spend', num:"$10,000",       className:"divider-left"},
    {name:'Conversions', num:"598",       className:""},
    {name:'cost per conversion', num:"$16.72",       className:""},
  ],
  DailyCampaignConversions:{
    title:"Daily Campaign Non-Commerce Conversions",
    height:180,
    chartID:"noncomconversion",
    dates: ['2013-01-01', '2013-01-02', '2013-01-03', '2013-01-04', '2013-01-05', '2013-01-06'],
    columns: [['ROAS', 65, 59, 80, 81, 56, 35, 50]],
    colors:[GraphPrimary]
  },
  DailyClickThrough:{
    title:"Daily Click Through",
    height:100,
    chartID:"noncomCTR",
    dates: ['2013-01-01', '2013-01-02', '2013-01-03', '2013-01-04', '2013-01-05', '2013-01-06'],
    columns: [['Click Through', 65, 59, 80, 81, 56, 55, 70]],
    colors:[GraphSecondary],
    totalType:"Click Throughs",
    total:"683",
    rateType:"CTR",
    rate:".02%",
  },
  DailyViewThrough:{
    title:"Daily View Through",
    height:100,
    chartID:"noncomVTR",
    dates: ['2013-01-01', '2013-01-02', '2013-01-03', '2013-01-04', '2013-01-05', '2013-01-06'],
    columns: [['View Through', 75, 59, 65, 81, 66, 75, 60]],
    colors:[GraphSecondary],
    totalType:"View Throughs",
    total:"8,021",
    rateType:"VTR",
    rate:".26%",
  },
}











var dataSingle = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
        {
            label: "My First dataset",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [65, 59, 80, 81, 56, 55, 40]
        }
    ]
};

var dataVTR = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
        {
            label: "My First dataset",
            // fillColor: "rgba(255,105,0,0.05)",
            // strokeColor: "#E6B18C",
            // pointColor: "#E6B18C",
            // pointStrokeColor: "#fff",
            // pointHighlightFill: "#fff",
            // pointHighlightStroke: "rgba(220,220,220,1)",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [75, 59, 65, 81, 66, 75, 60]
        }
    ]
};
var dataCTR = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
        {
            label: "My First dataset",
            // fillColor: "rgba(133,255,0,0.05)",
            // strokeColor: "#BCCAAB",
            // pointColor: "#BCCAAB",
            // pointStrokeColor: "#fff",
            // pointHighlightFill: "#fff",
            // pointHighlightStroke: "rgba(220,220,220,1)",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [65, 59, 80, 81, 56, 55, 70]
        }
    ]
};
