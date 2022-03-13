export default function ErrorPage() {
	return (
		<>
			<div>404</div>
		</>
	);
}

export function getStaticProps() {
	return {
		props: {
			title: '404',
			file: 'error'
		}
	};
}