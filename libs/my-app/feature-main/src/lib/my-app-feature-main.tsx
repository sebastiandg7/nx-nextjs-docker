import styles from './my-app-feature-main.module.css';

/* eslint-disable-next-line */
export interface MyAppFeatureMainProps {}

export function MyAppFeatureMain(props: MyAppFeatureMainProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to MyAppFeatureMain!</h1>
    </div>
  );
}

export default MyAppFeatureMain;
