import { Box } from '@mui/material';
import React, { FunctionComponent } from 'react';
import { presentation } from '../../model/Presentation';
import { DeviceType } from '../../model/types/DeviceType';
import { getDeviceType } from '../../utils/TypeDevice';
import { Container } from './PresentationImage.style';

export const PresentationImage: FunctionComponent = (): React.ReactElement => {
  const deviceType: DeviceType = getDeviceType();

  return (
    <Container elevation={0} devicetype={deviceType}>
      <Box
        component="img"
        sx={{
          height: 200,
          width: 200,
          borderRadius: 50,
          margin: 0
        }}
        alt="The house from the offer."
        src={presentation.photo}
      />
    </Container>
  );
};
