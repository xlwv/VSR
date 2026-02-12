export async function generateMetadata({ params }) {
  // In Next.js 15+, params is a Promise
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  
  if (!slug) {
    return {
      title: 'Service | VSR Vriksha',
      description: 'Explore our holistic healing services.',
    };
  }
  
  // Simple title generation based on slug
  const title = slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  
  return {
    title: `${title} | VSR Vriksha`,
    description: `Learn about our ${title.toLowerCase()} program for holistic healing and natural wellness.`,
  };
}

export default function ServiceDetailLayout({ children }) {
  return children;
}