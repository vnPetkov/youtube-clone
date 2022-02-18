import SignInButton from "../buttons/SignInButton";
import styles from "./History.module.scss";
import SettingsBackupRestoreIcon from '@mui/icons-material/SettingsBackupRestore';

export default function HistorySignedOut() {

    return (
        <div className={styles.HistorySignedOut}>
            <SettingsBackupRestoreIcon className={styles.rewind}/>
            <h2>Keep track of what you watch</h2>
            <p>Watch history isn't viewable when signed out. </p>
            <SignInButton />

        </div>
    )
}