import { Chip, Paper, styled } from '@mui/material';

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

const CurrentBadge = styled(Chip)`
  background: linear-gradient(90deg, #00f5a0 0%, #00d9f5 100%);
  color: #1f2626;
  height: 1.25rem;
  font-size: 0.6875rem;
  font-weight: 600;
  margin-bottom: 0.375rem;
  border-radius: 0.25rem;
`;

const TextGroup = styled(Paper)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: transparent;
  width: 100%;
`;

export { Container, GrouText, CurrentBadge, TextGroup };
