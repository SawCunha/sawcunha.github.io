import React, { type FunctionComponent } from 'react';
import { Skill as SkillUI } from '../../components/skill';
import { SubTitle } from '../../components/text';
import { type Skill, skills } from '../../model/Skill';
import { Container, GridSkills } from './Skills.style';

export const Skills: FunctionComponent = (): React.ReactElement => (
  <Container elevation={0} id="Skills">
    <SubTitle>Skills</SubTitle>
    <GridSkills container spacing={1}>
      {skills.map((skill: Skill) => (
        <SkillUI key={skill.name} icon={skill.icon} nameSkill={skill.name} />
      ))}
    </GridSkills>
  </Container>
);
