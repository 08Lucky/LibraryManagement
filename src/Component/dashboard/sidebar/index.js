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

const Sidebar = () => {
  return (
    <div style={{ display: 'flex', height: 'fit', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
            Admin
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
          <NavLink exact to="/adminLogin/adminDashboard/updateUser" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Update User</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/adminLogin/adminDashboard/deleteUser" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Delete User</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/adminLogin/adminDashboard/addBook" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Add Book</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/adminLogin/adminDashboard/updateBook" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Update Book</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/adminLogin/adminDashboard/deleteBook" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Delete Book</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/adminLogin/adminDashboard/createLoan" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Create Loan</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/adminLogin/adminDashboard/trackDueDate" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Track Due-Date</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/adminLogin/adminDashboard/sendRemainder" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">Send Remainder</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/analytics" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">Report</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/hero404" target="_blank" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="exclamation-circle">404 page</CDBSidebarMenuItem>
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

export default Sidebar;