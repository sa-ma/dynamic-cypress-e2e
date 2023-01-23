import { NextPage } from 'next';
import { useDynamicContext } from '@dynamic-labs/sdk-react';

const Home: NextPage = () => {
	const { user, setShowAuthFlow, isAuthenticated,handleLogOut } = useDynamicContext();
	


	return (
		<div>
			<h1>Test Wallet Connection</h1>
			{!isAuthenticated ? <button data-cy="connect-button" onClick={() => setShowAuthFlow(true) }>Connect</button> :
				<button data-cy="disconnect-button" onClick={handleLogOut}>Disconnect</button>}
			{isAuthenticated && user && <p data-cy="wallet-address"> {user.walletPublicKey} </p>}
		</div>
	);
};

export default Home;
