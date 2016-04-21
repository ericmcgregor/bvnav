import React from 'react';
AudienceShoppingBehavior2 = class AudienceShoppingBehavior2 extends React.Component{
  render(){
    return(
      <div className="card report-card">
        <ReportCardHeader title={"Shopper Insights"} />

          <div  className="card-block">
            <ChartContainer title="Brand: Consideration by Pageviews">
              <GraphStackedBar data={this.props.brandConsiderationData}/>
            </ChartContainer>
          </div>

          <div hidden className="card-block">
            <div className="row align-center">
              <div className="col-xs-8">
                <ChartContainer title="Brand: Consideration by Pageviews">
                  <GraphStackedBar data={this.props.brandConsiderationData}/>
                </ChartContainer>
              </div>
              <div className="col-xs-4">
                <div className="card">
                  <div className="card-header text-xs-center">Have viewed at least 1 time in past 30 days:</div>
                  <div className="card-block">
                      <dl className="text-xs-center m-b-0">
                          <dd className="text-">Mizuno or Under Armour or Nike or Reebok or adidas or New Balance</dd>
                          <dd className="text-"><strong>And</strong></dd>
                          <dd className="text-">Sports but not Golf or Cabela's</dd>
                      </dl>
                  </div>
                </div>
                <div hidden className="card" style={{borderColor:GraphNeutral}}>
                  <div className="card-block">
                        <dl className="text-xs-center m-b-0">
                          <dt>Have not viewed in past 30 days:</dt>
                          <dd className="text-muted">ORION, Burris</dd>
                          <dd className="text-muted">Home & Garden, Apparel & Accessories, Sports, Hunting/Shooting</dd>
                      </dl>
                  </div>
                </div>

              </div>
            </div>

          </div>



          <hr/>

          <div className="card-block">
            <div className="row">
              <div className="col-xs-4">
                <ChartContainer title="Brand: Share of voice">
                  <table className="table table-bordered table-striped">
                    <thead>
                      <tr>
                        <th>Site</th>
                        <th className="text-xs-center">Rank</th>
                      </tr>
                    </thead>
                    <tbody>
                        {
                          Object.keys(this.props.shareOfVoiceByNumberOfPeople).map((key, index)=>{
                            return (
                              <tr key={index}>
                                <td>{key}</td>
                                <td className="text-xs-center">{index+1}</td>
                              </tr>
                            )
                          })
                        }
                    </tbody>
                  </table>
                </ChartContainer>
              </div>
              <div className="col-xs-4">
                <ChartContainer title="Audience: Top IAB Tier 1 Interests">

                  <table className="table table-bordered table-striped">
                    <thead>
                      <tr>
                        <th>Interest</th>
                        <th className="text-xs-center">Rank</th>
                      </tr>
                    </thead>
                    <tbody>
                        {
                          Object.keys(this.props.topTier1InterestsByPeople).map((key, index)=>{
                            return (
                              <tr key={index}>
                                <td>{key}</td>
                                <td className="text-xs-center">{index+1}</td>
                              </tr>
                            )
                          })
                        }
                    </tbody>
                  </table>

                </ChartContainer>
              </div>

              <div className="col-xs-4">
                <ChartContainer title="Audience: Top IAB Tier 2 Interests">
                  <table className="table table-bordered table-striped">
                    <thead>
                      <tr>
                        <th>Interest</th>
                        <th className="text-xs-center">Rank</th>
                      </tr>
                    </thead>
                    <tbody>
                        {
                          Object.keys(this.props.topTier2InterestsByPeople).map((key, index)=>{
                            return (
                              <tr key={index}>
                                <td>{key}</td>
                                <td className="text-xs-center">{index+1}</td>
                              </tr>
                            )
                          })
                        }
                    </tbody>
                  </table>
                </ChartContainer>
              </div>

            </div>


          </div>

        <div className="card-block">
          <div className="row">
            <div className="col-xs-4">
              <div className="row ">
                <div className="col-xs-12">
                  <ChartContainer  icon="fa-credit-card fa-2x" title="Purchase Behavior by Device">
                    <div className="row">
                      <div className="col-xs-5">
                          <GraphPie data={this.props.AudienceDevicePurchasePie}/>
                      </div>
                      <div className="col-xs-7 p-t-2">
                            <p><span style={{display:'inline-block', color:GraphPrimary, width:"60px"}} className="text-xs-center"><i className="fa fa-2x fa-desktop"></i></span> {this.props.behaviorByDeviceType["Desktop"].peoplePurchased}</p>
                            <p><span style={{display:'inline-block', color:GraphSecondary, width:"60px"}} className="text-xs-center"><i className="fa fa-2x fa-mobile"></i></span> {this.props.behaviorByDeviceType["Mobile/Tablet"].peoplePurchased}</p>
                      </div>
                    </div>
                  </ChartContainer>
                </div>
                <div className="col-xs-12">
                  <ChartContainer icon="fa-eye fa-2x"  title="PageView Behavior by Device">
                    <div className="row">
                      <div className="col-xs-5">
                        <GraphPie data={this.props.AudienceDevicePageviewPie}/>
                      </div>
                      <div className="col-xs-7 p-t-2">
                          <p><span style={{display:'inline-block', color:GraphPrimary, width:"60px"}} className="text-xs-center"><i className="fa fa-2x fa-desktop"></i></span> {this.props.behaviorByDeviceType["Desktop"].peopleViewed}</p>
                          <p><span style={{display:'inline-block', color:GraphSecondary, width:"60px"}} className="text-xs-center"><i className="fa fa-2x fa-mobile"></i></span> {this.props.behaviorByDeviceType["Mobile/Tablet"].peopleViewed}</p>
                      </div>
                    </div>
                  </ChartContainer>
                </div>
              </div>
            </div>
            <div className="col-xs-8">
              <ReportLocationMap {...this.props}/>
            </div>
          </div>

        </div>

      </div>
    )
  }
}



ReportLocationMap = class ReportLocationMap extends React.Component {
  render() {
    return (
      <ChartContainer title="Audience Location">
      <div className="row">
        <div className="col-md-8">
            <LocationMap {...this.props} />
        </div>
        <div className="col-md-4">
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th>City</th>
                <th className="text-xs-center">Size</th>
              </tr>
            </thead>
            <tbody>
                {
                  this.props.AudienceLocationTable.map((item, index)=>{
                    return (
                      <tr key={index}>
                        <td>{item.name.split(',')[0]}</td>
                        <td className="text-xs-center">{item.displaySize}</td>
                      </tr>
                    )
                  })
                }
            </tbody>
          </table>
        </div>
      </div>
      </ChartContainer>

    )
  }
}



TopProductsPurchasedTable = class TopProductsPurchasedTable extends React.Component {
  render() {
    return (
      <ChartContainer title="Top Products Purchased">

        <table className="table table-bordered table-striped">
          <thead>
            {
              this.props.topProductsPurchased.map((item, index)=>{
                if(index===0) {
                  return (
                    <tr key={index}>
                      {Object.keys(item).map((key, index)=>{
                        if(key=="imageUrl" || key=="pageUrl") {
                          return;
                        }
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
                this.props.topProductsPurchased.map((item, index)=>{
                  return (
                    <tr key={index}>
                      {Object.keys(item).map((key, index)=>{
                        if(key=="imageUrl" || key=="pageUrl") {
                          return;
                        }

                        if(key=="name") {
                          return(
                            <td key={index}><a href={item.pageUrl}>{item[key]}</a></td>
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
      </ChartContainer>

    )
  }
}
