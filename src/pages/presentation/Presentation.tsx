import React, { FunctionComponent } from 'react';
import { PresentationImage } from '../../components/presentationImage';
import { PresentationInfo } from '../../components/presentationInfo';
import { Container } from './Presentation.style';

export const Presentation: FunctionComponent = (): React.ReactElement => {
  return (
    <Container elevation={0}>
      <PresentationInfo />
      <PresentationImage />
    </Container>
  );
};
