import PageBanner from "@/components/PageBanner";

export const metadata = {
  title: "Privacy Policy | Nature Cure Treatment",
  description:
    "Learn how VSR Vriksha NCC collects, uses, and protects your personal information.",
  alternates: {
    canonical: "https://vsrvriksha.com/privacy-policy",
  },
};

const sections = [
  {
    id: "1",
    heading: "Information We Collect on This Website:",
    content:
      "We gather information about you when you engage with interactive features on our website that require a personalized response. This includes instances when you seek answers to queries, comment on a blog, or request our assistance.",
  },
  {
    id: "2",
    heading: "Purpose of Collecting Your Personal Data:",
    content:
      "The data we collect is solely focused on providing you with the specific services you have requested.",
  },
  {
    id: "3",
    heading: "Ensuring Security and Confidentiality:",
    content:
      "Rest assured, we prioritize the security and confidentiality of your personal information. Our information technology systems are dedicated to managing and safeguarding your data.",
  },
  {
    id: "4",
    heading: "Purpose of Data Collection:",
    content:
      "Our primary objective in gathering personal data on our website is to facilitate effective communication. For instance, your contact details help us respond to your needs and queries promptly, ensuring a personalized experience without compromising your privacy.",
  },
  {
    id: "5",
    heading: "Access to Your Information:",
    content:
      "Occasionally, we may collaborate with other members of our organization or third-party service providers to manage our information technology systems. However, we only share your information when we are confident that adequate safeguards are in place, aligning with privacy and data protection regulations.",
  },
  {
    id: "6",
    heading: "How We Utilize Collected Information:",
    list: [
      "Enhancing Customer Service: The data you provide enables us to efficiently address your service requests and support inquiries, ensuring timely and relevant information dissemination.",
      "Personalizing User Experience: Aggregated information helps us understand how our users utilize our website's resources and services as a whole, enhancing your overall experience.",
      "Email Communications: If you choose to subscribe to our mailing list, your provided email address allows us to respond to your inquiries, provide updates, and share relevant company news or product information. Unsubscribe instructions are available at the bottom of each email or you can contact us directly.",
    ],
    preText:
      "Your personal information is used for the following purposes at VSR Vriksha NCC:",
  },
  {
    id: "7",
    heading: "Web Browser Cookies:",
    content:
      'Our site may utilize "cookies" to enhance your browsing experience. Cookies are placed on your hard drive to improve website functionality, track user interactions, and provide personalized content.',
  },
  {
    id: "8",
    heading: "Our Responsibility for Website Links:",
    content:
      "Our Privacy Policy pertains exclusively to personal information collected through our website. Links to external websites, including social media platforms, are subject to their respective user and privacy policies. We do not assume responsibility for data practices on these third-party sites.",
  },
  {
    id: "9",
    heading: "Changes to This Privacy Policy:",
    content:
      "For further assistance regarding our Privacy Policy, please contact us at welcometovsrncc@gmail.com",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main>
      <div className="pt-[70px]">
        <PageBanner
          title="Privacy Policy"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Privacy Policy" },
          ]}
          bgImage="/assets/banner.webp"
        />
      </div>

      <div className="container py-12 md:py-16">
        <div className="flex flex-col md:flex-row gap-10">
          {/* Left — main content */}
          <div className="w-full md:w-7/12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center md:text-left">
              Privacy &amp; Cookies Policy
            </h2>

            <p className="text-gray-700 leading-relaxed mb-8">
              At VSR Vriksha NCC (Nature Cure Center), we are committed to
              ensuring your privacy and protecting the personal information you
              provide to us. This Privacy Policy aims to provide clarity on how
              we collect and utilize information through our website.
            </p>

            {sections.map((section) => (
              <div key={section.id} id={section.id} className="mb-6">
                <h3 className="text-base font-semibold text-[#A03D13] mb-2">
                  {section.heading}
                </h3>

                {section.preText && (
                  <p className="text-gray-700 leading-relaxed mb-2">
                    {section.preText}
                  </p>
                )}

                {section.list ? (
                  <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed">
                    {section.list.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-700 leading-relaxed">
                    {section.content}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Right — table of contents */}
          <div className="w-full md:w-5/12 md:pl-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center md:text-left border-b-2 border-[#A03D13] pb-2">
              Privacy Policy
            </h3>

            <nav className="space-y-3">
              {[
                { href: "#0", label: "Information We Collect on This Website:" },
                { href: "#1", label: "Purpose of Collecting Your Personal Data:" },
                { href: "#2", label: "Ensuring Security and Confidentiality:" },
                { href: "#3", label: "Purpose of Data Collection:" },
                { href: "#4", label: "Access to Your Information:" },
                { href: "#5", label: "How We Utilize Collected Information:" },
                { href: "#6", label: "Web Browser Cookies:" },
                { href: "#7", label: "Our Responsibility for Website Links:" },
                { href: "#8", label: "Changes to This Privacy Policy:" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block text-gray-700 hover:text-[#A03D13] border-b border-gray-200 pb-2 transition-colors duration-200 no-underline"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </main>
  );
}
