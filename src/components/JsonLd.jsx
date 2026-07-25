import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://jobelgolde.com';
const SITE_NAME = 'Jobel V. Golde';

export function OrganizationJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: SITE_NAME,
    url: SITE_URL,
    jobTitle: 'IT Graduate | Web Developer',
    email: 'jobelgolde43@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Sorsogon',
      addressRegion: 'Philippines',
    },
    sameAs: [
      'https://github.com/jobelGolde12',
      'https://www.facebook.com/jobelGolde',
      'https://www.instagram.com/jobelgolde/',
      'https://www.linkedin.com/in/jobel-golde-6a8822411/',
    ],
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}

export function WebsiteJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    description: 'Personal blog and portfolio of Jobel V. Golde — IT graduate, web developer, and problem solver.',
    author: {
      '@type': 'Person',
      name: SITE_NAME,
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}

export function ArticleJsonLd({ post }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    datePublished: post.date,
    url: `${SITE_URL}/blog/${post.slug}`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/blog/${post.slug}`,
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}

export function BreadcrumbJsonLd({ items }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${SITE_URL}${item.url}`,
    })),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}
