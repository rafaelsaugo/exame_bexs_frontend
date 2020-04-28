import React from 'react'

const values = {}

const PaymentContext = React.createContext(values)

function withContext(Component) {
  const NewComponent = (props) => {
    return <PaymentContext.Consumer>
      {
        context => {
          return <Component {...context} />
        }
      }
    </PaymentContext.Consumer>
  }

  return NewComponent
}

export default PaymentContext

export {
  withContext
}
