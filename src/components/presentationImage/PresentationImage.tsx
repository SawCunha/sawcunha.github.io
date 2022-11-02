import { Box } from '@mui/material';
import React, { FunctionComponent } from 'react';
import { Container } from './PresentationImage.style';

export const PresentationImage: FunctionComponent = (): React.ReactElement => {
  return (
    <Container elevation={0}>
      <Box
        component="img"
        sx={{
          height: 200,
          width: 200,
          borderRadius: 50
        }}
        alt="The house from the offer."
        src="https://media-exp1.licdn.com/dms/image/C4E03AQH-o21darxN4w/profile-displayphoto-shrink_800_800/0/1622843573275?e=1672876800&v=beta&t=fu0SrjvnwaNVaQsj2u2DavfPahRrig_H5pYNksm54bY"
      />
    </Container>
  );
};
