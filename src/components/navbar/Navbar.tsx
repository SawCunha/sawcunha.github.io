import { Typography } from '@mui/material';
import React, { type FunctionComponent } from 'react';
import { Container, Link } from './Navbar.styles';

export const Navbar: FunctionComponent = (): React.ReactElement => (
  <Container>
    <Link href="#AboutMe" underline="hover">
      <Typography color="textPrimary">About</Typography>
    </Link>
    <Link href="#Experiences" underline="hover">
      <Typography color="textPrimary">Experiences</Typography>
    </Link>
    <Link href="#Projects" underline="hover">
      <Typography color="textPrimary">Projects</Typography>
    </Link>
    <Link href="#Skills" underline="hover">
      <Typography color="textPrimary">Skills</Typography>
    </Link>
  </Container>
);
