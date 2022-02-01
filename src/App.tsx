import React from 'react';
import logo from './logo.svg';
import './App.css';
import { DAppProvider, ChainId } from "@usedapp/core";

function App() {
  return (
    <DAppProvider config={{
      supportedChains: [ChainId.Kovan, ChainId.Rinkeby, ChainId.Mumbai, 1337]
    }}>
      <div className="App">
        <h1>Hi, S!</h1>
      </div>
    </DAppProvider>
    
  );
}

export default App;
