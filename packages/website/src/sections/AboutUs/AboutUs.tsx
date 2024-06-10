'use client';

import Image from '@/components/Image';
import Section from '@/components/Section';
import Title from '@/components/Title';
import { useQuery } from '@apollo/experimental-nextjs-app-support/ssr';

import aboutUsImg from './assets/about-us.jpg';
import { StaticPageFragmentDoc } from "@/graphql"

export function AboutUs() {
  //const { data } = useQuery<StaticPageQuery>(StaticPageFragmentDoc);

  return (
    <Section
      title="About us"
      titleLevel={1}
      subtitle="This is the about page"
      description="About us description"
    >
      <Title level={2}>
        Title below was rendered on the client
      </Title>
      <Title level={3}>
        {/*{data?.staticPage?.data?.attributes?.title}*/}
      </Title>
      <Image
        src={aboutUsImg}
        alt="about-us"
      />
    </Section>
  );
}
