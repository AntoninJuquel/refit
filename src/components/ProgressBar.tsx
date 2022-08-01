import React from 'react'
import styled from 'styled-components'

interface Props {
  progress: number
  message?: string
  width?: number | string
}

const Container = styled.div<{ width?: number | string }>`
  display: flex;
  flex-direction: column;
  align-items: center;

  progress {
    width: 100%;
    height: 7px;
    border-radius: 5px;
    border: none;
    width: ${({ width }) => width || '160px'};
  }
  progress::-webkit-progress-bar {
    border-radius: 5px;
    background-color: #f0f6fc;
  }
  progress::-webkit-progress-value {
    border-radius: 5px;
    background-color: #2585f5;
  }
  progress::-moz-progress-bar {
    border-radius: 5px;
    background-color: #2585f5;
  }

  p {
    margin: 0;
  }
`

export function ProgressBar({ progress, message, width }: Props) {
  return (
    <Container width={width}>
      <p>{progress.toFixed(2)}%</p>
      <progress value={progress} max={100} />
      {message && <p>{message}</p>}
    </Container>
  )
}
