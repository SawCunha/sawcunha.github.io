import { useMediaQuery } from '@mui/material';
import { DeviceType } from '../../model/types/DeviceType';

export const getDeviceType = (): DeviceType => {
  const matches = useMediaQuery('(min-width:600px)', { noSsr: true });
  return matches ? DeviceType.DESKTOP : DeviceType.MOBILE;
};
