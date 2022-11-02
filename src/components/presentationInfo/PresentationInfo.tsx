import React, { FunctionComponent } from 'react';
import { SubTitle, Title, Text } from '../text';
import { Container } from './PresentationInfo.style';

export const PresentationInfo: FunctionComponent = (): React.ReactElement => {
  return (
    <Container elevation={0}>
      <SubTitle color="textSecondary">Full Stack Developer</SubTitle>
      <Title color="textPrimary">Samuel Cunha</Title>
      <Text color="textSecondary">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
        consequat duis enim velit mollit. Exercitation veniam consequat sunt.
      </Text>
    </Container>
  );
};
