import styles from '../styles/CodeLayout.module.scss';

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
		<div id={styles.code}>
			<p className={styles.line}>
				<span className={styles.className}>.contact</span> &#123;
			</p>
			{contactLinks.map((item, index) => (
				<span className={styles.line} key={index}>
					&nbsp;&nbsp;&nbsp;{item.social}:&nbsp;
					<a href={item.href} target='_blank'>
						{item.link}
					</a>
					;
				</span>
			))}
			<p className={styles.line}>&#125;</p>
		</div>
	);
};

export default ContactCode;