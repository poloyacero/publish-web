import React from 'react';

interface PageLayoutProps {
  row?: number;
  col: number;
  children?: any;
}

const PageLayout = ({ children, ...props }: PageLayoutProps) => {
  return (
    <div>
    {children}
    </div>
  );
}

export default PageLayout;