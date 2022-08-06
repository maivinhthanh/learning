import { Grid, Link, Stack, Typography } from '@mui/material';
import React from 'react';

interface InfomationFooterProps {}

const InfomationFooter: React.FC<InfomationFooterProps> = () => {
  return (
    <>
      <Grid container spacing={2} direction={{ xs: 'column-reverse', md: 'row' }}>
        <Grid item columns={{ xs: 12, md: 6 }}>
          <Stack>
            <Typography variant='subtitle1' component='h4'>
              Địa chỉ email
            </Typography>
            <Typography component='p'>vinhthanh.ute@gmail.com</Typography>
          </Stack>
        </Grid>
        <Grid item columns={{ xs: 12, md: 6 }}>
          <Typography variant='subtitle1' component='h4'>
            Linkedin
          </Typography>
          <Typography
            component={Link}
            href={'https://www.linkedin.com/in/mai-vinh-thanh/'}
          >
            https://www.linkedin.com/in/mai-vinh-thanh/
          </Typography>
        </Grid>
        
        <Grid item columns={{ xs: 12, md: 6 }}>
          <Stack>
            <Typography variant='subtitle1' component='h4'>
              Địa chỉ
            </Typography>
            <Typography component='p'>Thành thái, Quận 10</Typography>
          </Stack>
        </Grid>
        <Grid item columns={{ xs: 12, md: 6 }}>
          <Stack>
            <Typography variant='subtitle1' component='h4'>
              Thành phố
            </Typography>
            <Typography component='p'>TP. HCM</Typography>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

export default InfomationFooter;
