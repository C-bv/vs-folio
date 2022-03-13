import styles from '../styles/ContactComponent.module.scss';

const contactLinks = [
  {
    social: 'email',
    link: 'nitinranganath@gmail.com',
    href: 'mailto:nitinranganath@gmail.com',
  },
  {
    social: 'github',
    link: 'itsnitinr',
    href: 'https://github.com/itsnitinr',
  },
  {
    social: 'linkedin',
    link: 'nitinranganath',
    href: 'https://www.linkedin.com/in/nitinranganath/',
  }
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
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