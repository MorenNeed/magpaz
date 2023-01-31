import React from "react";
import "../../css/ProductItemElement.css";

export default class ProductItemElement extends React.Component
{
    render()
    {
        return(
        <>
            <div class={`col-sm-6 col-md-4 col-lg-3 isotope-item ${this.props.product.category.title}`}>
            {/* <!-- Block2 --> */}
                <div class="block-product">
                    <div class="block-product-img">
                        <img src={`${this.props.product.image_url}`} style={{height: '225px', width: '100%'}} alt="IMG-PRODUCT"/>

                        <a href="#" class="block-product-btn">
                            Quick View
                        </a>
                    </div>

                    <div class="block-product-txt">
                        <div class="block-product-txt-child1">
                            <a href="product-detail.html">
                            {this.props.product.title}
                            </a>

                            <span class="stext-105 cl3">
                            {this.props.product.price} UAH
                            </span>
                        </div>

                        <div class="block-product-txt-child2">
                            <a href="#" class="product-btn-addwish js-addwish">
                            <img class="icon-heart1" src="images/icons/icon-heart-01.png" alt="ICON"/>
                            <img class="icon-heart2" src="images/icons/icon-heart-02.png" alt="ICON"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
        )
    }
}