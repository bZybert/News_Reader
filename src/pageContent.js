import React, { Component } from 'react';

//import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


class PageContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: '60%',
            title: [],
            description: [],
            urlToFav: '',
        }

    }
    onMouseOut = () => {
        this.props.sendWidth('10%')
    }
    addToFav = (link, title) => {
        //eve.preventDefault()
        if (typeof this.props.getFav === 'function')



            this.props.getFav(link, title)
    }

    render() {

        let ret = typeof this.props.data !== 'undefined' ? this.props.data.map((el, i) => {

            //this.setState({ urlToFav: el.url })
            return (
                <Card key={i}>
                    <CardActionArea>
                        <CardMedia
                            className={"imgCont"}
                            image={el.urlToImage}>
                            <img className={"imgCont"} src={el.urlToImage} alt='brak zdjęcia'></img></CardMedia>
                        <CardContent>
                            <Typography gutterBottom variant="headline" component="h4">
                                {el.title}
                            </Typography>
                            <Typography component="p">
                                {el.description}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" href={el.url}>
                            Przejdź do strony
        </Button>
                        <Button size="small" color="primary" onClick={() => this.addToFav(el.url, el.title)}>
                            Przeczytaj później
        </Button>
                    </CardActions>
                </Card>

            )

        }) : null


        return (
            <div className="pageCont" onMouseOut={this.onMouseOver}>
                {ret}
            </div>

        )
    }
}

export default PageContent