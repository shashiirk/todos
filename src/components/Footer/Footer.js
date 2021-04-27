import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <p>
        Built by{' '}
        <a
          href="https://shashiirk.github.io/portfolio"
          target="_blank"
          rel="noreferrer"
        >
          Shashikanth
        </a>
      </p>
    </div>
  );
};

export default Footer;
