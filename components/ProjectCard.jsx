import Image from 'next/image';
import styles from '../styles/ProjectCard.module.scss'

const ProjectCard = ({ project }) => {
    return (
        <div className={styles.projectContainer} >
            <a href={project.path} target='_blank' >
                    <Image src={`/${project.image}`} className={styles.image} height={375} width={600} alt={project.name} />
                    <div className={styles.innerCard}>
                    <h3 className={styles.name}>{project.name}</h3>
                    <p>{project.description}</p>
                    <div className={styles.tags}>
                        {project.tags.map((tag) => (
                            <span className={styles.tag} key={tag}>{tag}</span>
                        ))}
                    </div>
                </div>
            </a>
        </div>
    )
}

export default ProjectCard;