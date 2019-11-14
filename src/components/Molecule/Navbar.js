import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PageName from "../Atom/PageName";

function Navbar() {
  return (
    <NavbarContainer>
      <p>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          Hello backpacker
        </Link>
      </p>
      <p>James Connor</p>

      <PageName name="Profile" />
      <PageName name="Payment" />
      <PageName name="Library" />
      <PageName name="Inbox" />
      <PageName name="Logout" />
    </NavbarContainer>
  );
}

const NavbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 0 0 0;
  padding: 1rem 1rem 0 1rem;
  height: 100vh;
  background-color: #383838;
  color: #ffffff;
`;

export default Navbar;
