import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import Card from '@material-ui/core/Card';
//import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
//import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

class FavList extends Component {
    constructor(props) {
        super(props);
        this.state = { newList: this.props.data }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.data !== this.props.data) {
            this.setState({ newList: this.props.data })
        }

    }




    render() {
        //console.log(this.props.data)
        //console.log(this.state.newList)
        let listaFav = typeof this.state.newList !== "undefined" ? this.state.newList.map((el, i) => {
            let style = { height: "65px" }
            let oHidden = {
                overflow: "hidden"
            }
            return (
                <Card key={i}>
                    <CardContent style={style}>
                        <Typography gutterBottom variant="headline" component="h4" style={oHidden}>
                            {el.title}
                        </Typography>
                    </CardContent>

                    <CardActions>
                        <Button size="small" color="primary" href={el.src}>Przejdź do strony</Button>
                        <Button size="small" color="primary" onClick={() => { this.props.del(el) }}>Usuń artukuł</Button>
                    </CardActions>
                </Card>



            )

        }) : null
        let fSize = {
            fontSize: "2em",
            color: "white",
        }
        let bColor = {
            backgroundColor: "black"
        }
        let oScroll = {
            overflow: "scroll"
        }
        return (
            <div className="favList">
                <AppBar style={bColor} position="static" color="default">
                    <Toolbar>
                        <Typography style={fSize} className="articleHead" variant="title" color="inherit">
                            Articles to read
          </Typography>
                    </Toolbar>
                </AppBar>
                <ul style={oScroll}>
                    {listaFav}
                </ul>
            </div>
        )
    }


}


export default FavList