import { Grid, styled, Paper, Button as ButtonMUI } from '@mui/material';

const Container = styled(Paper)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: space-between;
  align-items: center;

  width: 85%;
  height: inherit;

  background-color: transparent;

  margin-top: 1.5625rem;
  margin-bottom: 1.5625rem;
`;

const GridProjects = styled(Grid)`
  height: inherit;
  justify-content: center;

  background-color: transparent;
  margin-bottom: 1.5625rem;
`;

const GridButton = styled(Grid)`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Button = styled(ButtonMUI)`
  background: linear-gradient(90deg, #00f5a0 0%, #00d9f5 100%);
  border-radius: 0.375rem;
  position: inherit;
`;

export { Container, GridProjects, GridButton, Button };
