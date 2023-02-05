import React from "react";
import { Navbar, Nav, Container } from 'react-bootstrap'
import '../../css/HeaderComponent.css';
export default class HeaderComponent extends React.Component
{
    constructor(props)
    {
      super(props);
      this.state = {
        headerClass: '',
        navbarClass: ''
      };
    }
    componentDidMount()
    {
      if(this.props.page == "ProductPage" || this.props.page == "CheckoutPage")
      {
        this.setState({headerClass: 'header-product'});
        this.setState({navbarClass: 'navbar-product'});
      }
    }
    cartProcess()
    {
        document.getElementsByClassName('js-panel-cart')[0].classList.toggle('show-header-cart');
    }
    menuToggle()
    {
        document.getElementById('navbarSupportedContent').classList.toggle('menu-show');
        document.getElementById('navbarSupportedContent').classList.toggle('menu-hide');
        document.getElementsByClassName('carousel-root')[0].classList.toggle('slide-carousel');
    }
    render()
    {
        return (
            <>
                <header className={this.state.headerClass}>
                    <nav
                        className={`navbar navbar-expand-lg navbar-light ${this.props.navFix} ${this.state.navbarClass}`}
                    >
                        <div className="container px-4 px-lg-5">
                            <a className="navbar-brand" href="/">
                                MagPaz
                            </a>
                            <button
                                className="navbar-toggler"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                                onClick={this.menuToggle}
                            >
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div
                                className="collapse navbar-collapse menu-hide"
                                id="navbarSupportedContent"
                            >
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                                    <li className="nav-item">
                                        <a
                                            className="nav-link active"
                                            aria-current="page"
                                            href="/"
                                        >
                                            Home
                                        </a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a
                                            className="nav-link dropdown-toggle"
                                            id="navbarDropdown"
                                            href="#"
                                            role="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            Shop
                                        </a>
                                        <ul
                                            className="dropdown-menu"
                                            aria-labelledby="navbarDropdown"
                                        >
                                            <li>
                                                <a
                                                    className="dropdown-item"
                                                    href="#!"
                                                >
                                                    All Products
                                                </a>
                                            </li>
                                            <li>
                                                <hr className="dropdown-divider" />
                                            </li>
                                            <li>
                                                <a
                                                    className="dropdown-item"
                                                    href="#!"
                                                >
                                                    Popular Items
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="dropdown-item"
                                                    href="#!"
                                                >
                                                    New Arrivals
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/about">
                                            About
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/contact">
                                            Contact
                                        </a>
                                    </li>
                                </ul>
                                <button
                                    id="cartbutton"
                                    className="cart btn btn-outline-dark"
                                    onClick={this.cartProcess}
                                >
                                    <i className="bi-cart-fill me-1"></i>
                                    Cart
                                    <span className="badge bg-dark text-white ms-1 rounded-pill">
                                        0
                                    </span>
                                </button>

                                <a
                                    style={{ marginLeft: ".25rem" }}
                                    className="d-flex btn btn-outline-dark"
                                    href="/login"
                                >
                                    <i className="bi-person-fill me-1"></i>
                                    Login
                                </a>
                            </div>
                        </div>
                    </nav>
                </header>
            </>
        );
    }
}