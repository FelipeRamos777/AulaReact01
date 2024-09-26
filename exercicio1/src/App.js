import './App.css';
import {useState} from "react";

function App() {

  const Hamb1 = { nome: "Cheeseburguer", preco: 25 };
  const Hamb2 = { nome: "Bacon Burguer", preco: 30 };
  const Hamb3 = { nome: "Veggie Burguer", preco: 28 };
  const Taxa1 = { nome: "Entrega", preco: 10 };
  const Taxa2 = { nome: "retirada", preco: 0 };

  const tiposervico = [Taxa1,Taxa2];

  const cardapio = [Hamb1,Hamb2,Hamb3];

  const[hambSelecionado, setHambSelecionado] = useState(-1);
  const[servico, setServico] = useState(-1);
  const[quantidade, setQuantidade] = useState(0);
  const[resultado, setResultado] = useState(null);

  function calcular(){

  }
  return (
    <div>
      
      <table class="header">
        <th>
      <h1> Calculadora de Pedido de Hambúrguer </h1>
      </th>
      </table>

      <p class="pp"> Cardápio de Hambúrguers </p>

      <table class="burguin">
        <tr>
          <th class="ths">
            Nome do Hambúrguer
          </th>
          <th class="ths">
              Preço
          </th>
        </tr>
  {cardapio.map(

    (hamb) => (
      <tr>
        <td>{hamb.nome}</td>
        <td>R$ {hamb.preco.toFixed(2)}</td>
      </tr>
    )
  )}
      </table>

      <p class="pp"> Opções de Serviço </p>

      <table class="servico">
        <tr>
          <th class="ths">
            Tipo do Serviço
          </th>
          <th class="ths">
              Taxa
          </th>
        </tr>
        {tiposervico.map(

          (Taxa) => (
            <tr>
              <td>{Taxa.nome}</td>
              <td>R$ {Taxa.preco.toFixed(2)}</td>
            </tr>
          )
        )}
    

        </table>


        <form>
          <p class="pp">Seu Pedido</p>

          Escolha seu Hambúrguer <br />
          <select value={hambSelecionado}
          onChange={ (e) => setHambSelecionado(e.target.value)} >
          <option value="-1"> Selecione um Hambúrguer</option>

          {cardapio.map(
            (hamb,indice) => (
              <option value={indice}>
                {hamb.nome} - R$ {hamb.preco.toFixed(2)}
              </option>

            )
          )}
          </select>
          <br /> <br/>
          Escolha o Tipo de Serviço <br />
          <select value={servico}
          onChange={ (e) => setServico(e.target.value)} >
          <option value="-1"> Selecione um Serviço</option>

          {tiposervico.map(
            (Taxa,indice) => (
              <option value={indice}>
                {Taxa.nome} - R$ {Taxa.preco.toFixed(2)}
              </option>

            )
          )}
          </select>
          <p>
            Digite a quantidade <br />
            <input type="Number" value={quantidade}
            onChange={(e) => setQuantidade(e.target.value)} />
          </p>

          <p>
            <input type="button" value="Processar Pedido" onClick={calcular} />
          </p>
        </form>

        {resultado}
    </div>
  );
}

export default App;
