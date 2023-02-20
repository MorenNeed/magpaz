import React from "react";
import "../../css/ProductModalElement.css";
import ImageGallery from 'react-image-gallery';
import { toInteger } from "lodash";

export default class ProductModalElement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected_product: new Object(),
            selected_size: "default",
            selected_color: "default",
            num_of_product: 1,
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleUpClick = this.handleUpClick.bind(this);
        this.handleDownClick = this.handleDownClick.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }
    handleClick(event) {
        document
            .getElementById("wrap-modal" + this.props.product.id)
            .classList.remove("show-modal");
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
    handleSubmit(event) {
        event.preventDefault();

        this.props.onAddToCart(this.props.product, this.state.num_of_product);
    }
    render() {
        const images = [
            {
                original: this.props.product.image_url,
                thumbnail: this.props.product.image_url,
                originalHeight: "10rem",
            },
            {
                original: "images/product-02.jpg",
                thumbnail: "images/product-02.jpg",
                originalHeight: "10rem",
            },
            {
                original: "images/product-03.jpg",
                thumbnail: "images/product-03.jpg",
                originalHeight: "10rem",
            },
        ];
        return (
            <li>
                <div
                    className="wrap-modal"
                    id={"wrap-modal" + this.props.product.id}
                >
                    <div className="overlay-modal js-hide-modal"></div>
                    <div className="container">
                        <div className="how-pos3-parent">
                            <button
                                className="how-pos3 hov3 js-hide-modal1"
                                id={this.props.product.id}
                                onClick={this.handleClick}
                            >
                                <img
                                    src="images/icons/icon-close.png"
                                    alt="CLOSE"
                                />
                            </button>
                            <div className="row">
                                <div className="col-md-6 col-lg-7 image-gallery-wrap">
                                    <div className="image-gallery">
                                        <div className="wrap-slick3">
                                            <ImageGallery
                                                items={images}
                                                thumbnailPosition={"left"}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-5 product-information-wrap">
                                    <div className="product-information">
                                        <h4 className="modal-product-name js-name-detail">
                                            {this.props.product.title}
                                        </h4>
                                        <span className="modal-product-price">
                                            {this.props.product.price} UAH
                                        </span>
                                        <p className="modal-product-description">
                                            {this.props.product.description}
                                        </p>
                                        <p className="modal-product-content">
                                            {this.props.product.content}
                                        </p>

                                        <form
                                            name="modal-form"
                                            className="modal-input-wrap"
                                            onSubmit={this.handleSubmit}
                                        >
                                            <div className="modal-input-size">
                                                <div className="input-size-text">
                                                    Size
                                                </div>
                                                <div className="input-size-wrap">
                                                    <div className="input-size">
                                                        <select
                                                            id="selected_size"
                                                            className="js-select2 select2-hidden-accessible"
                                                            name="selected_size"
                                                            tabIndex="-1"
                                                            aria-hidden="true"
                                                            onChange={
                                                                this
                                                                    .handleInputChange
                                                            }
                                                            value={
                                                                this.state
                                                                    .selected_size
                                                            }
                                                        >
                                                            <option
                                                                value={
                                                                    "default"
                                                                }
                                                                disabled
                                                            >
                                                                Choose an option
                                                            </option>
                                                            <option value={"s"}>
                                                                Size S
                                                            </option>
                                                            <option value={"m"}>
                                                                Size M
                                                            </option>
                                                            <option value={"l"}>
                                                                Size L
                                                            </option>
                                                            <option
                                                                value={"xl"}
                                                            >
                                                                Size XL
                                                            </option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="modal-input-color">
                                                <div className="input-color-text">
                                                    Color
                                                </div>
                                                <div className="input-color-wrap">
                                                    <div className="input-color">
                                                        <select
                                                            id="selected_color"
                                                            className="js-select2 select2-hidden-accessible"
                                                            name="selected_color"
                                                            tabIndex="-1"
                                                            aria-hidden="true"
                                                            onChange={
                                                                this
                                                                    .handleInputChange
                                                            }
                                                            value={
                                                                this.state
                                                                    .selected_color
                                                            }
                                                        >
                                                            <option
                                                                value={
                                                                    "default"
                                                                }
                                                                disabled
                                                            >
                                                                Choose an option
                                                            </option>
                                                            <option>Red</option>
                                                            <option
                                                                value={"blue"}
                                                            >
                                                                Blue
                                                            </option>
                                                            <option
                                                                value={"white"}
                                                            >
                                                                White
                                                            </option>
                                                            <option
                                                                value={"grey"}
                                                            >
                                                                Grey
                                                            </option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="modal-input-submit">
                                                <div className="input-submit-wrap">
                                                    <div className="wrap-num-product">
                                                        <div
                                                            className="btn-num-product-down"
                                                            onClick={
                                                                this
                                                                    .handleDownClick
                                                            }
                                                        >
                                                            <i className="fs-16 zmdi zmdi-minus"></i>
                                                        </div>
                                                        <input
                                                            id="num_of_product"
                                                            className="num-product"
                                                            type="number"
                                                            name="num_of_product"
                                                            value={
                                                                this.state
                                                                    .num_of_product
                                                            }
                                                            onChange={
                                                                this
                                                                    .handleInputChange
                                                            }
                                                        />
                                                        <div
                                                            className="btn-num-product-up"
                                                            onClick={
                                                                this
                                                                    .handleUpClick
                                                            }
                                                        >
                                                            <i className="fs-16 zmdi zmdi-plus"></i>
                                                        </div>
                                                    </div>
                                                    <input
                                                        type="submit"
                                                        className="js-addcart-detail"
                                                        value={"Add to cart"}
                                                    />
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        );
    }
}