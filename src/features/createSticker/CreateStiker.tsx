import { Box } from '@mui/material';
import React from 'react';

import { ReactComponent as BlazerBlackTee } from 'assets/body/BlazerBlackTee.svg';
import { ReactComponent as Afro } from 'assets/head/Afro.svg';
import { ReactComponent as Driven } from 'assets/face/Driven.svg';
import { Stack } from '@mui/system';

const CreateStiker: React.FC = () => {
  return (
    <>
      <Box>
        <Stack justifyContent='center' alignItems='center'>
          <Box
            sx={{
              marginBottom: '-45px',
              marginLeft: '13px',
              zIndex: 2,
            }}
          >
            <Afro width={100} height={100} />
          </Box>
          <BlazerBlackTee width={170} height={200} />

          <Driven />
        </Stack>
      </Box>
    </>
  );
};

export default CreateStiker;
