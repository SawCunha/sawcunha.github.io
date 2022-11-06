import { Link } from '@mui/material';
import React, { FunctionComponent } from 'react';
import { Project } from '../../components/project';
import { SubTitle } from '../../components/text';
import { Project as ProjectM, projects } from '../../model/Project';
import { Container, GridProjects, GridButton, Button } from './Projects.style';

export const Projects: FunctionComponent = (): React.ReactElement => {
  return (
    <Container elevation={0} id="Projects">
      <SubTitle>Projects</SubTitle>
      <GridProjects container spacing={1}>
        {projects.map((project: ProjectM) => (
          <Project
            key={project.name}
            technologies={project.technologies}
            nameProject={project.name}
            description={project.description}
            url={project.url}
          />
        ))}
      </GridProjects>
      <GridButton>
        <Link href="https://github.com/SawCunha?tab=repositories" target="_blank" underline="hover">
          <Button>SEE ALL PROJECTS</Button>
        </Link>
      </GridButton>
    </Container>
  );
};
