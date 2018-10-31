import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Grid from '@material-ui/core/Grid';

import Avatar from '@material-ui/core/Avatar';
import { increment } from '../../../store/actions/actions';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import { connect } from 'react-redux';
// import InteractiveIcons from '../../UI/interactiveIcons';
import { Link } from 'react-router-dom';
import './cards.css';
import postData from '../../../data/post.js';

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
    const { increment } = this.props;
    console.log(this.props);

    return this.props.postData.map((post, idx) => (
      <Grid lg={4} item>
        <Card className={classes.card}>
          <div key={post.code}>
            <CardHeader
              avatar={
                <Avatar aria-label="Recipe" className={classes.avatar}>
                  F
                </Avatar>
              }
            />

            <CardMedia
              className={classes.media}
              image={post.src}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography component="p">{post.caption}</Typography>
            </CardContent>
            <CardActions className={classes.actions} disableActionSpacing>
              <i
                className="material-icons"
                onClick={() => {
                  this.props.increment(idx);
                }}
              >
                favorite_border
              </i>
              {post.likes}

              <div className="cardIcon">
                <Link to={`/view/${idx}`}>
                  <i className="material-icons">mode_comment</i>
                </Link>
              </div>
            </CardActions>
          </div>
        </Card>
      </Grid>
    ));
  }
}

const storToProps = store => {
  return {
    postData: store.posts
  };
};
const actionToProps = {
  increment: increment
};

const respewithStyle = withStyles(styles)(RecipeReviewCard);
export default connect(
  storToProps,
  actionToProps
)(respewithStyle);
