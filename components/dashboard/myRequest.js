// import React from 'react'
// import { toast } from "react-toastify";
// import axios from "axios";
// import Datatable from "../../components/datatable/datatable-m";
// import dynamic from "next/dynamic";
// import NextLink from "next/link";
// import { API_URL } from "../../constants";
// import { listShipments } from '../../context/actions/shipment/shipment.action';
// function myRequest({props}) {
//     const { userId, role, sent, companyId } = props;
//     const [shipmentId, setshipmentId] = useState("");

//   ///

//   const [LoadSpinner, setLoadSpinner] = useState({
//     loadInterest: false,
//     loadListing: false,
//     loadAssign: false,
//     loadDispatch: false,
//     loadPickedUp: false,
//     loadDelivery: false,
//     loadCancel: false,
//     loadArchive: false,
//     loadRemind: false,
//     loadAccept: false,
//   });

//   const [action, setAction] = useState({
//     showInterestAction: showInterestAction,
//     dispatchShipmentAction: dispatchShipmentAction,
//     pickedUpShipmentAction: pickedUpShipmentAction,
//     deliveredShipmentAction: deliveredShipmentAction,
//     cancelShipmentAction: cancelShipmentAction,
//     archiveShipmentAction: archiveShipmentAction,
//     sendRemindEmailAction: sendRemindEmailAction,
//     contractSignedAction: contractSignedAction,
//     contractAcceptedAction: contractAcceptedAction,
//   });



//     const {
//       authState: { user },
//       userDispatch,
//       userState: { popUpOverLay: open },
//     } = useContext(GlobalContext);
//     const {
//       shipmentDispatch,
//       shipmentState: {
//         Shipments: { data, loading },
//       },
//     } = useContext(GlobalContext);
//     const loadData = () => {
//         // listShipments()(shipmentDispatch)((result) => {})((err) => {
//         //   toast.error(err);
    
//         // });
//         userId
//           ? listShipments(userId)(shipmentDispatch)((result) => {})((err) => {
//               toast.error(err);
//             })
//           : listShipments()(shipmentDispatch)((result) => {})((err) => {
//               toast.error(err);
//             });
    
//         //  setData(data.data?.filter((item) => item.UserId === userId));
//       };
    
//       useEffect(() => {
//         if (data.length === 0) {
//           loadData();
//         }
//         //  setUser(JSON.parse(localStorage.getItem("user")));
//       }, []);

//   return (
//     <section className="mt-7 py-0">
   

//     <div className="container">
//       <div className="row">
        

//       <div className="col-xl-12">
//         <div className="card">
//           <div className="card-header alert alert-info">
//             <h3>List of Tow Requests</h3>

           
//           </div>
//           <div className="card-body table-border-style">
//             <div class="card-body">
//               <ul class="nav nav-tabs mb-3" id="myTab" role="tablist">
//                 <li class="nav-item">
//                   <a
//                     class="nav-link active text-uppercase"
//                     id="Listing-tab"
//                     data-toggle="tab"
//                     href="#Listing"
//                     role="tab"
//                     aria-controls="Listing"
//                     aria-selected="true"
//                   >
//                     Tow Requests (
//                     {userId
//                       ? data.data?.filter(
//                           (item) =>
//                             item?.UserId === userId &&
//                             item?.IsArchived === false &&
//                             item?.ShipmentStatus === "NotAssigned"
//                         ).length
//                       : data.data?.filter(
//                           (item) =>
//                             item?.IsArchived === false &&
//                             item?.ShipmentStatus === "NotAssigned"
//                         ).length}
//                     )
//                   </a>
//                 </li>
//                 <li class="nav-item">
//                   <a
//                     class="nav-link text-uppercase"
//                     id="Assigned-tab"
//                     data-toggle="tab"
//                     href="#Assigned"
//                     role="tab"
//                     aria-controls="Assigned"
//                     aria-selected="false"
//                   >
//                     Assigned Tow Request(
//                     {userId
//                       ? data.data?.filter(
//                           (item) =>
//                             item?.UserId === userId &&
//                             item?.IsArchived === false &&
//                             item?.ShipmentStatus === "Assigned"
//                         ).length
//                       : role
//                       ? data.data?.filter(
//                           (item) =>
//                             item?.IsArchived === false &&
//                             item?.ShipmentStatus === "Assigned"
//                         ).length
//                       : data.data?.filter(
//                           (item) =>
//                             item?.IsArchived === false &&
//                             item?.ShipmentStatus === "Assigned" &&
//                             item?.AssignedCarrier === parseInt(companyId)
//                         ).length}
//                     )
//                   </a>
//                 </li>
                
//                 <li class="nav-item">
//                   <a
//                     class="nav-link text-uppercase"
//                     id="PickedUp-tab"
//                     data-toggle="tab"
//                     href="#PickedUp"
//                     role="tab"
//                     aria-controls="PickedUp"
//                     aria-selected="false"
//                   >
//                     Picked Up distressed Vehicle (
//                     {userId
//                       ? data.data?.filter(
//                           (item) =>
//                             item?.IsArchived === false &&
//                             item?.UserId === userId &&
//                             item?.ShipmentStatus === "PickedUp"
//                         ).length
//                       : role
//                       ? data.data?.filter(
//                           (item) =>
//                             item?.IsArchived === false &&
//                             item?.ShipmentStatus === "PickedUp"
//                         ).length
//                       : data.data?.filter(
//                           (item) =>
//                             item?.IsArchived === false &&
//                             item?.AssignedCarrier === parseInt(companyId) &&
//                             item?.ShipmentStatus === "PickedUp"
//                         ).length}
//                     )
//                   </a>
//                 </li>
//                 <li class="nav-item">
//                   <a
//                     class="nav-link text-uppercase"
//                     id="Delivered-tab"
//                     data-toggle="tab"
//                     href="#Delivered"
//                     role="tab"
//                     aria-controls="Delivered"
//                     aria-selected="false"
//                   >
//                     Delivered (
//                     {userId
//                       ? data.data?.filter(
//                           (item) =>
//                             item?.UserId === userId &&
//                             item?.IsArchived === false &&
//                             item?.ShipmentStatus === "Delivered"
//                         ).length
//                       : role
//                       ? data.data?.filter(
//                           (item) =>
//                             item?.IsArchived === false &&
//                             item?.ShipmentStatus === "Delivered"
//                         ).length
//                       : data.data?.filter(
//                           (item) =>
//                             item?.IsArchived === false &&
//                             item?.AssignedCarrier === parseInt(companyId) &&
//                             item?.ShipmentStatus === "Delivered"
//                         ).length}
//                     )
//                   </a>
//                 </li>
//                 <li class="nav-item">
//                   <a
//                     class="nav-link text-uppercase"
//                     id="Cancelled-tab"
//                     data-toggle="tab"
//                     href="#Cancelled"
//                     role="tab"
//                     aria-controls="Cancelled"
//                     aria-selected="false"
//                   >
//                     Cancelled (
//                     {userId
//                       ? data.data?.filter(
//                           (item) =>
//                             item?.IsArchived === false &&
//                             item?.UserId === userId &&
//                             item?.ShipmentStatus === "Cancelled"
//                         ).length
//                       : role
//                       ? data.data?.filter(
//                           (item) =>
//                             item?.IsArchived === false &&
//                             item?.ShipmentStatus === "Cancelled"
//                         ).length
//                       : data.data?.filter(
//                           (item) =>
//                             item?.IsArchived === false &&
//                             item?.AssignedCarrier === parseInt(companyId) &&
//                             item?.ShipmentStatus === "Cancelled"
//                         ).length}
//                     )
//                   </a>
//                 </li>
//               </ul>
//               <div class="tab-content" id="myTabContent">
//                 <div
//                   class="tab-pane fade show active"
//                   id="Listing"
//                   role="tabpanel"
//                   aria-labelledby="Listing-tab"
//                 >
//                   <div class="mb-0">
//                     <p>
//                       These vehicles are listed on Tow Truck and are not yet
//                       assigned to a Park.{" "}
//                       {user?.roles === "customer" && (
//                         <>
//                           Once you have found a Tow Truck to move distressed vehicle,
//                           your next step is to "Assign" it to them so that they
//                           can sign your dispatch sheet and contract. If you
//                           don't see your vehicle listed here, you must first
//                           create it using{" "}
//                           <a href="/shipment/shipment-action">Create New Request</a>.
//                         </>
//                       )}
//                     </p>

//                     <hr />

//                     {/* <div class="row">
//                       <div class="col-lg-6 col-md-7 col-sm-8 margin-bottom-10">
//                         <form id="searchForm" class="form-inline">
//                           <div class="form-group">
//                             <label for="exampleInputName2">
//                               Search<span class="hidden-sm"> for</span>
//                             </label>
//                             <select name="searchIn" class="form-control">
//                               <option value="origination_city">
//                                 Pickup City
//                               </option>
//                               <option value="origination_state">
//                                 Pickup State
//                               </option>
//                               <option value="destination_city">
//                                 Delivery City
//                               </option>
//                               <option value="destination_state">
//                                 Delivery State
//                               </option>
//                               <option value="order_id">Order ID</option>
//                               <option value="vehicle_make">Vehicles</option>
//                               <option value="carrier_company">
//                                 Carrier Name
//                               </option>
//                             </select>
//                           </div>
//                         </form>
//                       </div>
//                     </div> */}
//                     <Datatable
//                       loading={loading}
//                       col={columns(
//                         LoadSpinner,
//                         user,
//                         showInterestAction,
//                         archiveShipmentAction
//                       )}
//                       data={
//                         userId
//                           ? data.data?.filter(
//                               (item) =>
//                                 item?.UserId === userId &&
//                                 item?.IsArchived === false &&
//                                 item?.ShipmentStatus === "NotAssigned"
//                             )
//                           : data.data?.filter(
//                               (item) =>
//                                 item?.IsArchived === false &&
//                                 item?.ShipmentStatus === "NotAssigned"
//                             )
//                       }
//                     />
//                   </div>
//                 </div>
//                 <div
//                   class="tab-pane fade"
//                   id="Assigned"
//                   role="tabpanel"
//                   aria-labelledby="Assigned-tab"
//                 >
//                   <div class="mb-0">
//                     <p>
//                       Your requests to move these vehicles have been emailed to
//                       the assigned carrier and have been placed in the
//                       respective carrier's Load Dispatch account. You are
//                       waiting for these carriers to sign the dispatch sheet and
//                       contract. If the carrier has not responded in a reasonable
//                       amount of time you may send them a reminder email taking
//                       the "Remind" action.
//                     </p>

//                     <Datatable
//                       loading={loading}
//                       col={columns(
//                         LoadSpinner,
//                         user,
//                         dispatchShipmentAction,
//                         archiveShipmentAction,
//                         sendRemindEmailAction,
//                         contractSignedAction,
//                         contractAcceptedAction
//                       )}
//                       data={
//                         userId
//                           ? data.data?.filter(
//                               (item) =>
//                                 item?.UserId === userId &&
//                                 item?.IsArchived === false &&
//                                 item?.ShipmentStatus === "Assigned"
//                             )
//                           : role
//                           ? data.data?.filter(
//                               (item) =>
//                                 item?.IsArchived === false &&
//                                 item?.ShipmentStatus === "Assigned"
//                             )
//                           : data.data?.filter(
//                               (item) =>
//                                 item?.IsArchived === false &&
//                                 item?.ShipmentStatus === "Assigned" &&
//                                 item?.AssignedCarrier === parseInt(companyId)
//                             )
//                       }
//                     />
//                   </div>
//                 </div>
             
//                 <div
//                   class="tab-pane fade"
//                   id="PickedUp"
//                   role="tabpanel"
//                   aria-labelledby="PickedUp-tab"
//                 >
//                   <div class="mb-0">
//                     <p>
//                       These vehicles have been picked up by their assigned
//                       carriers and are in transport. Either you or the carrier
//                       may mark the order as "Delivered" once the carrier has
//                       delivered the vehicle(s) to their final destination.
//                     </p>

//                     <Datatable
//                       loading={loading}
//                       col={columns(
//                         LoadSpinner,
//                         user,
//                         deliveredShipmentAction,
//                         archiveShipmentAction
//                       )}
//                       data={
//                         userId
//                           ? data.data?.filter(
//                               (item) =>
//                                 item?.IsArchived === false &&
//                                 item?.UserId === userId &&
//                                 item?.ShipmentStatus === "PickedUp"
//                             )
//                           : role
//                           ? data.data?.filter(
//                               (item) =>
//                                 item?.IsArchived === false &&
//                                 item?.ShipmentStatus === "PickedUp"
//                             )
//                           : data.data?.filter(
//                               (item) =>
//                                 item?.IsArchived === false &&
//                                 item?.AssignedCarrier === parseInt(companyId) &&
//                                 item?.ShipmentStatus === "PickedUp"
//                             )
//                       }
//                     />
//                   </div>
//                 </div>

//                 <div
//                   class="tab-pane fade"
//                   id="Delivered"
//                   role="tabpanel"
//                   aria-labelledby="Delivered-tab"
//                 >
//                   <div class="mb-0">
//                     <p>
//                       These orders have been delivered and the transaction has
//                       been completed. If you have a similar listing, you may
//                       copy the vehicles of an order to Central Dispatch using
//                       the "copy to CD" action, but the order will always remain
//                       in the "Delivered" tab until it has been archived. To
//                       reduce the number of records in this tab, you may move
//                       these orders into the "Archived" tab by taking the
//                       "Archive" action next to the order.
//                     </p>

//                     <Datatable
//                       loading={loading}
//                       col={columns(
//                         LoadSpinner,
//                         user,
//                         deliveredShipmentAction,
//                         archiveShipmentAction,
//                         chatAction
//                       )}
//                       data={
//                         userId
//                           ? data.data?.filter(
//                               (item) =>
//                                 item?.UserId === userId &&
//                                 item?.IsArchived === false &&
//                                 item?.ShipmentStatus === "Delivered"
//                             )
//                           : role
//                           ? data.data?.filter(
//                               (item) =>
//                                 item?.IsArchived === false &&
//                                 item?.ShipmentStatus === "Delivered"
//                             )
//                           : data.data?.filter(
//                               (item) =>
//                                 item?.IsArchived === false &&
//                                 item?.AssignedCarrier === parseInt(companyId) &&
//                                 item?.ShipmentStatus === "Delivered"
//                             )
//                       }
//                     />
//                   </div>
//                 </div>

//                 <div
//                   class="tab-pane fade"
//                   id="Cancelled"
//                   role="tabpanel"
//                   aria-labelledby="Cancelled-tab"
//                 >
//                   <div class="mb-0">
//                     <p>
//                       These orders are requests that were declined by the
//                       carrier, withdrawn by the company, or cancelled by either
//                       party after the order had been signed. New listings or
//                       requests may be created from a cancelled order, but the
//                       order will always remain in the "Cancelled" tab until it
//                       has been archived. To reduce the number of records in this
//                       tab, you may move these orders into the "Archived" tab by
//                       taking the "Archive" action next to the order.
//                     </p>
//                     <Datatable
//                       loading={loading}
//                       col={columns(
//                         LoadSpinner,
//                         user,
//                         showInterestAction,
//                         archiveShipmentAction
//                       )}
//                       data={
//                         userId
//                           ? data.data?.filter(
//                               (item) =>
//                                 item?.IsArchived === false &&
//                                 item?.UserId === userId &&
//                                 item?.ShipmentStatus === "Cancelled"
//                             )
//                           : role
//                           ? data.data?.filter(
//                               (item) =>
//                                 item?.IsArchived === false &&
//                                 item?.ShipmentStatus === "Cancelled"
//                             )
//                           : data.data?.filter(
//                               (item) =>
//                                 item?.IsArchived === false &&
//                                 item?.AssignedCarrier === parseInt(companyId) &&
//                                 item?.ShipmentStatus === "Cancelled"
//                             )
//                       }
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
       
//       </div>


//       </div>
//     </div>
//   </section>

//   )
// }

// //export default myRequest

// export default dynamic(() => Promise.resolve(myRequest), { ssr: false });