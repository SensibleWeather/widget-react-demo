'use client'
import styles from "./page.module.css";
import {Quote, SensibleWidget} from '@sensible-weather/widget-react';

export default function Home() {
    const guaranteeCreatedCallback = (quote: Quote) => {
        console.log('guaranteeCreatedCallback', quote);
    }
    const selectGuaranteeCreatedCallback = (quote: Quote) => {
        console.log('selectGuaranteeCreatedCallback', quote);
    }
    const unselectGuaranteeCreatedCallback = (quote: Quote) => {
        console.log('unselectGuaranteeCreatedCallback', quote);
    }
  return (
    <div className={styles.page}>
        <SensibleWidget
            partnerID="<<PROVIDE YOUR PARTNER ID HERE>>"
            productID="<<PROVIDE YOUR PRODUCT ID HERE>>"
            quoteParameters={{
                coverageEndDate: '2024-12-18',
                coverageStartDate: '2024-12-11',
                currency: 'usd',
                exposureLatitude: 37.77664018315584,
                exposureLongitude: -111.63836828825272,
                exposureName: 'Example Exposure Name',
                exposureTotalCoverageAmount: 500,
                langLocale: 'en-us',
            }}
            guaranteeCreatedCallback={guaranteeCreatedCallback}
            selectGuaranteeCallback={selectGuaranteeCreatedCallback}
            unselectGuaranteeCallback={unselectGuaranteeCreatedCallback}
        />
    </div>
  );
}
