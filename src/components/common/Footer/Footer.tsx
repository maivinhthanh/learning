import { Box, Grid } from '@mui/material';
import React from 'react';
import InfomationFooter from './InfomationFooter';

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Grid item xs={4} sm={8} md={4}>
        <InfomationFooter />
      </Grid>
      <Grid item xs={4} sm={8} md={8}>
        <Box sx={{width: 400}} />
      </Grid>
    </Grid>
  );
};

export default Footer;
