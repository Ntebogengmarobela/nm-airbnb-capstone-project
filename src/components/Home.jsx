import React from 'react'
import Banner from './Banner'
import Card from "./Card";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Banner />
      <div className="home-section">
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
    </div>
  );
}

export default Home;
