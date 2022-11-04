import { Divider as DividerMUI, DividerProps, styled } from '@mui/material';
import { DeviceType } from '../../model/types/DeviceType';

interface Props {
  devicetype: string;
}

const DividerStyle = styled(DividerMUI)<DividerProps & Props>`
  background: linear-gradient(90deg, #00f5a0 0%, #00d9f5 100%);
  ${({ devicetype }: any) => (devicetype === DeviceType.MOBILE ? 'margin-left: 0' : '')};
`;

export { DividerStyle };
