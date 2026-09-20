import React, { type FunctionComponent } from 'react';
import { socialLinks } from '../../model/SocialLink';
import { IconSocialMedia } from '../icon/socicalMedia';

export const SocialLinks: FunctionComponent = (): React.ReactElement => (
  <>
    {socialLinks.map(({ name, url, Icon }) => (
      <IconSocialMedia key={name} Icon={Icon} link={url} label={name} />
    ))}
  </>
);
