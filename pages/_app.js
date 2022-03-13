import Layout from '../components/Layout';
import Head from "../components/Head";
import { useEffect, useState } from "react";
import "../styles/main.scss";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<Head title={`Charles Bouveret - ${pageProps.title}`} />
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;