import React, { useState, useContext, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";
import { authContext } from "../context/AuthContext";
import { Login } from "../api/userApi";
import "../styles/Home.css";

function Home() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login, auth } = useContext(authContext);

  useEffect(() => {
    if (auth.data) {
      navigate("/agenda");
    }
  }, []);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    Login(
      { email: formData.email, password: formData.password },
      { withCredentials: true }
    )
      .then((res) => {
        if (res.status === 200) {
          // eslint-disable-next-line no-undef
          login(res.data);
        }
      })
      .catch((err) => setError(err.response.data.message));
  };

  return (
    <div>
      <motion.div
        className="connexion-candidat"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -100, opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <form
          name="connexion"
          method="post"
          className="connexion-form"
          onSubmit={handleSubmit}
        >
          <div className="connexion-input">
            <label htmlFor="Email">Adresse email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="test@blabla.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="connexion-input">
            <label htmlFor="password">Mot de passe</label>
            <input
              type="password"
              name="password"
              placeholder=""
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="connexion-button">
            <p className="error-message">{error}</p>
            <button className="uppercase" type="submit">
              Je me connecte
            </button>
          </div>
          <div className="small_link">
            <h4>
              <Link
                to={{
                  pathname:
                    "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley",
                }}
              >
                Mot de passe oublié ?
              </Link>
            </h4>

            <h4>
              <Link to="/CreateProfile">Créer un profil ici </Link>
            </h4>
          </div>
        </form>
      </motion.div>
    </div>
  );
}

export default Home;
