import { Typography } from '@mui/material';
import React, { FunctionComponent } from 'react';
import { Container, Link } from './Navbar.styles';

export const Navbar: FunctionComponent = (): React.ReactElement => {
  return (
    <Container>
      <Link href="#skills" underline="hover">
        <Typography color="textPrimary">Skills</Typography>
      </Link>
      <Link href="#projects" underline="hover">
        <Typography color="textPrimary">Projects</Typography>
      </Link>
      <Link href="#contactMe" underline="hover">
        <Typography color="textPrimary">Contact me</Typography>
      </Link>
    </Container>
  );
};
