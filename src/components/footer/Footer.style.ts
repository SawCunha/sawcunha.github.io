import { Box, Container as ContainerMUI, styled } from '@mui/material';

const Container = styled(ContainerMUI)`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: space-around;
  justify-content: space-around;
  align-items: center;
  padding: 1.875rem;
`;

const GroupSocialMedia = styled(Box)`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  align-content: space-around;
  margin: 0.3125rem 0.625rem 0.3125rem 0.625rem;
  min-width: 12.5rem;
  padding: 0.9375rem;
`;

const GroupIconSocialMedia = styled(Box)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  align-content: space-around;
  margin: 0.3125rem 0.625rem 0.3125rem 0.625rem;
  min-width: 6.25rem;
`;

export { Container, GroupSocialMedia, GroupIconSocialMedia };
