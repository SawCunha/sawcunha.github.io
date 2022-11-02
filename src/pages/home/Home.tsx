import React, { FunctionComponent } from 'react';
import { Divider } from '../../components/divider';
import { Footer } from '../../components/footer';
import { Header } from '../../components/header';
import { About } from '../about';
import { Presentation } from '../presentation';
import { Skills } from '../skills';
import { Container, GroupHome } from './Home.style';

export const Home: FunctionComponent = (): React.ReactElement => {
  return (
    <Container>
      <Header />
      <GroupHome>
        <Presentation />
        <Divider />
        <About />
        <Divider light />
        <Skills />
        <Divider light />
      </GroupHome>
      <Footer />
    </Container>
  );
};
