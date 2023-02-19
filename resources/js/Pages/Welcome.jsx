import React from 'react';
import HeaderComponent from '../Components/HeaderComponent';
import CartComponent from '../Components/CartComponent';
import SliderComponent from '../Components/SliderComponent';
import BannerComponent from '../Components/BannerComponent';
import ProductComponent from '../Components/ProductComponent';
import FooterComponent from '../Components/FooterComponent';
import '../../css/MainPage.css';

export default class MainPage extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      products: [],
      categories: [],
      tags: [],
      colors: [],
      user: [],
      orderproducts: [],
    };
  }
  componentDidMount()
  {
    setTimeout(() => {
        document.getElementById('loader').classList.add('hide-loader-container');
      }, 2000);
  }
  UNSAFE_componentWillMount()
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
    fetch('http://localhost:8000/api/tags')
    .then(response => response.json())
    .then(function(data){
      this.setState({tags: data.data});
    }.bind(this));
    fetch('http://localhost:8000/api/colors')
    .then(response => response.json())
    .then(function(data){
      this.setState({colors: data.data});
    }.bind(this));
    fetch('http://localhost:8000/api/currentuser')
    .then(response => response.json())
    .then(function(data){
      this.setState({user: data.data});
    }.bind(this));
    fetch(`http://localhost:8000/orderproducts/show/${this.state.user.id}`)
    .then(response => response.json())
    .then(function(data){
      this.setState({orderproducts: data.data});
    }.bind(this));

  }
  render()
  {
    window.addEventListener('scroll', () => {
      let activeClass = '';
      if(window.scrollY > 342){
          activeClass = 'navbar-fix';
      }
      this.setState({ activeClass });
    });
    return(
      <>
        <div id="loader" className="loader-container">
          <div id="spinner" className="loader">
            <div className="loader-box"></div>
          </div>
        </div>
        <HeaderComponent navFix={this.state.activeClass}/>
        <CartComponent/>
        <SliderComponent/>
        <BannerComponent/>
        <ProductComponent products={this.state.products} categories={this.state.categories} tags={this.state.tags} colors={this.state.colors} user={this.state.user} orderproducts={this.state.orderproducts}/>
        <FooterComponent/>
      </>
    );
  }
}
