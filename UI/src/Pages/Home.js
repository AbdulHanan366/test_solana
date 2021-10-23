import React, {useState , useRef} from 'react';
import Footer from '../Components/Footer'
import Item from '../Components/Items'
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import $ from "jquery";


function Home() {
  const [items, setItems] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);
  var settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 1500,
    cssEase: "linear",
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const modalScroll = () =>{
    let data;
    if(window.scrollY > 0) data = window.scrollY;
    if(data) setTimeout(() => window.scrollTo(0,data) , 350);
  }

  const item = [{
    cardTitle: "10% minted — Charity",
    cardDetailedText: "Create fund to support mental health organization(s) focused on depression"
  },
  {
    cardTitle: "25% minted — Apparel",
    cardDetailedText: "Limited edition Creemees apparel for owners so they can show their Creemee love IRL"
  },
  {
    cardTitle: "50% minted — Short",
    cardDetailedText: "Animated short film with exclusive first-viewing for the Creemee community"
  },
  {
    cardTitle: "75% minted — Game",
    cardDetailedText: "Game in The Sandbox (think ‘Candyland’ but for ice cream)"
  },
  {
    cardTitle: "100% minted — Movie",
    cardDetailedText: "Partner with movie production studio(s) to create Creemees movie"
  },
  {
    cardTitle: "Profit Sharing",
    cardDetailedText: "50% of profits from Shorts, Games, Pop-ups, and Movies will be shared with Creemees owners"
  }
  // },
  // {
  //   cardTitle: "Collaborate",
  //   cardDetailedText: "Creemee owners choose the movie’s main characters, voice actors, settings, themes, and more"
  // },
  // {
  //   cardTitle: "Screening",
  //   cardDetailedText: "Produce movie and invite Creemee owners to first screening IRL"
  // },
  // {
  //   cardTitle: "Premiere",
  //   cardDetailedText: "Release the Creemees movie to the world!"
  // }
];
  
  return (
    <>
        <div className="container">
          <div className="home_header">
            <Link className="btn_connect red_btn top_btn" to="/connect" >
              Connect
            </Link>
            <button type="button" class="home_header_btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
              <span className="me-3">MENU</span> <img src="Images/bars.png" className="menu-ico" alt="cremees" />
            </button>
          </div>
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-12">
                <div className="px-lg-5 px-md-4 px-2 pb-4"> 
                  <img src="Images/hero.png" width="100%" alt="creemees" />
                </div>
              </div>
              <div className="col-lg-4 col-12">
                <div className="px-4 pb-4"> 
                  <img src="Images/hero.gif" className="border_radius shadow" width="100%" alt="cremees"  />
                </div>
              </div>
              <div className="col-11 message_box">
                <div className="row justify-content-between align-items-center">
                  <div className="col-lg-8 col-12">
                    <p className="message_box_heading">JOIN THE CREEMEE CREW!</p>
                    <p className="message_box_para"><strong>The Creemees genesis NFT drop is coming soon.</strong> All information, including drop date and time, will be announced on our <a href="https://discord.com/invite/TRaZRxta7q" target="_blank">Discord</a>.</p>
                  </div>
                  <div className="col-lg-4 col-12 nftdiscord">
                    <a href="https://discord.gg/TRaZRxta7q" target="_blank" className="btn_connect red_btn me-0">Join Discord</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ice_cream_section" id="unite">
            <div className="container-fluid">
              <p className="ice_cream_heading">🍦OVERVIEW🍦</p>
              <div className="row">
                <div className="col-lg-4 col-12">
                  <div className="px-4"> 
                    <img src="Images/creemes.gif" className="border_radius" width="100%" alt="creemees" />
                  </div>
                </div>
                <div className="col-lg-8 col-12 py-4">
                  <p className="ice_cream_para mb-5">
                    Creemees are 9,999 ice cream NFTs pioneering a new model for world-building, IP ownership, and spreading joy.
                    <br /><br />
                    As a Creemee NFT owner, you have voting power to define the "Creemee-verse" and a profit-share of the Creemees content franchise.<i> (See "What benefits do Creemee owners get?" in our <a href="https://creemees.io/#faq" target="_blank">FAQ</a> for details)</i>
                    <br /><br />
                    If you love ice cream, animation, or happiness, turn your imagination on and help us <strong>spread joy!</strong>
                  </p>
                  <a href="https://discord.gg/TRaZRxta7q" target="_blank" className="btn_connect blue_btn">Join Discord</a>
                </div>
              </div>
            </div>
          </div>
          <div className="opensea_section text-center d-lg-flex d-md-flex d-block justify-content-between align-items-center" id="creemees">
            <p>🍦MEET THE CREEMEES🍦</p>
            <button className="btn_connect purple_btn">View on OpenSea</button>
          </div>
        </div>
        <div className="container-fluid">
          <div className="carousel-wrapper">
            <Slider {...settings}>
              {items.map((item,value) => (
                <Item key={item}>
                  <img src={`Images/horizontal-scroll/${value+1}.png`} width="95%" />
                </Item>
              ))}
            </Slider>
          </div>
        </div>
        <div className="container">
          <div className="roadmap_section" id="roadmap">
            <p className="roadmap_section_heading">🍦ROADMAP🍦</p>
            <div className="row justify-content-center">
                <div className="col-lg-10 col-12">
                  {item.map((items , value) =>
                    <div key={value} className="d-block d-lg-flex d-md-flex justify-content-between align-items-center roadmap_card">
                      <div className="w-image text-center">
                        <img src={`Images/roadmap/${value+1}.png`} width="94px" height="94px" />
                      </div>
                      <div className="w-text">
                        <p className="header_roadmap">{items.cardTitle}</p>
                        <p className="mb-0 detail_text_roadmap">{items.cardDetailedText}</p>
                      </div>
                    </div>
                  )}
                </div>
            </div>
          </div>
          <div className="faq_section" id="faq">
            <p className="faq_section_heading">🍦FAQ🍦</p>
            <div class="accordion" id="accordionExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  What are Creemees?
                  </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    Creemees are cute ice cream people with diverse characteristics like flavor, cone, and topping. 
                    <br /><br />
                    That’s all we know about them right now and with your help they will all get names, backstories, and roles in the Creemees movie.
                    <br /><br />
                    Each Creemee is a non-fungible token (NFT).
                    <br />
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Why does this exist?
                  </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    Creemees were created to spread joy and bring people together around an audacious, common goal of creating a G-rated feature-length film as a digital community.
                    <br /><br />
                    Plus, the metaverse needs ice cream!
                    <br />
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Who are Creemees for?
                  </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    Creemees are for anyone who loves ice cream, movies, NFTs, and fun.
                    <br /><br />
                    The goal is for new and experienced members of the NFT community to be part of the community. This will help the project benefit from a diverse range of perspectives.
                    <br /><br />
                    Those new to NFTs are welcome to join our <a href="https://discord.com/invite/TRaZRxta7q" target="_blank">Discord</a> to ask questions and get in on the fun!
                    <br />
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingFour">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                  When will Creemees be available for purchase?
                  </button>
                </h2>
                <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                  All information about the Creemee NFT launch, including date and time, will be announced on our <a href="https://discord.com/invite/TRaZRxta7q" target="_blank">Discord</a>.
                  <br />
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingSix">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                  How much does it cost to purchase a Creemee NFT?
                  </button>
                </h2>
                <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                  The cost to purchase (i.e. “mint”) a Creemee NFT is 0.04 ETH (<a href="https://coinmarketcap.com/converter/eth/usd/?amt=0.04" target="_blank">see value in U.S. Dollars</a>).
                  <br /><br />
                  We believe this purchase/minting price is low enough to encourage a wide-rage of people to participate and high enough to show that they believe in the project.
                  <br />
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingSeven">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                  How many Creemees exist?
                  </button>
                </h2>
                <div id="collapseSeven" class="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                  9,999
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingEight">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                  How many Creemees will be available for public purchase?
                  </button>
                </h2>
                <div id="collapseEight" class="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    9,799
                    <br /><br />
                    200 (~2%) will be reserved for our team, honorary community members, and the unknown.
                    <br />
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingNine">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                  How many Creemee NFTs can be purchased at one time?
                  </button>
                </h2>
                <div id="collapseNine" class="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    Three (3) Creemees can be purchased (i.e. “minted”) per transaction until all 9,999 are sold. This number was set low intentionally in order to promote diversity and opportunity for a wide-range of people to participate in the owner community.
                    <br /><br />
                    There is no limit to the number of transactions an individual wallet can make.
                    <br />
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingTen">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                  Are there any fees? 
                  </button>
                </h2>
                <div id="collapseTen" class="accordion-collapse collapse" aria-labelledby="headingTen" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    Yes, you will be required to pay industry-standard processing (i.e. “gas”) fees for each transaction.
                    <br /><br />
                    Additionally, the Creemees team will receive a 4% royalty on all future Creemee sales and OpenSea will receive 2.5%, for a total of 6.5%.
                    <br />
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingEle">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEle" aria-expanded="false" aria-controls="collapseEle">
                  What type of NFTs are Creemees?
                  </button>
                </h2>
                <div id="collapseEle" class="accordion-collapse collapse" aria-labelledby="headingEle" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    Creemees are ERC-721 NFTs on the Ethereum blockchain.
                    <br />
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingTve">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTve" aria-expanded="false" aria-controls="collapseTve">
                  What do I need to do to purchase a Creemee?
                  </button>
                </h2>
                <div id="collapseTve" class="accordion-collapse collapse" aria-labelledby="headingTve" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    <ol>
                      <li>Create a MetaMask wallet (unless you already have one). MetaMask is a popular service used to purchase NFTs with cryptocurrency (How to create a MetaMask Wallet)</li>
                      <li>Fund your wallet with ETH, the cryptocurrency used on the Ethereum blockchain</li>
                      <li>Connect your wallet on the Creemees.io <a href="https://creemees.io/connect" target="_blank">"Connect"</a> page</li>
                      <li>Join our <a href="https://discord.com/invite/TRaZRxta7q" target="_blank">Discord</a> to be the first to know when Creemees will be available for purchase</li>
                      <li>When Creemees become available, return to the <a href="https://creemees.io/connect" target="_blank">"Connect"</a> page and click the “Buy Creemees” button</li>
                      <li>Follow the instructions in your MetaMask wallet to complete the purchase</li>
                    </ol>
                    <br />
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingThre">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThre" aria-expanded="false" aria-controls="collapseThre">
                  What benefits do Creemee owners get?
                  </button>
                </h2>
                <div id="collapseThre" class="accordion-collapse collapse" aria-labelledby="headingThre" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    Many!
                    <br />
                    <ul>
                      <li>Creemee NFT owners will receive a 50% profit share of all licensing profits earned by Creemees, LLC, including profits from movies, television, merchandise, etc.</li>
                      <li>Exclusive access to the owners channel in Discord, where the most important decisions about the future of Creemees will be discussed and finalized</li>
                      <li>Exclusive access to a limited edition run of official Creemees merchandise to show their Creemees love IRL!</li>
                      <li>Voting power for key movie elements, such as the name and backstory of the Creemee(s) they own, voice actors, places and settings, movie themes and more</li>
                      <li>Exclusive access to future NFT drops</li>
                    </ul>
                    <br />
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="heading1">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="false" aria-controls="collapse1">
                  Do I have commercial use rights for my Creemee?
                  </button>
                </h2>
                <div id="collapse1" class="accordion-collapse collapse" aria-labelledby="heading1" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                  Ownership of a Creemee NFT does not grant the owner any commercial use or intellectual property (IP) rights.
                    <br /><br />
                    However, 50% of all profits from intellectual property ("I.P.") licensing (i.e. movies, T.V. shows, merchandise, etc.) will be distributed among Creemee owners based on number of Creemees owned. Financial information will be shared through private communications with verified Creemees owners to maximize transparency and collaboration throughout the project.
                    <br />
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="heading2">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                  How are the main characters of the Creemees movie chosen?
                  </button>
                </h2>
                <div id="collapse2" class="accordion-collapse collapse" aria-labelledby="heading2" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    The characters of the Creemees movie will be determined by the highest sale price on the secondary market at the time of movie contract signing.
                    <br /><br />
                    Speaking parts in the movie will be guaranteed for Creemees in the top 25 of secondary market sale prices.
                    <br /><br />
                    The date and time of the movie contract signing will be shared in our Discord at least one (1) day prior to the signing and we will do everything we can to make sure the community is aware of this timing.
                    <br /><br />
                    The intention is to encourage high sale prices of the top 25 NFTs to fund the film while evenly distributing all other movie decisions among owners of the remaining 9,974 Creemees.
                    <br />
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="heading3">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                  What movie elements can Creemee owners vote on?
                  </button>
                </h2>
                <div id="collapse3" class="accordion-collapse collapse" aria-labelledby="heading3" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    Creemee NFT owners will vote on voice actors, settings, and themes. Additional elements may be added to this list.
                    <br /><br />
                    Owners at the time of movie contract signing will be able to choose their Creemees’ backstory and also name their Creemee(s) (must be a G-rated name) with the name to be included in the movie credits.
                    <br />
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="heading4">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                  How will movie element voting take place? 
                  </button>
                </h2>
                <div id="collapse4" class="accordion-collapse collapse" aria-labelledby="heading4" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    Community voting will be held on Discord or, if necessary, via a Creemees-specific decentralized autonomous organization (DAO).
                    <br /><br />
                    Only verified Creemee owners at the time of voting will be able to submit votes.
                    <br /><br />
                    In the event that a Creemees-specific DAO is formed, all details and updates will be shared in our Discord.
                    <br />
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="heading5">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                  How are the writer(s), producer(s), and director(s) selected?
                  </button>
                </h2>
                <div id="collapse5" class="accordion-collapse collapse" aria-labelledby="heading5" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    The writer(s), producer(s), and director(s) of the Creemees movie must be Creemee NFT owners.
                    <br /><br />
                    The means of selection will be determined at a later date with help from the Creemees community.
                    <br />
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="heading6">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse6" aria-expanded="false" aria-controls="collapse6">
                  How will a partnership with a movie studio be formed?
                  </button>
                </h2>
                <div id="collapse6" class="accordion-collapse collapse" aria-labelledby="heading6" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                  After completing all previous steps in the roadmap, the Creemees community will create and vote on requests for proposal (RFPs) to share with specific movie production studios.
                    <br /><br />
                    At this stage, Creemee owners will be able to negotiate intellectual property (IP) and commercial use rights for their Creemees.
                    <br /><br />
                    Creemee owners do not own IP or commercial-use rights for their Creemees. However, they will collectively recieve a 50% share of all non-NFT profits made by the Creemees project.
                    <br />
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="heading7">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse7" aria-expanded="false" aria-controls="collapse7">
                  Is the Creemees roadmap feasible?
                  </button>
                </h2>
                <div id="collapse7" class="accordion-collapse collapse" aria-labelledby="heading7" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    Yes. In our opinion, with the power of a passionate community coming together around a common goal, it is highly probable to create and release a Creemees movie.
                    <br /><br />
                    It will take time and we will make mistakes, but we can make this happen if we are patient and support one another through the process.
                    <br /><br />
                    The world can always use more joy and we’re going to spread some!
                    <br />
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="heading8">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse8" aria-expanded="false" aria-controls="collapse8">
                  What is known about the Creemees, their story, and their universe?
                  </button>
                </h2>
                <div id="collapse8" class="accordion-collapse collapse" aria-labelledby="heading8" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    Other than the way they look, nothing!
                    <br /><br />
                    It’s exciting to think that our community will determine almost everything about Creemees and their future movie.
                    <br />
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="heading9">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse9" aria-expanded="false" aria-controls="collapse9">
                  Is this project carbon-neutral?
                  </button>
                </h2>
                <div id="collapse9" class="accordion-collapse collapse" aria-labelledby="heading9" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    Yes! Creemees will offset all carbon emissions from the project through the purchase of carbon credits via <a href="https://aerial.is/">Aerial</a>.
                    <br />
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="heading10">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse10" aria-expanded="false" aria-controls="collapse10">
                  What is the link to the Creemees Discord?
                  </button>
                </h2>
                <div id="collapse10" class="accordion-collapse collapse" aria-labelledby="heading910" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    The Creemees <a href="https://discord.com/invite/TRaZRxta7q" target="_blank">Discord</a> is the official hub of the Creemees community and where we announce exclusive updates and collaborate with each other.
                    <br />
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="heading11">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse11" aria-expanded="false" aria-controls="collapse11">
                  What is the link to the Creemees Twitter?
                  </button>
                </h2>
                <div id="collapse11" class="accordion-collapse collapse" aria-labelledby="heading11" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    We use <a href="https://twitter.com/CreemeesMovie" target="_blank">Twitter</a> to talk ice cream, share Creemee memes ("Creemes"), and announce general updates.
                    <br />
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="heading12">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse12" aria-expanded="false" aria-controls="collapse12">
                  What is the link to the Creemees on OpenSea?
                  </button>
                </h2>
                <div id="collapse12" class="accordion-collapse collapse" aria-labelledby="heading12" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                      <a href="https://opensea.io/collection/creemees" target="_blank">https://opensea.io/collection/creemees</a>
                    <br />
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="heading13">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse13" aria-expanded="false" aria-controls="collapse13">
                  Can I share this with children?
                  </button>
                </h2>
                <div id="collapse13" class="accordion-collapse collapse" aria-labelledby="heading13" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    Our goal is to make Creemees and the Creemee community 100% kid-friendly and inspire conversations between adults and children about blockchain, NFTs and, most importantly, ice cream.
                    <br /><br />
                    **Disclaimer** — we do not recommend giving children access to your (or any) MetaMask wallet 😊
                    <br />
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="heading14">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse14" aria-expanded="false" aria-controls="collapse14">
                  Who created Creemees?
                  </button>
                </h2>
                <div id="collapse14" class="accordion-collapse collapse" aria-labelledby="heading14" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    Creemees was created by a dreamer with a love of movies, NFTs, and joy.
                    <br /><br />
                    They wish to be anonymous to keep the focus on the true stars of this project: the Creemees and the Creemee Crew community.
                    <br />
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="heading15">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse15" aria-expanded="false" aria-controls="collapse15">
                  Who is this project dedicated to?
                  </button>
                </h2>
                <div id="collapse15" class="accordion-collapse collapse" aria-labelledby="heading15" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    The creator of this project is expecting their first child in April of 2022 and this project is dedicated to them.
                    <br /><br />
                    They hope the Creemees project will make their son or daughter proud and show them that your dreams will come true if you’re willing to share the work and fun with friends.
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="social_section d-block">
              <div className="d-flex justify-content-center align-items-center">
                <a href="https://twitter.com/CreemeesMovie" target="_blank" ><img src="Images/twit.png" className="d-block twit" width="48px" alt="cremees" /></a>
                <a href="https://discord.com/invite/TRaZRxta7q" target="_blank" ><img src="Images/discord.png" className="d-block discord" width="48px" alt="cremees" /></a>
                <a href="https://opensea.io/collection/creemees" target="_blank" ><img src="Images/opensea.png" className="d-block" width="48px" alt="cremees" /></a>
              </div>
              <br /><br />   
          {/* Inserting Aerial logo with code from footer.js */}
          <div className="footer text-center">
          <img src="Images/aerial.png" width="283px" alt="aerial" />
          <p className="SM text-center">Carbon-neutrality powered by <a href="https://aerial.is/">Aerial</a></p>
          </div>          
          </div>
        </div>
        <Footer />
        <div class="modal fade nav" onClick={modalScroll} id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-fullscreen float_right">
            <div class="modal-content">
              <div class="p-4 d-flex justify-content-between align-items-center ">
                <img src="Images/creemees 5.png" className="pb-3" width="235px" alt="cremees" />
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <p><a className="red_color text-decoration-none" href="#overview">OVERVIEW</a></p>
                <p><a className="red_color text-decoration-none" href="#creemees">MEET THE CREEMEES</a></p>
                <p><a className="red_color text-decoration-none" href="#roadmap">ROADMAP</a></p>
                <p><a className="red_color text-decoration-none" href="#faq">FAQ</a></p>
                <div className="d-flex pt-3 px-3 align-items-center">
                  <a href="https://twitter.com/CreemeesMovie" target="_blank" ><img src="Images/red_twit.png" className="d-block twit" width="48px" alt="cremees" /></a>
                  <a href="https://discord.com/invite/TRaZRxta7q" target="_blank" ><img src="Images/red_discord.png" className="d-block discord" width="48px" alt="cremees" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}

export default Home;
