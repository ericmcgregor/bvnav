LineItemListHeader = class LineItemListHeader extends PageHeaderComponent {
  details(){
    return (
      <div></div>
    )
  }
  actions(){
    return (
      <div className="btn-group btn-group-sm" role="group">
        <button
          className="btn btn-success btn-sm"
          onClick={()=>{
            Meteor.call('modal', <FormComponent />, {title:"New Line Item"})
          }}>New Line Item</button>

      </div>
    )
  }

}

FormComponent = class FormComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      noncom:false
    }
    this.onConversionChanged = this.onConversionChanged.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  onConversionChanged(value, e) {
    let noncom = this.state.noncom;
    noncom = !noncom;

    if(value ===false) {
      noncom=false;
    }
    this.setState({
      noncom:noncom
    });
  }

  handleChange(e) {
    return e.target.value;
  }

  renderNonCom() {
    return (
      <div>
      <fieldset className="form-group">
        <label>
          Non-Commerce event type
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="e.g. Download Cupon or Click through url" />
        <small className="text-muted">
          Add a title for the event you are tracking.
        </small>
      </fieldset>

      <fieldset className="form-group">
        <label>
          Non-Commerce event description
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="e.g. Track when a user signs up for our trial offer" />
        <small className="text-muted">
          Add a description of the event and it's success criteria.
        </small>
      </fieldset>
      </div>
    )
  }
  render() {
    return (
        <form>

          <fieldset className="form-group">
            <label>
              Campaign Name
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. Black Friday Campaign" />
            <small className="text-muted">
              The Campaign name should match the I/O name.  For Campaigns with multiple versions use a "_" at the end to name the version.
              Example: "finishline-1st-party_hoodies"
            </small>
          </fieldset>


          <fieldset className="form-group">
            <label>
              Advertiser
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Search for a client" />
            <small className="text-muted">
              The advertiser name should match the name used in the DFP line item.
            </small>
          </fieldset>

          <fieldset className="form-group">
            <label>
              Measure Conversion
            </label>
          <div className="radio">
            <label>
              <input
                type="radio"
                name="optionsRadios"
                id="optionsRadios1"
                defaultValue="option1"
                defaultChecked
                onChange={this.onConversionChanged.bind(this, false)}
                />
              For Brands: Across entire BV network.
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                name="optionsRadios"
                id="optionsRadios2"
                defaultValue="option2"
                onChange={this.onConversionChanged.bind(this, false)} />
              For Retailers: Only on this Advertisers retail site.
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                name="optionsRadios"
                id="optionsRadios2"
                defaultValue={false}
                checked={this.state.noncom === true}
                onChange={this.onConversionChanged}/>
                Non-Commerce conversion event.
            </label>
          </div>
          </fieldset>

          {this.state.noncom ? this.renderNonCom() : null}

          <fieldset className="form-group">
            <label>
              Ad Spend
            </label>
            <div className="form-group">
              <div className="input-group">
                <div className="input-group-addon">$</div>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputAmount"
                  placeholder="e.g. 15,000" />
              </div>
            </div>
            <small className="text-muted">
              This is the target spend for the campaign and not the final amount spent.
            </small>
          </fieldset>


          <fieldset className="form-group">
            <label>
              Campaign ID(s)
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Add a tag?" />
            <small className="text-muted">
              These should correspond the to the DFP line item ID.
            </small>
          </fieldset>


          <fieldset className="form-group">
            <label>
              Campaign Dates
            </label>
          </fieldset>


          <fieldset className="form-group">
            <label>
              ROBO Multiplier
            </label>
            <input
              type="text"
              className="form-control"
              placeholder=""
              onChange={this.handleChange}
              value="1" />
            <small className="text-muted">
              Find ROBO Multiplier in the
              <a href="https://dataportal.bazaarvoice.com/socialanalytics/impact-reports/benchmarks/" target="_blank">
                Reading Reviews and ROBO Multiplier Report  from Social Analytics
              </a>
            </small>
          </fieldset>


          <fieldset className="form-group">
            <label>
              Post Campaign Attribution
            </label>
            <input
              type="text"
              className="form-control"
              placeholder=""
              onChange={this.handleChange}
              value="30" />
            <small className="text-muted">
            </small>
          </fieldset>


          <fieldset className="form-group">
            <label>
              Total Estimated Impressions
            </label>
            <input
              type="text"
              className="form-control"
              placeholder=""
              onChange={this.handleChange}
              value="1" />
            <small className="text-muted">
            </small>
          </fieldset>


          <fieldset className="form-group">
            <label>
              First Party Discrepancy Ratio
            </label>
            <input
              type="text"
              className="form-control"
              placeholder=""
              onChange={this.handleChange}
              value="1" />
            <small className="text-muted">
            </small>
          </fieldset>

            {
              //<a onClick={this.props.handleSave} href="#" className="btn btn-primary">Save</a>
              //<a onClick={this.props.handleCancel} href="#" className="btn btn-secondary">Cancel</a>
            }
          </form>
    );
  }
}
FormComponent.defaultProps = {
  handleSave:()=>{
    FlowRouter.go('/Advertising/Campaigns/detail')
  },
  handleCancel:()=>{
    FlowRouter.go('/Advertising/Campaigns')
  }
}
