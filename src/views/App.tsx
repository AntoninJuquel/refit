import React from 'react'
import styled from 'styled-components'
import { Dialog, ProgressBar } from '../components'
import messages from '../json/messages.json'

const Container = styled.div`
  background-color: #0d1117;
  color: #c9d1d9;

  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  font-family: 'Poppins', sans-serif;
`

function randomBetweenMinMax(min: number, max: number) {
  return Math.random() * (max - min + 1) + min
}

function App() {
  const [progress, setProgress] = React.useState<number>(0)
  const [message, setMessage] = React.useState<string>('Loading...')

  const dialogRef = React.useRef<HTMLDialogElement>(null)

  React.useEffect(() => {
    let progressTimeout: NodeJS.Timeout
    let messageTimeout: NodeJS.Timeout
    let dialogTimeout: NodeJS.Timeout

    function setRandomProgress() {
      const next = randomBetweenMinMax(0.5, 3)
      progressTimeout = setTimeout(setRandomProgress, next * 1000)
      if (dialogRef.current?.open) return
      setProgress((progress) => (progress + randomBetweenMinMax(0.1, 1)) % 100)
    }

    function setRandomMessage() {
      const next = randomBetweenMinMax(0.5, 3)
      messageTimeout = setTimeout(setRandomMessage, next * 1000)
      if (dialogRef.current?.open) return
      setMessage(messages[Math.floor(Math.random() * messages.length)])
    }

    function setRandomDialog() {
      dialogRef.current?.show()
      const next = randomBetweenMinMax(0.5, 3)
      dialogTimeout = setTimeout(setRandomDialog, next * 1000)
    }

    setRandomProgress()
    setRandomMessage()
    setRandomDialog()

    return () => {
      clearTimeout(progressTimeout)
      clearTimeout(messageTimeout)
      clearTimeout(dialogTimeout)
    }
  }, [])

  return (
    <Container>
      <h1>Hello REFIT</h1>
      <img src={require('../images/programming.webp')} alt='Not found' />
      <ProgressBar progress={progress} message={message} />
      <Dialog ref={dialogRef} />
    </Container>
  )
}

export default App
