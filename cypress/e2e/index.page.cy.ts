const { MockProvider } = require('@rsksmart/mock-web3-provider');
import { generateEthWallet, connectWallet } from './shared';

describe('Home page', () => {
	beforeEach(() => {
		const { address, privateKeyHex } = generateEthWallet();
		const metamaskProvider = new MockProvider({
			address,
			privateKey: privateKeyHex,
			networkVersion: 1,
		});
		cy.task('log', privateKeyHex);
		cy.visit('/', {
			onBeforeLoad(win) {
				Object.defineProperty(win, 'ethereum', { value: metamaskProvider });
				Object.defineProperty(win, 'test', { value: 'test abc' });
			},
		});
	});

	it('should contain hero title', () => {
		cy.get('h1').contains('Test Wallet Connection');
	});
	it('should connect a wallet', () => {
		cy.get('[data-cy="connect-button"]').contains('Connect').click();
		connectWallet();
		cy.get('[data-cy="wallet-address"]')
	});
	it('should diconnect a wallet', () => {
		cy.get('[data-cy="connect-button"]').contains('Connect').click();
		connectWallet();
		cy.get('[data-cy="wallet-address"]')
		cy.get('[data-cy="disconnect-button"]').contains('Disconnect').click();
		cy.wait(2000)
		cy.get('[data-cy="connect-button"]').contains('Connect')
	});
});
// prevent typescript no export error
export {};
