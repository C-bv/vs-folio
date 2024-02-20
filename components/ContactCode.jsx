import styles from '../styles/CodeLayout.module.scss';

const contactLinks = [
	{
		social: 'email',
		link: 'contact@c-bv.dev',
		href: 'mailto:contact@c-bv.dev',
	},
	{
		social: 'linkedin',
		link: 'Charles Bouveret',
		href: 'https://www.linkedin.com/in/charlesbouveret/',
	},
	{
		social: 'github',
		link: 'c-bv',
		href: 'https://github.com/c-bv',
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