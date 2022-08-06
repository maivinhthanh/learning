import { FC } from 'react';

export type RequireAuthProps = {
  children: JSX.Element;
};

const RequireAuth: FC<RequireAuthProps> = ({ children }) => {
  return <>{children}</>;
};

export default RequireAuth;
