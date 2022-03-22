import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <title>{title}</title>
    </Head>
  );
};

export default CustomHead;