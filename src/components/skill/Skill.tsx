import React, { type FunctionComponent } from 'react';
import { Avatar } from '../avatar';
import { Text } from '../text';
import { Container, GroupSkill } from './Skill.style';

interface Props {
  icon: string;
  nameSkill: string;
}

export const Skill: FunctionComponent<Props> = ({ icon, nameSkill }: Props): React.ReactElement => (
  <Container item>
    <GroupSkill elevation={0}>
      <Avatar
        width={40}
        height={40}
        variant="square"
        altAvatar={`Skill: ${nameSkill}`}
        urlAvatar={icon}
      />
      <Text>{nameSkill}</Text>
    </GroupSkill>
  </Container>
);
