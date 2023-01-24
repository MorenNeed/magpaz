import React from "react";
import ProductItemElement from "../Elements/ProductItemElement";
//import { Card, Container, Row, Col, ListGroup } from "react-bootstrap";
import '../../css/ProductComponent.css';
// import '../css/main.css';
// import '../css/util.css';

export default class ProductComponent extends React.Component
{
    constructor(props)
    {
      super(props);
      this.state = {
        categoryFilter: '',
        overviewClass: '',
      };
    }
    handleCategoryFilter(event)
    {
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
                    <button class="filter-category hov-active" data-filter="*">
                      All Products
                    </button>
                    {this.props.categories.map(category => (
                      <button id={category.id} class="filter-category" data-filter={category.title} onClick={this.handleCategoryFilter}>
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
                            <a href="#" class="filter-link">
                              Default
                            </a>
                          </li>

                          <li class="col-li">
                            <a href="#" class="filter-link">
                              Popularity
                            </a>
                          </li>

                          <li class="col-li">
                            <a href="#" class="filter-link">
                              Average rating
                            </a>
                          </li>

                          <li class="col-li">
                            <a href="#" class="filter-link filter-link-active">
                              Newness
                            </a>
                          </li>

                          <li class="col-li">
                            <a href="#" class="filter-link">
                              Price: Low to High
                            </a>
                          </li>

                          <li class="col-li">
                            <a href="#" class="filter-link">
                              Price: High to Low
                            </a>
                          </li>
                        </ul>
                      </div>

                      <div class="filter-col2">
                        <div class="col-text">
                          Price
                        </div>

                        <ul>
                          <li class="col-li">
                            <a href="#" class="filter-link filter-link-active">
                              All
                            </a>
                          </li>

                          <li class="col-li">
                            <a href="#" class="filter-link">
                              $0.00 - $50.00
                            </a>
                          </li>

                          <li class="col-li">
                            <a href="#" class="filter-link">
                              $50.00 - $100.00
                            </a>
                          </li>

                          <li class="col-li">
                            <a href="#" class="filter-link">
                              $100.00 - $150.00
                            </a>
                          </li>

                          <li class="col-li">
                            <a href="#" class="filter-link">
                              $150.00 - $200.00
                            </a>
                          </li>

                          <li class="col-li">
                            <a href="#" class="filter-link">
                              $200.00+
                            </a>
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

                            <a href="#" class="filter-link">
                              Black
                            </a>
                          </li>

                          <li class="col-li">
                            <span class="color" style={{color: '#4272d7'}}>
                              <i class="bi bi-circle-fill"></i>
                            </span>

                            <a href="#" class="filter-link filter-link-active">
                              Blue
                            </a>
                          </li>

                          <li class="col-li">
                            <span class="color" style={{color: '#b3b3b3'}}>
                              <i class="bi bi-circle-fill"></i>
                            </span>

                            <a href="#" class="filter-link">
                              Grey
                            </a>
                          </li>

                          <li class="col-li">
                            <span class="color" style={{color: '#00ad5f'}}>
                              <i class="bi bi-circle-fill"></i>
                            </span>

                            <a href="#" class="filter-link">
                              Green
                            </a>
                          </li>

                          <li class="col-li">
                            <span class="color" style={{color: '#fa4251'}}>
                              <i class="bi bi-circle-fill"></i>
                            </span>

                            <a href="#" class="filter-link">
                              Red
                            </a>
                          </li>

                          <li class="col-li">
                            <span class="color" style={{color: '#aaa'}}>
                              <i class="bi bi-circle"></i>
                            </span>

                            <a href="#" class="filter-link">
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
                  {this.props.products.map(product => (
                    <ProductItemElement key={product.id} product={product}/>
                  ))}
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