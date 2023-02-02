import React, { useState, useEffect, useContext } from "react";
import Friend from "@components/Friend";
import Navbar from "../components/Navbar";
import { authContext } from "../context/AuthContext";
import { GetAllMyFriends } from "../api/friendsApi";
import "../styles/CamaradeList.css";

function CamaradeList() {
  const [friends, setFriends] = useState([]);
  const { auth } = useContext(authContext);
  const [reload, setReload] = useState(true);

  const loadFriends = async () => {
    await GetAllMyFriends(auth.data.userId)
      .then((res) => {
        setFriends(res.data);
      })
      .catch((err) => console.warn(err));
  };

  useEffect(() => {
    loadFriends();
  }, [reload]);

  return (
    <div>
      <Navbar />
      <div className="friend-list">
        {friends.map((friend) => (
          <div>
            <Friend
              name={friend.firstname}
              url={friend.avatar}
              id={friend.userId}
              setReload={setReload}
              reload={reload}
              friendId={friend.friendsId}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CamaradeList;
