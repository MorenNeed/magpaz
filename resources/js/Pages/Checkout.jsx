import React from 'react';
import HeaderComponent from '../Components/HeaderComponent';
import CartComponent from '../Components/CartComponent';
import CheckoutFormComponent from '@/Components/CheckoutFormComponent';
import FooterComponent from '../Components/FooterComponent';
import '../../css/CheckoutPage.css';
import BreadcrumbsComponent from '@/Components/BreadcrumbsComponent';

export default class MainPage extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      selected_products: []
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
        <HeaderComponent navFix={this.state.activeClass}/>
        <BreadcrumbsComponent refName={'Shopping Cart'}/>
        <CartComponent/>
        <CheckoutFormComponent/>
        <FooterComponent/>
      </>
    );
  }
}
