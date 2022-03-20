import styles from '../styles/AboutPage.module.scss';
import Typist from 'react-typist';

export default function AboutPage({ pageTitle }) {
	return (
		<div className={styles.pageContainer}>
			<Typist className='pageTypist'>{pageTitle}</Typist>
			<div className={styles.inner}>
				<div>
					<p>
						Durant l'année suivante, où j'ai exercé divers emplois d'intérim, j'ai découvert le monde de la compétition automobile, motocycles plus précisément. Très vite, je me suis fixé pour objectif de devenir acteur du monde de la compétition moto, notamment comme technicien dans une écurie de course.
					</p>
					<p>
						Durant l'année suivante, où j'ai exercé divers emplois d'intérim, j'ai découvert le monde de la compétition automobile, motocycles plus précisément. Très vite, je me suis fixé pour objectif de devenir acteur du monde de la compétition moto, notamment comme technicien dans une écurie de course.
					</p>
					<p>
						Désireux de m'installer dans cette belle région Paloise, j'ai obtenu un CDI dans un atelier spécialisé en compétition moto.
					</p>
				</div>
				<div className={styles.wrapper}>
					<img src="./photo_cv.jpg" alt="Photo" />
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