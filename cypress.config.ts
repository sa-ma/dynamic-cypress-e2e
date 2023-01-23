import { defineConfig } from 'cypress';

export default defineConfig({
	e2e: {
		projectId: '6yab13',
		baseUrl: 'http://localhost:3000',
		experimentalRunAllSpecs: true,
		setupNodeEvents(on, config) {
			on('task', {
				log(message) {
					console.log(message);
					return null;
				},
			});
			require('@cypress/code-coverage/task')(on, config);
			return config;
		},
	},
});
