export default function ContactPage() {
	return (
		<>
			<div>
				<p>.Contact</p>

			</div>
		</>
	);
}

export function getStaticProps() {
	return {
		props: { title: 'Contact' }
	};
}