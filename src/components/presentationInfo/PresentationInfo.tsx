import React, { FunctionComponent } from 'react';
import { presentation } from '../../model/Presentation';
import { SubTitle, Title, Text } from '../text';
import { Container } from './PresentationInfo.style';

export const PresentationInfo: FunctionComponent = (): React.ReactElement => {
  return (
    <Container elevation={0}>
      <SubTitle color="textSecondary">{presentation.office}</SubTitle>
      <Title color="textPrimary">{presentation.name}</Title>
      <Text color="textSecondary">{presentation.description}</Text>
    </Container>
  );
};
