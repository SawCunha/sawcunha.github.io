import React, { FunctionComponent } from 'react';
import { Divider } from '../../components/divider';
import { Footer } from '../../components/footer';
import { Header } from '../../components/header';
import { About } from '../about';
import { Presentation } from '../presentation';
import { Projects } from '../projects';
import { Skills } from '../skills';
import { Container, GroupHome } from './Home.style';

export const Home: FunctionComponent = (): React.ReactElement => {
  return (
    <Container>
      <Header />
      <GroupHome>
        <Presentation />
        <Divider marginRight={1} height="0.15rem" borderRadius={5} width={'85'} />
        <About />
        <Divider marginRight={1} height="0.15rem" borderRadius={5} />
        <Projects />
        <Divider marginRight={1} height="0.15rem" borderRadius={5} />
        <Skills />
        <Divider marginRight={1} height="0.15rem" borderRadius={5} />
      </GroupHome>
      <Footer />
    </Container>
  );
};
