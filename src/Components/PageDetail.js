import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Pages from "./Pages";

const PageDetail = () => {
  return (
    <div className="main">
      <Pages />
      <div className="mybtn">
        <Link to="/">
          {" "}
          <button className="mybutton">Go Home</button>{" "}
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default PageDetail;
