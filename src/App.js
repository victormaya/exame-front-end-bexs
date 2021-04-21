import React, { useEffect, useState } from "react";
import { Page, Container, ViewLeft, ViewRight, Formulario } from "./styled";
import seta from "./assets/icons/seta.png";
import seta_right from "./assets/icons/seta-r.png";
import icon_card from "./assets/icons/icon-card.svg";
import cartao from "./assets/icons/cartao.svg";
import cartaoAtivo from "./assets/icons/cartao-ativo.svg";
import versoCartaoImg from "./assets/icons/verso-cartao.svg";
import versoCartaoImgAtivo from "./assets/icons/verso-cartao-ativo.svg";
import check from "./assets/icons/check.png";

function App() {
  const [currentInputNumber, setCurrentInputNumber] = useState(
    "****************"
  );
  const [currentInputTitular, setCurrentInputTitular] = useState(
    "NOME DO TITULAR"
  );
  const [currentInputMes, setCurrentInputMes] = useState("00");
  const [currentInputAno, setCurrentInputAno] = useState("00");
  const [currentInputCvv, setCurrentInputCvv] = useState("***");

  const [colorParcela, setColorParcela] = useState(false);
  const [colorDate, setColorDate] = useState(false);

  const [versoCartao, setVersoCartao] = useState(false);

  useEffect(() => {
    if (currentInputNumber.length === 0) {
      setCurrentInputNumber("****************");
    }
    if (currentInputTitular.length === 0) {
      setCurrentInputTitular("NOME DO TITULAR");
    }
    if (currentInputMes.length === 0) {
      setCurrentInputMes("00");
    }
    if (currentInputAno.length === 0) {
      setCurrentInputAno("00");
    }
    if (currentInputCvv.length === 0) {
      setCurrentInputCvv("***");
    }
  }, [
    currentInputNumber,
    currentInputTitular,
    currentInputAno,
    currentInputMes,
    currentInputCvv,
  ]);

  return (
    <>
      <Page>
        <Container>
          <ViewLeft>
            <div className='alterar-forma'>
              <div className='seta'>
                <img src={seta} alt='seta' />
              </div>
              <p>Alterar forma de pagamento</p>
            </div>
            <div className='titulo-cartao'>
              <div className='icon-card'>
                <img src={icon_card} alt='icone-card' />
              </div>
              <p>Adicione um novo cartão de crédito</p>
            </div>
            {versoCartao === false ? (
              <div className='cartao'>
                <div className='img-cartao'>
                  <img
                    src={
                      currentInputNumber.length === 16 &&
                      currentInputNumber !== "****************"
                        ? cartaoAtivo
                        : cartao
                    }
                    alt='icone-card'
                  />
                </div>
                <div className='numero-cartao'>
                  <p>{currentInputNumber.slice(0, 4)}</p>
                  <p>{currentInputNumber.slice(4, 8)}</p>
                  <p>{currentInputNumber.slice(8, 12)}</p>
                  <p>{currentInputNumber.slice(12, 16)}</p>
                </div>
                <div className='titular-validade'>
                  <p>{currentInputTitular}</p>
                  <p>
                    {currentInputMes}/{currentInputAno}
                  </p>
                </div>
              </div>
            ) : (
              <div className='cartao'>
                <div className='img-cartao'>
                  <img
                    src={
                      currentInputNumber.length === 16 &&
                      currentInputNumber !== "****************"
                        ? versoCartaoImgAtivo
                        : versoCartaoImg
                    }
                    alt='icone-card'
                  />
                </div>
                <div className='cvv-cartao'>
                  <p>{currentInputCvv}</p>
                </div>
              </div>
            )}
          </ViewLeft>
          <ViewRight>
            <div className='passo'>
              <p className='passo-numero'>1</p>
              <p>Carrinho</p>
              <div>
                <img src={seta_right} alt='seta' />
              </div>
              <div className='icone-check'>
                <img src={check} alt='check' />
              </div>
              <p>Pagamento</p>
              <div>
                <img src={seta_right} alt='seta' />
              </div>
              <p className='passo-numero passo-numero_last'>3</p>
              <p>Confirmação</p>
            </div>
            <Formulario colorParcela={colorParcela} colorDate={colorDate}>
              <input
                className='form-input'
                type='number'
                placeholder='Número do cartão'
                onChange={(e) => setCurrentInputNumber(e.target.value)}
                onClick={() => setVersoCartao(false)}
              />
              <input
                className='form-input'
                type='text'
                placeholder='Nome (igual ao cartão)'
                onChange={(e) => setCurrentInputTitular(e.target.value)}
                onClick={() => setVersoCartao(false)}
              />
              <div className='validade-cvv'>
                <input
                  className='form-input date'
                  type='month'
                  placeholder='Validade'
                  onClick={() => setVersoCartao(false)}
                  onChange={(e) => {
                    const array_date = e.target.value.split("-");
                    setCurrentInputAno(array_date[0].slice(2, 4));
                    setCurrentInputMes(array_date[1]);
                    setColorDate(true);
                  }}
                />
                <input
                  className='form-input'
                  type='number'
                  placeholder='CVV'
                  onChange={(e) => setCurrentInputCvv(e.target.value)}
                  onClick={() => setVersoCartao(true)}
                />
              </div>
              <select
                className='form-input select'
                onChange={() => setColorParcela(true)}
                defaultValue='0'
                onClick={() => setVersoCartao(false)}
              >
                <option className='option option-desabled' disabled value='0'>
                  Número de parcelas
                </option>
                <option className='option' value='1'>
                  R$ XX,XX * 1x
                </option>
                <option className='option' value='2'>
                  R$ XX,XX * 2x
                </option>
                <option className='option' value='3'>
                  R$ XX,XX * 3x
                </option>
                <option className='option' value='4'>
                  R$ XX,XX * 4x
                </option>
                <option className='option' value='5'>
                  R$ XX,XX * 5x
                </option>
                <option className='option' value='6'>
                  R$ XX,XX * 6x
                </option>
                <option className='option' value='7'>
                  R$ XX,XX * 7x
                </option>
                <option className='option' value='8'>
                  R$ XX,XX * 8x
                </option>
                <option className='option' value='9'>
                  R$ XX,XX * 9x
                </option>
                <option className='option' value='10'>
                  R$ XX,XX * 10x
                </option>
                <option className='option' value='11'>
                  R$ XX,XX * 11x
                </option>
                <option className='option' value='12'>
                  R$ XX,XX * 12x
                </option>
              </select>
            </Formulario>
            <button
              className={
                currentInputNumber.length === 16 &&
                currentInputNumber !== "****************" &&
                currentInputTitular !== "NOME DO TITULAR" &&
                currentInputMes !== "00" &&
                currentInputAno !== "00" &&
                currentInputCvv !== "***" &&
                currentInputCvv.length === 3 &&
                colorParcela
                  ? "button-ativo"
                  : "button-inativo"
              }
            >
              continuar
            </button>
          </ViewRight>
        </Container>
      </Page>
    </>
  );
}

export default App;
