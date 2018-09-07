import React, { Component } from 'react';

class PageMini extends Component {
    render() {
        let style = {
            display: "block",
            fontSize: "25px",
            paddingLeft: "60px",
            transform: "Rotate(90deg)",
            color: "white",
        }
        return <h3 style={style}>{this.props.title}</h3>
    }
}


export default PageMini