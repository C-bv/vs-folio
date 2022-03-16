export default function AboutPage() {
	return (
		<>
			<div>AboutPage</div>
		</>
	);
}

export function getStaticProps() {
	return {
		props: {
			title: 'About',
			file: 'about.html',
			language: 'HTML'
		}
	};
}