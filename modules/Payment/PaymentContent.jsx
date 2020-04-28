import React, {
  useState
} from 'react'
import CardValidator from 'card-validator'

import {
  MESSAGES
} from './../../common/helpers'

import Button from './../../components/Button'
import Input from './../../components/Input'
import MaskedInput from './../../components/Input/MaskedInput'
import Select from './../../components/Select'
import Form from './../../components/Form'
import Fieldset from './../../components/Fieldset'
import Stepper from './../../components/Stepper'

import Context, {
  withContext
} from './Payment.context'

import {
  BREADCRUMB,
  CONTAINER,
  HEADERCONTAINER,
  CONTENTCONTAINER,
  TITLE,
  CARD
} from './styles'

const cardInstallmentsList = [{
  label: '1x',
  value: 1,
},{
  label: '2x',
  value: 2,
},{
  label: '3x',
  value: 3,
},{
  label: '4x',
  value: 5,
},{
  label: '6x',
  value: 6,
},{
  label: '7x',
  value: 7,
},{
  label: '7x',
  value: 7,
},{
  label: '8x',
  value: 8,
},{
  label: '9x',
  value: 9,
},{
  label: '10x',
  value: 10,
},{
  label: '11x',
  value: 11,
},{
  label: '12x',
  value: 12,
}]

function handleCardNumberChange(args) {
  return event => {
    const valid = CardValidator.number(event.currentTarget.value)

    const a = {
      values: [
        '',
        true,
        3,
        '',
        !!event.currentTarget.value
      ]
    }

    if (!!valid.isValid) {
      Object.assign(a, {
        values: [
          event.currentTarget.value,
          false,    
          valid.card.code.size,
          valid.card.type,
          !!event.currentTarget.value
        ]
      })
    }

    args && args.length && args.forEach((f, i) => {
      f(a.values[i])
    })
  }
}

function handleCardHolderNameChange(args) {
  return event => {
    const valid = event.currentTarget.value.match(/^(([a-zA-Z]){1,})+\s+([a-zA-Z]){1,}/i)

    const a = {
      values: [
        event.currentTarget.value,
        false,
        !!event.currentTarget.value,
      ]
    }

    if (!valid) {
      Object.assign(a, {
        values: [
          '',
          false,
          !!event.currentTarget.value,
        ]
      })
    }

    args && args.length && args.forEach((f, i) => {
      f(a.values[i])
    })
  }
}

function handleCardExpDateChange(args) {
  return event => {
    const valid = CardValidator.expirationDate(event.currentTarget.value)

    const a = {
      values: [
        event.currentTarget.value,
        false,
        !!event.currentTarget.value,
      ]
    }

    if (!valid.isValid) {
      Object.assign(a, {
        values: [
          '',
          true,
          !!event.currentTarget.value,
        ]
      })
    }

    args && args.length && args.forEach((f, i) => {
      f(a.values[i])
    })
  }
}

function handleCardCVVChange(args) {
  return event => {
    const valid = CardValidator.cvv(event.currentTarget.value, 3)

    const a = {
      values: [
        event.currentTarget.value,
        false,
        !!event.currentTarget.value,
      ]
    }

    if (!valid.isValid) {
      Object.assign(a, {
        values: [
          '',
          true,
          !!event.currentTarget.value,
        ]
      })
    }

    args && args.length && args.forEach((f, i) => {
      f(a.values[i])
    })
  }
}

function handleCardInstallmentsChange(args) {
  return event => {
    event.stopPropagation()

    const valid = parseInt(event.currentTarget.value, 10) && !!event.currentTarget.value

    const a = {
      values: [
        event.currentTarget.value,
        false,
        !!event.currentTarget.value,
      ]
    }

    if (!valid) {
      Object.assign(a, {
        values: [
          '',
          true,
          !!event.currentTarget.value,
        ]
      })
    }

    args && args.length && args.forEach((f, i) => {
      f(a.values[i])
    })
  }
}

function PaymentContent(props) {
  const [cardNumberActive, setCardNumberActive] = useState(false)
  const [cardHolderNameActive, setCardHolderNameActive] = useState(false)
  const [cardExpDateActive, setCardExpDateActive] = useState(false)
  const [cardCVVActive, setCardCVVActive] = useState(false)
  const [cardInstallmentsActive, setCardInstallmentsActive] = useState(false)

  const [cardNumberWarning, setCardNumberWarning] = useState(false)
  const [cardHolderNameWarning, setCardHolderNameWarning] = useState(false)
  const [cardExpDateWarning, setCardExpDateWarning] = useState(false)
  const [cardCVVWarning, setCardCVVWarning] = useState(false)
  const [cardInstallmentsWarning, setCardInstallmentsWarning] = useState(false)

  const {
    cardNumber,
    setCardNumber,
    cardHolderName,
    setCardHolderName,
    cardExpDate,
    setCardExpDate,
    cardCVV,
    setCardCVV,
    cardCVVSize,
    setCardCVVSize,
    cardCompany,
    setCardCompany,
    cardInstallments,
    setCardInstallments
  } = props

  const {
    number = MESSAGES.payment.header.cardNumber,
    name = MESSAGES.payment.header.cardHolderName,
    date = MESSAGES.payment.header.cardExpDate,
    code = MESSAGES.payment.header.cardCVV,
    filled = false
  } = props

  return (
    <CONTENTCONTAINER id="payment-content">
      <Stepper />

      <Form>
        <Fieldset>
          <MaskedInput
            mask="9999 9999 9999 9999"
            onChange={handleCardNumberChange([
              setCardNumber,
              setCardNumberWarning,
              setCardCVVSize,
              setCardCompany,
              setCardNumberActive
            ])}
            touched={!!cardNumber}
            component={
              props => <Input
                warning={MESSAGES.payment.content.form.cardNumberWarning}
                placeholder={MESSAGES.payment.content.form.cardNumber}
                isValid={!cardNumberWarning}
                isActive={cardNumberActive}
                {...props}
              />
            }
          />

          <Input
            warning={MESSAGES.payment.content.form.cardHolderNameWarning}
            placeholder={MESSAGES.payment.content.form.cardHolderName}
            isValid={!cardHolderNameWarning}
            isActive={cardHolderNameActive}
            onChange={handleCardHolderNameChange([
              setCardHolderName,
              setCardHolderNameWarning,
              setCardHolderNameActive
            ])}
            touched={!!cardHolderName}
            {...props}
          />

          <MaskedInput
            className="date"
            mask="99/99"
            onChange={handleCardExpDateChange([
              setCardExpDate,
              setCardExpDateWarning,
              setCardExpDateActive
            ])}
            touched={!!cardExpDate}
            component={
              props => <Input
                warning={MESSAGES.payment.content.form.cardExpDateWarning}
                placeholder={MESSAGES.payment.content.form.cardExpDate}
                isValid={!cardExpDateWarning}
                isActive={cardExpDateActive}
                {...props}
              />
            }
          />

          <MaskedInput
            className="cvv"
            mask={`${ '9'.repeat(cardCVVSize) }`}
            onChange={handleCardCVVChange([
              setCardCVV,
              setCardCVVWarning,
              setCardCVVActive
            ])}
            touched={!!cardCVV}
            icon={'info'}
            component={
              props => <Input
                warning={MESSAGES.payment.content.form.cardCVVWarning}
                placeholder={MESSAGES.payment.content.form.cardCVV}
                isValid={!cardCVVWarning}
                isActive={cardCVVActive}
                {...props}
              />
            }
          />

          <Select
            warning={MESSAGES.payment.content.form.cardInstallmentsWarning}
            placeholder={MESSAGES.payment.content.form.cardInstallments}
            isValid={!cardInstallmentsWarning}
            isActive={cardInstallmentsActive}
            onChange={handleCardInstallmentsChange([
              setCardInstallments,
              setCardInstallmentsWarning,
              setCardInstallmentsActive
            ])}
            data={cardInstallmentsList}
            touched={!!cardInstallments}
          />

          <div className="control">
            <Button block>
              {MESSAGES.payment.content.form.send}
            </Button>
          </div>
        </Fieldset>
      </Form>
    </CONTENTCONTAINER>
  )
}

export default withContext(PaymentContent)
