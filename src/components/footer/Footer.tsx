import React, { type FunctionComponent } from 'react';
import { Container, GroupSocialMedia, GroupIconSocialMedia } from './Footer.style';

import { SocialLinks } from '../socialLinks';
import { Typography } from '@mui/material';

export const Footer: FunctionComponent = (): React.ReactElement => (
  <Container>
    <GroupSocialMedia>
      <Typography color="textPrimary">My social media links:</Typography>
      <GroupIconSocialMedia>
        <SocialLinks />
      </GroupIconSocialMedia>
    </GroupSocialMedia>
    <Typography color="textPrimary">© Copyright 2026 | SawCunha</Typography>
  </Container>
);
