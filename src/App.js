import React, { Component } from 'react';
import logo from './blg.jpg';
import './App.css';
import Web3 from 'web3'

// Build Artifacts
import storageArtiacts from './build/contracts/Storage.json'
class App extends Component {
  state = {
    defaultAccount: null,
    storage: null, // Storage contract
  }

  async componentDidMount() {
    this.web3 = new Web3(
      new Web3.providers.HttpProvider('http://localhost:8545')
    )

    // If connected load contracts
    if (this.web3.isConnected()) {
      // Set the default account
      const defaultAccount = this.web3.eth.accounts[0]
      this.setState({ defaultAccount })

      // Get detected network and load storage and token contracts
      this.web3.version.getNetwork(async (err, netId) => {
        // Create a reference object to the deployed storage contract
        if (netId in storageArtiacts.networks) {
          const storageAddress = storageArtiacts.networks[netId].address
          const storage = this.web3.eth.contract(storageArtiacts.abi).at(storageAddress)
          this.setState({ storage })
          // Console Debugging
          window.storage = storage
        } else {
          console.error('Storage has not been deployed to the detected network.')
        }
      })
    } else {
      console.error('Web3 is not connected.')
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} alt="logo" style={{height: '150px', width: '350px'}}/>
        </header>
        <p className="App-intro">app info</p>
      </div>
    );
  }
}

export default App;
