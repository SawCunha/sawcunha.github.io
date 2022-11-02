import { Divider as DividerMUI, styled } from '@mui/material';

const Divider = styled(DividerMUI)`
  background-color: ${({ theme }: any) => theme.palette.primary.light};
  width: 85%;
`;

export { Divider };
