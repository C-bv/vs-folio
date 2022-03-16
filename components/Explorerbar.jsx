import FilesIcon from './icons/FilesIcon';
import GithubIcon from './icons/GithubIcon';
import CodeIcon from './icons/CodeIcon';
import LinkedinIcon from './icons/LinkedinIcon';
import MailIcon from './icons/MailIcon';
import AccountIcon from './icons/AccountIcon';
import SettingsIcon from './icons/SettingsIcon';

import { useState } from 'react';

import styles from '../styles/Explorerbar.module.scss';


const explorerbarTopItems = [
	{
		icon: FilesIcon
	},
	{
		icon: GithubIcon,
		path: 'https://github.com/C-bv'
	},
	{
		icon: CodeIcon,
		// path: ''
	},
	{
		icon: LinkedinIcon,
		path: 'https://www.linkedin.com/in/charlesbouveret/'
	},
	{
		icon: MailIcon,
		path: 'mailto:charles.bouveret@outlook.com?subject=Mail from portofolio'
	},
];

const explorerbarBottomItems = [
	{
		icon: AccountIcon,
	},
	{
		icon: SettingsIcon,
	},
];

const Explorerbar = () => {

	return (
		<aside id={styles.explorerbar}>
			<div>
				{explorerbarTopItems.map((element, index) => (
					<div className={styles.iconContainer} key={index} >
						<a href={element.path} target='_blank' >
							<element.icon className={styles.icon} />
						</a>
					</div>
				))}
			</div>
			<div>
				{explorerbarBottomItems.map((element, index) => (
					<div className={styles.iconContainer} key={index}>
						<element.icon className={styles.icon} />
					</div>
				))}
			</div>
		</aside>
	);
};

export default Explorerbar;