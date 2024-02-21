import {styled} from "styled-components"
import { GlobalStyle } from "./style/globalStyles"
import Cabecalho from "./components/Cabecalho"
import BarraLateral from "./components/BarraLateral"

const FundoGradiente = styled.div`
  
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;


`

function App() {

  return (
    <FundoGradiente>
      <Cabecalho/>
      <BarraLateral/>
    </FundoGradiente>
  )
}

export default App
