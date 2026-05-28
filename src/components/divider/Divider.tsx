import React, { FunctionComponent } from 'react';
import { DeviceType } from '../../model/types/DeviceType';
import { getDeviceType } from '../../utils/TypeDevice';
import { DividerStyle } from './Divider.style';

interface Props {
  height?: string;
  marginRight?: number;
  marginLeft?: number;
  marginTop?: number;
  borderRadius?: number;
  width?: string;
  orientation?: 'vertical' | 'horizontal';
}

export const Divider: FunctionComponent<Props> = ({
  height,
  marginRight,
  marginLeft,
  marginTop,
  borderRadius,
  width,
  orientation = 'horizontal'
}: Props): React.ReactElement => {
  const deviceType: DeviceType = getDeviceType();

  return (
    <DividerStyle
      flexItem
      variant="inset"
      marginTop={marginTop}
      orientation={orientation}
      
      sx={{ marginRight, height, borderRadius, width, marginLeft }}
      devicetype={deviceType}
    />
  );
};
