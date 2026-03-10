/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.youtube.com",
        port: "",
        pathname: "/**",
      },
    ],
  },

  async redirects() {
    return [
      {
        source: "/therapies/hydrotherapy-hyderabad",
        destination:
          "/naturopathy-therapies-treatments-hyderabad/hydrotherapy",
        permanent: true,
      },
      {
        source: "/therapies/aroma-therapy-hyderabad",
        destination:
          "/naturopathy-therapies-treatments-hyderabad/aroma-therapy",
        permanent: true,
      },
      {
        source: "/therapies/massage-therapy-hyderabad",
        destination:
          "/naturopathy-therapies-treatments-hyderabad/massage-therapy",
        permanent: true,
      },
      {
        source: "/therapies/yoga-hyderabad",
        destination:
          "/naturopathy-therapies-treatments-hyderabad/yoga",
        permanent: true,
      },
      {
        source: "/therapies/physio-therapy-hyderabad",
        destination:
          "/naturopathy-therapies-treatments-hyderabad/physiotherapy",
        permanent: true,
      },
      {
        source: "/therapies/Heliotherapy-hyderabad",
        destination:
          "/naturopathy-therapies-treatments-hyderabad/heliotherapy",
        permanent: true,
      },
      {
        source: "/therapies/diet-therapy-hyderabad",
        destination:
          "/naturopathy-therapies-treatments-hyderabad/diet-therapy",
        permanent: true,
      },
      {
        source: "/services/acupuncture",
        destination:
          "/naturopathy-therapies-treatments-hyderabad/acupuncture",
        permanent: true,
      },
      {
        source: "/treatments/gastro-intestinal-hyderabad",
        destination:
          "/naturopathy-therapies-treatments-hyderabad/gastrointestinal",
        permanent: true,
      },
      {
        source: "/treatments/respiratory-hyderabad",
        destination:
          "/naturopathy-therapies-treatments-hyderabad/respiratory",
        permanent: true,
      },
      {
        source: "/treatments/musculo-skeletal-hyderabad",
        destination:
          "/naturopathy-therapies-treatments-hyderabad/musculoskeletal",
        permanent: true,
      },
      {
        source: "/services/cardiovascular",
        destination:
          "/naturopathy-therapies-treatments-hyderabad/cardiovascular",
        permanent: true,
      },
      {
        source: "/services/endocrinal",
        destination:
          "/naturopathy-therapies-treatments-hyderabad/endocrinal",
        permanent: true,
      },
      {
        source: "/treatments/metabolic-disorders-hyderabad",
        destination:
          "/naturopathy-therapies-treatments-hyderabad/metabolic-disorders",
        permanent: true,
      },
      {
        source: "/treatments/skin-hyderabad",
        destination:
          "/naturopathy-therapies-treatments-hyderabad/skin",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;