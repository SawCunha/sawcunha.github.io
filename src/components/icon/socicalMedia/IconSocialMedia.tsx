import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import React, { FunctionComponent } from 'react';
import { Link } from './IconSocialMedia.style';

interface Props {
  Icon: OverridableComponent<SvgIconTypeMap> & { muiName: string };
  link: string;
}

export const IconSocialMedia: FunctionComponent<Props> = ({
  Icon,
  link
}: Props): React.ReactElement => {
  return (
    <Link href={link} underline="hover" target="_blank">
      {<Icon sx={{ width: 30, height: 30, margin: 0.5 }} color="secondary" />}
    </Link>
  );
};
