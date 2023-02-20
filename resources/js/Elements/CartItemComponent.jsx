import React from "react";
import "../../css/CartComponent.css";
import { Scrollbars } from 'react-custom-scrollbars';
import { Link } from "react-router-dom";

export default class CartItemComponent extends React.Component
{
    constructor(props)
    {
      super(props);
      this.handleClick = this.handleClick.bind(this);
    }
    handleClick()
    {
      this.props.removeFromCart(this.props.item);
    }
    render()
    {
        return (
            <li
                className="header-cart-item"
                onClick={this.handleClick}
            >
                <div className="header-cart-item-img">
                    <img src={this.props.item.image_url} alt="IMG" />
                </div>
                <div className="header-cart-item-txt">
                    <a href="#" className="header-cart-item-name">
                        {this.props.item.title}
                    </a>
                    <span className="header-cart-item-info">
                        {this.props.item.quantity} x {this.props.item.price} UAH
                    </span>
                </div>
            </li>
        );
    }
}