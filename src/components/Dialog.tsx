import React from 'react'
import styled from 'styled-components'

const Container = styled.dialog`
  background-color: #161b22;
  color: #c9d1d9;

  border: 1px solid #30363d;
  border-radius: 5px;

  span {
    display: flex;
    gap: 10px;
  }

  button {
    border: 1px solid #f0f6fc1a;
    border-radius: 5px;
    background-color: #21262d;
    color: #c9d1d9;

    cursor: pointer;

    :hover {
      background-color: #30363d;
      border: 1px solid #8b949e;
    }

    :active {
      background-color: #282e33;
      border: 1px solid #6e7681;
    }

    :target {
      background-color: #161b22;
    }

    :focus {
      background-color: #21262d;
      border: 1px solid #8b949e;
      box-shadow: 0 0 0 3px #8b949e4d;
    }
  }
`

export const Dialog = React.forwardRef<HTMLDialogElement>((props, ref) => {
  return (
    <Container ref={ref}>
      <form method='dialog'>
        <h3>Refit must go on</h3>
        <p>Do you want to continue refit ?</p>
        <span>
          <button>No</button>
          <button>Yes</button>
        </span>
      </form>
    </Container>
  )
})

Dialog.displayName = 'Dialog'
