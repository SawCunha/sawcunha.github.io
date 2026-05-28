import { Avatar as AvatarMUI } from '@mui/material';
import React, { type FunctionComponent } from 'react';

interface Props {
  altAvatar: string;
  urlAvatar: string;
  width?: number;
  height?: number;
  margin?: number;
  variant?: 'circular' | 'rounded' | 'square';
}

export const Avatar: FunctionComponent<Props> = ({
  altAvatar,
  urlAvatar,
  width = 60,
  height = 60,
  margin = 0.8,
  variant = 'circular'
}): React.ReactElement => (
  <AvatarMUI
    alt={altAvatar}
    src={urlAvatar}
    sx={{ width, height, margin, position: 'inherit' }}
    variant={variant}
  />
);
