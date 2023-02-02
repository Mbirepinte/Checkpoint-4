import React, { useState, useEffect, useContext } from "react";
import Friend from "@components/Friend";
import Navbar from "../components/Navbar";
import { authContext } from "../context/AuthContext";
import { GetAllMyFriends } from "../api/friendsApi";
import "../styles/CamaradeList.css";

function CamaradeList() {
  const [friends, setFriends] = useState([]);
  const { auth } = useContext(authContext);

  const loadFriends = () => {
    GetAllMyFriends(auth.data.userId)
      .then((res) => {
        setFriends(res.data);
      })
      .catch((err) => console.warn(err));
  };

  useEffect(() => {
    loadFriends();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="friend-list">
        {friends.map((friend) => (
          <div>
            <Friend
              name={friend.firstname}
              url={friend.avatar}
              email={friend.email}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CamaradeList;
