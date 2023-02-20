import React from "react";
import "../../css/CheckoutFormComponent.css";
import { useSpring, animated } from '@react-spring/web'

export default class CheckoutFormItemComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: this.props.item.quantity
        };
    }

    handleIncrement = () => {
        if(this.state.quantity < this.props.item.count)
        {
            const newQuantity = this.state.quantity + 1;
            this.setState({ quantity: newQuantity });
            this.props.onUpdateQuantity(this.props.item.id, newQuantity);
        }
    };

    handleDecrement = () => {
        if (this.state.quantity > 1) {
            const newQuantity = this.state.quantity - 1;
            this.setState({ quantity: newQuantity });
            this.props.onUpdateQuantity(this.props.item.id, newQuantity);
        }
    };

    render() {
        const item = this.props.item;
        return (
            <tr className="table_row">
                <td className="column-1">
                    <div className="how-itemcart1">
                        <img src={item.image_url} alt="IMG" />
                    </div>
                </td>
                <td className="column-2">{item.title}</td>
                <td className="column-3">{item.price} UAH</td>
                <td className="column-4">
                    <div className="wrap-num-product">
                        <div
                            className="btn-num-product-down"
                            onClick={this.handleDecrement}
                        >
                            <i className="fs-16 zmdi zmdi-minus"></i>
                        </div>
                        <input
                            className="mtext-104 cl3 txt-center num-product"
                            type="number"
                            name="num-product1"
                            value={item.quantity}
                            readOnly
                        />
                        <div
                            className="btn-num-product-up"
                            onClick={this.handleIncrement}
                        >
                            <i className="fs-16 zmdi zmdi-plus"></i>
                        </div>
                    </div>
                </td>
                <td className="column-5">{item.price * item.quantity} UAH</td>
            </tr>
        );
    }
}
