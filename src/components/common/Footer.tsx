import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <p>@ 2024. React TypeScript</p>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  position: relative;
  bottom: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 50px;
  padding-bottom: 50px;
  user-select: none;
  border-top: 1px solid gray;
  & p {
    margin-top: 20px;
  }
`;
