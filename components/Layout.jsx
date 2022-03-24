import TitleBar from '../components/TitleBar';
import ExplorerBar from './ExplorerBar';
import Explorer from '../components/Explorer';
import TabsBar from '../components/TabsBar';
import Terminal from '../components/Terminal';
import BottomBar from '../components/BottomBar';
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
			<TitleBar file={pageProps.file} />
			<div id={styles.container}>
				<ExplorerBar toggleExplorer={toggleExplorer} explorerStatus={explorerStatus} />
				<Explorer explorerStatus={explorerStatus} />
				<div>
					<TabsBar />
					<main className={styles.content} >{children}</main>
					<Terminal/>
				</div>
			</div>
			<BottomBar language={pageProps.language} />
		</>
	);
};