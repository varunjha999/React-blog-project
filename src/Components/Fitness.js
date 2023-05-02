import React, { useContext } from "react";
import Nav from "./Nav";
import Header from "./Header";
import { store } from "./Details";
import Card from "./Card";
import Card2 from "./Card2";
import Footer from "./Footer";

const Fitness = () => {
  const [detail] = useContext(store);
  console.log(detail);
  return (
    <div>
      <Header />
      <Nav />
      <h1 style={{ margin: "20px 10%", display: "inline-block" }}>Fitness</h1>
      <h1 style={{ margin: "60px 0px 0px 46.5%", display: "inline-block" }}>
        Top Posts
      </h1>
      <div className="main-container">
        <div className="main1">
          {detail
            .filter((data) => {
              return data.category === "Fitness";
            })
            .map((item) => (
              <Card
                articleid={item.id}
                imgUrl={item.img}
                title={item.title}
                description={item.description.slice(0, 200)}
                author={item.author}
              />
            ))}
        </div>

        <div className="main2">
          {detail
            .filter((data) => {
              return data.category === "Fitness";
            })
            .map((item) => (
              <Card2
                articleid={item.id}
                imgUrl={item.img}
                description={item.description.slice(0, 200)}
                title={item.title.slice(0, 25)}
                author={item.author}
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
export default Fitness;
