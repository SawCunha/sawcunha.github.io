import { Avatar as AvatarMUI } from '@mui/material';
import React, { FunctionComponent } from 'react';

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
}): React.ReactElement => {
  const getPublicUrl = (): string => {
    return process.env.PUBLIC_URL != null ? process.env.PUBLIC_URL : '';
  };

  return (
    <AvatarMUI
      alt={altAvatar}
      src={`${getPublicUrl()}${urlAvatar}`}
      sx={{ width, height, margin, position: 'inherit' }}
      variant={variant}
    />
  );
};
