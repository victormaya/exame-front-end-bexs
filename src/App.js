import React from "react";
import { Page, Container, ViewLeft } from "./styled";
import seta from "./assets/icons/seta.png";
import icon_card from "./assets/icons/icon-card.svg";
import cartao from "./assets/icons/cartao.svg";

function App() {
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
            </div>
          </ViewLeft>
        </Container>
      </Page>
    </>
  );
}

export default App;
