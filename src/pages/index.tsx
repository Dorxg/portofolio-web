import * as React from 'react';

import Biography from '@/components/homepage/Biography';
import Hero from '@/components/homepage/Hero';
import ListProject from '@/components/homepage/ListProject';
import ListSnippet from '@/components/homepage/ListSnippet';
import Skill from '@/components/homepage/Skill';
import WhatIdo from '@/components/homepage/WhatIdo';
import Layout from '@/components/layout';
import Seo from '@/components/Seo';

export default function HomePage() {
  //fetch api hello js
  React.useEffect(() => {
    fetch('/api/hello')
      .then((res) => res.json())
      .then((data) => console.log('data', data));
  }, []);
  return (
    <>
      <Seo templateTitle='Home' />

      <Layout>
        <Hero />
        <Biography />
        <WhatIdo />
        <Skill />
        <ListProject />
        <ListSnippet />
      </Layout>
    </>
  );
}
