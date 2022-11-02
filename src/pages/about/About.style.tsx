import { Paper, styled } from '@mui/material';

const Container = styled(Paper)`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: space-around;
  align-items: flex-start;

  width: 85%;
  height: inherit;

  background-color: transparent;

  margin-top: 1.5625rem;
  margin-bottom: 1.5625rem;
`;

export { Container };
