import styles from './style.module.css';

const DocsSubPage = ({ params }) => {
  console.log(params);
  return <div className={styles.title}>Docs Page</div>;
};
export default DocsSubPage;
