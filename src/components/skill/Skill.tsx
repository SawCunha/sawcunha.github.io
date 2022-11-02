import { Rating } from '@mui/material';
import React, { FunctionComponent } from 'react';
import { Avatar } from '../avatar';
import { SubTitle } from '../text';
import { Container, GroupSkill } from './Skill.style';
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
        <Avatar variant="square" altAvatar={`Skill: ${nameSkill}`} urlAvatar={icon} />
        <SubTitle>{nameSkill}</SubTitle>
        <Rating
          name={nameSkill}
          value={rating}
          size="medium"
          precision={0.5}
          readOnly
          style={{ position: 'inherit' }}
          icon={<StarIcon style={{ position: 'inherit' }} fontSize="inherit" />}
          emptyIcon={
            <StarIcon style={{ color: 'black', position: 'inherit' }} fontSize="inherit" />
          }
        />
      </GroupSkill>
    </Container>
  );
};
