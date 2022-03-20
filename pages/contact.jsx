import ContactCode from "../components/ContactCode";
import Typist from 'react-typist';
import styles from '../styles/ContactPage.module.scss';

export default function ContactPage({ pageTitle }) {
	return (
		<div className={styles.pageContainer}>
			<Typist className='pageTypist'>{pageTitle}</Typist>
			<ContactCode />
		</div>
	);
}

export function getStaticProps() {
	return {
		props: {
			title: 'Contact',
			file: 'contact.css',
			language: 'CSS',
			pageTitle: 'Contact me on'
		}
	};
}