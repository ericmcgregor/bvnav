
BSModal = class BSModal extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      modal:false,
    }
  }
  componentDidMount(){
    Tracker.autorun(()=> {
      this.setState({
        modal:Session.get('modal'),
      })
    });
  }
  componentDidUpdate(){
    if(this.state.modal){
      $('#myModal').modal().on('hidden.bs.modal', function (e) {
        Session.set({
          modal:false,
        })
      })
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
        <div className="modal-dialog modal-lg" role="document">
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
                {this.props.title}
              </h4>
            </div>
            <div id="modal-body" className="modal-body">
              {this.props.children}
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
BSModal.defaultProps = {
  title:"Modal Title"
}
