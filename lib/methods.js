if (Meteor.isServer) {

  Meteor.methods({
    GetABRdata:(id)=>{
      let segmentUrl="https://ad-management.prod.us-east-1.nexus.bazaarvoice.com:443/v1.0/segment/"+id;
      let reportUrl="https://ad-management.prod.us-east-1.nexus.bazaarvoice.com:443/v1.0/segment/"+id+"/reports/audienceBreakdown";

      try {
        console.log(segmentUrl)
        var segment = HTTP.call("GET", segmentUrl);
        var report = HTTP.call("GET", reportUrl);
        return {
          report:report.data,
          segment:segment.data
        }
      } catch (e) {
        // Got a network error, time-out or HTTP error in the 400 or 500 range.
        console.log('report: something went terribly wrong...')
        return false;
      }
    },
    GetROIdata:(id)=>{
      let reportUrl="https://ad-management.prod.us-east-1.nexus.bazaarvoice.com:443/v1.0/campaign/"+id+"/reports/roi";

      try {
        console.log(reportUrl)
        var report = HTTP.call("GET", reportUrl);
        console.log('done')
        return {
          report:report.data,
        }
      } catch (e) {
        // Got a network error, time-out or HTTP error in the 400 or 500 range.
        console.log('report: something went terribly wrong...')
        return false;
      }
    }
  })
}
