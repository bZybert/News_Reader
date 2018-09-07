import React, { Component } from 'react';
import PageContent from './pageContent';
import PageMini from './pageMini'

class NextPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: this.props.width,
            backgroundColor: this.props.backgroundColor,
        }
    }

    liMouseLeave = () => {

        this.setState({ width: "10%" })

    }

    liMouseClick = event => {

        this.setState({ width: "60%" })

    }
    getWidth = (pageCont) => {
        this.setState({ width: pageCont })
    }
    render() {

        let liStyle = {
            width: this.state.width,
            // height: '1000px',
            // borderRight: '1px solid black',
            // float: 'right',
            // textAlign: 'center',
            // listStyle: 'none',
            //borderRadius: "15px 0 0 0",
            // transition: "0.5s",
            // transitionDelay: "0.3s",
            // opacity: "1",
            backgroundColor: this.state.backgroundColor,
            backgroundImage: `url(${this.props.image})`,
        }

        return <div style={liStyle} onClick={this.liMouseClick} onMouseLeave={this.liMouseLeave} className={'nextPage'} >
            {this.state.width > "59%" ? <PageContent getFav={this.props.getFav} sendWidth={this.getWidth} data={this.props.data} width={'10%'}></PageContent> : <PageMini title={this.props.title}></PageMini>}
        </div>
    }
}

export default NextPage