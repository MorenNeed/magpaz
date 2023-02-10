import React from "react";
import "../../css/CheckoutFormComponent.css";


export default class CheckoutFormComponent extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            shipping_select: [{SiteKey: '1', Description: '1'}],
            shipping_select_error: 'There are no shipping methods available. Please double check your address, or contact us if you need any help.'
          };
          this.handleSelectedMethodShipment = this.handleSelectedMethodShipment.bind(this);
    }
    handleSelectedMethodShipment(event)
    {
        event.preventDefault();
        let method = document.getElementsByName('method_of_shipping')[0].value;
        let state = document.getElementsByName('state')[0].value;
        let address = document.getElementsByName('postcode')[0].value;
        console.log(method);
        if(method == "NovaPoshta")
        {
            let data = {
                apiKey: "353e2cbf3f21d815473a46050346bfbd",
                modelName: "Address",
                calledMethod: "getStreet",
                methodProperties: {
                    FindByString: address,
                    Page: "1",
                    Limit: ""
                },
            };
            let options = {
                method: 'POST',
                headers: {
                    'Content-Type': 
                        'application/json;charset=utf-8'
                },
                body: JSON.stringify(data)
            }
            fetch('https://api.novaposhta.ua/v2.0/json/', options)
            .then(response => response.json())
            .then(function(data){
            this.setState({shipping_select: data.data}, () => {
            });
            }.bind(this));
        }

        this.setState({shipping_select_error: ''});
        document.getElementById('shipping_method_address').style.display = 'block';
    }
    handleUpClick() {
        if (this.state.num_of_product < this.props.product.count) {
            let newNum = this.state.num_of_product + 1;
            this.setState({ num_of_product: newNum });
        }
    }
    handleDownClick() {
        if (this.state.num_of_product > 1) {
            let newNum = this.state.num_of_product - 1;
            this.setState({ num_of_product: newNum });
        }
    }
    render() {
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
                                                <tr className="table_row">
                                                    <td className="column-1">
                                                        <div className="how-itemcart1">
                                                            <img
                                                                src="images/item-cart-04.jpg"
                                                                alt="IMG"
                                                            />
                                                        </div>
                                                    </td>
                                                    <td className="column-2">
                                                        Fresh Strawberries
                                                    </td>
                                                    <td className="column-3">
                                                        $ 36.00
                                                    </td>
                                                    <td className="column-4">
                                                        <div className="wrap-num-product">
                                                            <div className="btn-num-product-down">
                                                                <i className="fs-16 zmdi zmdi-minus"></i>
                                                            </div>
                                                            <input
                                                                className="mtext-104 cl3 txt-center num-product"
                                                                type="number"
                                                                name="num-product1"
                                                                value="1"
                                                            />
                                                            <div className="btn-num-product-up">
                                                                <i className="fs-16 zmdi zmdi-plus"></i>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="column-5">
                                                        $ 36.00
                                                    </td>
                                                </tr>
                                                <tr className="table_row">
                                                    <td className="column-1">
                                                        <div className="how-itemcart1">
                                                            <img
                                                                src="images/item-cart-05.jpg"
                                                                alt="IMG"
                                                            />
                                                        </div>
                                                    </td>
                                                    <td className="column-2">
                                                        Lightweight Jacket
                                                    </td>
                                                    <td className="column-3">
                                                        $ 16.00
                                                    </td>
                                                    <td className="column-4">
                                                        <div className="wrap-num-product">
                                                            <div className="btn-num-product-down">
                                                                <i className="fs-16 zmdi zmdi-minus"></i>
                                                            </div>
                                                            <input
                                                                className="mtext-104 cl3 txt-center num-product"
                                                                type="number"
                                                                name="num-product2"
                                                                value="1"
                                                            />
                                                            <div className="btn-num-product-up">
                                                                <i className="fs-16 zmdi zmdi-plus"></i>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="column-5">
                                                        $ 16.00
                                                    </td>
                                                </tr>
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
                                                $79.65
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
                                            <p className="shipping-missing">
                                                {
                                                    this.state
                                                        .shipping_select_error
                                                }
                                                <select
                                                    id={
                                                        "shipping_method_address"
                                                    }
                                                    defaultValue={"default"}
                                                >
                                                    <option disabled value={'default'}>Select ...</option>
                                                    {this.state.shipping_select.map((viddil) => (
                                                        <option value={viddil.SiteKey}>{viddil.Description}</option>
                                                    ))}
                                                </select>
                                            </p>
                                            <div className="shipping-methods">
                                                <span className="calculate-shipping">
                                                    Calculate Shipping
                                                </span>
                                                <div className="rs1-select2 rs2-select2 country-select-wrap">
                                                    <select
                                                        className="js-select2 select2-hidden-accessible country-select"
                                                        name="method_of_shipping"
                                                        tabIndex="-1"
                                                        aria-hidden="true"
                                                        defaultValue={"default"}
                                                    >
                                                        <option
                                                            disabled
                                                            value={"default"}
                                                        >
                                                            Select a method...
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
                                                        Update Totals
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
