import { Card, CardContent, Typography, Box } from '@mui/material';
import Masonry from '@mui/lab/Masonry';

const FunctionsSection = () => {
  const listServices = [
    {
      title: 'Custom Software Development',
      contents: [
        'Custom software solutions',
        'Web and mobile applications development',
        'Domain expertise',
        'Large-scaled technical stack',
      ],
    },
    {
      title: 'BI & Big Data Management',
      contents: [
        'Big Data Analytics',
        'Data Warehouses for enhanced ETL operations',
        'Real-time reports of your business operations',
        'Data management costs optimization',
      ],
    },
    {
      title: 'Software Re-engineering',
      contents: [
        'Legacy Software modernization ',
        'Third-party data integration',
        'Functionality Expanding',
        'Infrastructure Setup',
      ],
    },
    {
      title: 'Team Augmentation',
      contents: [
        'Team members with the right skills and experience',
        'Temporary shortage or long-time engagement',
        'Team ramp-up',
      ],
    },
    {
      title: 'SaaS Development',
      contents: [
        'Building a Saas product from scratch',
        'Tweaking an existing SaaS solution',
        'Successful app transormation into SaaS',
        'Expanding a localized SaaS app reach in new market',
      ],
    },
    {
      title: 'IT Consulting and Digital advisory',
      contents: [
        'Select the right technology for your business goal',
        'Validate your product idea before investing in it',
        'Attract investment with an elaborate product prototype',
        'Add scalability and flexibility to your business',
      ],
    },
  ];
  return (
    <Box component='section' sx={{ mt: 10 }}>
      <Typography variant='h2' gutterBottom>
        Our services
      </Typography>
      <Masonry columns={3} spacing={2}>
        {listServices.map((item, index) => {
          return (
            <Card key={index}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color='text.secondary'
                  gutterBottom
                  component='h6'
                >
                  {item.title}
                </Typography>
                <Box>
                  {item.contents.map((text) => {
                    return (
                      <Typography
                        sx={{ fontSize: 14 }}
                        color='text.secondary'
                        gutterBottom
                        component='h6'
                      >
                        - {text}
                      </Typography>
                    );
                  })}
                </Box>
              </CardContent>
            </Card>
          );
        })}
      </Masonry>
    </Box>
  );
};

export default FunctionsSection;
