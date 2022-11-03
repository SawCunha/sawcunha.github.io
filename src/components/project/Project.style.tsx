import { Card, Grid, Paper, styled, Chip as ChipMUI, Link as LinkMUI } from '@mui/material';

const Container = styled(Grid)`
  height: inherit;

  background-color: transparent;

  margin-top: 1.5625rem;
  margin-bottom: 1.5625rem;
  max-width: 300px;
`;

const ProjectCard = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  align-content: space-around;
  background: linear-gradient(90deg, #00f5a01f 0%, #00d9f526 100%);
  border-radius: 0.9375rem;
  padding: 0.8125rem;

  min-width: 9.375rem;
  min-height: 200px;
`;

const GroupChip = styled(Paper)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  margin: 0.625rem 0;
  padding: 0.3125rem 0;
  background-color: transparent;
  font-size: 0.75rem;
`;

const Chip = styled(ChipMUI)`
  background: linear-gradient(90deg, #00f5a0 0%, #00d9f5 100%);
  color: #1f2626;
  margin: 0.0625rem 0.3125rem;
  border-radius: 0.4375rem;
  height: 1.5625rem;
`;

const Link = styled(LinkMUI)`
  color: ${({ theme }: any) => theme.palette.text.primary};
`;

const Title = styled(Paper)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;

  background-color: transparent;
  font-size: 0.75rem;
`;

export { Container, ProjectCard, GroupChip, Chip, Link, Title };
