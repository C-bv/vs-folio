import Image from 'next/image';
import styles from '../styles/Titlebar.module.scss';

// TODO: add icons and current file

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
					<p>Minimise</p>
					<p>Window</p>
					<p>Close</p>
				</div>
			</div>
		</>
	);
};

export default Titlebar;