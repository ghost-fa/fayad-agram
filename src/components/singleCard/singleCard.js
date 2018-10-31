import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import './singleCard.css';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { connect } from 'react-redux';
import { addComment, removeComment } from '../../store/actions/actions';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
// import InteractiveIcons from '../UI/interactiveIcons';
import { Link } from 'react-router-dom';

import postData from '../../data/post.js';
import commentData from '../../data/comments';

const styles = theme => ({
  card: {
    maxWidth: 850
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

  onchange = e => {
    e.preventDefault();
    const updateState = {
      ...this.state
    };
    updateState.value = e.target.value;
    this.setState({ value: updateState.value });
  };

  render() {
    const post = PostData[this.props.match.params.id];
    const comet = commentData[this.props.match.params.id];
    console.log(comet);
    const { classes } = this.props;
    return (
      <div>
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
            image={post.src}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography component="p" />
            {post.caption}
          </CardContent>
          <i
            className="material-icons"
            onClick={() => {
              this.props.increment();
            }}
          >
            favorite_border{' '}
          </i>{' '}
          {post.likes}
          <div className="cardIcon">
            <Link to="/view/commint">
              <i className="material-icons">mode_comment</i>
            </Link>
          </div>
        </Card>
        <input type="text" onChange={e => this.onchange(e)} />
        <button onClick={() => this.props.addComment(this.state.value)}>
          add
        </button>
      </div>
    );
  }
}

const storToProps = store => {
  return {
    comment: store.comment
  };
};
const actionToProps = {
  addComment: addComment,
  removeComment: removeComment
};
const respewithStyle = withStyles(styles)(RecipeReviewCard);
export default connect(
  storToProps,
  actionToProps
)(respewithStyle);
