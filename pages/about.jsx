import styles from '../styles/AboutPage.module.scss';

export default function AboutPage() {
	return (
		<div className={styles.pageContainer}>
			<div className={styles.container}>
				<h3>About me</h3>
			</div>
			<div className={styles.container}>
				<img src="./photo_cv.jpg" alt="Photo" />
			</div>
		</div>
	);
}

export function getStaticProps() {
	return {
		props: {
			title: 'About',
			file: 'about.html',
			language: 'HTML'
		}
	};
}