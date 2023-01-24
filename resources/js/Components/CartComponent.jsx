import React from "react";
import "../../css/CartComponent.css";
import { Scrollbars } from 'react-custom-scrollbars';

export default class CartComponent extends React.Component
{
    constructor(props)
    {
      super(props);
    }
    cartProcess()
    {
        document.getElementsByClassName('js-panel-cart')[0].classList.toggle('show-header-cart');
    }
    render()
    {
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
                      <li className="header-cart-item">
                        <div className="header-cart-item-img">
                          <img src="images/item-cart-01.jpg" alt="IMG" />
                        </div>
                        <div className="header-cart-item-txt">
                          <a href="#" className="header-cart-item-name">
                            White Shirt Pleat
                          </a>
                          <span className="header-cart-item-info">1 x $19.00</span>
                        </div>
                      </li>
                      <li className="header-cart-item">
                        <div className="header-cart-item-img">
                          <img src="images/item-cart-01.jpg" alt="IMG" />
                        </div>
                        <div className="header-cart-item-txt">
                          <a href="#" className="header-cart-item-name">
                            White Shirt Pleat
                          </a>
                          <span className="header-cart-item-info">1 x $19.00</span>
                        </div>
                      </li>
                      <li className="header-cart-item">
                        <div className="header-cart-item-img">
                          <img src="images/item-cart-01.jpg" alt="IMG" />
                        </div>
                        <div className="header-cart-item-txt">
                          <a href="#" className="header-cart-item-name">
                            White Shirt Pleat
                          </a>
                          <span className="header-cart-item-info">1 x $19.00</span>
                        </div>
                      </li>
                      <li className="header-cart-item">
                        <div className="header-cart-item-img">
                          <img src="images/item-cart-01.jpg" alt="IMG" />
                        </div>
                        <div className="header-cart-item-txt">
                          <a href="#" className="header-cart-item-name">
                            White Shirt Pleat
                          </a>
                          <span className="header-cart-item-info">1 x $19.00</span>
                        </div>
                      </li>
                    </ul>
                  </Scrollbars>
                  <div className="header-cart-bottom-info">
                    <div className="header-cart-total">Total: $75.00</div>
                    <div className="header-cart-buttons">
                      <a
                        href="shoping-cart.html"
                        className="header-cart-viewcart"
                      >
                        View Cart
                      </a>
                      <a
                        href="shoping-cart.html"
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