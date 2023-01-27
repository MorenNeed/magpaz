import React from "react";

export default class SortItemsElement extends React.Component
{
    constructor(props)
    {
      super(props);
      this.state = {
        products: [],
        sortByExpression: "",
      };
    }

    componentDidMount()
    {        

    }
    componentDidUpdate()
    {

    }
    render()
    {
        return(
            <>{this.state.products}</>
        );
    }
}