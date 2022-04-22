import styled from "styled-components";

const PageTitleStyles = styled.header`
  text-align:center;
  margin: 4rem 0 0;
`;

const Title = styled.h1`
  font-size: clamp(4rem, 10vw, 6rem);
  font-weight: 600;
  color:black;
  line-height: 1;
`;

const Description = styled.p`
  font-size: clamp(1rem, 4vw, 2rem);
  font-weight: 400;
  color:black;
`;

export {PageTitleStyles, Title, Description}
 