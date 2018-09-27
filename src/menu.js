import React, { Component } from 'react';
import NextPage from './nextPage';
import FavList from './favList';
import BackgroundSport from './images/sport.jpeg';
import BackgroundTech from './images/tech.jpeg';
import BackgroundNews from './images/news.jpg';
import BackgroundEnter from './images/entertainment.jpg';
import BackgroundGames from './images/games.png';




class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: '100%',
            backgroundColor: "white",
            newsData: [],
            sportData: [],
            techData: [],
            celebData: [],
            healthData: [],

            sum: [],

            healthApi: 'https://newsapi.org/v2/top-headlines?sources=polygon&apiKey=ea14b37a5aab45899f0aabc0c45c24e7',
            celebApi: 'https://newsapi.org/v2/top-headlines?sources=mtv-news&apiKey=ea14b37a5aab45899f0aabc0c45c24e7',
            newsApi: 'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=ea14b37a5aab45899f0aabc0c45c24e7',
            techApi: 'https://newsapi.org/v2/top-headlines?sources=techradar&apiKey=ea14b37a5aab45899f0aabc0c45c24e7',
            sportApi: 'https://newsapi.org/v2/top-headlines?sources=bbc-sport&apiKey=ea14b37a5aab45899f0aabc0c45c24e7'
        }

    }

    componentDidMount() {


        fetch(this.state.newsApi).then((resp) => {
            if (resp.ok)
                return resp.json();
            else
                throw new Error('Błąd sieci!');
        }).then(data => {
            //console.log(data)
            this.setState({ newsData: data.articles })
        }).catch(err => {
            console.log(err);
        });

        fetch(this.state.sportApi).then((resp) => {
            if (resp.ok)
                return resp.json();
            else
                throw new Error('Błąd sieci!');
        }).then(data => {
            this.setState({ sportData: data.articles })

        }).catch(err => {
            console.log(err);
        });

        fetch(this.state.techApi).then((resp) => {
            if (resp.ok)
                return resp.json();
            else
                throw new Error('Błąd sieci!');
        }).then(data => {

            this.setState({ techData: data.articles })

        }).catch(err => {
            console.log(err);
        });

        fetch(this.state.celebApi).then((resp) => {
            if (resp.ok)
                return resp.json();
            else
                throw new Error('Błąd sieci!');
        }).then(data => {

            this.setState({ celebData: data.articles })

        }).catch(err => {
            console.log(err);
        });

        fetch(this.state.healthApi).then((resp) => {
            if (resp.ok)
                return resp.json();
            else
                throw new Error('Błąd sieci!');
        }).then(data => {

            this.setState({ healthData: data.articles })

        }).catch(err => {
            console.log(err);
        });
    }

    favList = (addFav, addTitle) => {

        let tab = [...this.state.sum]
        tab.push({
            title: addTitle, src: addFav
        })

        //let filtrTab = tab.filter()


        this.setState({ sum: tab })


    }
    delButt = (result) => {
        //console.log(result)
        let toDel = this.state.sum.filter((e) => {
            //console.log(e)
            return e !== result
        })

        this.setState({ sum: toDel })
    }


    render() {




        let ulStyle = { width: this.state.width }
        return <div onMouseOver={this.ulMouseOver} onMouseOut={this.ulMouseOut} className={'menu'} style={ulStyle}>
            <NextPage getFav={this.favList} title={"News"} data={this.state.newsData} width={'10%'} backgroundColor={"red"} image={BackgroundNews} />
            <NextPage getFav={this.favList} title={"Sport"} data={this.state.sportData} width={'10%'} backgroundColor={"lime"} image={BackgroundSport} />
            <NextPage getFav={this.favList} title={"Tech"} data={this.state.techData} width={'10%'} backgroundColor={"#673ab7"} image={BackgroundTech} />
            <NextPage getFav={this.favList} title={"Entertainment"} data={this.state.celebData} width={'10%'} backgroundColor={"#3f51b5"} image={BackgroundEnter} />
            <NextPage getFav={this.favList} title={"Games"} data={this.state.healthData} width={'60%'} backgroundColor={"#2196f3"} image={BackgroundGames} />

            {this.state.sum !== "undefined" ? <FavList del={this.delButt} data={this.state.sum} ></FavList> : null}


        </div>
    }
}

export default Menu