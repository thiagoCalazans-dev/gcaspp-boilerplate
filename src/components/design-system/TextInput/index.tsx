import { ComponentProps, forwardRef } from 'react'
import { Input, Prefix, TextInputContainer } from './styles'

export interface TextInputProps extends ComponentProps<typeof Input> {
  prefix?: string,
  register: any,
  formName: string,
}

export const TextInput = forwardRef(({ prefix, register, formName, ...props }: TextInputProps, ref) => {
  return (
    <TextInputContainer>
      {!!prefix && <Prefix>{prefix}</Prefix>}
      <Input {...props} {...register(formName)} />
    </TextInputContainer>
  )
})

TextInput.displayName = 'TextInput'