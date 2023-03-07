import { styled } from 'baseui';

const Wrapper = styled('div', (props) => ({
  display: 'flex',
  alignItems: props.$variant === 'list' ? 'center' : 'flex-start',
  flexDirection: props.$variant === 'grid' ? 'column' : 'row',
  backgroundColor:
    props.$variant === 'grid' ? props.$theme.colors.primaryB : 'transparent',
  overflow: 'hidden',
}));

export const Image = styled('div', (props) => ({
  minWidth: props.$variant === 'list' ? '41px' : '100%',
  marginLeft: props.$variant === 'list' ? '20px' : '0',
  marginRight: props.$variant === 'list' ? '20px' : '0',
  marginBottom: props.$variant === 'grid' ? '20px' : '0',
  height: props.$thumbHeight ? props.$thumbHeight : 'auto',
}));

export const Img = styled('img', (props) => ({
  width: props.$thumbWidth ? props.$thumbWidth : 'auto',
}));

export const Content = styled('div', {});

export const Title = styled('h3', (props) => ({
  fontWeight: 500,
  color: props.$theme.colors.primary,
  fontSize: props.$variant === 'list' ? '14px' : '18px',
  lineHeight: props.$variant === 'list' ? '18px' : '22px',
  marginBottom: props.$variant === 'list' ? '10px' : '20px',
}));

export const TitleLink = styled('a', {
  color: 'inherit',
  textDecoration: 'none',
  transition: 'opacity 0.25s ease',
  ':hover': {
    opacity: 0.8,
  },
});

export const Paragraph = styled('p', (props) => ({
  ...props.$theme.typography.font200,
  color: props.$theme.colors.contentSecondary,
  marginBottom: props.$variant === 'grid' ? '20px' : '0',
}));

export const Link = styled('a', ({ $theme }) => ({
  color: $theme.colors.contentAccent,
  textDecoration: 'none',
  ':hover': {
    textDecoration: 'underline',
  },
}));

export default Wrapper;
