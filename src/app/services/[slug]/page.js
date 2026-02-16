"use client";
import Image from "next/image";
import PageBanner from "@/components/PageBanner";
import MoreTreatments from "@/components/BlogComponents/MoreTreatments";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";
import { ChevronDown, ChevronRight } from "lucide-react";
import therapiesData from "../therapies.json";
import treatmentsData from "../treatments.json";
import therapiesDetailData from "../therapiesData.json";
import treatmentsDetailData from "../treatmentsData.json";

// FAQ Accordion Component
const FAQAccordion = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState(null);

  if (!faqs || faqs.length === 0) return null;

  return (
    <div className="space-y-4">
      <h2 className="sub-h2 font-bold text-gray-800 mb-6">
        Frequently Asked Questions
      </h2>
      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-xl overflow-hidden bg-white hover:shadow-md transition-shadow"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
            >
              <span className="font-medium text-gray-800 pr-4">
                {faq.question}
              </span>
              <ChevronDown
                className={`w-5 h-5 text-[var(--brand-brown)] flex-shrink-0 transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            {openIndex === index && (
              <div className="px-5 pb-5 pt-2">
                <p className="para text-gray-700 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// Content Section Renderer
const ContentSection = ({ section, index }) => {
  if (!section) return null;

  switch (section.type) {
    case "paragraph":
      return (
        <div key={index} className="mb-8">
          {section.heading && (
            <h2 className="sub-h2 font-bold text-gray-800 mb-4">
              {section.heading}
            </h2>
          )}
          <p className="para text-gray-700 leading-relaxed">
            {section.content}
          </p>
        </div>
      );

    case "list":
      return (
        <div key={index} className="mb-8">
          {section.heading && (
            <h2 className="sub-h2 font-bold text-gray-800 mb-4">
              {section.heading}
            </h2>
          )}
          <ul className="space-y-3">
            {section.items.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-[var(--brand-brown)] mt-1">✓</span>
                <span className="para text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      );

    case "tags":
      return (
        <div key={index} className="mb-8">
          {section.heading && (
            <h2 className="sub-h2 font-bold text-gray-800 mb-4">
              {section.heading}
            </h2>
          )}
          <div className="flex flex-wrap gap-3">
            {section.items.map((item, i) => (
              <span
                key={i}
                className="para px-4 py-2 bg-[#FFF8F5] text-[var(--brand-brown)] rounded-full text-sm font-medium"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      );

    case "highlight":
      return (
        <div key={index} className="bg-[#FFF8F5] rounded-xl p-6 mb-8">
          {section.heading && (
            <h3 className="font-bold text-gray-800 mb-2">
              {section.heading}
            </h3>
          )}
          <p className="para text-gray-700">{section.content}</p>
        </div>
      );

    case "numbered-list":
      return (
        <div key={index} className="mb-8">
          {section.heading && (
            <h2 className="sub-h2 font-bold text-gray-800 mb-4">
              {section.heading}
            </h2>
          )}
          <ol className="space-y-4 list-none">
            {section.items.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--brand-brown)] text-white flex items-center justify-center text-sm font-medium">
                  {i + 1}
                </span>
                <span className="para text-gray-700 flex-1">{item}</span>
              </li>
            ))}
          </ol>
        </div>
      );

    default:
      return null;
  }
};

export default function ServiceDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [treatmentsOpen, setTreatmentsOpen] = useState(false);
  const [therapiesOpen, setTherapiesOpen] = useState(false);
  const [currentService, setCurrentService] = useState(null);
  const [currentDetailData, setCurrentDetailData] = useState(null);
  const [serviceType, setServiceType] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "cubic-bezier(0.22, 1, 0.36, 1)",
      once: true,
      offset: 80,
      delay: 0,
      mirror: false,
    });
  }, []);

  useEffect(() => {
    if (params.slug) {
      setIsLoading(true);
      
      // Find service in treatments
      const treatment = treatmentsData.find((t) => t.slug === params.slug);
      if (treatment) {
        setCurrentService(treatment);
        setServiceType("treatment");
        setTreatmentsOpen(true);
        setTherapiesOpen(false);
        
        const detailData = treatmentsDetailData.find((t) => t.slug === params.slug);
        setCurrentDetailData(detailData || null);
        setIsLoading(false);
        return;
      }

      // Find service in therapies
      const therapy = therapiesData.find((t) => t.slug === params.slug);
      if (therapy) {
        setCurrentService(therapy);
        setServiceType("therapy");
        setTherapiesOpen(true);
        setTreatmentsOpen(false);
        
        const detailData = therapiesDetailData.find((t) => t.slug === params.slug);
        setCurrentDetailData(detailData || null);
        setIsLoading(false);
        return;
      }
      
      // If nothing found
      setIsLoading(false);
    }
  }, [params.slug]);

  const handleServiceClick = (service, type) => {
    router.push(`/services/${service.slug}`);
  };

  const getRelatedServices = () => {
    if (!currentService || !serviceType) return [];
    
    const sourceArray = serviceType === "treatment" ? treatmentsData : therapiesData;
    
    return sourceArray
      .filter((s) => s.slug !== currentService.slug)
      .slice(0, 6);
  };

  const transformServicesToBlogs = (services) => {
    return services.map((service) => ({
      slug: service.slug,
      title: service.name,
      image: `/assets/${service.imageName}`,
    }));
  };

  const relatedServices = getRelatedServices();
  const sectionTitle = serviceType === "treatment" ? "More Treatments" : "More Therapies";

  // Show loading state
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--brand-brown)] mx-auto"></div>
        </div>
      </div>
    );
  }

  // Show not found only after loading is complete
  if (!currentService) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-bold text-gray-800 mb-4">Service not found</h2>
          <button
            onClick={() => router.push("/services")}
            className="call-btn"
          >
            Back to Services
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="mt-[69px] sm:mt-[72px] md:mt-[80px] lg:mt-[88px]">
        <PageBanner
          title="Services"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { 
              label: serviceType === "treatment" ? "Treatments" : "Therapies", 
              href: "/services" 
            },
            { label: currentService.name, href: "#" },
          ]}
          bgImage="/assets/banner.webp"
        />
      </div>

      <div className="container py-8 lg:py-12 md:max-w-[1200px] lg:max-w-[1300px]">
        <div className="grid grid-cols-1 lg:grid-cols-[288px_1fr] gap-8">
          {/* Sidebar */}
          <aside className="lg:order-1">
            <div className="bg-[#FFF8F5] rounded-lg p-4 lg:sticky lg:top-24">
              {/* Treatments Section */}
              <div className="mb-4">
                <button
                  onClick={() => setTreatmentsOpen(!treatmentsOpen)}
                  className="flex items-center justify-between w-full text-left py-2 px-3 rounded-lg hover:bg-white/50 transition-colors"
                >
                  <span className="font-medium text-[var(--brand-brown)]">
                    <h3>Treatments</h3>
                  </span>
                  {treatmentsOpen ? (
                    <ChevronDown className="w-5 h-5 text-[var(--brand-brown)]" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-[var(--brand-brown)]" />
                  )}
                </button>

                {treatmentsOpen && (
                  <div className="mt-2 space-y-1">
                    {treatmentsData.map((treatment) => (
                      <button
                        key={treatment.id}
                        onClick={() => handleServiceClick(treatment, "treatment")}
                        className={`w-full text-left py-2 px-4 rounded-lg text-sm transition-colors ${
                          currentService.slug === treatment.slug
                            ? "bg-white text-[var(--brand-brown)] font-medium"
                            : "text-gray-600 hover:bg-white/50 hover:text-[var(--brand-brown)]"
                        }`}
                      >
                        <p className="para">{treatment.name}</p>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Therapies Section */}
              <div>
                <button
                  onClick={() => setTherapiesOpen(!therapiesOpen)}
                  className="flex items-center justify-between w-full text-left py-2 px-3 rounded-lg hover:bg-white/50 transition-colors"
                >
                  <span className="font-medium text-[var(--brand-brown)]">
                    <h3>Therapies</h3>
                  </span>
                  {therapiesOpen ? (
                    <ChevronDown className="w-5 h-5 text-[var(--brand-brown)]" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-[var(--brand-brown)]" />
                  )}
                </button>

                {therapiesOpen && (
                  <div className="mt-2 space-y-1">
                    {therapiesData.map((therapy) => (
                      <button
                        key={therapy.id}
                        onClick={() => handleServiceClick(therapy, "therapy")}
                        className={`w-full text-left py-2 px-4 rounded-lg text-sm transition-colors ${
                          currentService.slug === therapy.slug
                            ? "bg-white text-[var(--brand-brown)] font-medium"
                            : "text-gray-600 hover:bg-white/50 hover:text-[var(--brand-brown)]"
                        }`}
                      >
                        <p className="para">{therapy.name}</p>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:order-2 min-w-0" data-aos="fade-up">
            {/* Service Title */}
            <div className="mb-6">
              <h2 className="font-bold sub-h2 text-gray-800 mb-2">
                {currentService.name}
              </h2>
              <Image
                src="/assets/SVG/below-right.svg"
                alt=""
                width={200}
                height={40}
                className="mt-2 mb-6 max-w-full h-auto"
              />
            </div>

            {/* Main Image */}
            <div className="mb-8 rounded-2xl overflow-hidden">
              <Image
                src={`/assets/${currentService.imageName}`}
                alt={currentService.name}
                width={800}
                height={400}
                className="w-full h-[240px] md:h-[320px] lg:h-[360px] xl:h-[400px] object-cover"
              />
            </div>

            {/* Short Description */}
            <div className="prose prose-lg max-w-none mb-8">
              <p className="para text-gray-700 leading-relaxed mb-6">
                {currentService.description}
              </p>
            </div>

            {/* Dynamic Content Sections */}
            {currentDetailData && currentDetailData.sections && (
              <div className="space-y-8">
                {currentDetailData.sections.map((section, index) => (
                  <ContentSection key={index} section={section} index={index} />
                ))}
              </div>
            )}

            {/* FAQ Accordion */}
            {currentDetailData && currentDetailData.faqs && (
              <div className="mt-12">
                <FAQAccordion faqs={currentDetailData.faqs} />
              </div>
            )}

            {/* More Treatments/Therapies Section */}
            {relatedServices.length > 0 && (
              <div className="mt-12">
                <MoreTreatments 
                  blogs={transformServicesToBlogs(relatedServices)}
                  title={sectionTitle}
                  linkPath="services"
                />
              </div>
            )}
          </main>
        </div>
      </div>
    </>
  );
}