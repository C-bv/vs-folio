import Titlebar from '../components/Titlebar';
import Explorerbar from '../components/Explorerbar';
import Explorer from '../components/Explorer';
import styles from '../styles/Layout.module.scss';

const Layout = () => {
	return (
		<>
		<Titlebar />
		<div id={styles.main}>
		  <Explorerbar />
		  <Explorer />
		  <div style={{ width: '100%' }}>
			{/* <Tabsbar /> */}
			<main className={styles.content}></main>
		  </div>
		</div>
		{/* <Bottombar /> */}
	  </>
	);
};

export default Layout