import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

import Avatar from '@material-ui/core/Avatar';

import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';

const styles = theme => ({
  card: {
    maxWidth: 400
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  },
  actions: {
    display: 'flex'
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    }),
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginRight: -8
    }
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  },
  avatar: {
    backgroundColor: red[500]
  }
});

class RecipeReviewCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
              F
            </Avatar>
          }
          title="Shrimp and Chorizo Paella"
        />
        <CardMedia
          className={classes.media}
          image="https://images.pexels.com/photos/207962/pexels-photo-207962.jpeg?cs=srgb&dl=artistic-blossom-bright-207962.jpg&fm=jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography component="p">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(RecipeReviewCard);
