import React, { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import web3 from "web3";
import { injected } from "../Wallets/connectors";
import { useWeb3React } from "@web3-react/core";
import config from "./config";
import $ from "jquery";
import { useEagerConnect, useInactiveListener } from "../Wallets/hooks";
import {
  NoEthereumProviderError,
  UserRejectedRequestError as UserRejectedRequestErrorInjected,
} from "@web3-react/injected-connector";

var ConnectorNames;
(function (ConnectorNames) {
  ConnectorNames["Injected"] = "Injected";
})(ConnectorNames || (ConnectorNames = {}));
const connectorsByName = {
  [ConnectorNames.Injected]: injected,
};

function Connect() {
  const [currentwallet, setcurrentwallet] = useState("");

  const onDismiss = () => {
    $(".modal").hide();
    $(".modal-backdrop").removeClass("show");
    $(".modal-backdrop").css("z-index", "-100");
    $(".modal-open").css("overflow", "scroll !important");
  };

  const context = useWeb3React();
  const {
    connector,
    library,
    chainId,
    account,
    activate,
    deactivate,
    active,
    error,
  } = context;
  console.log(context);

  return (
    <>
      <div className="container">
        <div className="connect">
          <div className="connect_topbar d-lg-flex d-block justify-content-between align-items-center">
            <img src="Images/creemees 5.png" className="pb-3" width="255px" alt="cremees" />
            <div className="text-center d-lg-block flex-md-row flex-column d-flex align-items-center">
              {!account ? (
                <>
                  <button
                    className="btn_connect red_btn"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Connect Wallet
                  </button>
                  <div className="d-inline">
                    <img
                      className="me-2"
                      src="Images/Ellipse 109.png"
                      width="9px"
                      height="9px"
                      alt="cremees"
                    />
                    <span className="wallet_status">Wallet Disconnect</span>
                  </div>
                </>
              ) : (
                <>
                  <button
                    className="btn_disconnect"
                    onClick={() => {
                      deactivate(connectorsByName[currentwallet]);
                    }}
                  >
                    Disconnect Wallet
                  </button>
                  <div className="d-inline">
                    <img
                      className="me-2"
                      src="Images/Ellipse-green.png"
                      width="9px"
                      alt="cremees"
                    />
                    <span className="wallet_status">Wallet Connected</span>
                  </div>
                </>
              )}
            </div>
          </div>
          <div>
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-4 col-12">
                  <div className="px-5">
                    <img
                      src="Images/hero.gif" 
                      className="border_radius shadow"
                      width="100%"
                      alt="cremees"
                    />
                  </div>
                </div>
                <div className="col-lg-8 col-12">
                  <p className="mb-0 connect_heading">Creemees NFT Drop</p>
                  <p className="mb-0 connect_heading_2">Release Date TBD</p>
                  <br />
                  <p className="mb-0 connect_para">
                    Welcome, we’re so happy you’re here! Creemees are not available yet and we will be announcing the release date on our <a href="https://discord.com/invite/TRaZRxta7q" target="_blank">Discord</a>. Here is a little information about how the minting (i.e. buying) process will work:
                    <br />
                    <br />
                    9,799 NFTs are available for purchase (we’re holding 200 for our team, special collaborators, and the unknown) and you will be able to purchase up to three (3) Creemee NFTs per transaction. Creemee NFTs will be issued at random and you can make as many transactions as you would like.
                    <br />
                    <br />
                    The price to mint (i.e. purchase) each NFT is 0.04 ETH. Please note that our team will earn a 4.0% royalty and OpenSea will earn 2.5% if you decide to sell your Creemee(s).
                    <br />
                    <br />
                    Once you’ve successfully made your purchase, your NFT will be visible in your MetaMask wallet and on OpenSea and you can validate yourself as a true Creemee on our <a href="https://discord.com/invite/TRaZRxta7q" target="_blank">Discord!</a>
                    <br />
                    <br />
                    If you’re confused, please see our ‘How To’ section below or reach out to us at <a href="mailto:team@creemees.io" target="_blank">team@creemees.io</a>
                  </p>
                  <button className="btn_connect red_btn mt-5">Join Community</button>
                </div>
              </div>
            </div>
          </div>
          <div className="connect_content">
            <p className="connect_content_head">
            How To
            </p>
            <p className="connect_content_para">
              If you’re new to NFTs, first of all, welcome!
              <br />
              <br />
              Before buying any Creemee NFTs you're going to need a METAMASK wallet and the cryptocurrency ETHEREUM.
              <br />
              <br />
              Here’s how to take care of that and the rest of the purchase process:
              <br />
              1. Download the <a href="https://metamask.io/" >METAMASK.IO</a> extension for the CHROME/BRAVE browser or app on mobile. This will allow you to make purchases with Ethereum and can be found in the extensions tab. If you are on mobile, you must use the MetaMask app browser.
              <br />
              2. You are able to purchase Ethereum through the Metamask Wallet using Wyre or you can send Ethereum to your wallet from an exchange like <a href="https://www.coinbase.com/" >Coinbase</a>.
              <br />
              4. With your wallet connected, you are now ready to buy NFTs! Click the ‘Buy Creemees’ button above and you will be prompted to sign your transaction. There will be a <a href="https://www.youtube.com/watch?v=qLZ1IoezucE&ab_channel=99Bitcoins" >gas fee</a> associated with every transaction.
              <br />
              5. Once you have made your purchase your Creemee NFTs will be viewable in your wallet and on OpenSea!
              <br />
              <br />
              If you are using mobile, you will need to navigate to this site through the browser in the Metamask app.
              {/* <br /> */}
            </p>
          </div>
        </div>
      </div>
      <div className="disclaimer">
        <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-lg-4 col-12">
                <img src="Images/disclaimer.jpeg" className="my-4 border_radius shadow" height="300px" width="100%" alt="cremees" />
              </div>
              <div className="col-lg-7 col-12 py-4">
                <p className="connect_content_head" >Disclaimers</p>
                <p className="connect_content_para" >The information provided by Creemees, LLC (“we,” “us” or “our”) on Creemees.io (the “Site”) is for general informational purposes only. All information on the Site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability or completeness of any information on the Site. Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of the site or reliance on any information provided on the site. Your use of the site and your reliance on any information on the site is solely at your own risk.</p>
              </div>
            </div>
        </div>
      </div>
      <Footer />
      <div
        className="modal fade connect"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="container pt-4 px-5 d-flex justify-content-end">
              <button
                className="btn_close"
                type="button"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <img src="Images/close.png" width="40px" />
              </button>
            </div>
            <div className="modal-body d-flex justify-content-center  py-5">
              <div>
                {config.map((entry, index) => (
                  <button
                    key={index}
                    className="connect_modal_btn"
                    onClick={() => {
                      onDismiss();
                      activate(connectorsByName[entry.connectorId]);
                      setcurrentwallet(entry.connectorId);
                    }}
                  >
                    <img
                      src={entry.icon}
                      className={entry.title}
                      width="50px"
                    />
                    {entry.title}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Connect;
