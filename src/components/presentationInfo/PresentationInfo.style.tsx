import { Paper, styled, Typography } from '@mui/material';

const Container = styled(Paper)`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;
  flex-direction: column;

  max-width: 25rem;
  margin: 1.5625rem 1.875rem 1.5625rem 0;

  background-color: transparent;
`;

const Name = styled(Typography)`
  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 2.5rem;
  line-height: 3rem;
  color: #80dbd9;
`;

const Office = styled(Typography)`
  font-family: 'Montserrat';
  font-weight: 400;
  font-size: 1.1rem;
  line-height: 1.6rem;
  color: #d7e5ec;
  margin-bottom: 0.75rem;
`;

const Nickname = styled(Typography)`
  font-family: 'Montserrat';
  font-weight: 400;
  font-size: 0.875rem;
  color: #d7e5ec;
  opacity: 0.7;
  margin-top: 0.5rem;
`;

export { Container, Name, Office, Nickname };
