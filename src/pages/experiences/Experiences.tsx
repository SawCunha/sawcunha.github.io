import React, { FunctionComponent } from 'react';
import { Divider } from '../../components/divider';
import { allExperiences } from '../../model/Experience';
import { SubTitle, Text } from '../../components/text';
import { Container, GrouText } from './Experiences.style';

export const Experiences: FunctionComponent = (): React.ReactElement => {
  return (
    <Container elevation={0} id="ExperienceMe">
      <SubTitle>{allExperiences.title}</SubTitle>

      {
        allExperiences.experiences.map(experience => 
          <GrouText elevation={0}>
            <Divider
              marginRight={1}
              marginLeft={0}
              width={'0.625rem'}
              borderRadius={5}
              orientation={'vertical'}
            />
            <Text>{experience.description}</Text>
          </GrouText>
        )
      }

      
    </Container>
  );
};

