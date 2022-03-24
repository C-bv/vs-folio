import ErrorIcon from './icons/ErrorIcon';
import WarningIcon from './icons/WarningIcon';
import BellIcon from './icons/BellIcon';
import SyncIcon from './icons/SyncIcon';
import SourceControlIcon from './icons/SourceControlIcon';
import CodeIcon from './icons/CodeIcon';
import styles from '../styles/BottomBar.module.scss';

const BottomBar = ({ language }) => {
    return (
        <div id={styles.bottombar}>
            <div className={styles.container}>
                <div className={styles.iconContainer}>
                    <SourceControlIcon className={styles.icon} />
                    <p>main</p>
                </div>
                <div className={styles.iconContainer}>
                    <SyncIcon className={styles.icon} />
                </div>
                <div className={styles.iconContainer}>
                    <ErrorIcon className={styles.icon} />
                    <p>0</p>
                    <WarningIcon className={styles.icon} />
                    <p>0</p>
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.iconContainer}>
                    <CodeIcon className={styles.icon} />
                    <p>{language}</p>
                </div>
                <div className={styles.iconContainer}>
                    <BellIcon className={styles.icon} />
                </div>
            </div>
        </div>
    );
};

export default BottomBar;