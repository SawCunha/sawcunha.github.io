import React, { FunctionComponent } from 'react';
import { Divider } from '../../components/divider';
import { SubTitle, Text } from '../../components/text';
import { Container, GrouText } from './About.style';

export const About: FunctionComponent = (): React.ReactElement => {
  return (
    <Container elevation={0} id="AboutMe">
      <SubTitle>About</SubTitle>
      <GrouText elevation={0}>
        <Divider
          marginRight={1}
          marginLeft={0}
          width={'0.625rem'}
          borderRadius={5}
          orientation={'vertical'}
        />
        <Text>
          The long barrow was built on land previously inhabited in the Mesolithic period. It
          consisted of a sub-rectangular earthen tumulus, estimated to have been 15 metres (50 feet)
          in length, with a chamber built from sarsen megaliths on its eastern end. Both inhumed and
          cremated human remains were placed within this chamber during the Neolithic period,
          representing at least nine or ten individuals.
        </Text>
      </GrouText>
    </Container>
  );
};
