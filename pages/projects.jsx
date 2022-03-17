
import styles from '../styles/ProjectsPage.module.scss'

const ProjectsPage = ({ projects }) => {
	return (
		<div className={styles.pageContainer}>
			<div>
				<h4>Projects I've worked on</h4>
			</div>
			<div className={styles.container}>

			</div>
		</div>
	);
}

export async function getStaticProps() {
	
	return {
		props: {
			title: 'Projects',
			file: 'projects.js',
			language: 'JavaScript',
		}
	};
}

export default ProjectsPage;