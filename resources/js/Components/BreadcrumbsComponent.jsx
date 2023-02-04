import { Link } from "@inertiajs/react";
import React from "react";
import { Breadcrumb, BreadcrumbItem } from "react-bootstrap";
import '../../css/BreadcrumbsComponent.css';

export default class BreadcrumbsComponent extends React.Component
{
    render()
    {
        return (
            <>
                <div class="container breadcrumb-container">
                    <Breadcrumb>
                        <BreadcrumbItem className="bread-crumb" href="/">
                            Home
                            <i
                                class="fa fa-angle-right m-l-9 m-r-10"
                                aria-hidden="true"
                            ></i>
                        </BreadcrumbItem>
                        <BreadcrumbItem className="bread-crumb">
                            <span className="stext-109 cl4">
                                {this.props.refName}
                            </span>
                        </BreadcrumbItem>
                    </Breadcrumb>
                </div>
            </>
        );
    }
}