import { ComponentProps, ElementType } from 'react'
import { styled } from '../../styles'

export const Description = styled('span', {
  fontFamily: 'sans-serif',
  lineHeight: '$base',
  color: '$brand-700',
  flex: 1,
  padding: '$2 $4',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  border: '2px solid $gray9',
  backgroundColor: '$gray2',
  display: 'flex',
  alignItems: 'baseline',

  variants: {
    size: {
      xxs: { fontSize: '$xxs' },
      xs: { fontSize: '$xs' },
      sm: { fontSize: '$sm' },
      md: { fontSize: '$md' },
      lg: { fontSize: '$lg' },
      xl: { fontSize: '$xl' },
      '2xl': { fontSize: '$2xl' },
      '4xl': { fontSize: '$4xl' },
      '5xl': { fontSize: '$5xl' },
      '6xl': { fontSize: '$6xl' },
      '7xl': { fontSize: '$7xl' },
      '8xl': { fontSize: '$8xl' },
      '9xl': { fontSize: '$9xl' },
    },
  },



  defaultVariants: {
    size: 'md',
  },
})

export interface TextProps extends ComponentProps<typeof Description> {
  as?: ElementType
}

Description.displayName = 'Description'