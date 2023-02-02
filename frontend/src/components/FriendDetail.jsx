import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

import { GetFriendById } from "../api/userApi";
import { DeleteFriend } from "../api/friendsApi";
import "../styles/FriendDetail.css";

function FriendDetail({ show, onClose, id, friendId }) {
  if (!show) {
    return null;
  }

  const [friend, setFriend] = useState([]);
  const [notDeleted, setNotDeleted] = useState(true);

  const loadFriend = async () => {
    await GetFriendById(id)
      .then((res) => {
        setFriend(res.data);
      })
      .catch((err) => console.warn(err));
  };

  const deleteFriend = () => {
    DeleteFriend(friendId)
      .then((res) => {
        if (res.status === 200) {
          setNotDeleted(false);
        }
      })
      .catch((err) => console.warn(err));
  };
  useEffect(() => {
    loadFriend();
  }, []);

  return ReactDOM.createPortal(
    <div
      className="modalBox"
      onClick={onClose}
      onKeyDown={onClose}
      role="textbox"
      tabIndex={0}
    >
      <div
        role="textbox"
        className="modalContent"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => e.stopPropagation()}
        tabIndex={0}
      >
        <div className="friend-card">
          <h2 className="friend-h2">{friend.firstname}</h2>
          <img
            className="friend-img"
            src={friend.avatar}
            alt={friend.firstname}
          />
          <p> {friend.email}</p>
          {notDeleted && (
            <button
              className="button-delete"
              type="submit"
              onClick={() => deleteFriend()}
            >
              Supprimer cette belle amitié
            </button>
          )}
        </div>
      </div>
    </div>,
    document.getElementById("root")
  );
}

export default FriendDetail;

FriendDetail.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  friendId: PropTypes.number.isRequired,
};
