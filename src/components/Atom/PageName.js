import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function PageName(props) {
  const { name } = props;
  return (
    <PageNameContainer>
      <Link
        to={`/${name}`}
        style={{ color: "inherit", textDecoration: "none" }}
      >
        <span className="px-2">
          <i className="fas fa-user-circle"></i>
        </span>
        <NameSpan>{name}</NameSpan>
      </Link>
    </PageNameContainer>
  );
}

const PageNameContainer = styled.span`
  margin: 1rem 0;
  width: 100%;
  padding: 10px 0.5rem;
  font-size: 1.4rem;
  &:hover {
    color: #33cccc;
  }
`;

const NameSpan = styled.span`
  padding: 0 0 0 1rem;
`;

export default PageName;
