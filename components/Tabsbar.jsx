import Tabs from "../components/Tabs";
import styles from '../styles/Tabsbar.module.scss';

const Tabsbar = () => {
    return (
        <div className={styles.tabsbar}>
            <Tabs icon="/react_icon.svg" filename="home.jsx" path="/" />
            <Tabs icon="/html_icon.svg" filename="about.html" path="/about" />
            <Tabs icon="/css_icon.svg" filename="contact.css" path="/contact" />
            <Tabs icon="/js_icon.svg" filename="projects.js" path="/projects" />
            <Tabs icon="/json_icon.svg" filename="articles.json" path="/articles" />
            <Tabs icon="/markdown_icon.svg" filename="github.md" path="/github" />
        </div>
    );
};

export default Tabsbar;