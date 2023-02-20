import React from 'react';
import HeaderComponent from '../Components/HeaderComponent';
import CartComponent from '../Components/CartComponent';
import CheckoutFormComponent from '@/Components/CheckoutFormComponent';
import FooterComponent from '../Components/FooterComponent';
import '../../css/CheckoutPage.css';
import BreadcrumbsComponent from '@/Components/BreadcrumbsComponent';

export default class CheckoutPage extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      cartItems: []
    };
    this.addToCart = this.addToCart.bind(this);
    this.updateCart = this.updateCart.bind(this);
  }
  addToCart(product, num_of_product) {
    // Отримати поточний список товарів зі стану компонента
    const cartItems = [...this.state.cartItems];

    let alreadyInCart = false;

    cartItems.forEach((item) => {
      if (item.id === product.id) {
        item.quantity += num_of_product;
        alreadyInCart = true;
      }
    });

    if (!alreadyInCart) {
      cartItems.push({...product, quantity: num_of_product});
    }

    this.updateCart(cartItems);
  }
  removeFromCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    this.setState({
      cartItems: cartItems.filter((x) => x.id !== product.id),
    }, () => {
      sessionStorage.setItem("cartItems", JSON.stringify(this.state.cartItems));
    });
  };
  updateCart = (cartItems) => {
    this.setState({ cartItems: cartItems });
    sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
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
    // fetch('http://localhost:8000/api/orders')
    // .then(response => response.json())
    // .then(function(data){
    //   this.setState({products: data.data});
    // }.bind(this));
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
        <HeaderComponent navFix={this.state.activeClass} page={'CheckoutPage'} cartItemsLength={this.state.cartItems.length}/>
        <BreadcrumbsComponent refName={'Checkout'}/>
        <CartComponent cartItems={this.state.cartItems} removeFromCart={this.removeFromCart}/>
        <CheckoutFormComponent cartItems={this.state.cartItems} updateCart={this.updateCart}/>
        <FooterComponent/>
      </>
    );
  }
}
