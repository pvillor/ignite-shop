import { styled } from "..";

export const HomeContainer = styled('main', {
  display: "flex",
  width: '100%',
  maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
  marginLeft: 'auto',
  minHeight: 656
})

export const Shadow = styled('div', {
  position: 'absolute',
  top: 0,
  bottom: 0,
  width: '50px',
  zIndex: 10,

  variants: {
    direction: {
      left: {
        left: 0,
        background: 'linear-gradient(to right, rgba(0, 0, 0, 0.5), transparent)',
      },
      right: {
        right: 0,
        background: 'linear-gradient(to left, rgba(0, 0, 0, 0.5), transparent)',
      },
    },
  },
});

export const ArrowButton = styled('button', {
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  zIndex: 20,
  background: 'none',
  border: 'none',
  cursor: 'pointer',

  variants: {
    direction: {
      left: {
        left: '10px',
      },
      right: {
        right: '10px',
      },
    },
  },

  svg: {
    fontSize: '24px',
    color: '$white',
  },
});

export const Product = styled('div', {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  cursor: 'pointer',
  position: 'relative',
  overflow: 'hidden',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover'
  },

  footer: {
    position: 'absolute',
    bottom: '0.25rem',
    left: '0.25rem',
    right: '0.25rem',
    padding: '1.25rem',

    borderRadius: 6,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    backgroundColor: 'rgba(0, 0, 0, 0.6)',

    transform: 'translateY(110%)',
    opacity: 0,
    transition: 'all 0.2s ease-in-out',
    lineHeight: 1.6,

    strong: {
      fontSize: '$lg',
      color: '$gray100'
    },

    span: {
      fontSize: '$xl',
      fontWeight: 'bold',
      color: '$green300'
    },

    div: {
      display: 'flex',
      flexDirection: 'column'
    },

    button: {
      display: 'flex',

      backgroundColor: '$green500',
      border: 0,
      color: '$white',
      borderRadius: 8,

      padding: '0.75rem',
      fontWeight: 'bold',
      fontSize: '$md',

      '&:hover': {
        cursor: 'pointer',
        backgroundColor: '$green300'
      }
    }
  },

  '&:hover': {
    footer: {
      transform: 'translateY(0%)',
      opacity: 1
    }
  }
})