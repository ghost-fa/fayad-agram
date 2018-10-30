import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Cards from '../cards/cards';
import PostData from '../../../data/post.js';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  demo: {
    flexGrow: 1
  },
  paper: {
    height: 140,
    width: 100
  },
  control: {
    padding: theme.spacing.unit * 2
  }
});

class GuttersGrid extends React.Component {
  state = {
    spacing: '16'
  };

  handleChange = key => (event, value) => {
    this.setState({
      [key]: value
    });
  };

  render() {
    const { classes } = this.props;
    const { spacing } = this.state;

    return (
      <Grid container className={classes.root} spacing={32}>
        <Grid item xs={12}>
          <Grid
            container
            className={classes.demo}
            justify="center"
            spacing={Number(spacing)}
            direction="row"
          >
            <Cards postData={PostData} />
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(GuttersGrid);
