import React, { type FunctionComponent } from 'react';
import { Divider } from '../../components/divider';
import { allExperiences } from '../../model/Experience';
import { SubTitle, Text } from '../../components/text';
import { Container, CurrentBadge, GrouText, TextGroup } from './Experiences.style';

export const Experiences: FunctionComponent = (): React.ReactElement => (
  <Container elevation={0} id="Experiences">
    <SubTitle>{allExperiences.title}</SubTitle>

    {allExperiences.experiences.map((experience, index) => (
      <GrouText key={index} elevation={0}>
        <Divider
          marginRight={1}
          marginLeft={0}
          width={'0.625rem'}
          borderRadius={5}
          orientation={'vertical'}
          current={experience.current}
        />
        <TextGroup elevation={0}>
          {experience.current === true && <CurrentBadge label="Atual" size="small" />}
          <Text>{experience.description}</Text>
        </TextGroup>
      </GrouText>
    ))}
  </Container>
);
