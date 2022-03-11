import Link from 'next/link';
import { useRouter } from 'next/router';
import FilesIcon from './icons/FilesIcon';
import GithubIcon from './icons/GithubIcon';
import CodeIcon from './icons/CodeIcon';
import PencilIcon from './icons/PencilIcon';
import MailIcon from './icons/MailIcon';
import AccountIcon from './icons/AccountIcon';
import SettingsIcon from './icons/SettingsIcon';
import styles from '../styles/Explorerbar.module.scss';

const explorerbarTopItems = [
	{
		Icon: FilesIcon,
		path: '/',
	},
	{
		Icon: GithubIcon,
		path: '/github',
	},
	{
		Icon: CodeIcon,
		path: '/projects',
	},
	{
		Icon: PencilIcon,
		path: '/articles',
	},
	{
		Icon: MailIcon,
		path: '/contact',
	},
];

const explorerbarBottomItems = [
	{
		Icon: AccountIcon,
		path: '/about',
	},
	{
		Icon: SettingsIcon,
		path: '/settings',
	},
];

const Explorerbar = () => {

	const router = useRouter();

	return (
		<aside id={styles.explorerbar}>
			<div className={styles.sidebarTop}>
				{explorerbarTopItems.map((element) => (
					<Link href={element.path} key={element.path}>
						<div
							className={`${styles.iconContainer} ${router.pathname === element.path && styles.active}`}>
							<element.Icon
								fill={
									router.pathname === element.path ? 'rgb(225, 228, 232)' : 'rgb(106, 115, 125)'
								}
								className={styles.icon}
							/>
						</div>
					</Link>
				))}
			</div>
			<div className={styles.explorerbarBottomItems}>
				{explorerbarBottomItems.map((element) => (
					<div className={styles.iconContainer}>
						<Link href={element.path} key={element.path}>
							<element.Icon
								fill={
									router.pathname === element.path
										? 'rgb(225, 228, 232)'
										: 'rgb(106, 115, 125)'
								}
								className={styles.icon}
							/>
						</Link>
					</div>
				))}
			</div>
		</aside>
	);
};

export default Explorerbar;