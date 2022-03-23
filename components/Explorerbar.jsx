import FilesIcon from './icons/FilesIcon';
import GithubIcon from './icons/GithubIcon';
import LinkedinIcon from './icons/LinkedinIcon';
import MailIcon from './icons/MailIcon';
import AccountIcon from './icons/AccountIcon';
import SettingsIcon from './icons/SettingsIcon';
import styles from '../styles/Explorerbar.module.scss';

const explorerbarTopItems = [
	{
		icon: FilesIcon,
		isClickable: true
	},
	{
		icon: GithubIcon,
		path: 'https://github.com/C-bv',
	},
	{
		icon: LinkedinIcon,
		path: 'https://www.linkedin.com/in/charlesbouveret/'
	},
	{
		icon: MailIcon,
		path: 'mailto:charles.bouveret@outlook.com'
	},
];

const explorerbarBottomItems = [
	{
		icon: AccountIcon
	},
	{
		icon: SettingsIcon
	},
];

export default function Explorerbar({ toggleExplorer, explorerStatus }) {
	
	return (
		<aside id={styles.explorerbar} >
			<div>
				{explorerbarTopItems.map((element, index) => (
					<div className={styles.iconContainer} key={index}>
						{element.isClickable ? (
							<a href={element.path} target='_blank' onClick={() => { toggleExplorer(!explorerStatus) }} >
								<element.icon className={explorerStatus ? styles.active : null} />
							</a>
						) :
							<a href={element.path} target='_blank' >
								<element.icon className={styles.icon} />
							</a>
						}
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