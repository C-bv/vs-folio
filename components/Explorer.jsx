import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Resizable } from 'react-resizable-element';
import Elipsis from './icons/Elipsis';
import ChevronRight from './icons/ChevronRight'
import styles from '../styles/Explorer.module.scss';

const explorerElements = [
	{
		name: 'home.jsx',
		path: '/',
		icon: 'img/react_icon.svg',
	},
	{
		name: 'about.html',
		path: '/about',
		icon: 'img/html_icon.svg',
	},
	{
		name: 'contact.css',
		path: '/contact',
		icon: 'img/css_icon.svg',
	},
	{
		name: 'projects.js',
		path: '/projects',
		icon: 'img/js_icon.svg',
	}
];

const Explorer = ({ explorerStatus }) => {
	const [folderOpen, setFolderOpen] = useState(true);

	return (
		<Resizable
			direction="right"
			maxSize={800}
			className={styles.explorer}
			style={explorerStatus ? { width: '200px' } : { width: '0px' }}
		>
			<div id={styles.compositeTitle}>
				<p>Explorer</p>
				<Elipsis className={styles.icon} />
			</div>
			<div id={styles.content}>
				<div id={styles.folderHeader} onClick={() => setFolderOpen(!folderOpen)}>
					<ChevronRight
						className={styles.icon}
						style={folderOpen ? { transform: 'rotate(90deg)' } : { transform: 'rotate(0deg)' }}
					/>
					<div id={styles.headerTitle}>
						<p>Vs-Folio</p>
					</div>
				</div>
				<div className={styles.folderOpen} style={folderOpen ? { display: 'flex' } : { display: 'none' }}>
					{explorerElements.map((element) => (
						<Link href={element.path} key={element.name}>
							<div className={styles.file}>
								<Image
									src={`/${element.icon}`}
									alt={element.name}
									height={18}
									width={18}
								/>
								<p>{element.name}</p>
							</div>
						</Link>
					))}
				</div>
			</div>

		</Resizable>
	);
};

export default Explorer;