import React from "react";
import "../../css/CartComponent.css";
import { Scrollbars } from 'react-custom-scrollbars';
import { Link } from "react-router-dom";
import CartItemComponent from "../Elements/CartItemComponent";

export default class CartComponent extends React.Component
{
    constructor(props)
    {
      super(props);
      this.handleClick = this.handleClick.bind(this);
    }
    cartProcess()
    {
        document.getElementsByClassName('js-panel-cart')[0].classList.toggle('show-header-cart');
    }
    handleClick()
    {
      this.props.removeFromCart(item);
    }
    render()
    {
      const cartItems = this.props.cartItems;
      let total = 0;
      for (let i = 0; i < cartItems.length; i++) {
        total += cartItems[i].price * cartItems[i].quantity;
      }
        return (
          <>
            <div className="wrap-header-cart js-panel-cart">
              <div className="hide js-hide-cart"></div>
              <div className="header-cart">
                <div className="header-cart-title">
                  <span className="cart-span">Your Cart</span>
                  <div
                    className="close-cart js-hide-cart"
                    onClick={this.cartProcess}
                  >
                    <i className="bi bi-x"></i>
                  </div>
                </div>
                <div className="header-cart-content">
                  <Scrollbars style={{ width: "100%", height: "40vh" }}>
                    <ul className="header-cart-wrap-item">
                      {cartItems.map(item => (
                      <CartItemComponent key={item.id} item={item} removeFromCart={this.props.removeFromCart}/>
                      ))}
                    </ul>
                  </Scrollbars>
                  <div className="header-cart-bottom-info">
                    <div className="header-cart-total">Total: {total} UAH</div>
                    <div className="header-cart-buttons">
                      <a
                        href="/checkout"
                        className="header-cart-viewcart"
                      >
                        View Cart
                      </a>
                      <a
                        href="/checkout"
                        className="header-cart-checkout"
                      >
                        Check Out
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
    }
}