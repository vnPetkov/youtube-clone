import styles from "./SignInButton.module.scss";
import { Link } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";

function SignInButton() {
  const dispatch = useDispatch();
  const handleOpenLogin = () => {
    dispatch({ type: "LOGIN_OPENED" });
  };
  return (
    <Link
      to={"/login"}
      className={styles.signInButton}
      onClick={handleOpenLogin}
    >
      <span>
        <FaRegUserCircle />
      </span>
      <span>SIGN IN</span>
    </Link>
  );
}
export default SignInButton;
