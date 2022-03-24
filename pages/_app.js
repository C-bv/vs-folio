import Layout from '../components/Layout';
import Head from "../components/Head";
import "../styles/globals.scss";
import "../styles/main.scss";

function MyApp({ Component, pageProps }) {
	return (
		<Layout pageProps={pageProps}>
			<Head title={`Charles Bouveret - ${pageProps.title}`} />
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;