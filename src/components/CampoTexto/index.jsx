import styled from "styled-components";

import search from './search.png'

const CampoEstilizado = styled.div`

    position: relative;
    display: inline-block;

`;

const Input = styled.input`
  width: 602px;
  height: 56px;
  color: #d9d9d9;
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;
  padding: 12px 16px;
  border-radius: 10px;
  border: 2px solid;
  border-color: #c98cf1;
  background: transparent;
  box-sizing: border-box;
`;

const IconeLupa = styled.img`
    
    position: absolute;
    top: 10px;
    right: 10px;
    width: 38px;
    height: 38px;
`

export default function CampoTexto() {
  return (
    <CampoEstilizado>
      <Input placeholder="O que você procura?" type="text" />
      <IconeLupa src={search} alt="icone da lupa" />
    </CampoEstilizado>
  );
}
