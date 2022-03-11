import ErrorIcon from './icons/ErrorIcon';
import WarningIcon from './icons/WarningIcon';
import BellIcon from './icons/BellIcon';
import SyncIcon from './icons/SyncIcon';
import SourceControlIcon from './icons/SourceControlIcon';
import JsonIcon from './icons/JsonIcon';
import styles from '../styles/Bottombar.module.scss';

const Bottombar = () => {
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
                    <JsonIcon className={styles.icon}/>
                    <p>JavaScript React</p>
                </div>
                <div className={styles.iconContainer}>
                    <BellIcon className={styles.icon} />
                </div>
            </div>
        </div>
    );
};

export default Bottombar;