import styled from "styled-components";

const PageContainer = styled.div`
  background-image: url(${props => props.url});
  box-shadow: inset 0 0 0 1000vmax rgba(0, 0, 0, 0.7);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  color: #fff;
  overflow: hidden;
`;

export default PageContainer;
