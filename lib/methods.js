if (Meteor.isServer) {

  Meteor.methods({
    test:(id)=>{
      console.log('test')
      let segmentUrl="https://ad-management.prod.us-east-1.nexus.bazaarvoice.com:443/v1.0/segment/"+id;
      let reportUrl="https://ad-management.prod.us-east-1.nexus.bazaarvoice.com:443/v1.0/segment/"+id+"/reports/audienceBreakdown";
      // HTTP.call('get', 'https://ad-management.prod.us-east-1.nexus.bazaarvoice.com:443/v1.0/segment/50c5c303-0c59-4038-922a-ba98478777cc/reports/audienceBreakdown', (err, result)=>{
      //   console.log(result.data)
      //
      //   let AudienceDataFormatted = formatAudienceData(result.data, SegmentData);
      //
      //   this.setState({
      //     loaded:true,
      //     ...AudienceDataFormatted
      //   });
      // })



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


    }
  })
}
