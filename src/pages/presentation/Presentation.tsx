import React, { FunctionComponent } from 'react';
import { PresentationImage } from '../../components/presentationImage';
import { PresentationInfo } from '../../components/presentationInfo';
import { DeviceType } from '../../model/types/DeviceType';
import { getDeviceType } from '../../utils/TypeDevice';
import { Container } from './Presentation.style';

export const Presentation: FunctionComponent = (): React.ReactElement => {
  const deviceType: DeviceType = getDeviceType();

  return (
    <Container elevation={0} id="Presentation" devicetype={deviceType}>
      <PresentationInfo />
      <PresentationImage />
    </Container>
  );
};
