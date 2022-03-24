import Head from 'next/head';

const CustomHead = ({ title }) => {
	return (
		<Head>
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			<link rel="shortcut icon" href="/img/favicon.ico" type="image/x-icon" />
			<title>{title}</title>
		</Head>
	);
};

export default CustomHead;