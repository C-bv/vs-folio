import Titlebar from '../components/Titlebar';
import Explorerbar from '../components/Explorerbar';
import Explorer from '../components/Explorer';
import Bottombar from '../components/Bottombar';
import Tabsbar from '../components/Tabsbar';
import { useState, useEffect } from 'react';
import styles from '../styles/Layout.module.scss';

export default function Layout({ children, pageProps }) {
	const [explorerStatus, toggleExplorer] = useState(true);

	useEffect(() => {
		if (window.innerWidth <= 800) {
			toggleExplorer(!explorerStatus)
		}
	}, []);

	return (
		<>
			<Titlebar file={pageProps.file} />
			<div id={styles.container}>
				<Explorerbar toggleExplorer={toggleExplorer} explorerStatus={explorerStatus} />
				<Explorer explorerStatus={explorerStatus} />
				<div>
					<Tabsbar />
					<main className={styles.content} >{children}</main>
				</div>
			</div>
			<Bottombar language={pageProps.language} />
		</>
	);
};