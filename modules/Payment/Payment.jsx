import React, {
  useState,
  useEffect
} from 'react'

import PaymentHeader from './PaymentHeader'
import PaymentContent from './PaymentContent'
import Context from './Payment.context'

import {
  CONTAINER
} from './styles'

function Payment(props) {
  const [cardNumber, setCardNumber] = useState('')
  const [cardHolderName, setCardHolderName] = useState('')
  const [cardExpDate, setCardExpDate] = useState('')
  const [cardCVV, setCardCVV] = useState('')
  const [cardCVVSize, setCardCVVSize] = useState(3)
  const [cardCompany, setCardCompany] = useState('')
  const [cardInstallments, setCardInstallments] = useState(0)
  const [rotateLeft, setRotateLeft] = useState(false)
  const [rotateRight, setRotateRight] = useState(false)

  useEffect(() => {
    if ((!cardNumber || !cardHolderName || !cardExpDate) && !!rotateRight && !rotateLeft) {
      setRotateRight(false)
      setRotateLeft(true)

      return
    }

    if (cardNumber && cardHolderName && cardExpDate && !rotateRight && !rotateLeft) {
      setRotateRight(true)
      setRotateLeft(false)
  
      setTimeout(() => {
        setRotateRight(false)
        setRotateLeft(true)
      }, 500)
    }
  })

  const context = {
    cardNumber,
    setCardNumber,
    cardHolderName,
    setCardHolderName,
    cardExpDate,
    setCardExpDate,
    cardCVV,
    setCardCVV,
    cardCompany,
    setCardCompany,
    cardCVVSize,
    setCardCVVSize,
    cardInstallments,
    setCardInstallments,
    rotateLeft,
    setRotateLeft,
    rotateRight,
    setRotateRight
  }

  return (
    <CONTAINER id="payment">
      <Context.Provider value={context}>
        <PaymentHeader />
        <PaymentContent />
      </Context.Provider>
    </CONTAINER>
  )
}

export default Payment
