import { useState } from "react";
import Banner from "./Banner";
import Card from "./Card";
import "./Home.css";
import discoverImage from "../assets/discover-img.png";
import hostingImage from "../assets/hosting-img-air-crop.jpeg";

const Home = () => {

  const getawayData = {
    "Destinations for arts and culture": [
      { title: "Eiffel Tower", location: "Paris, France" },
      { title: "Colosseum", location: "Rome, Italy" },
      { title: "Great Wall", location: "Beijing, China" },
      { title: "Statue of Liberty", location: "New York, USA" },
      { title: "Sydney Opera House", location: "Sydney, Australia" },
      { title: "Christ the Redeemer", location: "Rio de Janeiro, Brazil" },
    ],
    "Destinations for outdoor adventure": [
      { title: "Grand Canyon", location: "Arizona, USA" },
      { title: "Table Mountain", location: "Cape Town, South Africa" },
      { title: "Patagonia", location: "Argentina/Chile" },
    ],
    "Mountain cabins": [
      { title: "Swiss Alps Cabin", location: "Switzerland" },
      { title: "Rocky Mountain Cabin", location: "Colorado, USA" },
    ],
    "Beach destinations": [
      { title: "Santorini", location: "Greece" },
      { title: "Bora Bora", location: "French Polynesia" },
    ],
    "Popular destinations": [
      { title: "Big Ben", location: "London, UK" },
      { title: "Shibuya Crossing", location: "Tokyo, Japan" },
    ],
    "Unique stays": [
      { title: "Treehouse", location: "Costa Rica" },
      { title: "Ice Hotel", location: "Sweden" },
    ],
  };

  const [activeTab, setActiveTab] = useState(
    "Destinations for arts and culture"
  );

  return (
    <div className="home">
      <Banner />

      {/* Inspiration Cards */}
      <div className="home-section section-cards">
        <h1>Inspiration for your next trip</h1>
        <div className="home-cards">
          <Card
            src="https://images.unsplash.com/photo-1626985249964-4fa612df0274?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZWlmZmVsJTIwdG93ZXIlMjBhdCUyMG5pZ2h0fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=1000"
            title="Paris"
            description="France"
          />
          <Card
            src="https://www.esbnyc.com/sites/default/files/styles/on_single_feature/public/2019-10/About-Celebrities.jpg?itok=-4_sVjBr"
            title="New York"
            description="USA"
          />
          <Card
            src="https://cdn.thecrazytourist.com/wp-content/uploads/2018/05/ccimage-shutterstock_197314337.jpg"
            title="Tokyo"
            description="Japan"
          />
          <Card
            src="https://businesstech.co.za/news/wp-content/uploads/2025/11/Cape-Town-1.jpg"
            title="Cape Town"
            description="South Africa"
          />
          <Card
            src="https://www.22places.com/wp-content/uploads/2025/05/phuket_great_buddha.webp"
            title="Phucket"
            description="Thailand"
          />
        </div>
      </div>

      {/* Discover Experiences */}
      <div className="home-section section-discover">
        <h1>Discover Airbnb Experiences</h1>
        <div className="home-cards">
          <Card
            src="https://a0.muscache.com/im/pictures/Mt/MtTemplate-3962848/original/d9d5bf6c-266c-4751-8bce-4239e32f0299.jpeg?im_w=1920"
            variant="discover"
            title="Things to do on your trip"
            description="Experiences"
          />
          <Card
            src={discoverImage}
            variant="discover"
            title="Things to do from home"
            description="Online Experiences"
          />
        </div>
      </div>

      {/* Gift Section */}
      <div className="home-section section-gift">
        <div className="gift-section">
          <div className="gift-text">
            <h2>
              Shop Airbnb
              <br />
              gift cards
            </h2>
            <button className="gift-btn">Learn more</button>
          </div>
          <div className="gift-images">
            <img
              src="https://m.media-amazon.com/images/I/714OU-MwAbL.jpg"
              alt="Gift Card"
              className="gift-img img1"
            />
            <img
              src="https://storage.googleapis.com/prod-poinz-gift-card/gift-card-images/airbnb_gutschein_chf_50_50.0"
              alt="Gift Card"
              className="gift-img img2"
            />
            <img
              src="https://qa-content-s3.launchgiftcards.com/images/0800dea3-3161-4a6b-b4cc-7368c09925c5/holiday_dusk_11zon.png"
              alt="Gift Card"
              className="gift-img img3"
            />
          </div>
        </div>
      </div>

      {/* Hosting Section */}
      <div className="home-section section-hosting">
        <div className="questions-hosting-section">
          <img src={hostingImage} alt="Hosting" className="hosting-image" />
          <div className="hosting-content">
            <h1>
              Questions
              <br />
              about hosting?
            </h1>
            <button className="hosting-btn">Ask a super host</button>
          </div>
        </div>
      </div>

      {/* Future Getaways */}
      <div className="home-section section-getaways">
        <div className="future-getaways">
          <h1>Inspiration for future getaways</h1>

          <div className="future-getaways-tabs">
            {Object.keys(getawayData).map((tab) => (
              <span
                key={tab}
                className={tab === activeTab ? "active" : ""}
                onMouseEnter={() => setActiveTab(tab)} 
              >
                {tab}
              </span>
            ))}
          </div>

          <div className="future-getaways-grid">
            {getawayData[activeTab].map((item) => (
              <div key={item.title}>
                <strong>{item.title}</strong>
                <span>{item.location}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
