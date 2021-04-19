import React, { useEffect, useState } from "react";
import { Page, Container, ViewLeft, ViewRight, Formulario } from "./styled";
import seta from "./assets/icons/seta.png";
import seta_right from "./assets/icons/seta-r.png";
import icon_card from "./assets/icons/icon-card.svg";
import cartao from "./assets/icons/cartao.svg";
import check from "./assets/icons/check.png";

function App() {
  var currentNumber = ["* * * *", "* * * *", "* * * *", "* * * *"];

  const InserirNumeroCartao = (numero) => {
    currentNumber = ["* * * *", "* * * *"];
    // if (numero.length <= 4) {
    //   currentNumber = [numero.slice(0, numero.length - 1)];
    // } else if (numero.length > 4 && numero.length <= 8) {
    //   currentNumber = [numero.slice(0, 4), numero.slice(4, numero.length - 1)];
    // } else if (numero.length > 8 && numero.length <= 12) {
    //   currentNumber = [
    //     numero.slice(0, 4),
    //     numero.slice(4, 8),
    //     numero.slice(8, numero.length - 1),
    //   ];
    // } else if (numero.length > 12 && numero.length <= 16) {
    //   currentNumber = [
    //     numero.slice(0, 4),
    //     numero.slice(4, 8),
    //     numero.slice(8, 12),
    //     numero.slice(12, numero.length - 1),
    //   ];
    // }
  };

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
              <img src={icon_card} alt='icone-card' />
              <p>Adicione um novo cartão de crédito</p>
            </div>
            <div className='cartao'>
              <img src={cartao} alt='icone-card' />
              <div className='numero-cartao'>
                <p>{currentNumber[0]}</p>
                <p>{currentNumber[1]}</p>
                <p>{currentNumber[2]}</p>
                <p>{currentNumber[3]}</p>
              </div>
              <div className='titular-validade'>
                <p>NOME DO TITULAR</p>
                <p>00/00</p>
              </div>
            </div>
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
            <Formulario>
              <input
                className='form-input'
                type='number'
                placeholder='Número do cartão'
                onChange={(e) => InserirNumeroCartao(e.target.value)}
              />
              <input
                className='form-input'
                type='text'
                placeholder='Nome (igual ao cartão)'
              />
              <div className='validade-cvv'>
                <input
                  className='form-input'
                  type='number'
                  placeholder='Validade'
                />
                <input className='form-input' type='number' placeholder='CVV' />
              </div>
              <input
                className='form-input'
                type='number'
                placeholder='Número de parcelas'
              />
            </Formulario>
          </ViewRight>
        </Container>
      </Page>
    </>
  );
}

export default App;
