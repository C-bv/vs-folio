import Typist from 'react-typist';
import styles from '../styles/AboutPage.module.scss';

export default function AboutPage({ pageTitle }) {

	return (
		<div className={styles.pageContainer}>
			<Typist className='pageTypist'>{pageTitle}</Typist>
			<div className={styles.inner}>
				<div className={styles.innerText}>
					<p className={styles.slideDelay1}>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae molestias incidunt nemo odio sint vitae voluptates temporibus, error rem quas, quo animi ratione recusandae in inventore repudiandae voluptas numquam porro.
					</p>
					<p className={styles.slideDelay2}>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae molestias incidunt nemo odio sint vitae voluptates temporibus, error rem quas, quo animi ratione recusandae in inventore repudiandae voluptas numquam porro.
					</p>
					<p className={styles.slideDelay3}>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae molestias incidunt.
					</p>
				</div>
				<div className={styles.wrapper}>
					<img src='/img/photo_cv.jpg' alt='Profile picture' />
				</div>
			</div>
		</div>
	);
}

export async function getStaticProps() {

	return {
		props: {
			title: 'About',
			file: 'about.html',
			language: 'HTML',
			pageTitle: 'About me'
		}
	};
}