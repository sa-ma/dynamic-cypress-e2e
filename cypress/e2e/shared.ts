import { Wallet } from 'ethers';

export const generateEthWallet = (): {
	address: string;
	privateKey: string;
	privateKeyHex: string;
} => {
	const wallet = Wallet.createRandom();
	return {
		address: wallet.address,
		privateKey: wallet.privateKey,
		privateKeyHex: wallet.privateKey.substring(2),
	};
};

export const connectWallet = () => {
	cy.wait(2000);
	cy.window().then((win) => {
		cy.wait(10000);
		cy.contains('MetaMask').click();
		cy.wait(2000);
	});
};
