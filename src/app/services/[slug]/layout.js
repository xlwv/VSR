export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  if (!slug) {
    return {
      title: "Service | VSR Vriksha",
      description: "Explore our holistic healing services.",
    };
    
  }

  const title = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return {
    title: `${title} | VSR Vriksha`,
    description: `Learn about our ${title.toLowerCase()} program for holistic healing and natural wellness.`,
    alternates: {
      canonical: `https://vsrvriksha.com/services/${slug}`,
    },
  };
}

export default function ServiceDetailLayout({ children }) {
  return children;
}