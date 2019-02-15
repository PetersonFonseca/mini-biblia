import React, { Component } from 'react';
import './App.css';
import { Button } from 'react-bootstrap';



class App extends Component {

  state = {
    mensagem: ''
  }

  confianca(){
    this.setState({
      mensagem: 'Tudo posso naquele que me fortalece. Fp 4:13'
    });
  }

  amor(){
    this.setState({
      mensagem: 'Amai-vos uns aos outros assim como eu vos amei. Jo 15:12'
    });
  }

  fe(){
    this.setState({
      mensagem: 'Sem fé é impossível agradar a Deus. Hb 11:0'
    });
  }

  gratidao(){
    this.setState({
      mensagem: 'Rendei graças ao Senhor porque ele é bom. Sl 136:1'
    });
  }

  tristeza(){
    this.setState({
      mensagem: 'Não se turbe o vosso coração, credes em Deus. Jo 14:1'
    });
  }

  seguranca(){
    this.setState({
      mensagem: 'Confia no Senhor de todo o seu coração. Pv 3:5'
    });
  }

  pecado(){
    this.setState({
      mensagem: 'Porque todos pecaram e destituídos estão da glória de Deus. Rm 3:23'
    });
  }

  angustia(){
    this.setState({
      mensagem: 'Invoca-me no dia da angústia, e eu te livrarei. Sl 50 15-23'
    });
  }

  salvacao(){
    this.setState({
      mensagem: 'Quem crer em Jesus será salvo. Mc 16:16'
    });
  }

  alegria(){
    this.setState({
      mensagem: 'Serve ao Senhor com alegria. Sl 100:2'
    });
  }

  paz(){
    this.setState({
      mensagem: 'Deixo-vos a paz, a minha paz vos dou. Jo 14:27'
    });
  }

  promessa(){
    this.setState({
      mensagem: 'Entrega teu caminho ao Senhor, confia Nele e Ele tudo Fará.'
    });
  }  

  render() {
    return (
      <div className="App">
        <div className="titulo">
          <h1>Mensagens de Deus.</h1>
        </div>
        <div className="mensagem">
          <h1>{this.state.mensagem}</h1>        
        </div> 
        <div>
          <Button variant="secondary" className="bt_normal" onClick={() => this.confianca()}>Confiança</Button>
          <Button variant="secondary" className="bt_normal" onClick={() => this.amor()}>Amor</Button>
          <Button variant="secondary" className="bt_normal" onClick={() => this.fe()}>Fé</Button>         
          <Button variant="secondary" className="bt_normal" onClick={() => this.gratidao()}>Gratidão</Button>
          <Button variant="secondary" className="bt_normal" onClick={() => this.tristeza()}>Tristeza</Button>
          <Button variant="secondary" className="bt_normal" onClick={() => this.seguranca()}>Segurança</Button>         
          <Button variant="secondary" className="bt_normal" onClick={() => this.pecado()}>Pecado</Button>
          <Button variant="secondary" className="bt_normal" onClick={() => this.angustia()}>Angustia</Button>
          <Button variant="secondary" className="bt_normal" onClick={() => this.salvacao()}>Salvação</Button>       
          <Button variant="secondary" className="bt_normal" onClick={() => this.alegria()}>Alegria</Button>
          <Button variant="secondary" className="bt_normal" onClick={() => this.paz()}>Paz</Button>
          <Button variant="secondary" className="bt_normal" onClick={() => this.promessa()}>Promessa</Button>   
      </div>        
    </div>
    );
  }
}

export default App;
