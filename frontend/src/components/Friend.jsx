import React from "react";
import PropTypes from "prop-types";

function Friend({ name, url, email }) {
  return (
    <div className="friend-card">
      <h2 className="friend-h2">{name}</h2>
      <img className="friend-img" src={url} alt={name} />
      <p className="friend-p">{email}</p>
    </div>
  );
}

export default Friend;

Friend.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
