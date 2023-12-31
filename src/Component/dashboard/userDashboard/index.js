import React from "react";
import Header from "../../header/index";
import UseSidebar from "../userSidebar/index";
import Card from "../Card/AllBooks";
import Carousel from "../Carousel/index";

function AdminDashboard() {
  return (
    <div>
      <Header />
      <div style={{ display: "flex" }}>
        <UseSidebar />
        <div>
          <Carousel/>
          <Card />
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
