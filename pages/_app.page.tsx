import { DynamicContextProvider } from '@dynamic-labs/sdk-react';

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<DynamicContextProvider
			settings={{
				appName: 'Sample App',
				environmentId: process.env.NEXT_PUBLIC_DYNAMIC_ENVIRONMENT_ID as string,
			}}>
			<Component {...pageProps} />
		</DynamicContextProvider>
	);
}

export default MyApp;
