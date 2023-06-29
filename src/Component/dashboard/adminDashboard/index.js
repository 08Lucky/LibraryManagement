import React from "react";
import Header from "../../header/index";
import Sidebar from "../sidebar/index";
import Card from "../Card/index";
import Carousel from "../Carousel/index";

function AdminDashboard() {
  return (
    <div>
      <Header />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div>
          <Carousel/>
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
