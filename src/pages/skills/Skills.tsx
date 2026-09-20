import React, { type FunctionComponent } from 'react';
import { Skill as SkillUI } from '../../components/skill';
import { SubTitle } from '../../components/text';
import { type Skill, skillCategories, skills } from '../../model/Skill';
import { CategoryGroup, Container, GridSkills } from './Skills.style';

export const Skills: FunctionComponent = (): React.ReactElement => (
  <Container elevation={0} id="Skills">
    <SubTitle>Skills</SubTitle>
    {skillCategories.map((category) => {
      const categorySkills = skills.filter((skill: Skill) => skill.category === category);
      if (categorySkills.length === 0) return null;

      return (
        <CategoryGroup key={category}>
          <SubTitle component="h3">{category}</SubTitle>
          <GridSkills container spacing={1}>
            {categorySkills.map((skill: Skill) => (
              <SkillUI key={skill.name} icon={skill.icon} nameSkill={skill.name} />
            ))}
          </GridSkills>
        </CategoryGroup>
      );
    })}
  </Container>
);
