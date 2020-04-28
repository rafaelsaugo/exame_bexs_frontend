const MESSAGES = {
  payment: {
    header: {
      breadcrumb: 'Alterar forma de pagamento',
      title: 'Adicione um novo cartão de crédito',
      cardNumber: '**** **** **** ****',
      cardHolderName: 'Nome do Titular',
      cardExpDate: '00/00',
      cardCVV: '***'
    },
    content: {
      steps: [
        {
          label: 'Carrinho',
          completed: true,
        }, {
          label: 'Pagamento',
          completed: false
        }, {
          label: 'Confirmação',
          completed: false
        }
      ],
      form: {
        cardNumber: 'Número do cartão',
        cardNumberWarning: 'Número de cartão inválido',
        cardHolderName: 'Nome (igual ao cartão)',
        cardHolderNameWarning: 'Insira seu nome completo',
        cardExpDate: 'Validade',
        cardExpDateWarning: 'Data inválida',
        cardCVV: 'CVV',
        cardCVVWarning: 'Código inválido',
        cardInstallments: 'Número de parcelas',
        cardInstallmentsWarning: 'Insira o número de parcelas',
        send: 'Continuar'
      }
    }
  }
}

export {
  MESSAGES
}
