RRcollect = class RRmanagea extends React.Component {
  render() {
    return (
      <div id="portal_container">

        <GlobalNav />

        <div id="application_container">

          <ApplicationHeader title="Ratings & Reviews: Collect Reviews"/>


          <div id="task_container">
            <div id="task_content">

              <div className="p-a-1">
              <div className="report-header">
                <div className="report-details">
                </div>
                <div className="report-actions">

                </div>
              </div>
              </div>

              <TabbedNav>
                <TabNav {...nav} />
                <TabContent {...nav} />
              </TabbedNav>

            </div>
          </div>
        </div>

        <BSModal />

      </div>
    )
  }
}

BSModal = class BSModal extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      modal:false,
      modalContent:null
    }
  }
  componentDidMount(){
    Tracker.autorun(()=> {
      console.log(Session.get('modalContent'))
      this.setState({
        modal:Session.get('modal'),
        modalContent:Session.get('modalContent')
      })
    });
  }
  componentDidUpdate(){

    if(this.state.modal){
      $('#myModal').modal().on('hidden.bs.modal', function (e) {
        Session.set({
          modal:false,
          modalContent:null
        })
      })
    }
  }
  renderContent(){
    console.log(this.state.modalContent)
    if(this.state.modalContent) {
      console.log(ReviewList)
      return <ReviewList />
    }
  }
  renderModal(){
    return (
      <div
        className="modal fade"
        id="myModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="myModalLabel"
        aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
              <h4 className="modal-title" id="myModalLabel">
                Modal title
              </h4>
            </div>
            <div className="modal-body">
              {this.renderContent()}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
  render() {
    return (
      this.state.modal ? this.renderModal() : null
    )
  }
}

let HeaderProps = {
  title: "",
  flightdates: "",
  actions:{
    export: false,
    sync:false,
    before:()=>{
      return (
        <a href="/Advertising/Campaigns/new" className="btn btn-success">New Campaign</a>
      )
    },
    after:()=>{}
  }
}

//<ReviewList />
let nav = {
  primary:[
    {name:"Campaigns"},
    {name:"Manage Customers"},
  ],
  secondary:[],
  content:[
    <div>
      <div className="jumbotron text-xs-center">
        <h4 className="display-5">You currently do not have any review collection campaigns</h4>
        <p className="lead">That's ok, we can help!</p>
          <button
            type="button"
            className="btn btn-success btn-lg"
            onClick={()=>{
              Meteor.call('modal', <ReviewList />)
            }}>
            Create Campaign</button>
      </div>
      <div hidden className="p-a-1">
      <div className="report-header">
        <div className="report-details">
        </div>
        <div className="report-actions">
          <div
            className="btn-group btn-group-sm"
            role="group"
            aria-label="Basic example">
            <button
              type="button"
              className="btn btn-success"
              data-toggle="modal" data-target="#myModal" >
              test Create Campaign</button>
          </div>

        </div>
      </div>
      </div>
    </div>
  ]
}
