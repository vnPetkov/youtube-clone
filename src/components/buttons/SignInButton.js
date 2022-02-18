
import styles from "./SignInButton.module.scss";
import { Link } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
function SignInButton() {
    return (
        <Link to={"/login"} className={styles.signInButton}>
            <span>
                <FaRegUserCircle />
            </span>
            <span>SIGN IN</span>
        </Link>
    )
}
export default SignInButton