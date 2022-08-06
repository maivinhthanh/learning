import { Card, Button } from '@mui/material';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Container>
      <Card>
        <Button component={Link} to={`/`}>
          Về trang chủ
        </Button>
      </Card>
    </Container>
  );
};

export default NotFound;
