import './App.css'
import ColoredParagraph from './components/colored-paragraph/colored-paragraph'

function App() {
  const colors = ['#ff1d0d', '#edb402', '#ffff00', '#8fce00', '#63bcff', '#ee82ee'];

  return (
    <>
      <ColoredParagraph Colors={colors}>
        Esse é um parágrafo colorido!!!
      </ColoredParagraph>
    </>
  )
}

export default App
