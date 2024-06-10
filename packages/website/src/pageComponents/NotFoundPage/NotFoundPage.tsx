import { Result } from 'antd';

import Layout from '@/components/Layout';

export function NotFoundPage() {
  return (
    <Layout>
      <Result
        status={404}
        title="This page could not be found"
      />
    </Layout>
  );
}
