import { Wrapper } from './NotFoundView.styled';
import { Link } from 'react-router-dom';

export const NotFoundView = () => {
  return (
    <Wrapper>
      Error 404. Page not found. Back to <Link to="/">home page</Link>
    </Wrapper>
  );
};

export default NotFoundView;
