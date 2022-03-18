import Image from 'next/image';
import { getProjects } from './api/test';
import styles from '../styles/ProjectsPage.module.scss'
import Link from 'next/link';

const ProjectsPage = ({ projects }) => {
	return (
		<div className={styles.pageContainer}>
			<div>
				<h4>Projects I've worked on</h4>
				<div id={styles.inner}>
					{projects.map((project, id) => (
						<Link href={project.path} key={id}>
							<div className={styles.projectContainer} key={id}>
								<Image src={`/${project.image}`} className={styles.image} height={375} width={600} alt={project.name} />
								<h4 className={styles.name}>{project.name}</h4>
								<p className={styles.description}>{project.description}</p>
								<div className={styles.tags}>
									{project.tags.map((tag) => (
										<span className={styles.name}>{tag}</span>
									))}
								</div>
							</div>
						</Link>
					))}
				</div>
			</div>
			<div className={styles.container}>
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
			projects
		}
	};
}

export default ProjectsPage;