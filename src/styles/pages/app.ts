import { styled } from "..";

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  minHeight: '100vh',

  position: 'relative'
})

export const Header = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})

export const ShoppingBag = styled('button', {
  position: 'relative',

  color: '$gray500',
  backgroundColor: '$gray800',
  border: '1px solid $gray800',
  borderRadius: '6px',

  padding: '0.75rem',

  cursor: 'pointer',

  'span': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    width: '1.5rem',
    height: '1.5rem',
    borderRadius: '50%',

    color: '$white',
    backgroundColor: '$green500',

    position: 'absolute',
    top: 0,
    left: 0,
    transform: 'translate(130%, -40%)'
  },
})
