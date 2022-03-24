import Layout from '../components/Layout';
import Head from "../components/Head";
import "../styles/globals.scss";
import "../styles/main.scss";
import { TerminalContextProvider } from "react-terminal";

function MyApp({ Component, pageProps }) {
	return (
		<TerminalContextProvider>
			<Layout pageProps={pageProps}>
				<Head title={`Charles Bouveret - ${pageProps.title}`} />
				<Component {...pageProps} />
			</Layout>
		</TerminalContextProvider>
	);
}

export default MyApp;