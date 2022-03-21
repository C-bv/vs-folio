import Titlebar from '../components/Titlebar';
import Explorerbar from '../components/Explorerbar';
import Explorer from '../components/Explorer';
import Bottombar from '../components/Bottombar';
import Tabsbar from '../components/Tabsbar';
import styles from '../styles/Layout.module.scss';
import { useState } from 'react';


export default function Layout({ children, pageProps }) {
	const [iconClicked, setIconClicked] = useState(true);
	const toggleExplorer = () => {
		setIconClicked(!iconClicked)
	}

	return (
		<>
			<Titlebar file={pageProps.file} />
			<div id={styles.container}>
				<Explorerbar toggleExplorer={toggleExplorer} />
				<Explorer toggleExplorer={iconClicked} />
				<div>
					<Tabsbar />
					<main className={styles.content} >{children}</main>
				</div>
			</div>
			<Bottombar language={pageProps.language} />
		</>
	);
};