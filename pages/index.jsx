import React, { useState } from 'react';
import Typist from 'react-typist';
import "react-typist/dist/Typist.css";
import tags from '../styles/CodeLayout.module.scss';
import styles from '../styles/HomePage.module.scss';


export default function HomePage() {
	const [code, renderCode] = useState(true);
	const [msg, renderMsg] = useState(false);
	const [p, renderParagraph] = useState(false);

	return (
		<div id={styles.homePageContainer}>
			{code ? (
				<div id={styles.code}>
					<Typist
						avgTypingDelay={40}
						onTypingDone={() =>
							setTimeout(() => {
								renderMsg(!msg)
								renderCode(!code)
								setTimeout(() => {
									renderParagraph(!p)
								}, 1000)
							}, 1500)}
					>
						{/* div starts */}
						<span className={tags.tagnamecolor}><span className={tags.tagcolor}>&lt;</span>div<span className={tags.tagcolor}>&gt;</span></span><br />

						{/* h2 starts */}
						&emsp;&emsp;<span className={tags.tagnamecolor}><span className={tags.tagcolor}>&lt;</span>h2<span className={tags.tagcolor}>&gt;</span></span>
						<span>Hi, my name is</span>
						<span className={tags.tagnamecolor}><span className={tags.tagcolor}>&lt;/</span>h2<span className={tags.tagcolor}>&gt;</span></span><br />
						{/* h2 ends */}

						{/* h1 starts */}
						&emsp;&emsp;<span className={tags.tagnamecolor}><span className={tags.tagcolor}>&lt;</span>h1<span className={tags.tagcolor}>&gt;</span></span>
						<span>Charles Bouveret</span>
						<span className={tags.tagnamecolor}><span className={tags.tagcolor}>&lt;/</span>h1<span className={tags.tagcolor}>&gt;</span></span><br />
						{/* h1 ends */}

						{/* h3 starts */}
						&emsp;&emsp;<span className={tags.tagnamecolor}><span className={tags.tagcolor}>&lt;</span>h3<span className={tags.tagcolor}>&gt;</span></span>
						<span>Junior Web developer</span>
						<span className={tags.tagnamecolor}><span className={tags.tagcolor}>&lt;/</span>h3<span className={tags.tagcolor}>&gt;</span></span><br />
						{/* h3 ends */}

						<span className={tags.tagnamecolor}><span className={tags.tagcolor}>&lt;/</span>div<span className={tags.tagcolor}>&gt;</span></span><br />
						{/* div ends */}
					</Typist>
				</div>
			) : null}
			{msg ? (
				<div id={styles.rendered}>
					<div id={styles.maintext}>
						<h2>Hi, my name is</h2>
						<h1>Charles</h1>
						<h1>Bouveret</h1>
						<h3>Junior Web developer</h3>
					</div>
					<div id={styles.paragraphtext}>
						{p ? (
							<p>I'm a junior web developer based in Pau, France.</p>
						) : null}
					</div>
				</div>
			) : null}
		</div>
	);
}

export async function getStaticProps() {

	return {
		props: {
			title: 'Home',
			file: 'home.jsx',
			language: 'JavaScript React'
		}
	};
}