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
            <ItemNavegacao iconeAtivo="/icones/Mais curtidas - ativo.png" iconeInativo="/icones/Mais curtidas - inativo.png">
                Mais curtidas
            </ItemNavegacao>
            <ItemNavegacao iconeAtivo="/icones/Nova  - ativo.png" iconeInativo="/icones/Novas - inativo.png">
                Novas
            </ItemNavegacao>
            <ItemNavegacao iconeAtivo="/icones/Surpreenda-me - ativo.png" iconeInativo="/icones/Surpreenda-me - inativo.png">
                Surpreenda-me
            </ItemNavegacao>
        </ListaEstilizada>
      </nav>
    </aside>
  );
};

export default BarraLateral;
