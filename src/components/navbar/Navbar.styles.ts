import { Container as ContainerMUI, Link as LinkMUI, styled } from '@mui/material';

const Container = styled(ContainerMUI)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  justify-content: flex-end;
  align-items: center;
`;

const Link = styled(LinkMUI)`
  margin: 0 0.8rem 0 0.8rem;
`;

export { Container, Link };
