import React from "react";
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import Article from "./Article";
import './index.css';

function App() {
    return (
      <div className="App">
        <Header />
        <Nav />
        <main>
          <Article 
            date="11/12/20"
            title="On the Street in Brooklyn"
            image="./fashion2.png"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
          />
          <Article 
            date="11/11/20"
            title="Vintage in Vogue"
            image="./fashion1.png"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
          />
        </main>
        <Footer />
      </div>
    );
  }
  
  export default App;