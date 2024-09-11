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

```jsx
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
```