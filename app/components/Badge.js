import React from 'react';
import PropTypes from 'prop-types';

export default function Badge(props) {
  return (
    <div>
      <h1>BADGE</h1>
      <h2>{props.userData.login}</h2>
      <h3>{props.userData.bio}</h3>
    </div>
  );
}

Badge.propTypes = {
  userData: PropTypes.object.isRequired,
};
