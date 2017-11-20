import { Component } from 'react';
import PropTypes from 'prop-types';
import { getProfile } from '../utils/api';

// getProfile takes in a username returns a promise
// which will resolve with that username's data.

export default class GitHubRenderCallback extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
    };
  }

  componentDidMount() {
    getProfile(this.props.username)
      .then(user => this.setState({ user }));
  }
  render() {
    return this.props.children(this.state.user);
  }
}

GitHubRenderCallback.propTypes = {
  username: PropTypes.string.isRequired,
  children: PropTypes.func.isRequired,
};
