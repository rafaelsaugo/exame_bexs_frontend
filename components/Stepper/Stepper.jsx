import React from 'react'

import CustomIcon from '../CustomIcon'

import {
  CONTAINER
} from './styles'

function Stepper(props) {
  const {
    currentStep,
    totalSteps
  } = props

  return (
    <CONTAINER className="stepper">
      <span>
        <strong>{`Etapa ${currentStep}`}</strong> {` de ${totalSteps}`}
      </span>

      <ul>
        <li className="completed">
          <span className="icon">
            <CustomIcon name="check" />
          </span>
          <span className="label">
            Carrinho
          </span>
          <span className="icon-after">
            <CustomIcon name="arrow-right" />
          </span>
        </li>

        <li>
          <span className="icon">
            2
          </span>
          <span className="label">
            Pagamento
          </span>
          <span className="icon-after">
            <CustomIcon name="arrow-right" />
          </span>
        </li>

        <li>
          <span className="icon">
            3
          </span>
          <span className="label">
            Confirmação
          </span>
        </li>
      </ul>
    </CONTAINER>
  )
}

export default Stepper
