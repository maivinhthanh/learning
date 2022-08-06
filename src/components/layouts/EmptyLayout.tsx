import React, { ReactNode } from 'react';

type EmptyLayoutProps = {
  children: ReactNode;
};

const EmptyLayout: React.FC<EmptyLayoutProps> = ({ children }) => {
  return <>{children}</>;
};

export default EmptyLayout;
