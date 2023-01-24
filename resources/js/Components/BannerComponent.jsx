import React from "react";
// import { Card, Container, Row, Col, ListGroup } from "react-bootstrap";
import "../../css/BannerComponent.css";
export default class BannerComponent extends React.Component
{
    render()
    {
        return(
            <>
                <section>
                    <div className="banner bg-white">
                        <div className="container">
                            <div className="row">
                                <div className="column col-md-6 col-xl-4">
                                    <div className="block">
                                        <img src="images/banner-01.jpg" alt="IMG-BANNER"></img>
                                        <a className="block-txt" href="product.html">
                                            <div className="block-txt-filling">
                                                <span className="block-name">Women</span>
                                            </div>
                                            <div className="block-txt-filling1">
                                                <div className="block-link">Shop Now</div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="column col-md-6 col-xl-4">
                                    <div className="block">
                                        <img src="images/banner-02.jpg" alt="IMG-BANNER"></img>
                                        <a className="block-txt" href="product.html">
                                            <div className="block-txt-filling">
                                                <span className="block-name">Man</span>
                                            </div>
                                            <div className="block-txt-filling1">
                                                <div className="block-link">Shop Now</div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="column col-md-6 col-xl-4">
                                    <div className="block">
                                        <img src="images/banner-03.jpg" alt="IMG-BANNER"></img>
                                        <a className="block-txt" href="product.html">
                                            <div className="block-txt-filling">
                                                <span className="block-name">Accessories</span>
                                            </div>
                                            <div className="block-txt-filling1">
                                                <div className="block-link">Shop Now</div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}