import React, { type FunctionComponent } from 'react';
import { Container, GroupSocialMedia, GroupIconSocialMedia } from './Footer.style';

import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import { IconSocialMedia } from '../icon/socicalMedia';
import { Typography } from '@mui/material';

export const Footer: FunctionComponent = (): React.ReactElement => (
  <Container>
    <GroupSocialMedia>
      <Typography color="textPrimary">My social media links:</Typography>
      <GroupIconSocialMedia>
        <IconSocialMedia Icon={GitHubIcon} link="https://github.com/SawCunha" />
        <IconSocialMedia Icon={InstagramIcon} link="https://www.instagram.com/sawcunha" />
        <IconSocialMedia
          Icon={LinkedInIcon}
          link="https://www.linkedin.com/in/samuel-goncalves-cunha"
        />
      </GroupIconSocialMedia>
    </GroupSocialMedia>
    <Typography color="textPrimary">© Copyright 2026 | SawCunha</Typography>
  </Container>
);
