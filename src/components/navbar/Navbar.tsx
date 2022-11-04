import { Typography } from '@mui/material';
import React, { FunctionComponent } from 'react';
import { Container, Link } from './Navbar.styles';

export const Navbar: FunctionComponent = (): React.ReactElement => {
  return (
    <Container>
      <Link href="#AboutMe" underline="hover">
        <Typography color="textPrimary">About</Typography>
      </Link>
      <Link href="#Projects" underline="hover">
        <Typography color="textPrimary">Projects</Typography>
      </Link>
      <Link href="#Skills" underline="hover">
        <Typography color="textPrimary">Skills</Typography>
      </Link>
    </Container>
  );
};
