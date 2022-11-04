import { Paper, styled } from '@mui/material';
import { DeviceType } from '../../model/types/DeviceType';

interface Props {
  devicetype: string;
}

const Container = styled(Paper)<Props>`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;
  flex-direction: column;

  max-width: 25rem;
  margin: 1.5625rem 0 1.5625rem 1.875rem;

  background-color: transparent;

  ${({ devicetype }: any) => (devicetype === DeviceType.MOBILE ? 'margin: 0;' : '')};
`;

export { Container };
