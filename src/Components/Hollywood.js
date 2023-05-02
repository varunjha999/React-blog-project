import React, { useContext } from "react";
import Nav from "./Nav";
import Header from "./Header";
import { store } from "./Details";
import Card from "./Card";
import Card2 from "./Card2";
import Footer from "./Footer";

const Hollywood = () => {
  const [detail] = useContext(store);
  console.log(detail);
  return (
    <div>
      <Header />
      <Nav />
      <h1 style={{ margin: "18px 10%", display: "inline-block" }}>Hollywood</h1>
      <h1 style={{ margin: "60px 0px 0px 45.5%", display: "inline-block" }}>
        Top Posts
      </h1>
      <div className="main-container">
        <div className="main1">
          {detail
            .filter((article) => {
              return article.category === "Hollywood";
            })
            .map((item) => (
              <Card
                key={item.id}
                articleid={item.id}
                imgUrl={item.img}
                title={item.title}
                description={item.description.slice(0, 150)}
              />
            ))}
        </div>

        <div className="main2">
          {detail
            .filter((data) => {
              return data.category === "Hollywood";
            })
            .map((item) => (
              <Card2
                key={item.id}
                articleid={item.id}
                imgUrl={item.img}
                description={item.description.slice(0, 150)}
                title={item.title.slice(0, 25)}
              />
            ))}
          <div className="ad">
            <p>Advertisement</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Hollywood;
