import styled from "styled-components";

function Header() {
  return (
    <HeaderContainer>
      <HeaderName>MY TODOLIST</HeaderName>
      <p>react-Typescript ver</p>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  border-bottom: 1px solid gray;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderName = styled.h2`
  font-size: 30px;
  font-weight: bolder;
  padding: 1.5rem;
`;
