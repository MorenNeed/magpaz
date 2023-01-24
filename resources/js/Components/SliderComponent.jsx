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
            <Carousel autoPlay={true} interval={5000} infiniteLoop={true} dynamicHeight={true} swipeable={true} showStatus={false} animationHandler={"fade"}>
                <div class="container wrap-container" style={{backgroundImage: "url('images/slide-01.jpg')"}}>
                    <div class="wrap-category-container">
                        <div class="category-container">
                            <div class="wrap-category d-flex h-full p-5">
                                <div class="layer-slick">
                                    <h2 class="category">
                                        New arrivals
                                    </h2>
                                </div>
                                <div class="layer-slick shop-button-layer">
                                    <a href="product.html" class="shop-button">
                                        Shop Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container wrap-container" style={{backgroundImage: "url('images/slide-02.jpg')"}}>
                    <div class="wrap-category-container">
                        <div class="category-container">
                            <div class="wrap-category d-flex h-full p-5">
                                <div class="layer-slick">
                                    <h2 class="category">
                                        New arrivals
                                    </h2>
                                </div>
                                <div class="layer-slick shop-button-layer">
                                    <a href="product.html" class="shop-button">
                                        Shop Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container wrap-container" style={{backgroundImage: "url('images/slide-03.jpg')"}}>
                    <div class="wrap-category-container">
                        <div class="category-container">
                            <div class="wrap-category d-flex h-full p-5">
                                <div class="layer-slick">
                                    <h2 class="category">
                                        New arrivals
                                    </h2>
                                </div>
                                <div class="layer-slick shop-button-layer">
                                    <a href="product.html" class="shop-button">
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