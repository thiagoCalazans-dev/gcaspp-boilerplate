import { ComponentProps, ElementType } from "react"
import { styled } from "../../styles"


export const Button = styled('button', {
  all: 'unset',
  borderRadius: '$sm',
  fontSize: '$sm',
  fontWeight: '$medium',
  fontFamily: '$default',
  textAlign: 'center',
  // minWidth: 120,
  boxSizing: 'border-box',
  padding: '0 $4',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',

  cursor: 'pointer',

  svg: {
    width: '$4',
    height: '$4',
    background: "transparent",
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  variants: {
    variant: {
      primary: {
        color: '$white',
        background: '$brand-700',

        '&:not(:disabled):hover': {
          background: '$brand-500',
        },

        '&:disabled': {
          backgroundColor: '$gray200',
        },
      },

      secondary: {
        color: '$brand-500',
        border: '2px solid $brand-500',
        background: '$white',

        '&:not(:disabled):hover': {
          color: '$brand-700',
          border: '2px solid $brand-700',
          background: '$brand-500',
        },

        '&:disabled': {
          color: '$gray200',
          borderColor: '$gray200',
        },
      },
    },

    size: {
      sm: {
        height: 38,
      },

      md: {
        height: 46,
      },
      icon: {
        height: "auto",
        padding: "$1"
      }
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

export interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType
}

