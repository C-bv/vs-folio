import ContactCode from "../components/ContactCode";

export default function ContactPage() {

	return (
		<>
			<div>
				<ContactCode />

			</div>
		</>
	);
}

export function getStaticProps() {
	return {
		props: { title: 'Contact' }
	};
}