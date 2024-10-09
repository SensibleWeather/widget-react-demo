# Sensible Weather React Widget 

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app) for the purpose of demonstrating usage of the Sensible Weather React Widget.

## Running the Demo Application

To launch this demo app, run:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Relevant Code

The Sensible Weather React Widget was installed by running

```bash
npm install @sensible-weather/widget-react
```

Then the widget was imported in [src/app/page.tsx](src/app/page.tsx)

```tsx
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
```