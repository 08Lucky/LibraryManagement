import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import LandingPage from "./Component/landingPage";
import LibrarianLogin from "./Component/LibrarianLogin/index";
import UserLogin from "./Component/userLogin/index";
import AdminDashboard from "./Component/dashboard/adminDashboard/index";
import UserDashboard from './Component/dashboard/userDashboard/index';
import UserRegister from './Component/userManagement/userRegistration';
import UpdateUser from './Component/userManagement/updateDetails/index';
import DeleteUser from "./Component/userManagement/deleteAccount";
import AddBook from "./Component/bookManagement/addBook";
import UpdateBook from "./Component/bookManagement/updateBook";
import DeleteBook from "./Component/bookManagement/deleteBook";
import CreateLoan from "./Component/loanManagement/createLoan";
import SendRemainder from "./Component/loanManagement/sendRemainder";
import TrackDueDate from "./Component/loanManagement/trackDueDate";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/adminLogin" element={<LibrarianLogin />} />
          <Route path="/adminLogin/adminDashboard" element={<AdminDashboard />} />
          <Route path="/adminLogin/adminDashboard/updateUser" element={<UpdateUser />} />
          <Route path="/adminLogin/adminDashboard/deleteUser" element={<DeleteUser />} />
          <Route path="/adminLogin/adminDashboard/addBook" element={<AddBook />} />
          <Route path="/adminLogin/adminDashboard/updateBook" element={<UpdateBook />} />
          <Route path="/adminLogin/adminDashboard/deleteBook" element={<DeleteBook />} />
          <Route path="/adminLogin/adminDashboard/createLoan" element={<CreateLoan />} />
          <Route path="/adminLogin/adminDashboard/trackDueDate" element={<TrackDueDate />} />
          <Route path="/adminLogin/adminDashboard/sendRemainder" element={<SendRemainder />} />
          <Route path="/userLogin" element={<UserLogin />} />
          <Route path="/userLogin/userDashboard" element={<UserDashboard />} />
          <Route path="/userRegister" element={<UserRegister />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
