export default function ErrorPage() {

	return (
		<>
			<div>404</div>
		</>
	);
}

export async function getStaticProps() {
	
	return {
		props: {
			title: '404',
			file: 'error.php',
			language: 'PHP'
		}
	};
}