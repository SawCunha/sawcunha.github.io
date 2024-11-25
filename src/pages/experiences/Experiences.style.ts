import { Paper, styled } from '@mui/material';

const Container = styled(Paper)`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: space-around;
  align-items: flex-start;

  width: 85%;
  height: 100%;

  background-color: transparent;

  margin-top: 1.5625rem;
  margin-bottom: 1.5625rem;
`;

const GrouText = styled(Paper)`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: flex-start;
  justify-content: space-around;
  align-items: flex-start;

  width: 100%;
  height: 100%;
  margin-top: 0.9375rem;
  background-color: transparent;
`;

export { Container, GrouText };
