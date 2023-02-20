import React from "react";
import "../../css/CheckoutFormComponent.css";
import CheckoutFormItemComponent from "../Elements/CheckoutFormItemComponent";
export default class CheckoutFormComponent extends React.Component {
                   constructor(props) {
                       super(props);
                       this.state = {
                           shipping_select: [
                               { SiteKey: "1", Description: "1" }
                           ],
                           warhouses_types: [],
                           shipping_select_error:
                               "There are no shipping methods available. Please double check your address, or contact us if you need any help."
                       };
                       this.handleSelectedMethodShipment = this.handleSelectedMethodShipment.bind(
                           this
                       );
                   }
                    progressBarMove()
                    {
                        var elem = document.getElementById("shipping-method-progress-bar");

                        var width = 1;
                        var id = setInterval(frame, 15);
                        function frame() {
                        if (width >= 100) {
                            clearInterval(id);
                        } else {
                            width++;
                            elem.style.width = width + '%';
                        }
                        }
                    }
                   handleSelectedMethodShipment(event) {
                                                           event.preventDefault();
                                                           let method = document.getElementsByName(
                                                               "method_of_shipping"
                                                           )[0].value;
                                                           document
                                                               .getElementsByClassName(
                                                                   "shipping_method_address_wrap"
                                                               )[0]
                                                               .classList.remove(
                                                                   "shipping_method_address_wrap_view"
                                                               );
                                                           document
                                                               .getElementsByClassName(
                                                                   "shipping-method-progress-container"
                                                               )[0]
                                                               .classList.remove(
                                                                   "shipping-method-progress-container-hide"
                                                               );

                                                           this.progressBarMove();
                                                           let state = document.getElementsByName(
                                                               "state"
                                                           )[0].value;
                                                           let address = document.getElementsByName(
                                                               "postcode"
                                                           )[0].value;
                                                           if (
                                                               method ==
                                                               "NovaPoshta"
                                                           ) {
                                                               let data = {
                                                                   apiKey:
                                                                       "353e2cbf3f21d815473a46050346bfbd",
                                                                   modelName:
                                                                       "Address",
                                                                   calledMethod:
                                                                       "getWarehouseTypes",
                                                                   methodProperties: {}
                                                               };
                                                               let options = {
                                                                   method:
                                                                       "POST",
                                                                   headers: {
                                                                       "Content-Type":
                                                                           "application/json;charset=utf-8"
                                                                   },
                                                                   body: JSON.stringify(
                                                                       data
                                                                   )
                                                               };

                                                               fetch(
                                                                   "https://api.novaposhta.ua/v2.0/json/",
                                                                   options
                                                               )
                                                                   .then(
                                                                       response =>
                                                                           response.json()
                                                                   )
                                                                   .then(
                                                                       function(
                                                                           data
                                                                       ) {
                                                                           this.setState(
                                                                               {
                                                                                   warhouses_types:
                                                                                       data.data
                                                                               },
                                                                               () => {}
                                                                           );
                                                                       }.bind(
                                                                           this
                                                                       )
                                                                   );

                                                               let selected_type_ref;
                                                               this.state.warhouses_types.forEach(
                                                                   type => {
                                                                       if (
                                                                           type.Description ==
                                                                           "Поштове відділення"
                                                                       ) {
                                                                           selected_type_ref =
                                                                               type.Ref;
                                                                       }
                                                                   }
                                                               );

                                                               data = {
                                                                   apiKey:
                                                                       "353e2cbf3f21d815473a46050346bfbd",
                                                                   modelName:
                                                                       "Address",
                                                                   calledMethod:
                                                                       "getWarehouses",
                                                                   methodProperties: {
                                                                       TypeOfWarehouseRef: selected_type_ref,
                                                                       CityName: state,
                                                                       FindByString: address,
                                                                       Language:
                                                                           "UA",
                                                                       Page:
                                                                           "1",
                                                                       Limit: ""
                                                                   }
                                                               };
                                                               options = {
                                                                   method:
                                                                       "POST",
                                                                   headers: {
                                                                       "Content-Type":
                                                                           "application/json;charset=utf-8"
                                                                   },
                                                                   body: JSON.stringify(
                                                                       data
                                                                   )
                                                               };

                                                               fetch(
                                                                   "https://api.novaposhta.ua/v2.0/json/",
                                                                   options
                                                               )
                                                                   .then(
                                                                       response =>
                                                                           response.json()
                                                                   )
                                                                   .then(
                                                                       function(
                                                                           data
                                                                       ) {
                                                                           this.setState(
                                                                               {
                                                                                   shipping_select:
                                                                                       data.data
                                                                               },
                                                                               () => {
                                                                                   document
                                                                                       .getElementsByClassName(
                                                                                           "shipping_method_address_wrap"
                                                                                       )[0]
                                                                                       .classList.add(
                                                                                           "shipping_method_address_wrap_view"
                                                                                       );
                                                                                   document
                                                                                       .getElementsByClassName(
                                                                                           "shipping-method-progress-container"
                                                                                       )[0]
                                                                                       .classList.add(
                                                                                           "shipping-method-progress-container-hide"
                                                                                       );
                                                                               }
                                                                           );
                                                                       }.bind(
                                                                           this
                                                                       )
                                                                   );
                                                           } else if (
                                                               method ==
                                                               "UkrPoshta"
                                                           ) {
                                                               let data = {
                                                                   apiKey:
                                                                       "353e2cbf3f21d815473a46050346bfbd",
                                                                   modelName:
                                                                       "Address",
                                                                   calledMethod:
                                                                       "getWarehouseTypes",
                                                                   methodProperties: {}
                                                               };
                                                               let options = {
                                                                   method:
                                                                       "POST",
                                                                   headers: {
                                                                       "Content-Type":
                                                                           "application/json;charset=utf-8"
                                                                   },
                                                                   body: JSON.stringify(
                                                                       data
                                                                   )
                                                               };

                                                               fetch(
                                                                   "https://ukrposhta.ua/ecom/0.0.1",
                                                                   options
                                                               )
                                                                   .then(
                                                                       response =>
                                                                           response.json()
                                                                   )
                                                                   .then(
                                                                       function(
                                                                           data
                                                                       ) {
                                                                           this.setState(
                                                                               {
                                                                                   warhouses_types:
                                                                                       data.data
                                                                               },
                                                                               () => {
                                                                                   document
                                                                                       .getElementsByClassName(
                                                                                           "shipping_method_address_wrap"
                                                                                       )[0]
                                                                                       .classList.add(
                                                                                           "shipping_method_address_wrap_view"
                                                                                       );
                                                                                       document
                                                                                           .getElementsByClassName(
                                                                                               "shipping-method-progress-container"
                                                                                           )[0]
                                                                                           .classList.add(
                                                                                               "shipping-method-progress-container-hide"
                                                                                           );
                                                                               }
                                                                           );
                                                                       }.bind(
                                                                           this
                                                                       )
                                                                   );
                                                           }

                                                           this.setState({
                                                               shipping_select_error:
                                                                   ""
                                                           });
                                                       }
                   updateQuantity = (productId, newQuantity) => {
                       const cartItems = this.props.cartItems.map(item => {
                           if (item.id === productId) {
                               return { ...item, quantity: newQuantity };
                           } else {
                               return item;
                           }
                       });
                       this.setState({ cartItems: cartItems }, () => {
                           this.props.updateCart(this.state.cartItems);
                       });
                   };

                   render() {
                        let subtotal = 0;
                        for (let i = 0; i < this.props.cartItems.length; i++) {
                            subtotal += this.props.cartItems[i].price * this.props.cartItems[i].quantity;
                        }
                       return (
                           <>
                               <form className="checkout-form">
                                   <div className="container">
                                       <div className="row">
                                           <div className="col-lg-10 col-xl-7 shopping-cart-info">
                                               <div className="shopping-cart-container">
                                                   <div className="wrap-table-shopping-cart">
                                                       <table className="table-shopping-cart">
                                                           <tbody>
                                                               <tr className="table_head">
                                                                   <th className="column-1">
                                                                       Product
                                                                   </th>
                                                                   <th className="column-2"></th>
                                                                   <th className="column-3">
                                                                       Price
                                                                   </th>
                                                                   <th className="column-4">
                                                                       Quantity
                                                                   </th>
                                                                   <th className="column-5">
                                                                       Total
                                                                   </th>
                                                               </tr>
                                                               {this.props.cartItems.map(
                                                                   item => (
                                                                       <CheckoutFormItemComponent
                                                                           key={
                                                                               item.id
                                                                           }
                                                                           item={
                                                                               item
                                                                           }
                                                                           onUpdateQuantity={
                                                                               this
                                                                                   .updateQuantity
                                                                           }
                                                                       />
                                                                   )
                                                               )}
                                                           </tbody>
                                                       </table>
                                                   </div>
                                                   <div className="wrap-coupon-update-table">
                                                       <div className="wrap-coupon">
                                                           <input
                                                               className="coupon-code"
                                                               type="text"
                                                               name="coupon"
                                                               placeholder="Coupon Code"
                                                           />
                                                           <div className="apply-coupon">
                                                               Apply coupon
                                                           </div>
                                                       </div>
                                                       <div className="update-cart">
                                                           Update Cart
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                           <div className="col-sm-10 col-lg-7 col-xl-5 shipping-info">
                                               <div className="wrap-shipping-container">
                                                   <h4 className="cart-totals-text">
                                                       Cart Totals
                                                   </h4>
                                                   <div className="subtotal-wrap">
                                                       <div className="subtotal-text-wrap">
                                                           <span className="subtotal-text">
                                                               Subtotal:
                                                           </span>
                                                       </div>
                                                       <div className="subtotal-amount-wrap">
                                                           <span className="subtotal-amount">
                                                               {subtotal} UAH
                                                           </span>
                                                       </div>
                                                   </div>
                                                   <div className="shipping-wrap">
                                                       <div className="shipping-text-wrap">
                                                           <span className="shipping-text">
                                                               Shipping:
                                                           </span>
                                                       </div>
                                                       <div className="shipping-methods-wrap">
                                                           <div className="shipping-missing">
                                                               {
                                                                   this.state
                                                                       .shipping_select_error
                                                               }
                                                               <div class="shipping-method-progress-container">
                                                                   <div
                                                                       class="shipping-method-progress-bar"
                                                                       id="shipping-method-progress-bar"
                                                                   ></div>
                                                               </div>
                                                               <div className="shipping_method_address_wrap">
                                                                   <select
                                                                       id={
                                                                           "shipping_method_address"
                                                                       }
                                                                       defaultValue={
                                                                           "default"
                                                                       }
                                                                   >
                                                                       <option
                                                                           disabled
                                                                           value={
                                                                               "default"
                                                                           }
                                                                       >
                                                                           Select
                                                                           ...
                                                                       </option>
                                                                       {this.state.shipping_select.map(
                                                                           viddil => (
                                                                               <option
                                                                                   key={
                                                                                       viddil.SiteKey
                                                                                   }
                                                                                   value={
                                                                                       viddil.SiteKey
                                                                                   }
                                                                               >
                                                                                   {"№" +
                                                                                       viddil.Number +
                                                                                       " " +
                                                                                       viddil.ShortAddress}
                                                                               </option>
                                                                           )
                                                                       )}
                                                                   </select>
                                                               </div>
                                                           </div>
                                                           <div className="shipping-methods">
                                                               <span className="calculate-shipping">
                                                                   Calculate
                                                                   Shipping
                                                               </span>
                                                               <div className="rs1-select2 rs2-select2 country-select-wrap">
                                                                   <select
                                                                       className="js-select2 select2-hidden-accessible country-select"
                                                                       name="method_of_shipping"
                                                                       tabIndex="-1"
                                                                       aria-hidden="true"
                                                                       defaultValue={
                                                                           "default"
                                                                       }
                                                                   >
                                                                       <option
                                                                           disabled
                                                                           value={
                                                                               "default"
                                                                           }
                                                                       >
                                                                           Select
                                                                           a
                                                                           method...
                                                                       </option>
                                                                       <option>
                                                                           NovaPoshta
                                                                       </option>
                                                                       <option>
                                                                           UkrPoshta
                                                                       </option>
                                                                   </select>
                                                               </div>
                                                               <div className="state-input-wrap">
                                                                   <input
                                                                       className="state-input"
                                                                       type="text"
                                                                       name="state"
                                                                       placeholder="State /  country"
                                                                   />
                                                               </div>
                                                               <div className="postcode-input-wrap">
                                                                   <input
                                                                       className="postcode-input"
                                                                       type="text"
                                                                       name="postcode"
                                                                       placeholder="Postcode / Zip"
                                                                   />
                                                               </div>
                                                               <div className="update-totals-wrap">
                                                                   <button
                                                                       className="update-totals"
                                                                       onClick={
                                                                           this
                                                                               .handleSelectedMethodShipment
                                                                       }
                                                                   >
                                                                       Update
                                                                       Totals
                                                                   </button>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                                   <div className="total-wrap">
                                                       <div className="total-text-wrap">
                                                           <span className="total-text">
                                                               Total:
                                                           </span>
                                                       </div>
                                                       <div className="total-amount-wrap">
                                                           <span className="total-amount">
                                                               $79.65
                                                           </span>
                                                       </div>
                                                   </div>
                                                   <button className="proceed-to-checkout">
                                                       Proceed to Checkout
                                                   </button>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </form>
                           </>
                       );
                   }
               }
