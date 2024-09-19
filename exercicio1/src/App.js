import './App.css';

function App() {
  return (
    <div>
      
      <table class="header">
        <th>
      <h1> Calculadora de Pedido de Hambúrguer </h1>
      </th>
      </table>

      <p> Cardápio de Hambúrguers </p>

      <table class="burguin">
        <tr>
          <th class="ths">
            Nome do Hambúrguer
          </th>
          <th class="ths">
              Preço
          </th>
        </tr>
            <td>
              Cheeseburguer
            </td>
            <td>
              R$ 25.00
            </td>
        <tr>
            <td>
              Bacon Burguer
            </td>
            <td>
              R$ 30.00
            </td>
        </tr>
        
        <tr>
            <td>
              Veggie Burguer
            </td>
            <td>
              R$ 28.00
            </td>
        </tr>
      </table>
    </div>
  );
}

export default App;
