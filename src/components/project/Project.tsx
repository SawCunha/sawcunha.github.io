import React, { FunctionComponent } from 'react';
import { SubTitle, Text } from '../text';
import { Container, ProjectCard, GroupChip, Chip, Link, Title } from './Project.style';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

interface Props {
  technologies: string[];
  nameProject: string;
  description: string;
  url: string;
}

export const Project: FunctionComponent<Props> = ({
  technologies,
  nameProject,
  description,
  url
}: Props): React.ReactElement => {
  return (
    <Container item>
      <ProjectCard elevation={1}>
        <Title elevation={0}>
          <Link href={url} underline="hover" target="_blank">
            <SubTitle>{nameProject}</SubTitle>
          </Link>

          <Link href={url} underline="hover" target="_blank">
            <OpenInNewIcon />
          </Link>
        </Title>
        <GroupChip elevation={0}>
          {technologies.length > 0 &&
            technologies.map((technology) => <Chip key={technology} label={technology} />)}
        </GroupChip>
        <Text>{description}</Text>
      </ProjectCard>
    </Container>
  );
};
