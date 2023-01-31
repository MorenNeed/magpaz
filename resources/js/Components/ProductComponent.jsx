import React from "react";
//import { Card, Container, Row, Col, ListGroup } from "react-bootstrap";
import '../../css/ProductComponent.css';
import ProductItemElement from "@/Elements/ProductItemElement";

// import '../css/main.css';
// import '../css/util.css';

export default class ProductComponent extends React.Component
{
    constructor(props)
    {
      super(props);
      this.state = {
        bypriceproducts: [],
        products: [],
        overviewClass: '',
        categoryFilter: "all",
        sortBy: {SortCategory: " ", SortElement: " "}
      };

      this.handleSortByClick = this.handleSortByClick.bind(this);
      this.handleCategoryFilterClick = this.handleCategoryFilterClick.bind(this);
    }
    filter(TimeoutTime)
    {
      setTimeout(() => {
        if(this.state.categoryFilter == "all")
        {
          this.setState({products: this.props.products});
        }
        if(this.state.categoryFilter != "all")
        {
            const filteredData = this.props.products.filter(product => product.category.title == this.state.categoryFilter);
            this.setState({products: filteredData});
        }
      }, TimeoutTime);
    }
    sort(TimeoutTime)
    {
      setTimeout(() => {
        if(this.state.sortBy.SortCategory == "sortBy")
        {
          if(this.state.sortBy.SortElement == "default")
          {
            const SortedData = this.state.products.sort((a, b) => (a.id > b.id) ? 1 : -1);
            this.setState({products: SortedData});
          }
          else if(this.state.sortBy.SortElement == "lth")
          {
            const SortedData = this.state.products.sort((a, b) => (a.price > b.price) ? 1 : -1);
            this.setState({products: SortedData});
          }
          else if(this.state.sortBy.SortElement == "htl")
          {
            const SortedData = this.state.products.sort((a, b) => (a.price < b.price) ? 1 : -1);
            this.setState({products: SortedData});
          }
        }
        if(this.state.sortBy.SortCategory == "price")
        {
          if(this.state.sortBy.SortElement == "all")
          {
            this.filter(0);
          }
          else if(this.state.sortBy.SortElement == "0150")
          {
            this.filter(0);
            setTimeout(() => {
              const filteredData = this.state.products.filter(product => (product.price >= 0 && product.price <=150));
              this.setState({products: filteredData});
            }, 200);
          }
          else if(this.state.sortBy.SortElement == "150300")
          {
            this.filter(0);
            setTimeout(() => {
              const filteredData = this.state.products.filter(product => (product.price >= 150 && product.price <=300));
              this.setState({products: filteredData});
            }, 200);
          }
          else if(this.state.sortBy.SortElement == "300450")
          {
            this.filter(0);
            setTimeout(() => {
              const filteredData = this.state.products.filter(product => (product.price >= 300 && product.price <=450));
              this.setState({products: filteredData});
            }, 200);
          }
          else if(this.state.sortBy.SortElement == "450600")
          {
            this.filter(0);
            setTimeout(() => {
              const filteredData = this.state.products.filter(product => (product.price >= 450 && product.price <=600));
              this.setState({products: filteredData});
            }, 200);
          }
          else if(this.state.sortBy.SortElement == "600+")
          {
            this.filter(0);
            setTimeout(() => {
              const filteredData = this.state.products.filter(product => (product.price > 600));
              this.setState({products: filteredData});
            }, 200);
          }
        }
      }, TimeoutTime);
    }
    handleCategoryFilterClick(event)
    {
      document.getElementsByClassName('hov-active')[0].classList.remove('hov-active');
      event.target.classList.add('hov-active');
      this.setState({categoryFilter : event.target.getAttribute('datafilter')});
      this.filter(200);
    }
    handleSortByClick(event)
    {
      let activeSort = document.querySelectorAll(`[filtertype=${event.target.getAttribute('filtertype')}]`);
      activeSort.forEach(item => {
        if(item.classList.contains('filter-link-active'))
        {
          item.classList.remove('filter-link-active');
        }
      });
      event.target.classList.add('filter-link-active');
      this.setState({sortBy : {SortCategory : event.target.getAttribute('filtertype'), SortElement: event.target.getAttribute('datafilter')}});
      this.sort(200);
    }
    componentDidMount()
    {
      if(this.props.page == "ProductPage")
      {
        this.setState({overviewClass: 'overview-product'});
      }
    }
    handleClick(event)
    {
      let showFilter = document.getElementsByClassName('js-show-filter').item(0);
      let showSearch = document.getElementsByClassName('js-show-search').item(0);
      let panelFilter = document.getElementsByClassName('panel-filter').item(0);
      let panelSearch = document.getElementsByClassName('panel-search').item(0);

      if(event.currentTarget === showFilter)
      {
        showFilter.classList.toggle('show-filter');
        panelFilter.classList.toggle('show-panel-filter');
        panelFilter.classList.toggle('slide-in');
        panelFilter.classList.toggle('slide-out');
        //  panelFilter.slid
        if(showSearch.classList.contains('show-search'))
        {
          showSearch.classList.remove('show-search');
          panelSearch.classList.remove('show-panel-search');
        }
      }
      if(event.currentTarget === showSearch)
      {
        showSearch.classList.toggle('show-search');
        panelSearch.classList.toggle('show-panel-search');
        panelSearch.classList.toggle('slide-in');
        panelSearch.classList.toggle('slide-out');
        //  panelFilter.slid
        if(showFilter.classList.contains('show-filter'))
        {
          showFilter.classList.remove('show-filter');
          panelFilter.classList.remove('show-panel-filter');
        }
      }
    }
    componentWillMount()
    {
      this.filter(3000);
    }
    render(){
        return(
          <>
            {/* Section */}
            <section class="product-section">
              <div class="product-container container">
                <div className={"overview " + this.state.overviewClass}>
                  <h3 class="overview-text">
                    Product Overview
                  </h3>
                </div>

                <div class="filter-table">
                  <div class="filter-categories">
                    <button class="filter-category hov-active" datafilter="all" onClick={this.handleCategoryFilterClick}>
                      All Products
                    </button>
                    {this.props.categories.map(category => (
                      <button id={category.id} class="filter-category" datafilter={category.title} onClick={this.handleCategoryFilterClick}>
                        {category.title}
                      </button>
                    ))}
                  </div>

                  <div class="filter-search">
                    <div class="filter js-show-filter" onClick={this.handleClick}>
                      <i class="bi bi-filter icon-filter"></i>
                      <i class="icon-close-filter bi bi-x dis-none"></i>
                      Filter
                    </div>

                    <div class="search js-show-search" onClick={this.handleClick}>
                      <i class="icon-search bi bi-search"></i>
                      <i class="icon-close-search bi bi-x dis-none"></i>
                      Search
                    </div>
                  </div>
                  
                  {/* <!-- Search product --> */}
                  <div class="panel-search slide-out">
                    <div class="wrap-panel-search">
                      <button class="search-button">
                        <i class="bi bi-search icon-panel-search"></i>
                      </button>

                      <input class="input-search" type="text" name="search-product" placeholder="Search"/>
                    </div>	
                  </div>

                  {/* <!-- Filter --> */}
                  <div class="panel-filter slide-out">
                    <div class="wrap-panel-filter">
                      <div class="filter-col1">
                        <div class="col-text">
                          Sort By
                        </div>

                        <ul>
                          <li class="col-li">
                            <button class="filter-link filter-link-active" filtertype="sortBy" datafilter="default" onClick={this.handleSortByClick}>
                              Default
                            </button>
                          </li>

                          <li class="col-li">
                            <button class="filter-link" filtertype="sortBy" datafilter="popularity" onClick={this.handleSortByClick}>
                              Popularity
                            </button>
                          </li>

                          <li class="col-li">
                            <button class="filter-link" filtertype="sortBy" datafilter="averageRating" onClick={this.handleSortByClick}>
                              Average rating
                            </button>
                          </li>

                          <li class="col-li">
                            <button class="filter-link" filtertype="sortBy" datafilter="newness" onClick={this.handleSortByClick}>
                              Newness
                            </button>
                          </li>

                          <li class="col-li">
                            <button class="filter-link" filtertype="sortBy" datafilter="lth" onClick={this.handleSortByClick}>
                              Price: Low to High
                            </button>
                          </li>

                          <li class="col-li">
                            <button class="filter-link" filtertype="sortBy" datafilter="htl" onClick={this.handleSortByClick}>
                              Price: High to Low
                            </button>
                          </li>
                        </ul>
                      </div>

                      <div class="filter-col2">
                        <div class="col-text">
                          Price
                        </div>

                        <ul>
                          <li class="col-li">
                            <button class="filter-link filter-link-active" filtertype="price" datafilter="all" onClick={this.handleSortByClick}>
                              All
                            </button>
                          </li>

                          <li class="col-li">
                            <button class="filter-link" filtertype="price" datafilter="0150" onClick={this.handleSortByClick}>
                              0.00UAH - 150.00UAH
                            </button>
                          </li>

                          <li class="col-li">
                            <button class="filter-link" filtertype="price" datafilter="150300" onClick={this.handleSortByClick}>
                              150.00UAH - 300.00UAH
                            </button>
                          </li>

                          <li class="col-li">
                            <button class="filter-link" filtertype="price" datafilter="300450" onClick={this.handleSortByClick}>
                              300.00UAH - 450.00UAH
                            </button>
                          </li>

                          <li class="col-li">
                            <button class="filter-link" filtertype="price" datafilter="450600" onClick={this.handleSortByClick}>
                              450.00UAH - 600.00UAH
                            </button>
                          </li>

                          <li class="col-li">
                            <button class="filter-link" filtertype="price" datafilter="600+" onClick={this.handleSortByClick}>
                              600.00+ UAH
                            </button>
                          </li>
                        </ul>
                      </div>

                      <div class="filter-col3">
                        <div class="col-text">
                          Color
                        </div>

                        <ul>
                          <li class="col-li">
                            <span class="color" style={{color: '#222'}}>
                              <i class="bi bi-circle-fill"></i>
                            </span>

                            <button class="filter-link" filtertype="color" datafilter="black">
                              Black
                            </button>
                          </li>

                          <li class="col-li">
                            <span class="color" style={{color: '#4272d7'}}>
                              <i class="bi bi-circle-fill"></i>
                            </span>

                            <a class="filter-link filter-link-active">
                              Blue
                            </a>
                          </li>

                          <li class="col-li">
                            <span class="color" style={{color: '#b3b3b3'}}>
                              <i class="bi bi-circle-fill"></i>
                            </span>

                            <a class="filter-link">
                              Grey
                            </a>
                          </li>

                          <li class="col-li">
                            <span class="color" style={{color: '#00ad5f'}}>
                              <i class="bi bi-circle-fill"></i>
                            </span>

                            <a class="filter-link">
                              Green
                            </a>
                          </li>

                          <li class="col-li">
                            <span class="color" style={{color: '#fa4251'}}>
                              <i class="bi bi-circle-fill"></i>
                            </span>

                            <a class="filter-link">
                              Red
                            </a>
                          </li>

                          <li class="col-li">
                            <span class="color" style={{color: '#aaa'}}>
                              <i class="bi bi-circle"></i>
                            </span>

                            <a class="filter-link">
                              White
                            </a>
                          </li>
                        </ul>
                      </div>

                      <div class="filter-col4">
                        <div class="col-text">
                          Tags
                        </div>

                        <div class="tags-wrap">
                          <a href="#" class="tag">
                            Fashion
                          </a>

                          <a href="#" class="tag">
                            Lifestyle
                          </a>

                          <a href="#" class="tag">
                            Denim
                          </a>

                          <a href="#" class="tag">
                            Streetstyle
                          </a>

                          <a href="#" class="tag">
                            Crafts
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="row isotope-grid">
                  {this.state.products.map(product => (
                    <ProductItemElement key={product.id} product={product}/>
                  )).slice(0,5)}
                </div>

                {/* <!-- Load more --> */}
                <div class="load-more">
                  <a href="#">
                    Load More
                  </a>
                </div>
              </div>
            </section>
          </>
        );
    }
}