import React from 'react';

interface PageLayoutProps {
  row?: number;
  col: number;
  children?: any;
}

const PageLayout = ({ children, ...props }: PageLayoutProps) => {
  console.log(children.length)
  return (
    <div>
    {children}
    </div>
  );
}

export default PageLayout;