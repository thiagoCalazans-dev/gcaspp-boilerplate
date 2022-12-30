import { styled } from "../../lib/stiches";

export const Button = styled('button', {
    backgroundColor: '$brand-500',
    color: '$base',
    borderRadius: '20px',
    fontSize: '14px',
    padding: '10px 15px',
    '&:hover': {
      backgroundColor: '$brand-700',
    },
  });
  