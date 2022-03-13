export default function GithubPage() {
	return (
		<>
			<div>GITHUB</div>
		</>
	);
}

export function getStaticProps() {
	return {
		props: { title: 'Github' }
	};
}