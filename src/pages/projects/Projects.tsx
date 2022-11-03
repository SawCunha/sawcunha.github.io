import { Link } from '@mui/material';
import React, { FunctionComponent } from 'react';
import { Project } from '../../components/project';
import { SubTitle } from '../../components/text';
import { Container, GridProjects, GridButton, Button } from './Projects.style';

export const Projects: FunctionComponent = (): React.ReactElement => {
  return (
    <Container elevation={0}>
      <SubTitle>Projects</SubTitle>
      <GridProjects container spacing={1}>
        <Project
          technologies={['TypeScript', 'HTML', 'CSS', 'ReactJS']}
          nameProject="Developer Portfolio"
          description="Test test test test test"
          url="https://github.com/SawCunha/developer_portfolio"
        />
        <Project
          technologies={['Java', 'Spring Boot', 'Redis', 'Docker', 'Couchbase']}
          nameProject="Jdempotent"
          description="Make your consumer, API, etc. idempotent easily."
          url="https://github.com/SawCunha/Jdempotent"
        />
        <Project
          technologies={['Java', 'Android']}
          nameProject="DiabeticsWater"
          description="App Desenvolvido para lembra nosso Amigo Rafael de beber agua, Idealizado pelo Grupo: Cleiton E-sports"
          url="https://github.com/SawCunha/DiabeticsWater"
        />
      </GridProjects>
      <GridButton>
        <Link href="https://github.com/SawCunha?tab=repositories" target="_blank" underline="hover">
          <Button>SEE ALL PROJECTS</Button>
        </Link>
      </GridButton>
    </Container>
  );
};
