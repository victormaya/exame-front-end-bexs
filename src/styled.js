import styled from "styled-components";

export const Page = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  @media (max-width: 739px) {
    height: 100%;
  }
  @media (min-width: 740px) {
    justify-content: center;
    align-items: center;
  }

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
  display: flex;

  @media (max-width: 739px) {
    width: 360px;
    height: auto;
    flex-direction: column;
    overflow-x: hidden;
  }
  @media (min-width: 740px) {
    width: 740px;
    height: 430px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  }
  @media (min-width: 1024px) {
    width: 1024px;
    height: 595px;
  }
`;

export const ViewLeft = styled.div`
  background: #de4b4b;
  z-index: 2;
  @media (max-width: 739px) {
    width: 100%;
    height: 200px;
    padding-top: 40px;
  }
  @media (min-width: 740px) {
    width: 254px;
    height: 100%;
  }
  @media (min-width: 1024px) {
    width: 352px;
  }

  .alterar-forma {
    display: flex;
    align-items: center;
    @media (min-width: 740px) {
      padding-top: 40px;
      padding-left: 49px;
    }
    @media (min-width: 1024px) {
      padding-top: 55px;
      padding-left: 68px;
    }
    > p {
      color: #fff;
      margin: 0;
    }
  }

  .seta {
    @media (max-width: 739px) {
      padding-left: 15px;
      margin-right: 109px;
    }
    @media (min-width: 740px) {
      margin-right: 10px;
    }
    @media (min-width: 1024px) {
      margin-right: 15px;
    }
  }

  .titulo-cartao {
    @media (max-width: 739px) {
      justify-content: center;
      margin-top: 30px;
    }
    @media (min-width: 740px) {
      margin-top: 36px;
      padding-left: 49px;
    }
    @media (min-width: 1024px) {
      margin-top: 50px;
      padding-left: 68px;
    }
    display: flex;
    > p {
      color: #fff;
      margin: 0;
      @media (max-width: 739px) {
        width: 165px;
        margin-left: 15px;
        font-size: 16px;
        line-height: 20px;
      }
      @media (min-width: 740px) {
        margin-left: 10px;
        font-size: 14px;
        line-height: 17px;
      }
      @media (min-width: 1024px) {
        margin-left: 15px;
        font-size: 20px;
        line-height: 24px;
      }
      letter-spacing: -0.01px;
      font-weight: bold;
    }
  }

  .icon-card {
    > img {
      max-width: 140%;
      box-sizing: border-box;
    }
    @media (max-width: 739px) {
      width: 40px;
      height: 40px;
      > img {
        max-width: 95%;
        box-sizing: border-box;
      }
    }
    @media (min-width: 740px) {
      width: 36px;
      height: 36px;
      margin-right: 10px;
    }
    @media (min-width: 1024px) {
      width: 50px;
      height: 50px;
      margin-right: 15px;
    }
  }

  .cartao {
    @media (min-width: 740px) {
      margin-top: 21px;
      padding-left: 49px;
    }
    @media (min-width: 1024px) {
      margin-top: 30px;
      padding-left: 68px;
    }
    position: relative;
  }

  .img-cartao {
    @media (max-width: 739px) {
      width: 280px;
      height: 172px;
      margin-top: 15px;
      position: relative;
      margin-left: 50%;
      transform: translateX(-50%);
    }
    @media (min-width: 740px) {
      width: 263px;
      height: 161px;
    }
    @media (min-width: 1024px) {
      width: 364px;
      height: 223.78px;
    }
    > img {
      max-width: 100%;
      box-sizing: border-box;
    }
  }

  .numero-cartao {
    display: flex;

    letter-spacing: -0.12px;
    color: #fff;
    position: absolute;

    width: 100%;
    @media (max-width: 739px) {
      left: 54px;
      top: 60px;
      line-height: 20px;
      font-size: 19px;
    }
    @media (min-width: 740px) {
      left: 68px;
      top: 57px;
      line-height: 19px;
      font-size: 17px;
    }
    @media (min-width: 1024px) {
      font-size: 24px;
      line-height: 27px;
      top: 80px;
      left: 95px;
    }
    > p {
      @media (max-width: 739px) {
        margin-right: 10px;
      }
      @media (min-width: 740px) {
        margin-right: 20px;
      }
      @media (min-width: 1024px) {
        margin-right: 28px;
      }
      text-shadow: 0px 1px 2px #000000b3;
    }
  }

  .titular-validade {
    display: flex;
    letter-spacing: -0.12px;
    color: #fff;
    position: absolute;
    text-shadow: 0px 1px 2px #000000b3;
    @media (max-width: 739px) {
      left: 54px;
      top: 127px;
      line-height: 15px;
      font-size: 12px;
    }
    @media (min-width: 740px) {
      left: 68px;
      top: 108px;
      line-height: 16px;
      font-size: 11px;
    }
    @media (min-width: 1024px) {
      font-size: 16px;
      line-height: 23px;
      top: 150px;
      left: 95px;
    }
    > p:nth-child(1) {
      @media (max-width: 739px) {
        margin-right: 28px;
        width: 190px;
      }
      @media (min-width: 740px) {
        margin-right: 59px;
        width: 144px;
      }
      @media (min-width: 1024px) {
        margin-right: 82px;
        width: 200px;
      }
      text-transform: uppercase;
    }
  }

  .cvv-cartao {
    display: flex;
    letter-spacing: -0.12px;
    color: #000;
    position: absolute;

    @media (max-width: 739px) {
      left: 180px;
      top: 65px;
      line-height: 20px;
      font-size: 19px;
    }
    @media (min-width: 740px) {
      left: 177px;
      top: 58px;
      font-size: 17px;
      line-height: 19px;
      width: 100%;
    }
    @media (min-width: 1024px) {
      top: 81px;
      left: 246px;
      font-size: 24px;
      line-height: 27px;
    }
    > p {
      text-shadow: 0px 1px 2px #000000b3;
    }
  }
`;

export const ViewRight = styled.div`
  height: 100%;
  z-index: 1;
  @media (max-width: 739px) {
    padding: 0 40px;
    padding-top: 115px;
    justify-content: center;
  }
  @media (min-width: 740px) {
    width: 485px;
  }
  @media (min-width: 1024px) {
    width: 672px;
  }

  .passo {
    @media (min-width: 740px) {
      margin-top: 36px;
      padding-left: 140px;
    }
    @media (min-width: 1024px) {
      margin-top: 50px;
      padding-left: 195px;
    }
    display: flex;
    align-items: center;
    > p {
      letter-spacing: -0.01px;
      line-height: 0px;
      @media (min-width: 740px) {
        font-size: 9px;
        margin-left: 5px;
        margin-right: 17px;
      }
      @media (min-width: 1024px) {
        font-size: 13px;
        margin-left: 8px;
        margin-right: 24px;
      }
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
      @media (min-width: 740px) {
        margin-left: 17px;
      }
      @media (min-width: 1024px) {
        margin-left: 24px;
      }
    }
  }

  button {
    background-color: #de4b4b;
    border-radius: 10px;
    border: none;
    color: #fff;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    text-transform: uppercase;
    letter-spacing: -0.01px;
    font-weight: bold;
    @media (max-width: 739px) {
      width: 280px;
      height: 50px;
      margin-bottom: 15px;
      position: relative;
    }

    @media (min-width: 740px) {
      width: 177px;
      height: 36px;
      margin-left: 261px;
      font-size: 12px;
      line-height: 15px;
    }
    @media (min-width: 1024px) {
      width: 246px;
      height: 51px;
      margin-left: 362px;
      font-size: 17px;
      line-height: 22px;
    }
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    :hover {
      @media (min-width: 740px) {
        transform: scale(1.1);
      }
    }
  }

  .button-ativo {
    background-color: #de4b4b;
  }
  .button-inativo {
    background-color: #c9c9c9;
  }
`;

export const Formulario = styled.div`
  @media (min-width: 740px) {
    margin-top: 50px;
    padding-left: 121px;
  }
  @media (min-width: 1024px) {
    margin-top: 70px;
    padding-left: 168px;
  }

  .form-input {
    border: none;
    border-bottom: 1px solid #c9c9c9;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    background: rgba(0, 0, 0, 0);
    @media (max-width: 739px) {
      width: 100%;
      height: 25px;
      font-size: 17px;
      margin-bottom: 44px;
    }
    @media (min-width: 740px) {
      width: 317px;
      height: 18px;
      margin-bottom: 44px;
      font-size: 15px;
    }
    @media (min-width: 1024px) {
      width: 440px;
      height: 25px;
      margin-bottom: 62px;
      font-size: 22px;
    }
    ::placeholder,
    .option {
      color: #c9c9c9;
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      @media (max-width: 739px) {
        font-size: 17px;
      }
      @media (min-width: 740px) {
        font-size: 15px;
      }
      @media (min-width: 1024px) {
        font-size: 22px;
      }
    }

    .option {
      color: #000;
    }
    .option-desabled {
      color: #c9c9c9;
      background: #e3e3e3;
    }

    :focus {
      box-shadow: 0 0 0 0;
      border: 0 none;
      outline: 0;
      border-bottom: 1px solid #4bde75;
    }
  }

  .select {
    color: ${(props) => (props.colorParcela === true ? "#000" : "#c9c9c9")};
  }
  .date {
    @media (max-width: 739px) {
      width: 130px;
    }
    color: ${(props) => (props.colorDate === true ? "#000" : "#c9c9c9")};
  }
  .validade-cvv {
    display: flex;
    @media (max-width: 739px) {
      justify-content: space-between;
    }
    .form-input {
      @media (max-width: 739px) {
        width: 130px;
      }
      @media (min-width: 740px) {
        width: 153px;
      }
      @media (min-width: 1024px) {
        width: 212px;
      }
      :nth-child(1) {
        @media (min-width: 740px) {
          margin-right: 11px;
        }
        @media (min-width: 1024px) {
          margin-right: 16px;
        }
      }
    }
  }
`;
