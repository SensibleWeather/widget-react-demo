import styles from "./page.module.css";
import { SensibleWeatherGuarantee, SwuiTheme } from '@sensible-weather/widget-react';

export default function Home() {
  return (
    <div className={styles.page}>
      <SwuiTheme>
        <SensibleWeatherGuarantee/>
      </SwuiTheme>
    </div>
  );
}
