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

            return (
                <Card key={i}>
                    <CardContent>
                        <Typography gutterBottom variant="headline" component="h4">
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

        return (
            <div className="favList">
                <AppBar position="static" color="default">
                    <Toolbar>
                        <Typography className="articleHead" variant="title" color="inherit">
                            Articles to read
          </Typography>
                    </Toolbar>
                </AppBar>
                <ul>
                    {listaFav}
                </ul>
            </div>
        )
    }


}


export default FavList