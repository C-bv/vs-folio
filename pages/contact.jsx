import ContactCode from "../components/ContactCode";
import styles from '../styles/ContactPage.module.scss';

export default function ContactPage() {
	return (
		<div className={styles.pageContainer}>
			<div>
				<h3>Contact me on</h3>
				<ContactCode />
			</div>
		</div>
	);
}

export function getStaticProps() {
	return {
		props: {
			title: 'Contact',
			file: 'contact.css',
			language: 'CSS'
		}
	};
}