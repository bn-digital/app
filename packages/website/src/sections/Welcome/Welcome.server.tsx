'use server';

import Title from '@/components/Title';
import { StaticPageDocument } from '@/graphql';
import { makeRscQuery } from '@/utils/apollo';

export async function WelcomeServer() {
  const { data } = await makeRscQuery<StaticPageQuery>({
    query: StaticPageDocument,
  });

  return (
    <>
      <Title level={2}>
        Title below was rendered on the server
      </Title>
      <Title level={3}>
        {data?.staticPage?.data?.attributes?.title}
      </Title>
    </>
  )
}
