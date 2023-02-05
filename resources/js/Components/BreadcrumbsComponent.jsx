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
                <div className="container breadcrumb-container">
                    <Breadcrumb>
                        <BreadcrumbItem className="bread-crumb" href="/">
                            Home
                        </BreadcrumbItem>
                        <BreadcrumbItem href={'/' + this.props.refName.toLowerCase()} className="bread-crumb">
                            <span>
                                {this.props.refName}
                            </span>
                        </BreadcrumbItem>
                    </Breadcrumb>
                </div>
            </>
        );
    }
}