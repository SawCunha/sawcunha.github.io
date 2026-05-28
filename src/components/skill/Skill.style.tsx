import { Card, Grid, styled } from '@mui/material';

const Container = styled(Grid)`
  height: inherit;

  background-color: transparent;

  margin-top: 1.5625rem;
  margin-bottom: 1.5625rem;
`;

const GroupSkill = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  align-content: space-around;
  background: transparent;
  border: 1px solid rgba(128, 219, 217, 0.15);
  border-radius: 1.375rem;
  padding: 0.625rem;

  min-width: 6.25rem;
`;

export { Container, GroupSkill };
