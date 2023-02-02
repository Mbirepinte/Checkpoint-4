import Navbar from "@components/Navbar";
import React, { useState, useContext, useEffect } from "react";
import { GetMyProfile, UpdateMyProfile } from "../api/userApi";
import { authContext } from "../context/AuthContext";
import dataProfile from "../utils/dataProfile";
import "../styles/Profil.css";

function Profil() {
  const { auth } = useContext(authContext);
  const [profile, setProfile] = useState([]);
  const [disabled, setDisabled] = useState(true);

  const handleChange = (e) => {
    e.preventDefault();
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const getProfile = async () => {
    await GetMyProfile(auth.data.userId)
      .then((res) => {
        setProfile(res.data);
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  useEffect(() => {
    getProfile();
  }, []);

  const modify = (e) => {
    e.preventDefault();
    setDisabled(false);
  };

  const updateProfile = async (e) => {
    e.preventDefault();
    await UpdateMyProfile(auth.data.userId, profile)
      .then((res) => {
        if (res.status === 200) {
          console.warn(res);
        }
        setDisabled(true);
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  return (
    <div className="profile">
      <Navbar />
      <div className="profile-nice">
        <div className="profile-body">
          {disabled ? (
            <button className="profile-button" type="submit" onClick={modify}>
              Modifier le profil
            </button>
          ) : (
            <button
              className="profile-button"
              type="submit"
              onClick={updateProfile}
            >
              Conserver les modifications
            </button>
          )}
          {dataProfile.map((input) => (
            <div>
              <h2 className="profile-h2">{input.title}</h2>
              <input
                type={input.type}
                name={input.name}
                placeholder={input.placeholder}
                className="profil-input"
                value={profile[input.name]}
                onChange={handleChange}
                disabled={disabled}
              />
            </div>
          ))}
        </div>
        <img src={profile.avatar} alt="alt" style={{ width: "30%" }} />
      </div>
    </div>
  );
}

export default Profil;
