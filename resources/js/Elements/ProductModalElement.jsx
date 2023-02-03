import React from "react";
import "../../css/ProductModalElement.css";

export default class ProductModalElement extends React.Component
{

    render()
    {
        return (
            <li>
                <div className="wrap-modal show-modal">
                    <div className="overlay-modal js-hide-modal"></div>
                    <div className="container">
                        <div className="how-pos3-parent">
                            <button className="how-pos3 hov3 js-hide-modal1">
                                <img
                                    src="images/icons/icon-close.png"
                                    alt="CLOSE"
                                />
                            </button>
                            <div className="row">
                                <div className="col-md-6 col-lg-7 p-b-30">
                                    <div className="p-l-25 p-r-30 p-lr-0-lg">
                                        <div className="wrap-slick3">
                                            <div className="wrap-slick3-dots">
                                                <ul
                                                    className="slick3-dots"
                                                    style={{}}
                                                    role="tablist"
                                                >
                                                    <li
                                                        className="slick-active"
                                                        role="presentation"
                                                    >
                                                        <img src=" images/product-detail-01.jpg " />
                                                        <div className="slick3-dot-overlay"></div>
                                                    </li>
                                                    <li role="presentation">
                                                        <img src=" images/product-detail-02.jpg " />
                                                        <div className="slick3-dot-overlay"></div>
                                                    </li>
                                                    <li role="presentation">
                                                        <img src=" images/product-detail-03.jpg " />
                                                        <div className="slick3-dot-overlay"></div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="wrap-slick3-arrows flex-sb-m flex-w">
                                                <button
                                                    className="arrow-slick3 prev-slick3 slick-arrow"
                                                    style={{}}
                                                >
                                                    <i
                                                        className="fa fa-angle-left"
                                                        aria-hidden="true"
                                                    ></i>
                                                </button>
                                                <button
                                                    className="arrow-slick3 next-slick3 slick-arrow"
                                                    style={{}}
                                                >
                                                    <i
                                                        className="fa fa-angle-right"
                                                        aria-hidden="true"
                                                    ></i>
                                                </button>
                                            </div>
                                            <div className="slick3 gallery-lb slick-initialized slick-slider slick-dotted">
                                                <div className="slick-list draggable">
                                                    <div
                                                        className="slick-track"
                                                        style={{
                                                            opacity: "1",
                                                            width: "1539px",
                                                        }}
                                                    >
                                                        <div
                                                            className="item-slick3 slick-slide slick-current slick-active"
                                                            data-thumb="images/product-detail-01.jpg"
                                                            data-slick-index="0"
                                                            aria-hidden="false"
                                                            style={{
                                                                width: "513px",
                                                                position:
                                                                    "relative",
                                                                left: "0px",
                                                                top: "0px",
                                                                zIndex: "999",
                                                                opacity: "1",
                                                            }}
                                                            tabIndex="0"
                                                            role="tabpanel"
                                                            id="slick-slide10"
                                                            aria-describedby="slick-slide-control10"
                                                        >
                                                            <div className="wrap-pic-w pos-relative">
                                                                <img
                                                                    src="images/product-detail-01.jpg"
                                                                    alt="IMG-PRODUCT"
                                                                />
                                                                <a
                                                                    className="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04"
                                                                    href="images/product-detail-01.jpg"
                                                                    tabIndex="0"
                                                                >
                                                                    <i className="fa fa-expand"></i>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="item-slick3 slick-slide"
                                                            data-thumb="images/product-detail-02.jpg"
                                                            data-slick-index="1"
                                                            aria-hidden="true"
                                                            style={{
                                                                width: "513px",
                                                                position:
                                                                    "relative",
                                                                left: "-513px",
                                                                top: "0px",
                                                                zIndex: "998",
                                                                opacity: "0",
                                                            }}
                                                            tabIndex="-1"
                                                            role="tabpanel"
                                                            id="slick-slide11"
                                                            aria-describedby="slick-slide-control11"
                                                        >
                                                            <div className="wrap-pic-w pos-relative">
                                                                <img
                                                                    src="images/product-detail-02.jpg"
                                                                    alt="IMG-PRODUCT"
                                                                />
                                                                <a
                                                                    className="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04"
                                                                    href="images/product-detail-02.jpg"
                                                                    tabIndex="-1"
                                                                >
                                                                    <i className="fa fa-expand"></i>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="item-slick3 slick-slide"
                                                            data-thumb="images/product-detail-03.jpg"
                                                            data-slick-index="2"
                                                            aria-hidden="true"
                                                            style={{
                                                                width: "513px",
                                                                position:
                                                                    "relative",
                                                                left: "-1026px",
                                                                top: "0px",
                                                                zIndex: "998",
                                                                opacity: "0",
                                                            }}
                                                            tabIndex="-1"
                                                            role="tabpanel"
                                                            id="slick-slide12"
                                                            aria-describedby="slick-slide-control12"
                                                        >
                                                            <div className="wrap-pic-w pos-relative">
                                                                <img
                                                                    src="images/product-detail-03.jpg"
                                                                    alt="IMG-PRODUCT"
                                                                />
                                                                <a
                                                                    className="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04"
                                                                    href="images/product-detail-03.jpg"
                                                                    tabIndex="-1"
                                                                >
                                                                    <i className="fa fa-expand"></i>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-5 p-b-30">
                                    <div className="p-r-50 p-t-5 p-lr-0-lg">
                                        <h4 className="mtext-105 cl2 js-name-detail p-b-14">
                                            Lightweight Jacket
                                        </h4>
                                        <span className="mtext-106 cl2">
                                            $58.79
                                        </span>
                                        <p className="stext-102 cl3 p-t-23">
                                            Nulla eget sem vitae eros pharetra
                                            viverra. Nam vitae luctus ligula.
                                            Mauris consequat ornare feugiat.
                                        </p>

                                        <div className="p-t-33">
                                            <div className="flex-w flex-r-m p-b-10">
                                                <div className="size-203 flex-c-m respon6">
                                                    Size
                                                </div>
                                                <div className="size-204 respon6-next">
                                                    <div className="rs1-select2 bor8 bg0">
                                                        <select
                                                            className="js-select2 select2-hidden-accessible"
                                                            name="time"
                                                            tabIndex="-1"
                                                            aria-hidden="true"
                                                        >
                                                            <option>
                                                                Choose an option
                                                            </option>
                                                            <option>
                                                                Size S
                                                            </option>
                                                            <option>
                                                                Size M
                                                            </option>
                                                            <option>
                                                                Size L
                                                            </option>
                                                            <option>
                                                                Size XL
                                                            </option>
                                                        </select>
                                                        <span
                                                            className="select2 select2-container select2-container--default"
                                                            dir="ltr"
                                                            style={{
                                                                width: "139.683px",
                                                            }}
                                                        >
                                                            <span className="selection">
                                                                <span
                                                                    className="select2-selection select2-selection--single"
                                                                    role="combobox"
                                                                    aria-haspopup="true"
                                                                    aria-expanded="false"
                                                                    tabIndex="0"
                                                                    aria-labelledby="select2-time-5n-container"
                                                                >
                                                                    <span
                                                                        className="select2-selection__rendered"
                                                                        id="select2-time-5n-container"
                                                                        title="Choose an option"
                                                                    >
                                                                        Choose
                                                                        an
                                                                        option
                                                                    </span>
                                                                    <span
                                                                        className="select2-selection__arrow"
                                                                        role="presentation"
                                                                    >
                                                                        <b role="presentation"></b>
                                                                    </span>
                                                                </span>
                                                            </span>
                                                            <span
                                                                className="dropdown-wrapper"
                                                                aria-hidden="true"
                                                            ></span>
                                                        </span>
                                                        <div className="dropDownSelect2"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex-w flex-r-m p-b-10">
                                                <div className="size-203 flex-c-m respon6">
                                                    Color
                                                </div>
                                                <div className="size-204 respon6-next">
                                                    <div className="rs1-select2 bor8 bg0">
                                                        <select
                                                            className="js-select2 select2-hidden-accessible"
                                                            name="time"
                                                            tabIndex="-1"
                                                            aria-hidden="true"
                                                        >
                                                            <option>
                                                                Choose an option
                                                            </option>
                                                            <option>Red</option>
                                                            <option>
                                                                Blue
                                                            </option>
                                                            <option>
                                                                White
                                                            </option>
                                                            <option>
                                                                Grey
                                                            </option>
                                                        </select>
                                                        <span
                                                            className="select2 select2-container select2-container--default"
                                                            dir="ltr"
                                                            style={{
                                                                width: "139.683px",
                                                            }}
                                                        >
                                                            <span className="selection">
                                                                <span
                                                                    className="select2-selection select2-selection--single"
                                                                    role="combobox"
                                                                    aria-haspopup="true"
                                                                    aria-expanded="false"
                                                                    tabIndex="0"
                                                                    aria-labelledby="select2-time-bf-container"
                                                                >
                                                                    <span
                                                                        className="select2-selection__rendered"
                                                                        id="select2-time-bf-container"
                                                                        title="Choose an option"
                                                                    >
                                                                        Choose
                                                                        an
                                                                        option
                                                                    </span>
                                                                    <span
                                                                        className="select2-selection__arrow"
                                                                        role="presentation"
                                                                    >
                                                                        <b role="presentation"></b>
                                                                    </span>
                                                                </span>
                                                            </span>
                                                            <span
                                                                className="dropdown-wrapper"
                                                                aria-hidden="true"
                                                            ></span>
                                                        </span>
                                                        <div className="dropDownSelect2"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex-w flex-r-m p-b-10">
                                                <div className="size-204 flex-w flex-m respon6-next">
                                                    <div className="wrap-num-product flex-w m-r-20 m-tb-10">
                                                        <div className="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m">
                                                            <i className="fs-16 zmdi zmdi-minus"></i>
                                                        </div>
                                                        <input
                                                            className="mtext-104 cl3 txt-center num-product"
                                                            type="number"
                                                            name="num-product"
                                                            defaultValue={1}
                                                        />
                                                        <div className="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m">
                                                            <i className="fs-16 zmdi zmdi-plus"></i>
                                                        </div>
                                                    </div>
                                                    <button className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04 js-addcart-detail">
                                                        Add to cart
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex-w flex-m p-l-100 p-t-40 respon7">
                                            <div className="flex-m bor9 p-r-10 m-r-11">
                                                <a
                                                    href="#"
                                                    className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 js-addwish-detail tooltip100"
                                                    data-tooltip="Add to Wishlist"
                                                >
                                                    <i className="zmdi zmdi-favorite"></i>
                                                </a>
                                            </div>
                                            <a
                                                href="#"
                                                className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100"
                                                data-tooltip="Facebook"
                                            >
                                                <i className="fa fa-facebook"></i>
                                            </a>
                                            <a
                                                href="#"
                                                className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100"
                                                data-tooltip="Twitter"
                                            >
                                                <i className="fa fa-twitter"></i>
                                            </a>
                                            <a
                                                href="#"
                                                className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100"
                                                data-tooltip="Google Plus"
                                            >
                                                <i className="fa fa-google-plus"></i>
                                            </a>
                                        </div>
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