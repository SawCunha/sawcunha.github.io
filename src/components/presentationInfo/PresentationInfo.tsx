import React, { type FunctionComponent } from 'react';
import { presentation } from '../../model/Presentation';
import { Text } from '../text';
import { Container, Name, Office, Nickname } from './PresentationInfo.style';

export const PresentationInfo: FunctionComponent = (): React.ReactElement => (
  <Container elevation={0}>
    <Name>{presentation.name}</Name>
    <Office>{presentation.office}</Office>
    <Text color="textSecondary">{presentation.description}</Text>
    <Nickname>@{presentation.nickname}</Nickname>
  </Container>
);
