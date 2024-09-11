import { styled } from "@stitches/react";

export const CartContainer = styled('div', {
  position: 'fixed',
  top: 0,
  right: 0,

  height: '100vh',
  padding: ' 3rem',
  paddingTop: '4.5rem',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'end',
  gap: '1.5rem',

  backgroundColor: '$gray800',
  boxShadow: '0 0 1rem rgba(0, 0, 0, 0.5)',

  svg: {
    position: 'fixed',
    top: 24,
    right: 24
  },

  'svg:hover': {
    cursor: 'pointer'
  }
})

export const CartDetails = styled('div', {
  minWidth: '24rem',
  minHeight: '100%',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between'
})

export const CartItemsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem'
})

export const CartItems = styled('div', {
  maxHeight: '26.5rem',

  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',

  overflowY: 'scroll',

  '&::-webkit-scrollbar': {
    display: 'none'
  }
})

export const CartItem = styled('div', {
  display: 'flex',
  gap: '1.25rem',

  img: {
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: '0.5rem'
  }
})

export const ItemDetailsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: '0.5rem',

  '& > span': {
    color: '$green500',
    fontSize: '1rem',
    fontWeight: 'bold',
    lineHeight: 1.6
  },

  '& > span:hover': {
    color: '$green300',
    cursor: 'pointer'
  }
})

export const ItemDetails = styled('div', {
  p: {
    fontSize: 18,
    lineHeight: 1.6,
    color: '$gray300'
  },

  span: {
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 1.6,
  }
})

export const CartFooter = styled('footer', {
  display: 'flex',
  flexDirection: "column",
  gap: '3.5rem',

  button: {
    backgroundColor: '$green500',
    border: 0,
    color: '$white',
    borderRadius: 8,
    padding: '1.25rem',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '$md',

    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed'
    },

    '&:not(:disabled):hover': {
      backgroundColor: '$green300'
    }
  }
})

export const CartSummary = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 6,

  div: {
    display: 'flex',
    justifyContent: 'space-between',
  }
})

export const CartTotalQuantity = styled('div', {
  lineHeight: 1.6,
  display: 'flex',
  alignItems: 'center',

  span: {
    fontSize: 18
  }
})

export const CartTotalPrice = styled('div', {
  lineHeight: 1.6,
  display: 'flex',
  alignItems: 'center',

  p: {
    fontSize: 18,
    fontWeight: 'bold'
  },

  span: {
    fontSize: '1.5rem',
    fontWeight: 'bold'
  }
})