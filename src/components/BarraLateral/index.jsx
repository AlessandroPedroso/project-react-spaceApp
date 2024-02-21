import styled from "styled-components";
import ItemNavegacao from "../ItemNavegacao";

const ListaEstilizada = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 212px;
`;

const BarraLateral = () => {
  return (
    <aside>
      <nav>
        <ListaEstilizada>
            <ItemNavegacao iconeAtivo="/icones/Home-ativo.png" iconeInativo="/icones/Home - inativo.png" ativo={true}>
                Início
            </ItemNavegacao>
            <ItemNavegacao iconeAtivo="/icones/Mais vistas - ativo.png" iconeInativo="/icones/Mais vistas - inativo.png">
                Mais vistas
            </ItemNavegacao>
        </ListaEstilizada>
      </nav>
    </aside>
  );
};

export default BarraLateral;
