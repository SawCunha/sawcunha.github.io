import React, { FunctionComponent } from 'react';
import { Avatar } from '../avatar';
import { Navbar } from '../navbar';
import { Container } from './Header.style';

export const Header: FunctionComponent = (): React.ReactElement => {
  return (
    <Container>
      <Avatar altAvatar="Avatar Samuel Cunha" urlAvatar="/avatar/avatar.svg" />
      <Navbar />
    </Container>
  );
};
