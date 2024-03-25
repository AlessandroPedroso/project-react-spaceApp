import styled from "styled-components";

const ItemListaEstilizado = styled.li`
    
    font-size: 22px;
    line-height: 29px;
    margin-bottom: 30px;
    cursor: pointer;
    /* color: ${(props) => props.ativo? "#c98cf1" : "#d9d9d9"}; */
    color: ${props => props.$ativo ? '#7B78E5':'#D9D9D9'};
    font-family: ${props => props.$ativo ? 'GandhiSansBold':'GandhiSansRegular'};
    display: flex;
    align-items: center;
    gap: 22px;
`

const ItemNavegacao = ({
  children,
  iconeAtivo,
  iconeInativo,
  ativo = false,
}) => {
  return (
    <ItemListaEstilizado $ativo={ativo}>
      <img src={ativo ? iconeAtivo : iconeInativo} alt="" />
      {children}
    </ItemListaEstilizado>
  );
};

export default ItemNavegacao;
