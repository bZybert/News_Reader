import React from 'react';
import ReactDOM from 'react-dom';



class PageMini extends React.Component {
  render() {
    let style = {
      display: "block",
      fontSize: "25px",
      paddingLeft: "200px",
      transform: "Rotate(90deg)"
    }
    return <h3 style={style}>Tytuł działu</h3>
  }
}

class PageContent extends React.Component {
  render() {
    console.log(this.props.googleArticles)
    let ret = this.props.data.map(el => {

      return <div>

        <h3>{el.title}</h3>
        <p>{el.description}</p>
      </div>
    })

    let style = {
      overflow: "hidden"
    }

    return (<div style={style}>
      {ret}
    </div>

    )
  }
}


class NextPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: this.props.width,
      backgroundColor: this.props.backgroundColor,
      googleArticles: [],
      googleNews: 'https://newsapi.org/v2/top-headlines?' +
        'country=us&' +
        'apiKey=ea14b37a5aab45899f0aabc0c45c24e7',
    }
  }

  componentDidMount() {
    /*const googleNews = 'https://newsapi.org/v2/top-headlines?' +
        'country=us&' +
        'apiKey=ea14b37a5aab45899f0aabc0c45c24e7';*/

    //const myPromise = new Promise(googleNews)

    fetch(this.state.googleNews).then((resp) => {
      if (resp.ok)
        return resp.json();
      else
        throw new Error('Błąd sieci!');
    }).then(data => {
      console.log(data)
      this.setState({ googleArticles: data.articles })
      //console.log(this.state.googleArticles)
    }).catch(err => {
      console.log(err);
    });
  }

  liMouseClick = event => {
    this.setState({ width: "60%" })
  }
  liMouseOut = () => {
    this.setState({ width: "10%" })

  }




  render() {

    let liStyle = {
      width: this.state.width,
      height: '1000px',
      borderRight: '1px solid black',
      float: 'right',
      textAlign: 'center',
      listStyle: 'none',
      //borderRadius: "15px 0 0 0",
      transition: "0.5s",
      transitionDelay: "0.5s",
      opacity: "1",
      backgroundColor: this.state.backgroundColor
    }

    return <div style={liStyle} onMouseClick={this.liMouseClick} onMouseOut={this.liMouseOut}>
      {this.state.width > "59%" ? <PageContent data={this.state.googleArticles}></PageContent> : <PageMini></PageMini>}
    </div>
  }
}


class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: '100%',
      backgroundColor: "white"
    }
  }
  ulMouseOver = event => {
  }
  ulMouseOut = () => {

  }
  render() {


    let ulStyle = {
      position: 'flex',
      justifyContent: 'flexEnd',
      width: this.state.width,
      height: '100vh',
      padding: 0,
      margin: 0,
      backgroundColor: this.state.backgroundColor
    }
    return <div onMouseOver={this.ulMouseOver} onMouseOut={this.ulMouseOut} style={ulStyle}>
      <NextPage width={'10%'} backgroundColor={"red"} />
      <NextPage width={'10%'} backgroundColor={"lime"} />
      <NextPage width={'10%'} backgroundColor={"#673ab7"} />
      <NextPage width={'10%'} backgroundColor={"#3f51b5"} />
      <NextPage width={'60%'} backgroundColor={"#2196f3"} />
    </div>
  }
}
class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: '60%',
      backgroundColor: "white"
    }
  }
  render() {

    let mainPstyle = {
      width: this.state.width,
      height: '100vh',
      borderRight: '1px solid black',
      float: 'left',
      textAlign: 'center',
      listStyle: 'none',
      //borderRadius: "15px 0 0 0",
      transition: "0.5s",
      transitionDelay: "0.5s",
      opacity: "0.6",
      backgroundColor: this.state.backgroundColor
    }

    return (
      < div style={mainPstyle}></div >
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <div>

        <Menu></Menu>

      </div>
    )
  }
}

document.addEventListener('DOMContentLoaded', function () {
  ReactDOM.render(
    <App></App>,
    document.getElementById('app')
  );
});
