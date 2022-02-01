import { useEthers } from "@usedapp/core"

export const Header = () => {
    const {account, activateBrowserWallet, deactivate} = useEthers()
    const isConnected = account !== undefined

    return (
        <div>
            {
                isConnected ? (
                    <button onClick={deactivate} color="primary">
                        Disconnect
                    </button>
                ):(
                    <button onClick={()=> activateBrowserWallet()} color="primary">
                        Connect Wallet
                    </button>
                ) 
            }
        </div>
    )
}