import './App.css'
import ColoredParagraph from './components/colored-paragraph/colored-paragraph'
import Button from './components/button/button'

function App() {
  const colors = ['#ff1d0d', '#edb402', '#ffff00', '#8fce00', '#63bcff', '#ee82ee'];

  const alertLabel = (label) => {
    alert(`A label desse botão é "${label}"`)
  }

  return (
    <>
      <Button label='Olá' alertLabel= {alertLabel}/>

      <ColoredParagraph Colors={colors}>
        Esse é um parágrafo colorido!!!
      </ColoredParagraph>

      <Button alertLabel= {alertLabel}/>
    </>
  )
}

export default App
