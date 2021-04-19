import styled from "styled-components";

export const Page = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .img {
    max-width: 100%;
    box-sizing: border-box;
  }
`;

export const Container = styled.div`
  width: 1024px;
  height: 595px;
  background: peru;
`;

export const ViewLeft = styled.div`
  width: 352px;
  height: 100%;
  background: #de4b4b;

  .alterar-forma {
    padding-top: 55px;
    padding-left: 68px;
    display: flex;
    align-items: center;
    > p {
      color: #fff;
      margin: 0;
      font-family: Verdana, Geneva, Tahoma, sans-serif;
    }
  }

  .seta {
    margin-right: 15px;
  }

  .titulo-cartao {
    margin-top: 50px;
    padding-left: 68px;
    display: flex;
    > p {
      color: #fff;
      margin: 0;
      margin-left: 15px;
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      font-size: 20px;
      line-height: 24px;
      letter-spacing: -0.01px;
      font-weight: bold;
    }
  }

  .cartao {
    margin-top: 30px;
    padding-left: 68px;
  }
`;
