export default function ProjectsPage() {
	return (
		<>
			<div>ProjectsPage</div>
		</>
	);
}

export function getStaticProps() {
	return {
		props: {
			title: 'Projects',
			file: 'projects.js'
		}
	};
}