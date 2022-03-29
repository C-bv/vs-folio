import Typist from 'react-typist';
import ContactCode from '../components/ContactCode';
import styles from '../styles/ContactPage.module.scss';

export default function ContactPage({ pageTitle }) {

	return (
		<div className={styles.pageContainer}>
			<Typist className='pageTypist'>{pageTitle}</Typist>
			<ContactCode />
		</div>
	);
}

export async function getStaticProps() {

	return {
		props: {
			title: 'Contact',
			file: 'contact.css',
			language: 'CSS',
			pageTitle: 'Contact me on'
		}
	};
}