import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';

getABRdata = (id) => {

    Meteor.call('GetABRdata', id, (error, result)=>{
      if(error) {
        console.log(error)
        return;
      }

      let data = formatAudienceData(result.report, result.segment);

      Session.setPersistent({
        ABRid:id,
        ABRdata:data
      });

    });

}

Meteor.startup(function () {
    let id = Session.get('ABRid');
    if(!id) {
      Session.set('ABRid', 'df845635-ead5-4380-a9c0-988a9f709348')
    }
    if(FlowRouter.current().queryParams.abr) {
      Session.setPersistent('ABRid', FlowRouter.current().queryParams.abr)
    }

    Tracker.autorun(() => {
      let idChange = Session.get('ABRid')

      if(idChange && idChange !== id) {
        getABRdata(Session.get('ABRid'));
        id=idChange;
      }
    });

});




formatAudienceData = (AudienceData, SegmentData) => {
  BrandConsideration = {}
  BrandConsideration.categories = Object.keys(AudienceData.brandConsiderationByPercentageOfPeople).map((key, index)=>{
    return key;
  })
  BrandConsideration.notConsidered = BrandConsideration.categories.map((key, index)=>{
    return AudienceData.brandConsiderationByPercentageOfPeople[key].brandNotConsideredPercentage;
  })
  BrandConsideration.considered = BrandConsideration.categories.map((key, index)=>{
    return AudienceData.brandConsiderationByPercentageOfPeople[key].brandConsideredWithOthersPercentage + AudienceData.brandConsiderationByPercentageOfPeople[key].onlyBrandConsideredPercentage;
  })

  AudienceDataFormatted = {
    //SEGMENTDATA
    "id": SegmentData.id,
    "name": SegmentData.name,
    "client": SegmentData.client,
    "updated": SegmentData.updated,
    "category": SegmentData.category,
    "lastAudienceEstimate":{},
    //AudienceData
    "audience": nFormatter(AudienceData.audience),
    "startDate": AudienceData.startDate,
    "updated": AudienceData.updated,
    "location":AudienceData.location,

    "brandConsiderationByPercentageOfPeople":AudienceData.brandConsiderationByPercentageOfPeople,
    "shareOfVoiceByNumberOfPeople":{},
    "shareOfSalesByNumberOfPeople":{},
    "topInterestsByPeople":{},
    "topTier1InterestsByPeople":{},
    "topTier2InterestsByPeople":{},
    "behaviorByDeviceType":{},

    AudienceLocationTable: AudienceData.location.sort((a, b)=>{
      return parseFloat(b.size) - parseFloat(a.size);
    })
    .slice(0, 5)
    .map((item)=>{
      item.displaySize = nFormatter(item.size);  return item;
    }),

    brandConsiderationData:{
      chartID:"brandconsideration",
      height:200,
      columns:{
        considered:BrandConsideration.considered,
        notConsidered:BrandConsideration.notConsidered
      },
      categories: BrandConsideration.categories
    },

    AudienceDevicePageviewPie: {
      height:150,
      chartID:'AudienceDevicePageviewPie',
      columns:{
        Desktop:AudienceData.behaviorByDeviceType["Desktop"].peopleViewed,
        Mobile:AudienceData.behaviorByDeviceType["Mobile/Tablet"].peopleViewed,
      },
      legend: {
        hide: true
      },
    },
    AudienceDevicePurchasePie: {
      height:150,
      chartID:'AudienceDevicePurchasePie',
      columns:{
        Desktop:AudienceData.behaviorByDeviceType["Desktop"].peoplePurchased,
        Mobile:AudienceData.behaviorByDeviceType["Mobile/Tablet"].peoplePurchased,
      },
      legend: {
        hide: true
      },
    },
  }

  //FORMAT THE DATA NUMBERS
  var formatObject = (item)=>{

    var parser = function(item, commas){
      var result = {}
      Object.keys(item).forEach((key, index)=>{
        if(typeof item[key]==='object'){
          result[key] = parser(item[key]);
        } else {
          result[key] = nFormatter(item[key])
        }
      })
      return result;
    }
    return parser(item);
  }

  let keysToFormat = [];
  keysToFormat = [
    "shareOfVoiceByNumberOfPeople",
    "shareOfSalesByNumberOfPeople",
    "topInterestsByPeople",
    "topTier1InterestsByPeople",
    "topTier2InterestsByPeople",
    "behaviorByDeviceType",
  ].forEach((key, index)=>{
      let item = formatObject(AudienceData[key]);
      AudienceDataFormatted[key] = item
  })

  Object.keys(SegmentData["lastAudienceEstimate"]).forEach((key, index)=>{
    let item = addCommas(SegmentData["lastAudienceEstimate"][key]);
    AudienceDataFormatted["lastAudienceEstimate"][key] = item
  })

  return AudienceDataFormatted;

}






// "shareOfVoiceByNumberOfPeople": {
//   "Bosch": 71216,
//   "Toro": 58809,
//   "Milwaukee": 57657,
//   "Dewalt": 49343,
//   "Samsung": 9956
// },
// "shareOfSalesByNumberOfPeople": {
//   "Milwaukee": 1286,
//   "Dewalt": 696,
//   "Bosch": 582,
//   "Ironton": 553,
//   "Samsung": 232
// },
// "topInterestsByPeople": {
//   "Home & garden": 197961,
//   "Outdoor": 80497,
//   "Tools": 74735,
//   "Other major appliances": 24867,
//   "Apparel & accessories": 23635
// },
// "topTier1InterestsByPeople": {
//   "Home & garden": 197961,
//   "Apparel & accessories": 23635,
//   "Automotive": 14273,
//   "Sports": 12863,
//   "Business": 10363
// },
// "topTier2InterestsByPeople": {
//   "Outdoor": 80497,
//   "Tools": 74735,
//   "Other major appliances": 24867,
//   "Dishwashers": 18892,
//   "Refrigerators": 13962
// },
// "behaviorByDeviceType": {
//   "Desktop": {
//     "peopleViewed": 175139,
//     "peoplePurchased": 6799
//   },
//   "Mobile/Tablet": {
//     "peopleViewed": 33422,
//     "peoplePurchased": 560
//   }
// },



// SegmentData["lastAudienceEstimate"]: {
//   "overall": 225462,
//   "network": 20052,
//   "mobile": 12803,
//   "facebook": 13690,
//   "email": 1088
// },
