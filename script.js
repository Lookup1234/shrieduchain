async function connectWallet() {
  if (window.ethereum) {
    try {
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      document.getElementById('status').innerText = "Connected: " + accounts[0];
    } catch (err) {
      console.error(err);
    }
  } else {
    alert("Please install MetaMask.");
  }
}
