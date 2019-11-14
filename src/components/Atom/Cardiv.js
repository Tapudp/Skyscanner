import styled from "styled-components";

export const Cardiv = styled.div`
  margin-top: 2rem;
  background-color: rgba(255, 255, 255, ${props => props.opac});
  backdrop-filter: blur(${props => props.blurpixels});
  min-height: 500px;
`;
