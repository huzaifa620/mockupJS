import { styled } from 'baseui';

const Response = styled('div', (props) => ({
  display: 'inlineFlex',
  alignSelf: props.$authorType === 'author' ? 'flex-end' : 'flex-start',
  backgroundColor: props.$theme.colors.backgroundTertiary,
  color: props.$theme.colors.primaryA,
  padding: '8px 16px',
  margin: '8px 0',
  borderRadius: '30px',
}));

export default Response;
