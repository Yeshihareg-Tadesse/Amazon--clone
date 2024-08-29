import classes from "./Auth.module.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../../Utility/Firebase";
import { ClipLoader } from "react-spinners";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { useState, useContext } from "react";
import { DataContext } from "../../DataProvider/DataProvider";
import { Type } from "../../../Utility/Action.type";

function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState({
    signIn: false,
    signUp: false
  });

  const [ dispatch] = useContext(DataContext);
  const Navigate = useNavigate()
  const authHandler = async (e) => {
    e.preventDefault();
    const { name } = e.target;

    setLoading({ ...loading, [name]: true });

    try {
      if (name === "signIn") {
        const userInfo = await signInWithEmailAndPassword(auth, email, password);
        dispatch({
          type: Type.SET_USER,
          user: userInfo.user
        });
        Navigate("/")
      } else {
        const userInfo = await createUserWithEmailAndPassword(auth, email, password);
        dispatch({
          type: Type.SET_USER,
          user: userInfo.user
        });
      }
      
      setEmail('');
      setPassword('');
      setLoading({ signIn: false, signUp: false });
    } catch (err) {
      console.error(err);
      setError(err.message);
      setLoading({ ...loading, [name]: false }); 
    }
  };

  return (
    <section className={classes.login}>
      {/* logo */}
      <Link to="/">
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon Logo"/>
      </Link>

      {/* form */}
      <div className={classes.login_container}>
        <h1>Sign In</h1>
        <form>
          <div>
            <label htmlFor="email">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="password" />
          </div>
          <button
            type="submit"
            onClick={authHandler}
            name="signIn"
            className={classes.login_signInButton}
          >
            {loading.signIn ? (
              <ClipLoader color="#000" size={15} />
            ) : (
              "Sign In"
            )}
          </button>
        </form>
        {/* agreement */}
        <p>By signing-in you agree to the Amazon clone conditions of use & sale. Please see our privacy notice.</p>
        <button
          type="submit"
          onClick={authHandler}
          name="signUp"
          className={classes.login_registerButton}
        >
          {loading.signUp ? (
            <ClipLoader color="#000" size={15} />
          ) : (
            "Create your Amazon Account"
          )}
        </button>
        {error && <small style={{ padding: "5px", color: "red" }}>{error}</small>}
      </div>
    </section>
  );
}

export default Auth;
