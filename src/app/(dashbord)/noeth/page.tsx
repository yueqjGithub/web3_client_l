const NoEthPage = () => {
  return (
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col-6 p-4 text-center">
          <p>
            No Ethereum wallet was detected. <br />
            Please install{" "}
            <a
              href="https://www.coinbase.com/wallet"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary decoration-solid underline"
            >
              Coinbase Wallet
            </a>
            {" "}or{" "}
            <a href="http://metamask.io" target="_blank" rel="noopener noreferrer" className="text-primary decoration-solid underline">
              MetaMask
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  )
}

export default NoEthPage
