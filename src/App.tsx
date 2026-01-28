import { useState } from 'react'
import { ConnectButton, useAbstraxnWallet, WalletModal } from '@abstraxn/signer-react'

function App() {
  const { isConnected, address, disconnect } = useAbstraxnWallet()

  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false)

  return (
    <div className="app">
      <div className="container">
        <h1>Abstraxn Signer Quickstart</h1>
        
        <div className="status">
          <p className={isConnected ? 'connected' : 'disconnected'}>
            Status: {isConnected ? 'Connected' : 'Disconnected'}
          </p>
          {address && (
            <p className="address">
              Address: <code>{address}</code>
            </p>
          )}
        </div>

        <div className="actions">
          {!isConnected ? (
            <ConnectButton
              connectText="Connect Wallet"
              disableDefaultStyles
              className="btn btn-primary"
            />
          ) : (
            <>
              <button 
                onClick={() => setIsWalletModalOpen(true)} 
                className="btn btn-primary"
              >
                Open Wallet
              </button>
              <button onClick={() => void disconnect()} className="btn btn-secondary">
                Disconnect
              </button>
            </>
          )}
        </div>

        <div className="info">
          <p>
            This is a basic quickstart example. Refer to the{' '}
            <a 
              href="https://docs.abstraxn.com" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Abstraxn documentation
            </a>{' '}
            for detailed SDK usage.
          </p>
        </div>
      </div>

      {isConnected && (
        <WalletModal
          isOpen={isWalletModalOpen}
          onClose={() => setIsWalletModalOpen(false)}
        />
      )}
    </div>
  )
}

export default App
