import React, { useState, useEffect, useContext } from "react";
import Friend from "@components/Friend";
import { motion } from "framer-motion";
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
    <motion.div
      className="page_createprofile"
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -100, opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
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
    </motion.div>
  );
}

export default CamaradeList;
