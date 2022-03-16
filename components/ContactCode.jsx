import styles from '../styles/ContactCode.module.scss';

const contactLinks = [
	{
		social: 'email',
		link: 'charles.bouveret@outlook.fr',
		href: 'mailto:charles.bouveret@outlook.com?subject=Email from portofolio',
	},
	{
		social: 'linkedin',
		link: 'Charles Bouveret',
		href: 'https://www.linkedin.com/in/charlesbouveret/',
	},
	{
		social: 'github',
		link: 'C-bv',
		href: 'https://github.com/C-bv',
	}
];

const ContactCode = () => {
	return (
		<div className={styles.code}>
			<p className={styles.line}>
				<span className={styles.className}>.contact</span> &#123;
			</p>
			{contactLinks.slice(0, 8).map((item, index) => (
				<p className={styles.line} key={index}>
					&nbsp;&nbsp;&nbsp;{item.social}:{' '}
					<a href={item.href} target="_blank" rel="noopener">
						{item.link}
					</a>
					;
				</p>
			))}
			{contactLinks.slice(8, contactLinks.length).map((item, index) => (
				<p className={styles.line} key={index}>
					&nbsp;&nbsp;{item.social}:{' '}
					<a href={item.href} target="_blank" rel="noopener">
						{item.link}
					</a>
					;
				</p>
			))}
			<p className={styles.line}>&#125;</p>
		</div>
	);
};

export default ContactCode;