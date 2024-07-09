import { ThemeProvider } from 'styled-components'
import temaPrincipal from './theme/principal'

import GlobalStyle, { Container } from './styles'

import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'

function App() {
  return (
    <>
      <ThemeProvider theme={temaPrincipal}>
        <GlobalStyle />
        <Header />
        <Hero />
        <Container>
          <ListaVagas />
        </Container>
      </ThemeProvider>
    </>
  )
}

export default App
