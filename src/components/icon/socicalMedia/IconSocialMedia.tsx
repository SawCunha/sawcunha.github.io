import type { SvgIconTypeMap } from '@mui/material';
import type { OverridableComponent } from '@mui/material/OverridableComponent';
import React, { type FunctionComponent } from 'react';
import { Link } from './IconSocialMedia.style';

interface Props {
  Icon: OverridableComponent<SvgIconTypeMap> & { muiName: string };
  link: string;
  label: string;
}

export const IconSocialMedia: FunctionComponent<Props> = ({
  Icon,
  link,
  label
}: Props): React.ReactElement => (
  <Link href={link} underline="hover" target="_blank" rel="noopener noreferrer" aria-label={label}>
    <Icon sx={{ width: 30, height: 30, margin: 0.5 }} color="secondary" aria-hidden />
  </Link>
);
