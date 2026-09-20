import { Box, Grid, styled, Paper } from '@mui/material';

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

const CategoryGroup = styled(Box)`
  width: 100%;
  margin-top: 0.9375rem;
`;

const GridSkills = styled(Grid)`
  height: inherit;
  justify-content: center;

  background-color: transparent;
  margin-bottom: 1.5625rem;
`;

export { CategoryGroup, Container, GridSkills };
