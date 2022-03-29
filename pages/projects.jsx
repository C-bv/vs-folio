import Typist from 'react-typist';
import { getProjects } from './api/projects';
import ProjectCard from '../components/ProjectCard.jsx'
import styles from '../styles/ProjectsPage.module.scss'

export default function ProjectsPage({ projects, pageTitle }) {

	return (
		<div className={styles.pageContainer}>
			<Typist className='pageTypist'>{pageTitle}</Typist>
			<div id={styles.inner}>
				{projects.map((project) => (
					<ProjectCard project={project} key={project.id} />
				))}
			</div>
		</div>
	);
}

export async function getStaticProps() {
	const projects = getProjects();

	return {
		props: {
			title: 'Projects',
			file: 'projects.js',
			language: 'JavaScript',
			pageTitle: `Projects I've worked on`,
			projects
		}
	};
}