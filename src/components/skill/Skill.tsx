import React, { FunctionComponent } from 'react';
import { Avatar } from '../avatar';
import { Text } from '../text';
import { Container, GroupSkill, Rating } from './Skill.style';
import StarIcon from '@mui/icons-material/Star';

interface Props {
  icon: string;
  nameSkill: string;
  rating?: number;
}

export const Skill: FunctionComponent<Props> = ({
  icon,
  nameSkill,
  rating = 0
}: Props): React.ReactElement => {
  return (
    <Container item>
      <GroupSkill elevation={1}>
        <Avatar
          width={40}
          height={40}
          variant="square"
          altAvatar={`Skill: ${nameSkill}`}
          urlAvatar={icon}
        />
        <Text>{nameSkill}</Text>
        <Rating
          name={nameSkill}
          value={rating}
          size="medium"
          precision={0.5}
          readOnly
          icon={<StarIcon style={{ position: 'inherit' }} fontSize="inherit" />}
          emptyIcon={
            <StarIcon style={{ color: 'black', position: 'inherit' }} fontSize="inherit" />
          }
        />
      </GroupSkill>
    </Container>
  );
};
