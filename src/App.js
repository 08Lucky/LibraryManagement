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
import SearchBook from "./Component/searchBook";
import SearchResults from "./Component/searchResults";
import BorrowBook from "./Component/borrowManagement/borrowBook";
import ReturnBook from "./Component/borrowManagement/returnBook";
import ReserveBook from "./Component/reservationManagement/reserveBook";
import CancelReservation from "./Component/reservationManagement/cancelReservation";
import UserLogout from "./Component/userLogout";
import AddBook from "./Component/bookManagement/addBook";
import UpdateBook from "./Component/bookManagement/updateBook";
import DeleteBook from "./Component/bookManagement/deleteBook";
import CreateLoan from "./Component/loanManagement/createLoan";
import DeleteLoan from "./Component/loanManagement/deleteLoan";
import SendRemainder from "./Component/loanManagement/sendRemainder";
import TrackDueDate from "./Component/loanManagement/trackDueDate";
import UserActivity from "./Component/report/userActivity";
import UserActivityResult from "./Component/report/userActivity/UserActivityResult";
import BookStatus from "./Component/report/bookStatus/index";
import BookStatusResult from "./Component/report/bookStatus/BookStatusResult";
import FinesCollected from "./Component/report/fineCollected";
import Logout from "./Component/librarianLogout";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/adminLogin" element={<LibrarianLogin />} />
          <Route path="/adminLogin/adminDashboard" element={<AdminDashboard />} />
          <Route path="/userLogin/userDashboard/updateUser" element={<UpdateUser />} />
          <Route path="/userLogin/userDashboard/deleteUser" element={<DeleteUser />} />
          <Route path="/userLogin/userDashboard/searchBook" element={<SearchBook />} />
          <Route path="/userLogin/userDashboard/searchResults" element={<SearchResults />} />
          <Route path="/userLogin/userDashboard/borrowBook" element={<BorrowBook />} />
          <Route path="/userLogin/userDashboard/returnBook" element={<ReturnBook />} />
          <Route path="/userLogin/userDashboard/reserveBook" element={<ReserveBook />} />
          <Route path="/userLogin/userDashboard/cancelReservation" element={<CancelReservation />} />
          <Route path="/userLogin/userDashboard/createLoan" element={<CreateLoan />} />
          <Route path="/userLogin/userDashboard/userLogout" element={<UserLogout />} />
          <Route path="/adminLogin/adminDashboard/addBook" element={<AddBook />} />
          <Route path="/adminLogin/adminDashboard/updateBook" element={<UpdateBook />} />
          <Route path="/adminLogin/adminDashboard/deleteBook" element={<DeleteBook />} />
          <Route path="/adminLogin/adminDashboard/createLoan" element={<CreateLoan />} />
          <Route path="/adminLogin/adminDashboard/deleteLoan" element={<DeleteLoan />} />

          <Route path="/adminLogin/adminDashboard/trackDueDate" element={<TrackDueDate />} />
          <Route path="/adminLogin/adminDashboard/sendRemainder" element={<SendRemainder />} />
          <Route path="/adminLogin/adminDashboard/userActivity" element={<UserActivity />} />
          <Route path="/adminLogin/adminDashboard/userActivityResult" element={<UserActivityResult />} />
          <Route path="/adminLogin/adminDashboard/bookStatus" element={<BookStatus />} />
          <Route path="/adminLogin/adminDashboard/bookStatusResult" element={<BookStatusResult />} />
          <Route path="/adminLogin/adminDashboard/finesCollected" element={<FinesCollected />} />
          <Route path="/adminLogin/adminDashboard/logout" element={<Logout />} />
          <Route path="/userLogin" element={<UserLogin />} />
          <Route path="/userLogin/userDashboard" element={<UserDashboard />} />
          <Route path="/userRegister" element={<UserRegister />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
