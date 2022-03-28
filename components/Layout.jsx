import TitleBar from './TitleBar';
import ExplorerBar from './ExplorerBar';
import Explorer from './Explorer';
import TabsBar from './TabsBar';
import Resizer from './Resizer';
import Terminal from './Terminal';
import BottomBar from './BottomBar';
import { TerminalContextProvider } from "react-terminal";
import { useState, useEffect } from 'react';
import { getProgressBarElements } from '/pages/api/progressBarElements.js';
import styles from '../styles/Layout.module.scss';


export default function Layout({ children, pageProps }) {
	const progressBarElements = getProgressBarElements();
	const [explorerStatus, toggleExplorer] = useState(true);
	const [terminalStatus, toggleTerminal] = useState(true);

	useEffect(() => {
		if (window.innerWidth <= 800) {
			toggleExplorer(!explorerStatus)
			toggleTerminal(!terminalStatus)
		}
	}, []);

	return (
		<TerminalContextProvider>
			<TitleBar
				file={pageProps.file}
				terminalStatus={terminalStatus}
				toggleTerminal={toggleTerminal}
			/>
			<div id={styles.container}>
				<ExplorerBar
					explorerStatus={explorerStatus}
					toggleExplorer={toggleExplorer}
				/>
				<Explorer
					explorerStatus={explorerStatus}
				/>
				<div>
					<TabsBar />
					<div className={styles.mainContainer}>
						<main className={styles.content} >{children}</main>
						<Resizer>
							<Terminal
								progressBarElements={progressBarElements}
							/>
						</Resizer>
					</div>
				</div>
			</div>
			<BottomBar
				language={pageProps.language}
			/>
		</TerminalContextProvider >
	);
};