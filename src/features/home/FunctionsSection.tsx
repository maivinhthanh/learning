import { Box, Grid, Typography } from '@mui/material';

const FunctionsSection = () => {
  const listServices = [
    {
      title: 'ABC',
    },
    {
      title: 'ABC',
    },
    {
      title: 'ABC',
    },
    {
      title: 'ABC',
    },
    {
      title: 'ABC',
    },
  ];
  return (
    <Box component='section' sx={{ mt: 10 }}>
      <Typography variant='h2' gutterBottom>
        Our services
      </Typography>
      <Grid container spacing={2} sx={{ flexGrow: 1 }}>
        {listServices.map((item) => {
          return (
            <Grid
              item
              xs={6}
              md={4}
              sx={{ backgroundColor: '#1F1F1F', borderRadius: 16 }}
            >
              <Box>{item.title}</Box>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default FunctionsSection;
