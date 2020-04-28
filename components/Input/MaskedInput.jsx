import React from 'react'
import InputMask from 'react-input-mask'

const MaskedInput = props => {
  const {
    component: InputComponent,
    mask,
    maskChar,
    onChange,
    className,
    touched,
    icon
  } = props

  return (
    <InputMask icon={icon} touched={touched} mask={mask} maskChar={maskChar} onChange={onChange} className={className}>
      {(inputProps) => <InputComponent {...inputProps} />}
    </InputMask>
  )
}

export default MaskedInput
