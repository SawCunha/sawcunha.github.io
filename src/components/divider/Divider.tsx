import React, { FunctionComponent } from 'react';
import { DividerStyle } from './Divider.style';

interface Props {
  height?: string;
  marginRight?: number;
  marginLeft?: number;
  borderRadius?: number;
  width?: string;
  orientation?: 'vertical' | 'horizontal';
}

export const Divider: FunctionComponent<Props> = ({
  height,
  marginRight,
  marginLeft,
  borderRadius,
  width,
  orientation = 'horizontal'
}: Props): React.ReactElement => {
  return (
    <DividerStyle
      light
      flexItem
      variant="inset"
      orientation={orientation}
      sx={{ marginRight, height, borderRadius, width, marginLeft }}
    />
  );
};
