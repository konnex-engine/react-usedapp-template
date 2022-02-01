import React from 'react';
import './App.css';
import { DAppProvider, Rinkeby, Kovan, Mumbai } from "@usedapp/core";
import { Header } from './components/Header';

function App() {
  return (
    <DAppProvider config={{
      networks: [Kovan, Rinkeby, Mumbai]
    }}>
      <Header />
      <div className="App">
        <h1>Hi!</h1>
        <p>This is a blank React/UseDApp template. Enjoy :D</p>
        <p>If you can still see this line, then I'm making one for React/UseDApp/Material-UI as you read.</p>
      </div>
    </DAppProvider>
    
  );
}

export default App;
