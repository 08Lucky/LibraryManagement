import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

const userSidebar = () => {
  return (
    <div style={{ display: 'flex', height: 'fit', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
            User
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/userLogin/userDashboard/updateUser" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Update User</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/userLogin/userDashboard/deleteUser" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Delete User</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/userLogin/userDashboard/searchBook" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Search Book</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/userLogin/userDashboard/borrowBook" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Borrow Book</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/userLogin/userDashboard/returnBook" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Return Book</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/userLogin/userDashboard/reserveBook" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Reserve Book</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/userLogin/userDashboard/cancelReservation" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Cancel Reservation</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/userLogin/userDashboard/createLoan" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Create Loan</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/userLogin/userDashboard/userLogout" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="exclamation-circle">Logout</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
            }}
          >
            
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default userSidebar;