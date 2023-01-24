import React from 'react';
import HeaderComponent from '../Components/HeaderComponent';
import CartComponent from '../Components/CartComponent';
import ProductComponent from '../Components/ProductComponent';
import FooterComponent from '../Components/FooterComponent';

import '../../css/ProductPage.css';

export default class ProductPage extends React.Component
{
    constructor(props)
  {
    super(props);
    this.state = {
      products: [],
      categories: []
    };
  }
  componentDidMount()
  {
    fetch('http://localhost:8000/api/products')
    .then(response => response.json())
    .then(function(data){
      this.setState({products: data.data});
    }.bind(this));
    fetch('http://localhost:8000/api/categories')
    .then(response => response.json())
    .then(function(data){
      this.setState({categories: data.data});
    }.bind(this));
      setTimeout(() => {
        console.log("here");
        document.getElementById('loader').classList.add('hide-loader-container');
      }, 2000);
  }

  render()
  {
    document.title = "MagPaz";
    window.addEventListener('scroll', () => {
      let activeClass = '';
      if(window.scrollY > 342){
          activeClass = 'navbar-fix';
      }
      this.setState({ activeClass });
    });
    return(
      <>
        <HeaderComponent navFix={this.state.activeClass} page={"ProductPage"}/>
        <CartComponent/>
        <ProductComponent products={this.state.products} categories={this.state.categories} page={"ProductPage"}/>
        <FooterComponent/>
      </>
    );
  }
}