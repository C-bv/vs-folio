import Titlebar from '../components/Titlebar';
import Explorerbar from '../components/Explorerbar';
import Explorer from '../components/Explorer';
import Bottombar from '../components/Bottombar';
import Tabsbar from '../components/Tabsbar';
import styles from '../styles/Layout.module.scss';

const Layout = ({children}) => {
	return (
		<>
		<Titlebar />
		<div id={styles.container}>
		  <Explorerbar />
		  <Explorer />
		  <div style={{ width: '100%' }}>
			<Tabsbar />
			<main className={styles.content}>{children}</main>
		  </div>
		</div>
		<Bottombar />
	  </>
	);
};

export default Layout;