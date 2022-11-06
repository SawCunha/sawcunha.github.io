import React, { FunctionComponent } from 'react';
import { Divider } from '../../components/divider';
import { SubTitle, Text } from '../../components/text';
import { about } from '../../model/About';
import { Container, GrouText } from './About.style';

export const About: FunctionComponent = (): React.ReactElement => {
  return (
    <Container elevation={0} id="AboutMe">
      <SubTitle>{about.title}</SubTitle>
      <GrouText elevation={0}>
        <Divider
          marginRight={1}
          marginLeft={0}
          width={'0.625rem'}
          borderRadius={5}
          orientation={'vertical'}
        />
        <Text>{about.description}</Text>
      </GrouText>
    </Container>
  );
};
