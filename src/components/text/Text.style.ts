import { styled, Typography } from '@mui/material';

const Title = styled(Typography)`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 2.563rem;
  line-height: 5.5rem;
`;

const SubTitle = styled(Typography)`
  font-style: normal;
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 1.3875rem;
`;

const Text = styled(Typography)`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5rem;
  letter-spacing: 0.04rem;
  text-align: justify;
`;

export { Title, SubTitle, Text };
