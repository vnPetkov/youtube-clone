import styles from "./SignInButton.module.scss";
import { Link } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";

function SignOutButton() {
  const dispatch = useDispatch();

  const logout = async () => {
    dispatch({ type: "LOGOUT" });
    await signOut(auth);
  };

  return (
    <Link to={"/"} className={styles.signInButton} onClick={logout}>
      <span>
        <FaRegUserCircle />
      </span>
      <span>SIGN OUT</span>
    </Link>
  );
}
export default SignOutButton;
