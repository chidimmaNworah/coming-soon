import Head from "next/head";

export default function SEO({
  title = "AgeGroupNG - Leading Electrical & Lighting Solutions in Nigeria",
  description = "Professional electrical installation, lighting solutions, and maintenance services across Nigeria. 24/7 emergency support, certified electricians, and quality products.",
  keywords = "electrical services nigeria, lighting solutions lagos, electrician nigeria, electrical installation, LED lighting, electrical maintenance, agegroupng",
  url = "https://agegroupng.com",
  image = "/og-image.jpg",
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Viewport */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Canonical */}
      <link rel="canonical" href={url} />
    </Head>
  );
}
