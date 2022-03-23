import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from '../styles/Tabs.module.scss';

const Tabs = ({ icon, filename, path }) => {
	const router = useRouter();

	return (
		<Link href={path}>
			<div className={`${styles.tabs} ${router.pathname === path && styles.active}`}>
				<Image src={icon} layout='fixed' alt={filename} height={18} width={18} />
				<span>{filename}</span>
			</div>
		</Link>
	);
};

export default Tabs;