import { Container as ContainerMUI, Link as LinkMUI, styled } from '@mui/material';

const Container = styled(ContainerMUI)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  justify-content: flex-end;
  align-items: center;

  @media (min-width: 680px) {
    padding-left: 0;
    padding-right: 0;
  }
`;

const Link = styled(LinkMUI)`
  margin: 0 0.8rem 0 0.8rem;
`;

export { Container, Link };
