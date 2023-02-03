import React from "react";
import "../../css/ProductItemElement.css";

export default class ProductItemElement extends React.Component
{
    constructor(props)
    {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(event)
    {
        document.getElementById("wrap-modal" + this.props.product.id).classList.add('show-modal');
    }
    render()
    {
        return (
            <li
                className={`col-sm-6 col-md-4 col-lg-3 isotope-item ${this.props.product.category.title}`}
            >
                {/* <!-- Block2 --> */}
                <div className="block-product">
                    <div className="block-product-img">
                        <img
                            src={`${this.props.product.image_url}`}
                            style={{ height: "225px", width: "100%" }}
                            alt="IMG-PRODUCT"
                        />

                        <button className="block-product-btn" onClick={this.handleClick}>
                            Quick View
                        </button>
                    </div>

                    <div className="block-product-txt">
                        <div className="block-product-txt-child1">
                            <a href="product-detail.html">
                                {this.props.product.title}
                            </a>

                            <span className="stext-105 cl3">
                                {this.props.product.price} UAH
                            </span>
                        </div>

                        <div className="block-product-txt-child2">
                            <a
                                href="#"
                                className="product-btn-addwish js-addwish"
                            >
                                <img
                                    className="icon-heart1"
                                    src="images/icons/icon-heart-01.png"
                                    alt="ICON"
                                />
                                <img
                                    className="icon-heart2"
                                    src="images/icons/icon-heart-02.png"
                                    alt="ICON"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </li>
        );
    }
}