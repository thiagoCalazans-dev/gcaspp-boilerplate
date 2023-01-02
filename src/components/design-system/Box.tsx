import { ComponentProps, ElementType } from 'react'
import { styled } from '../../styles'


export const Box = styled('div', {
  padding: '$4',
  borderRadius: '$md',
  backgroundColor: '$gray2',
  border: '2px solid $brand-700',
})

export interface BoxProps extends ComponentProps<typeof Box> {
  as?: ElementType
}

Box.displayName = 'Box'