import React from "react";
//import { Card, Container, Row, Col, ListGroup } from "react-bootstrap";
import "../../css/ProductComponent.css";
import ProductItemElement from "@/Elements/ProductItemElement";
import ProductModalElement from "@/Elements/ProductModalElement";

// import '../css/main.css';
// import '../css/util.css';

export default class ProductComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bypriceproducts: [],
            products: [],
            overviewClass: "",
            categoryFilter: "all",
            sortBy: "default",
            filterprice: "all",
            filtercolors: " ",
        };

        this.handleSortByClick = this.handleSortByClick.bind(this);
        this.handleCategoryFilterClick =
            this.handleCategoryFilterClick.bind(this);
        this.handleFilterPriceClick = this.handleFilterPriceClick.bind(this);
    }
    filter(TimeoutTime) {
        setTimeout(() => {
            if (this.state.categoryFilter == "all") {
                this.setState({ products: this.props.products });
            }
            if (this.state.categoryFilter != "all") {
                const filteredData = this.props.products.filter(
                    (product) =>
                        product.category.title == this.state.categoryFilter
                );
                this.setState({ products: filteredData });
            }
        }, TimeoutTime);
    }
    sort(TimeoutTime) {
        setTimeout(() => {
            if (this.state.sortBy == "default") {
                const SortedData = this.state.products.sort((a, b) =>
                    a.id > b.id ? 1 : -1
                );
                this.setState({ products: SortedData });
            } else if (this.state.sortBy == "lth") {
                const SortedData = this.state.products.sort((a, b) =>
                    a.price > b.price ? 1 : -1
                );
                this.setState({ products: SortedData });
            } else if (this.state.sortBy == "htl") {
                const SortedData = this.state.products.sort((a, b) =>
                    a.price < b.price ? 1 : -1
                );
                this.setState({ products: SortedData });
            }
        }, TimeoutTime);
    }
    filterprice(TimeoutTime) {
        setTimeout(() => {
            if (this.state.filterprice == "all") {
                this.filter(0);
            } else if (this.state.filterprice == "0150") {
                this.filter(0);
                setTimeout(() => {
                    const filteredData = this.state.products.filter(
                        (product) => product.price >= 0 && product.price <= 150
                    );
                    this.setState({ products: filteredData });
                }, 200);
            } else if (this.state.filterprice == "150300") {
                this.filter(0);
                setTimeout(() => {
                    const filteredData = this.state.products.filter(
                        (product) =>
                            product.price >= 150 && product.price <= 300
                    );
                    this.setState({ products: filteredData });
                }, 200);
            } else if (this.state.filterprice == "300450") {
                this.filter(0);
                setTimeout(() => {
                    const filteredData = this.state.products.filter(
                        (product) =>
                            product.price >= 300 && product.price <= 450
                    );
                    this.setState({ products: filteredData });
                }, 200);
            } else if (this.state.filterprice == "450600") {
                this.filter(0);
                setTimeout(() => {
                    const filteredData = this.state.products.filter(
                        (product) =>
                            product.price >= 450 && product.price <= 600
                    );
                    this.setState({ products: filteredData });
                }, 200);
            } else if (this.state.filterprice == "600+") {
                this.filter(0);
                setTimeout(() => {
                    const filteredData = this.state.products.filter(
                        (product) => product.price > 600
                    );
                    this.setState({ products: filteredData });
                }, 200);
            }
        }, TimeoutTime);
    }
    handleCategoryFilterClick(event) {
        document
            .getElementsByClassName("hov-active")[0]
            .classList.remove("hov-active");
        event.target.classList.add("hov-active");
        this.setState({
            categoryFilter: event.target.getAttribute("datafilter"),
        });
        this.filter(200);
    }
    handleSortByClick(event) {
        let activeSort = document.querySelectorAll(
            `[filtertype=${event.target.getAttribute("filtertype")}]`
        );
        activeSort.forEach((item) => {
            if (item.classList.contains("filter-link-active")) {
                item.classList.remove("filter-link-active");
            }
        });
        event.target.classList.add("filter-link-active");
        this.setState({ sortBy: event.target.getAttribute("datafilter") });
        this.sort(200);
    }
    handleFilterPriceClick(event) {
        let activeSort = document.querySelectorAll(
            `[filtertype=${event.target.getAttribute("filtertype")}]`
        );
        activeSort.forEach((item) => {
            if (item.classList.contains("filter-link-active")) {
                item.classList.remove("filter-link-active");
            }
        });
        event.target.classList.add("filter-link-active");
        this.setState({ filterprice: event.target.getAttribute("datafilter") });
        this.filterprice(200);
    }
    componentDidMount() {
        if (this.props.page == "ProductPage") {
            this.setState({ overviewClass: "overview-product" });
        }
    }
    handleClick(event) {
        let showFilter = document
            .getElementsByClassName("js-show-filter")
            .item(0);
        let showSearch = document
            .getElementsByClassName("js-show-search")
            .item(0);
        let panelFilter = document
            .getElementsByClassName("panel-filter")
            .item(0);
        let panelSearch = document
            .getElementsByClassName("panel-search")
            .item(0);

        if (event.currentTarget === showFilter) {
            showFilter.classList.toggle("show-filter");
            panelFilter.classList.toggle("show-panel-filter");
            panelFilter.classList.toggle("slide-in");
            panelFilter.classList.toggle("slide-out");
            //  panelFilter.slid
            if (showSearch.classList.contains("show-search")) {
                showSearch.classList.remove("show-search");
                panelSearch.classList.remove("show-panel-search");
            }
        }
        if (event.currentTarget === showSearch) {
            showSearch.classList.toggle("show-search");
            panelSearch.classList.toggle("show-panel-search");
            panelSearch.classList.toggle("slide-in");
            panelSearch.classList.toggle("slide-out");
            //  panelFilter.slid
            if (showFilter.classList.contains("show-filter")) {
                showFilter.classList.remove("show-filter");
                panelFilter.classList.remove("show-panel-filter");
            }
        }
    }
    UNSAFE_componentWillMount() {
        this.filter(3000);
    }
    render() {
        return (
            <>
                {/* Section */}
                <section className="product-section">
                    <div className="product-container container">
                        <div className={"overview " + this.state.overviewClass}>
                            <h3 className="overview-text">Product Overview</h3>
                        </div>

                        <div className="filter-table">
                            <div className="filter-categories">
                                <button
                                    className="filter-category hov-active"
                                    datafilter="all"
                                    onClick={this.handleCategoryFilterClick}
                                >
                                    All Products
                                </button>
                                {this.props.categories.map((category) => (
                                    <button
                                        key={category.id}
                                        className="filter-category"
                                        datafilter={category.title}
                                        onClick={this.handleCategoryFilterClick}
                                    >
                                        {category.title}
                                    </button>
                                ))}
                            </div>

                            <div className="filter-search">
                                <div
                                    className="filter js-show-filter"
                                    onClick={this.handleClick}
                                >
                                    <i className="bi bi-filter icon-filter"></i>
                                    <i className="icon-close-filter bi bi-x dis-none"></i>
                                    Filter
                                </div>

                                <div
                                    className="search js-show-search"
                                    onClick={this.handleClick}
                                >
                                    <i className="icon-search bi bi-search"></i>
                                    <i className="icon-close-search bi bi-x dis-none"></i>
                                    Search
                                </div>
                            </div>

                            {/* <!-- Search product --> */}
                            <div className="panel-search slide-out">
                                <div className="wrap-panel-search">
                                    <button className="search-button">
                                        <i className="bi bi-search icon-panel-search"></i>
                                    </button>

                                    <input
                                        className="input-search"
                                        type="text"
                                        name="search-product"
                                        placeholder="Search"
                                    />
                                </div>
                            </div>

                            {/* <!-- Filter --> */}
                            <div className="panel-filter slide-out">
                                <div className="wrap-panel-filter">
                                    <div className="filter-col1">
                                        <div className="col-text">Sort By</div>

                                        <ul>
                                            <li className="col-li">
                                                <button
                                                    className="filter-link filter-link-active"
                                                    filtertype="sortBy"
                                                    datafilter="default"
                                                    onClick={
                                                        this.handleSortByClick
                                                    }
                                                >
                                                    Default
                                                </button>
                                            </li>

                                            <li className="col-li">
                                                <button
                                                    className="filter-link"
                                                    filtertype="sortBy"
                                                    datafilter="popularity"
                                                    onClick={
                                                        this.handleSortByClick
                                                    }
                                                >
                                                    Popularity
                                                </button>
                                            </li>

                                            <li className="col-li">
                                                <button
                                                    className="filter-link"
                                                    filtertype="sortBy"
                                                    datafilter="averageRating"
                                                    onClick={
                                                        this.handleSortByClick
                                                    }
                                                >
                                                    Average rating
                                                </button>
                                            </li>

                                            <li className="col-li">
                                                <button
                                                    className="filter-link"
                                                    filtertype="sortBy"
                                                    datafilter="newness"
                                                    onClick={
                                                        this.handleSortByClick
                                                    }
                                                >
                                                    Newness
                                                </button>
                                            </li>

                                            <li className="col-li">
                                                <button
                                                    className="filter-link"
                                                    filtertype="sortBy"
                                                    datafilter="lth"
                                                    onClick={
                                                        this.handleSortByClick
                                                    }
                                                >
                                                    Price: Low to High
                                                </button>
                                            </li>

                                            <li className="col-li">
                                                <button
                                                    className="filter-link"
                                                    filtertype="sortBy"
                                                    datafilter="htl"
                                                    onClick={
                                                        this.handleSortByClick
                                                    }
                                                >
                                                    Price: High to Low
                                                </button>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="filter-col2">
                                        <div className="col-text">Price</div>

                                        <ul>
                                            <li className="col-li">
                                                <button
                                                    className="filter-link filter-link-active"
                                                    filtertype="price"
                                                    datafilter="all"
                                                    onClick={
                                                        this
                                                            .handleFilterPriceClick
                                                    }
                                                >
                                                    All
                                                </button>
                                            </li>

                                            <li className="col-li">
                                                <button
                                                    className="filter-link"
                                                    filtertype="price"
                                                    datafilter="0150"
                                                    onClick={
                                                        this
                                                            .handleFilterPriceClick
                                                    }
                                                >
                                                    0.00UAH - 150.00UAH
                                                </button>
                                            </li>

                                            <li className="col-li">
                                                <button
                                                    className="filter-link"
                                                    filtertype="price"
                                                    datafilter="150300"
                                                    onClick={
                                                        this
                                                            .handleFilterPriceClick
                                                    }
                                                >
                                                    150.00UAH - 300.00UAH
                                                </button>
                                            </li>

                                            <li className="col-li">
                                                <button
                                                    className="filter-link"
                                                    filtertype="price"
                                                    datafilter="300450"
                                                    onClick={
                                                        this
                                                            .handleFilterPriceClick
                                                    }
                                                >
                                                    300.00UAH - 450.00UAH
                                                </button>
                                            </li>

                                            <li className="col-li">
                                                <button
                                                    className="filter-link"
                                                    filtertype="price"
                                                    datafilter="450600"
                                                    onClick={
                                                        this
                                                            .handleFilterPriceClick
                                                    }
                                                >
                                                    450.00UAH - 600.00UAH
                                                </button>
                                            </li>

                                            <li className="col-li">
                                                <button
                                                    className="filter-link"
                                                    filtertype="price"
                                                    datafilter="600+"
                                                    onClick={
                                                        this
                                                            .handleFilterPriceClick
                                                    }
                                                >
                                                    600.00+ UAH
                                                </button>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="filter-col3">
                                        <div className="col-text">Color</div>

                                        <ul>
                                            {this.props.colors.map((color) => (
                                                <li key={color.id} className="col-li">
                                                    <span
                                                        className="color"
                                                        style={{
                                                            color: color.color,
                                                        }}
                                                    >
                                                        <i className="bi bi-circle-fill"></i>
                                                    </span>
                                                    <button
                                                        className="filter-link"
                                                        filtertype="color"
                                                        datafilter={color.title}
                                                    >
                                                        {color.title}
                                                    </button>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="filter-col4">
                                        <div className="col-text">Tags</div>

                                        <div className="tags-wrap">
                                            {this.props.tags.map((tag) => (
                                                <button key={tag.id} className="tag">
                                                    {tag.title}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <ul className="row isotope-grid">
                            {this.state.products
                                .map((product) => (
                                    <ProductItemElement
                                        key={product.id}
                                        product={product}
                                    />
                                ))
                            }
                        </ul>

                        {/* <!-- Load more --> */}
                        <div className="load-more">
                            <a href="#">Load More</a>
                        </div>

                        <ul className="row isotope-grid">
                            {this.state.products
                                .map((product) => (
                                    <ProductModalElement
                                        key={product.id}
                                        name={product.id}
                                        product={product}
                                        onAddToCart={this.props.onAddToCart}
                                    />
                                ))
                            }
                        </ul>
                    </div>
                </section>
            </>
        );
    }
}
