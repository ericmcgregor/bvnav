import React from 'react';
TabContent = React.createClass({
  getInitialState(){
    return ({
    active:null
    })
  },
  getDefaultProps(){
    return {
      primary:[
        {name:"Active"},
        {name:"Completed"},
        {name:"Reports"},
      ],
      content:[
        <div></div>,
        <div></div>,
        <div></div>
      ]
    }
  },
  componentDidMount(){
    $('a[data-toggle="tab"]').on('shown.bs.tab', (e)=> {
      this.setState({active:$(e.target).attr('href')})
    })
    $(()=>{
      $('.nav-tabs a:first').tab('show')
    })

  },

  componentDidUpdate(){
    $(()=>{
      $('.nav-tabs a[href='+this.state.active+']').tab('show')
    })
  },
  renderContent(index){

    if(!this.state.active) return;
    let i = this.state.active.split('-')[1];
    if (index.toString() !== i) return;
    return this.props.content[index];
  },
  render: function() {
    return (
        <div className="tab-content">
          {this.props.primary.map((item, index)=>{
            // active = index>0 ? null : 'active';
            var active = index==="tab-"+index ? 'active' : null;
            return (
                <div key={index}
                  className={"tab-pane p-x-1 "+active}
                  id={"tab-"+index}
                  role="tabpanel">
                    {this.renderContent.bind(this, index)()}
                </div>
            )
          })}
        </div>
    );
  }

});
