import React from 'react';
import PropTypes from 'prop-types';

export default function Profile(props) {
  return (
    <div>
      <h1>PROFILE</h1>
      <h2>Followers {props.userData.followers}</h2>
      <h3>Following {props.userData.following}</h3>
    </div>
  );
}

Profile.propTypes = {
  userData: PropTypes.object.isRequired,
};
