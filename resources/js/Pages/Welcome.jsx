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
      cartItems: []
    };
    this.addToCart = this.addToCart.bind(this);
    this.updateCart = this.updateCart.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
  }
  addToCart(product, num_of_product) {
    // Отримати поточний список товарів зі стану компонента
    const cartItems = [...this.state.cartItems];

    let alreadyInCart = false;

    cartItems.forEach((item) => {
      if (item.id === product.id) {
        if((item.quantity + num_of_product) < product.count)
        {
          item.quantity += num_of_product;
        }
        alreadyInCart = true;
      }
    });

    if (!alreadyInCart) {
      cartItems.push({...product, quantity: num_of_product});
    }

    this.updateCart(cartItems);
  }
  updateCart = (cartItems) => {
    this.setState({ cartItems: cartItems });
    sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
  };
  removeFromCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    this.setState({
      cartItems: cartItems.filter((x) => x.id !== product.id),
    }, () => {
      sessionStorage.setItem("cartItems", JSON.stringify(this.state.cartItems));
    });
  };
  componentDidMount()
  {
    const cartItems = sessionStorage.getItem("cartItems");
    if (cartItems) {
        this.setState({ cartItems: JSON.parse(cartItems) });
    }
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
        <HeaderComponent navFix={this.state.activeClass} cartItemsLength={this.state.cartItems.length}/>
        <CartComponent cartItems={this.state.cartItems} removeFromCart={this.removeFromCart}/>
        <SliderComponent/>
        <BannerComponent/>
        <ProductComponent products={this.state.products} categories={this.state.categories} tags={this.state.tags} colors={this.state.colors} onAddToCart={this.addToCart}/>
        <FooterComponent/>
      </>
    );
  }
}
