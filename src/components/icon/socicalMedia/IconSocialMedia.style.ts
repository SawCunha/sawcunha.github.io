import { Link as LinkMUI, styled } from '@mui/material';

const Link = styled(LinkMUI)`
  display: flex;
  flex-wrap: nowrap;
  align-content: space-around;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-width: 2.75rem;
  min-height: 2.75rem;
`;

export { Link };
