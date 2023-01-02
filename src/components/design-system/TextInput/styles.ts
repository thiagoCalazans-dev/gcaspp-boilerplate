import { styled } from "../../../styles"



export const TextInputContainer = styled('div', {
  backgroundColor: '$gray2',
  padding: '$3 $4',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  border: '2px solid $brand-700',
  display: 'flex',
  alignItems: 'baseline',


  '&:has(input:focus)': {
    borderColor: '$brand-500',
  },

  '&:has(input:disabled)': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
})

export const Prefix = styled('span', {
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$gray8',
  fontWeight: 'regular',
})

export const Input = styled('input', {
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$brand-700',
  fontWeight: 'regular',
  background: 'transparent',
  border: 0,
  width: '100%',

  '&:focus': {
    outline: 0,
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&:placeholder': {
    color: '$gray8',
  },
  variants: {
    size: {
      auto: {
        width: "auto"
      },

      "flex-full": {
        flex: "1",
      },
      "id": {
        justifyContent: "center",
        width: "$7"
      }
    },
  },

  defaultVariants: {
    size: "auto",
  }

})