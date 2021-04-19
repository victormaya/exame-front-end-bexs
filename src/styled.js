import styled from "styled-components";

export const Page = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const Container = styled.div`
  width: 1024px;
  height: 595px;
  display: flex;
`;

export const ViewLeft = styled.div`
  width: 352px;
  height: 100%;
  background: #de4b4b;
  z-index: 2;

  .alterar-forma {
    padding-top: 55px;
    padding-left: 68px;
    display: flex;
    align-items: center;
    > p {
      color: #fff;
      margin: 0;
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
      font-size: 20px;
      line-height: 24px;
      letter-spacing: -0.01px;
      font-weight: bold;
    }
  }

  .cartao {
    margin-top: 30px;
    padding-left: 68px;
    position: relative;
  }

  .numero-cartao {
    display: flex;
    font-size: 24px;
    line-height: 27px;
    letter-spacing: -0.12px;
    color: #fff;
    position: absolute;
    top: 80px;
    left: 95px;
    width: 100%;
    > p {
      margin-right: 28px;
      text-shadow: 0px 1px 2px #000000b3;
    }
  }

  .titular-validade {
    display: flex;
    font-size: 16px;
    line-height: 23px;
    letter-spacing: -0.12px;
    color: #fff;
    top: 150px;
    left: 95px;
    position: absolute;
    text-shadow: 0px 1px 2px #000000b3;
    > p:nth-child(1) {
      margin-right: 122px;
      width: 160px;
    }
  }
`;

export const ViewRight = styled.div`
  width: 672px;
  height: 100%;
  /* background: rgba(0, 0, 0, 0.1); */
  z-index: 1;

  .passo {
    margin-top: 50px;
    padding-left: 195px;
    display: flex;
    align-items: center;
    > p {
      font-size: 13px;
      line-height: 0px;
      letter-spacing: -0.01px;
      margin-left: 8px;
      margin-right: 24px;
      color: #de4b4b;
    }
    .passo-numero {
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bolder;

      height: 22px;
      width: 22px;
      border: 1.3px solid #de4b4b;
      border-radius: 50%;
      margin: 0;
    }
    .icone-check,
    .passo-numero_last {
      margin-left: 24px;
    }
  }
`;

export const Formulario = styled.div`
  margin-top: 70px;
  padding-left: 168px;

  .form-input {
    width: 440px;
    height: 25px;
    border: none;
    border-bottom: 1px solid #c9c9c9;
    margin-bottom: 62px;
    ::placeholder {
      color: #c9c9c9;
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      font-size: 22px;
    }
    :focus {
      box-shadow: 0 0 0 0;
      border: 0 none;
      outline: 0;
      border-bottom: 1px solid #4bde75;
    }
  }

  .validade-cvv {
    display: flex;
    .form-input {
      width: 212px;
      :nth-child(1) {
        margin-right: 16px;
      }
    }
  }
`;
