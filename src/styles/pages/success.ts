import { styled } from "..";

export const SuccessContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  height: 656,
  gap: '3rem',

  h1: {
    fontSize: '$2xl',
    color: '$gray100'
  },

  p: {
    fontSize: '$xl',
    color: '$gray300',
    maxWidth: 560,
    textAlign: 'center',
    lineHeight: 1.4
  },

  a: {
    display: 'block',
    fontSize: '$lg',
    color: '$green500',
    textDecoration: 'none',
    fontWeight: 'bold',
    padding: '1rem',

    '&:hover': {
      color: '$green300',
    }
  }
})

export const ImagesContainer = styled('div', {
  display: 'flex',
})

export const ImageContainer = styled('div', {
  maxWidth: 140,
  height: 140,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: '50%',
  padding: '0.25rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  boxShadow: '0 0 2rem rgba(0, 0, 0, 0.6)',

  img: {
    objectFit: 'cover'
  },

  '&:not(:first-child)': {
    marginLeft: '-3rem',
  }
})

export const PurchaseDetails = styled('div', {
  display: 'flex',
  flexDirection: "column",
  alignItems: 'center',
  gap: '1.5rem'
})