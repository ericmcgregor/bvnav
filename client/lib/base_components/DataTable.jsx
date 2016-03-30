// // var Table = FixedDataTable.Table;
// // var Column = FixedDataTable.Column;
// // var Cell = FixedDataTable.Cell;
//
// DataTable = React.createClass({
//   getDefaultProps:function(){
//     return {
//       link:"/detail",
//       myTableData: [
//         {name: 'Macy’s Columbus Day Promo', status:"In Progress", spend:"$100,000", start:"Jan 21, 2016", end:"Feb 21, 2016"},
//         {name: 'LG HA AO WM 2015', status:"In Progress", spend:"$100,000", start:"Jan 21, 2016", end:"Feb 21, 2016"},
//         {name: 'Finish Line Holiday Test 2015 3rd Party Data', status:"In Progress", spend:"$100,000", start:"Jan 21, 2016", end:"Feb 21, 2016"},
//         {name: 'Linksys Post Holiday Campaign (updated)', status:"In Progress", spend:"$100,000", start:"Jan 21, 2016", end:"Feb 21, 2016"},
//         {name: 'Finish Line Holiday Test 2015 1st Party All Products', status:"In Progress", spend:"$100,000", start:"Jan 21, 2016", end:"Feb 21, 2016"},
//       ],
//       width:null,
//       height:null
//     }
//   },
//   getInitialState:function(){
//     return {
//       width:null,
//       height:null
//     }
//   },
//   componentDidMount:function(){
//     this._handleResize();
//     window.addEventListener('resize', this._handleResize);
//   },
//   _handleResize() {
//     console.log('test')
//     let container = $(".table-container-"+this.props.name);
//     if(!container) {
//       return;
//     }
//     let height = (this.props.myTableData.length+1)*40 + 2;
//
//     if(this.props.height && this.props.height < height) {
//       height=this.props.height;
//     }
//
//     this.setState({
//       width:container.width(),
//       height:height
//     })
//   },
//   renderTable: function() {
//     return (
//         <Table
//           rowsCount={this.props.myTableData.length}
//           rowHeight={40}
//           headerHeight={40}
//           width={this.state.width}
//           height={this.state.height}>
//           <Column
//             header={<Cell>Name</Cell>}
//             cell={props => (
//               <Cell {...props}>
//                 <a href={this.props.link}>{this.props.myTableData[props.rowIndex].name}</a>
//               </Cell>
//             )}
//             width={400}
//             minWidth={400}
//             flexGrow={1}
//           />
//           <Column
//             header={<Cell>status</Cell>}
//             cell={props => (
//               <Cell {...props}>
//                 {this.props.myTableData[props.rowIndex].status}
//               </Cell>
//             )}
//             width={200}
//             align="center"
//           />
//           <Column
//             header={<Cell>spend</Cell>}
//             cell={props => (
//               <Cell {...props}>
//                 {this.props.myTableData[props.rowIndex].spend}
//               </Cell>
//             )}
//             width={200}
//             align="center"
//           />
//           <Column
//             header={<Cell>start</Cell>}
//             cell={props => (
//               <Cell {...props}>
//                 {this.props.myTableData[props.rowIndex].start}
//               </Cell>
//             )}
//             width={200}
//             align="center"
//           />
//           <Column
//             header={<Cell>end</Cell>}
//             cell={props => (
//               <Cell {...props}>
//                 {this.props.myTableData[props.rowIndex].end}
//               </Cell>
//             )}
//             width={200}
//             align="center"
//           />
//         </Table>
//     );
//   },
//   render:function(){
//     return (
//       <div ref={"tableContainer"} className={"table-container table-container-"+this.props.name}>
//         <DataTableHeader {...this.props} />
//         {this.state.width ? this.renderTable() : null}
//       </div>
//     );
//   },
//
// });
