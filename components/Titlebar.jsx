import Image from 'next/image';
import WindowMinimizeIcon from "./icons/WindowMinimizeIcon";
import WindowMaximizeIcon from "./icons/WindowMaximizeIcon";
import WindowCloseIcon from "./icons/WindowCloseIcon";
import styles from '../styles/Titlebar.module.scss';

const Titlebar = () => {
	return (
		<>
			<div id={styles.titlebar}>
				<div id={styles.menu}>
					<Image
						src="/vscode_icon.svg"
						alt="VSCode Icon"
						height={15}
						width={15}
					/>
					<p>File</p>
					<p>Edit</p>
					<p>View</p>
					<p>Go</p>
					<p>Run</p>
					<p>Terminal</p>
					<p>Help</p>
				</div>
				<div id={styles.title}>
					<p>Charles Bouveret - Visual Studio Code</p>
				</div>
				<div id={styles.buttons}>
					<WindowMinimizeIcon className={styles.icon} />
					<WindowMaximizeIcon className={styles.icon} />
					<WindowCloseIcon className={styles.icon} />
				</div>
			</div>
		</>
	);
};

export default Titlebar;