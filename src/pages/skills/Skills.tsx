import React, { FunctionComponent } from 'react';
import { Skill } from '../../components/skill';
import { SubTitle } from '../../components/text';
import { Container, GridSkills } from './Skills.style';

export const Skills: FunctionComponent = (): React.ReactElement => {
  return (
    <Container elevation={0}>
      <SubTitle>Skills</SubTitle>
      <GridSkills container spacing={1}>
        <Skill icon="/icons/java.svg" nameSkill="Java" rating={4} />
        <Skill icon="/icons/docker.svg" nameSkill="Docker" rating={3.5} />
        <Skill icon="/icons/git.svg" nameSkill="Git" rating={3} />
        <Skill icon="/icons/jest.svg" nameSkill="Jest" rating={3} />
        <Skill icon="/icons/react.svg" nameSkill="React" rating={3} />
        <Skill icon="/icons/reactRedux.svg" nameSkill="Redux" rating={3} />
        <Skill icon="/icons/typeScript.svg" nameSkill="TypeScript" rating={3} />
      </GridSkills>
    </Container>
  );
};
