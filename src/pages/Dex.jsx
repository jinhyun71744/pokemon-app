import DashBoard from "../components/DashBoard";
import styled from "styled-components";

const PageWrapper = styled.div`
  background-color: #e8e89a;
  min-height: 100vh;
`;

const Container = styled.div`
  /* background-color: #e8e89a; */
  max-width: 960px;
  margin: 0 auto;
  padding: 2rem 1rem;
  font-family: "Segoe UI", sans-serif;
  /* color: #333; */

  @media (max-width: 768px) {
    padding: 1.5rem 1rem;
  }
`;

const Dex = () => {
  return (
    <PageWrapper>
      <Container>
        <DashBoard />
      </Container>
    </PageWrapper>
  );
};

export default Dex;
