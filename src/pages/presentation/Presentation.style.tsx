import { Paper, styled } from '@mui/material';
import { DeviceType } from '../../model/types/DeviceType';

interface Props {
  devicetype: string;
}

const Container = styled(Paper)<Props>`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: space-between;
  align-items: center;

  width: 85%;
  height: inherit;

  background-color: transparent;

  margin-top: 1.5625rem;
  margin-bottom: 1.5625rem;

  ${({ devicetype }: any) => (devicetype === DeviceType.MOBILE ? 'justify-content: center;' : '')};
`;

export { Container };
