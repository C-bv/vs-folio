import Layout from '../components/Layout';
import Head from "../components/Head";
import "../styles/main.scss";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
	return (
		<Layout pageProps={pageProps}>
			<Head title={`Charles Bouveret - ${pageProps.title}`} />
			<Component />
		</Layout>
	);
}

export default MyApp;