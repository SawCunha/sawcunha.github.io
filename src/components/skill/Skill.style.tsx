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
  background: linear-gradient(90deg, #00f5a01f 0%, #00d9f526 100%);
  border-radius: 22px;
  padding: 13px;

  min-width: 9.375rem;
`;

export { Container, GroupSkill };
