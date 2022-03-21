import Image from 'next/image';
import WindowMinimizeIcon from "./icons/WindowMinimizeIcon";
import WindowMaximizeIcon from "./icons/WindowMaximizeIcon";
import WindowCloseIcon from "./icons/WindowCloseIcon";
import styles from '../styles/Titlebar.module.scss';

const Titlebar = ({ file }) => {
	return (
		<>
			<div id={styles.titlebar}>
				<div id={styles.menu}>
					<Image
						src="/vscode_icon.svg"
						alt="VSCode Icon"
						layout='fixed'
						height={15}
						width={15}
					/>
					<span>File</span>
					<span>Edit</span>
					<span>View</span>
					<span>Go</span>
					<span>Run</span>
					<span>Terminal</span>
					<span>Help</span>
				</div>
				<span id={styles.title}>{file} - Charles Bouveret - Visual Studio Code</span>
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