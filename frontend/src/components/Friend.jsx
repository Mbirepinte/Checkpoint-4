import React, { useState } from "react";
import PropTypes from "prop-types";
import FriendDetail from "./FriendDetail";

function Friend({ name, url, id, setReload, reload, friendId }) {
  const [show, setShow] = useState(false);

  return (
    <div className="friend-card">
      <h2 className="friend-h2">{name}</h2>
      <img className="friend-img" src={url} alt={name} />
      <button
        type="submit"
        onClick={() => setShow(true)}
        className="button-delete"
      >
        Voir Details
      </button>
      <FriendDetail
        show={show}
        onClose={() => {
          setShow(false);
          setReload(reload + 1);
        }}
        id={id}
        friendId={friendId}
      />
    </div>
  );
}

export default Friend;

Friend.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  setReload: PropTypes.func.isRequired,
  reload: PropTypes.number.isRequired,
  friendId: PropTypes.number.isRequired,
};
