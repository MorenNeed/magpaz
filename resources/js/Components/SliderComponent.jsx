import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
// import { Card, Container, Row, Col, ListGroup } from "react-bootstrap";
import '../../css/SliderComponent.css'; 

export default class SliderComponent extends React.Component
{
    render()
    {
        return(
            <>
            <Carousel autoPlay={true} interval={5000} showThumbs={false} infiniteLoop={true} dynamicHeight={true} swipeable={true} showStatus={false} animationHandler={"fade"}>
                <div className="container wrap-container" style={{backgroundImage: "url('images/slide-01.jpg')"}}>
                    <div className="wrap-category-container">
                        <div className="category-container">
                            <div className="wrap-category d-flex h-full p-5">
                                <div className="layer-slick">
                                    <h2 className="category">
                                        New arrivals
                                    </h2>
                                </div>
                                <div className="layer-slick shop-button-layer">
                                    <a href="product.html" className="shop-button">
                                        Shop Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container wrap-container" style={{backgroundImage: "url('images/slide-02.jpg')"}}>
                    <div className="wrap-category-container">
                        <div className="category-container">
                            <div className="wrap-category d-flex h-full p-5">
                                <div className="layer-slick">
                                    <h2 className="category">
                                        New arrivals
                                    </h2>
                                </div>
                                <div className="layer-slick shop-button-layer">
                                    <a href="product.html" className="shop-button">
                                        Shop Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container wrap-container" style={{backgroundImage: "url('images/slide-03.jpg')"}}>
                    <div className="wrap-category-container">
                        <div className="category-container">
                            <div className="wrap-category d-flex h-full p-5">
                                <div className="layer-slick">
                                    <h2 className="category">
                                        New arrivals
                                    </h2>
                                </div>
                                <div className="layer-slick shop-button-layer">
                                    <a href="product.html" className="shop-button">
                                        Shop Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel>
            </>
        );
    }
}