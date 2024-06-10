'use client';

import { Alert } from 'antd';
import { ReactElement } from 'react';

export type ErrorBoundaryProps = {
  children: ReactElement
};

export function ErrorBoundary({
  children,
}: ErrorBoundaryProps) {
  return (
    <Alert.ErrorBoundary>
      {children}
    </Alert.ErrorBoundary>
  );
}
