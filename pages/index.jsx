import React, { useState } from 'react';
import Typist from 'react-typist';
import "react-typist/dist/Typist.css";
import tags from '../styles/Tagstyles.module.scss';
import styles from '../styles/HomePage.module.scss';


export default function HomePage() {

	const [title, renderTitle] = useState(true);
	const [msg, renderMsg] = useState(false);

	return (
		<div id={styles.homePageContainer}>
			<div>
				<div id={styles.title}>
					{title ? (
						<Typist id={styles.title}
							avgTypingDelay={70}
							onTypingDone={() => setTimeout(() => {
								renderMsg(!msg)
								renderTitle(!title)
							}, 2000)}

						>
							{/* div starts */}
							<span className={tags.tagnamecolor}><span className={tags.tagcolor}>&lt;</span>div<span className={tags.tagcolor}>&gt;</span></span><br />

							{/* p starts */}
							&emsp;<span className={tags.tagnamecolor}><span className={tags.tagcolor}>&lt;</span>p<span className={tags.tagcolor}>&gt;</span></span>
							<span>Hi, my name is</span>
							<span class={tags.tagnamecolor}><span class={tags.tagcolor}>&lt;/</span>p<span class={tags.tagcolor}>&gt;</span></span><br />
							{/* p ends */}

							{/* h1 starts */}
							&emsp;<span className={tags.tagnamecolor}><span className={tags.tagcolor}>&lt;</span>h1<span className={tags.tagcolor}>&gt;</span></span>
							<span>Charles Bouveret</span>
							<span class={tags.tagnamecolor}><span class={tags.tagcolor}>&lt;/</span>h1<span class={tags.tagcolor}>&gt;</span></span><br />
							{/* h1 ends */}

							{/* h3 starts */}
							&emsp;<span className={tags.tagnamecolor}><span className={tags.tagcolor}>&lt;</span>h3<span className={tags.tagcolor}>&gt;</span></span>
							<span>Junior Web developer</span>
							<span class={tags.tagnamecolor}><span class={tags.tagcolor}>&lt;/</span>h3<span class={tags.tagcolor}>&gt;</span></span><br />
							{/* h3 ends */}

							{/* p starts */}
							&emsp;<span class={tags.tagnamecolor}><span class={tags.tagcolor}>&lt;</span>p<span class={tags.tagcolor}>&gt;</span></span>
							<span>I'm a junior web developer based in Pau, France</span>
							<span class={tags.tagnamecolor}><span class={tags.tagcolor}>&lt;/</span>p<span class={tags.tagcolor}>&gt;</span></span><br />
							{/* p ends */}

							<span class={tags.tagnamecolor}><span class={tags.tagcolor}>&lt;/</span>div<span class={tags.tagcolor}>&gt;</span></span><br />
							{/* div ends */}

						</Typist>
					) : null}
				</div>
				<div id={styles.title}>
					{msg ? (
						<>
							<p>Hi, my name is</p>
							<h1>Charles Bouveret</h1>
							<h3>Junior Web developer</h3>
							<p>I'm a junior web developer based in Pau, France</p>
						</>
					) : null}
				</div>
			</div>
		</div>
	);
}