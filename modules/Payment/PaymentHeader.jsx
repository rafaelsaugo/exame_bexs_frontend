import React from 'react'

import {
  MESSAGES
} from './../../common/helpers'

import Button from './../../components/Button'
import CustomIcon from './../../components/CustomIcon'
import Heading from './../../components/Heading'
import Card from './../../components/Card'
import Stepper from './../../components/Stepper'

import Context, {
  withContext
} from './Payment.context'

import {
  BREADCRUMB,
  CONTAINER,
  HEADERCONTAINER,
  TITLE,
  CARD
} from './styles'

function PaymentHeader(props) {
  const {
    number = MESSAGES.payment.header.cardNumber,
    name = MESSAGES.payment.header.cardHolderName,
    date = MESSAGES.payment.header.cardExpDate,
    code = MESSAGES.payment.header.cardCVV,
    filled = false
  } = props

  const {
    cardNumber,
    cardHolderName,
    cardExpDate,
    cardCVV,
    cardCompany,
    rotateRight,
    rotateLeft,
  } = props

  return (
    <HEADERCONTAINER id="payment-header">
      <BREADCRUMB>
        <Button icon={'arrow-left'} noBackground lowercase small hLeft>{MESSAGES.payment.header.breadcrumb}</Button>

        <Stepper currentStep={2} totalSteps={3} />
      </BREADCRUMB>

      <TITLE>
        <CustomIcon name='card' />
        <Heading>{MESSAGES.payment.header.title}</Heading>
      </TITLE>

      <CARD>
        <Card
          filled={cardNumber}
          rotateRight={rotateRight}
          rotateLeft={rotateLeft}
          company={cardCompany}
          number={cardNumber || number}
          name={cardHolderName || name}
          date={cardExpDate || date}
          code={cardCVV || code}
        />
      </CARD>
    </HEADERCONTAINER>
  )
}

export default withContext(PaymentHeader)
