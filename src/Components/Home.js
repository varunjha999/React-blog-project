import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { store } from "./Details";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card from "./Card";
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";

function Home() {
  const [details] = useContext(store);
  return (
    <>
      <Header />
      <Nav />
      <br />
      <hr />
      <div className="Main_Container">
        <div className="left-box">
          <Link to="/tech">
            <img
              src={
                "https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg"
              }
              alt="not found"
            />
          </Link>
        </div>
        <div className="right_box">
          <div className="up-box">
            <Link to="/bolly">
              <img
                src={
                  "https://www.filmibeat.com/ph-big/2023/04/kisi-ka-bhai-kisi-ki-jaan_168060584040.jpg"
                }
                alt="not found"
              />
            </Link>
          </div>
          <div className="down-box">
            <Link to="/Food">
              <img
                src={
                  "https://www.thespruceeats.com/thmb/Q0schrGA1TOajpjDjCqLGipqcBA=/5101x3401/filters:fill(auto,1)/GettyImages-639389404-5c450e724cedfd00015b09d5.jpg"
                }
                alt="not found"
              />
            </Link>
          </div>
        </div>
      </div>
      <h1>The Latest</h1>
      <hr style={{ width: "200px", thickness: "20px" }} />
      <div className="Detail_box">
        <div className="det-box">
          {details
            .filter((data) => {
              return data.category === "bollywood";
            })
            .map((item) => (
              <Card1
                key={item.id}
                articleid={item.id}
                imgUrl={item.img}
                title={item.title}
                description={item.description.slice(0, 200)}
                author={item.author}
              />
            ))}
        </div>
        <div className="det-box">
          {details
            .filter((data) => {
              return data.category === "technology";
            })
            .map((item) => (
              <Card1
                key={item.id}
                articleid={item.id}
                imgUrl={item.img}
                title={item.title}
                description={item.description.slice(0, 200)}
                author={item.author}
              />
            ))}
        </div>
        <div id="thirdbox" className="det-box">
          {details
            .filter((data) => {
              return data.category === "food";
            })
            .map((item) => (
              <Card1
                key={item.id}
                articleid={item.id}
                imgUrl={item.img}
                title={item.title}
                description={item.description.slice(0, 200)}
                author={item.author}
              />
            ))}
        </div>
      </div>

      <h1 className="Top">Top Posts</h1>
      <hr style={{ width: "220px", thickness: "20px" }} />
      <div className="Container_main">
        <div className="main1">
          {details
            .filter((data) => {
              return data.category === "mix";
            })
            .map((item) => (
              <Card
                key={item.id}
                articleid={item.id}
                imgUrl={item.img}
                title={item.title}
                description={item.description.slice(0, 200)}
                author={item.author}
              />
            ))}
        </div>
        <div className="main2">
          <h1 style={{ marginTop: "40px", display: "inline-block" }}>
            Latest Articles
          </h1>
          {details
            .filter((data) => {
              return data.category === "mix";
            })
            .map((item) => (
              <Card2
                key={item.id}
                articleid={item.id}
                imgUrl={item.img}
                description={item.description.slice(0, 200)}
                title={item.title.slice(0, 25)}
                author={item.author}
              />
            ))}
        </div>
      </div>
      <div className="ad">
        <p>Advertisement</p>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1 style={{ marginTop: "40px", display: "inline-block" }}>
        Latest Stories
      </h1>
      <hr />

      <div className="Container_main2">
        <div className="home__left">
          {details
            .filter((data) => {
              return data.category === "footer1";
            })
            .map((item) => (
              <Card1
                key={item.id}
                articleid={item.id}
                imgUrl={item.img}
                title={item.title}
                description={item.description.slice(0, 200)}
                author={item.author}
              />
            ))}
        </div>

        <div className="home__left">
          {details
            .filter((data) => {
              return data.category === "footer2";
            })
            .map((item) => (
              <Card1
                key={item.id}
                articleid={item.id}
                imgUrl={item.img}
                title={item.title}
                description={item.description.slice(0, 200)}
                author={item.author}
              />
            ))}
        </div>

        <div className="home__left">
          {details
            .filter((data) => {
              return data.category === "footer3";
            })
            .map((item) => (
              <Card1
                key={item.id}
                articleid={item.id}
                imgUrl={item.img}
                title={item.title}
                description={item.description.slice(0, 200)}
                author={item.author}
              />
            ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Home;
