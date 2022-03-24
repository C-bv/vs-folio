import Typist from 'react-typist';
import ProgressBar from '../components/ProgressBar';
import styles from '../styles/AboutPage.module.scss';

export default function AboutPage({ pageTitle }) {

	const ProgressBarElements = [
		{
			name: 'HTML',
			value: 20,
			image: 'shields/html.svg',
			color: '#E34F26'
		},
		{
			name: 'CSS',
			value: 30,
			image: 'shields/css.svg',
			color: '#1572B6'
		},
		{
			name: 'Javascript',
			value: 80,
			image: 'shields/javascript.svg',
			color: '#F7DF1E'
		},
		{
			name: 'React',
			value: 100,
			image: 'shields/react.svg',
			color: '#61DAFB'
		},

	];

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
					<div className={styles.flex}>
						{ProgressBarElements.map((element) => (
							<ProgressBar element={element} />
						))}
					</div>
				</div>
				<div className={styles.wrapper}>
					<img src='/img/photo_cv.jpg' alt='Profile picture' />
				</div>
			</div>
		</div>
	);
}

export function getStaticProps() {

	return {
		props: {
			title: 'About',
			file: 'about.html',
			language: 'HTML',
			pageTitle: 'About me'
		}
	};
}