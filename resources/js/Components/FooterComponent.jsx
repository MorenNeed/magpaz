import React from "react";
// import { Card, Container, Row, Col, ListGroup } from "react-bootstrap";
// import '../../css/HeaderComponent.css';
export default class FooterComponent extends React.Component
{
    render()
    {
        return(
            <>
                {/* Footer */}
                <footer class="py-5 bg-dark">
                    <div class="container"><p class="m-0 text-center text-white">Copyright &copy; Your Website 2022</p></div>
                </footer>
            </>
        );
    }
}