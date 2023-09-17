import styles from './style.module.css';

const DocsSubPage = ({ params }) => {
  console.log(params);
  return <div className={`${styles.title} ${styles.another}`}>Docs Page</div>;
};
export default DocsSubPage;
