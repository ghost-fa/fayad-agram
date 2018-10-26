import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';

import InteractiveIcons from '../../UI/interactiveIcons';
import { Link } from 'react-router-dom';
import './cards.css';
import PostData from '../../../data/post.js';

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
      <Fragment>
        <Card className={classes.card}>
          {PostData.map((post, i) => (
            <div key={i}>
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
                src={post.display_src}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography component="p">{post.caption}</Typography>
              </CardContent>
              <CardActions className={classes.actions} disableActionSpacing>
                <IconButton aria-label="like">
                  <InteractiveIcons>
                    <i className="material-icons">favorite_border</i>
                  </InteractiveIcons>
                </IconButton>
                <div className="cardIcon">
                  <Link to="/view/commint">
                    <IconButton aria-label="comment">
                      <InteractiveIcons>
                        <i className="material-icons">mode_comment</i>
                      </InteractiveIcons>
                    </IconButton>
                  </Link>
                </div>
              </CardActions>
            </div>
          ))}
        </Card>
      </Fragment>
    );
  }
}

export default withStyles(styles)(RecipeReviewCard);
