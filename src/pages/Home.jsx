import Hero from '../features/hero/Hero';
import SEO from '../components/SEO';
import { OrganizationJsonLd, WebsiteJsonLd } from '../components/JsonLd';

export default function Home() {
  return (
    <>
      <SEO
        title="Web Developer & IT Graduate"
        description="Jobel V. Golde — IT graduate, web developer, and problem solver from Sorsogon, Philippines. Building beautiful & functional web experiences with React, Vue.js, and Laravel."
        canonical="https://jobelgolde.com/"
      />
      <OrganizationJsonLd />
      <WebsiteJsonLd />
      <Hero />
    </>
  );
}
