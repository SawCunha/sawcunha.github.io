import { Divider as DividerMUI, type DividerProps, styled } from '@mui/material';
import { DeviceType } from '../../model/types/DeviceType';

interface Props {
  $devicetype: DeviceType;
  $marginTop?: number;
  $current?: boolean;
}

const DividerStyle = styled(DividerMUI)<DividerProps & Props>`
  background: ${({ $current }) =>
    $current === true
      ? 'linear-gradient(180deg, #00f5a0 0%, #00d9f5 100%)'
      : 'rgba(128, 219, 217, 0.3)'};
  ${({ $devicetype }) => ($devicetype === DeviceType.MOBILE ? 'margin-left: 0' : '')};
  ${({ $marginTop }) => ($marginTop === undefined ? '' : `margin-top: ${$marginTop}px`)};
`;

export { DividerStyle };
