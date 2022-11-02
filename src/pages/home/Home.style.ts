import { styled, Container as ContainerMUI } from '@mui/material';

const Container = styled('div')`
  background-color: ${({ theme }: any) => theme.palette.primary.main};
  width: auto;
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const GroupHome = styled(ContainerMUI)`
  background-color: transparent;
  width: auto;
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export { Container, GroupHome };
