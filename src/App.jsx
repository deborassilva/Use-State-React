import { useState } from "react"
import Button from "./components/Button"
function App() {
     const [colorName, setColorName] = useState('Branco')
     const [buttonColor, setButtonColor] = useState('pink')
     const [buttonSize, setButtonSize] = useState('sm')
  return (
    <>
    <Button handleClick={() => {setButtonColor('pink')}} size='sm' color='pink' value='Botão rosa' />
    <Button handleClick={() => {setButtonColor('orange')}}size='md' color='orange' value='Botão laranja' />
    <Button handleClick={() => {setButtonSize('sm')}}size='sm' color='pink' value='Botão pequeno' />
    <Button handleClick={() => {setButtonSize('md')}}size='md' color='orange' value='Botão médio' />
    <Button size={buttonSize} color={buttonColor} value="Botão personalizado" />
  
    </>
  )
}

export default App
