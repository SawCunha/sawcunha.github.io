import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export interface SocialLink {
  name: string;
  url: string;
  Icon: typeof GitHubIcon;
}

export const socialLinks: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/SawCunha', Icon: GitHubIcon },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/samuel-goncalves-cunha',
    Icon: LinkedInIcon
  },
  { name: 'Instagram', url: 'https://www.instagram.com/sawcunha', Icon: InstagramIcon }
];
