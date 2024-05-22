import Layout from '@/components/Layout';
import Spinner from '@/components/Spinner';

export function LoadingPage() {
  return (
    <Layout>
      <Spinner
        size={150}
        centered
      />
    </Layout>
  );
}
