import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://unavatar.now.sh/github/egMarshall" 
          nome="Érico Gaiger Marshall" 
          descricao="Olá! Eu sou o Érico e sou estudante de desenvolvimento web Fullstack na Labenu! Além disso, sou graduando em psicologia pela PUCRS."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno
          imagem="https://img-premium.flaticon.com/png/512/1390/premium/1390727.png?token=exp=1631117251~hmac=24baea118e284f5d7df53c39eb567036"
          nome="Email"
          descricao="ericogmarshall1@gmail.com"
        />

<CardPequeno
          imagem="https://cdn-icons-png.flaticon.com/512/234/234270.png"
          nome="Endereço"
          descricao="Porto Alegre - RS"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências Profissionais</h2>
        <CardGrande 
          imagem="http://www.sulbiotec.com.br/wp-content/uploads/2017/07/PUCRS_produtos.png" 
          nome="PUCRS" 
          descricao="Monitor de Fraseologia Aeronáutica Internacional." 
        />
        
        <CardGrande 
          imagem="http://www.sulbiotec.com.br/wp-content/uploads/2017/07/PUCRS_produtos.png" 
          nome="PUCRS" 
          descricao="Monitor de Fraseologia Aeronáutica Nacional." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
