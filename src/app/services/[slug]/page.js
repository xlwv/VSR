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

export default function ServiceDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [treatmentsOpen, setTreatmentsOpen] = useState(false);
  const [therapiesOpen, setTherapiesOpen] = useState(false);
  const [currentService, setCurrentService] = useState(null);
  const [currentDetailData, setCurrentDetailData] = useState(null);
  const [serviceType, setServiceType] = useState(null); // 'treatment' or 'therapy'

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
      // Find service in treatments
      const treatment = treatmentsData.find((t) => t.slug === params.slug);
      if (treatment) {
        setCurrentService(treatment);
        setServiceType("treatment");
        setTreatmentsOpen(true);
        setTherapiesOpen(false);
        
        // Find detail data
        const detailData = treatmentsDetailData.find((t) => t.slug === params.slug);
        setCurrentDetailData(detailData || null);
        return;
      }

      // Find service in therapies
      const therapy = therapiesData.find((t) => t.slug === params.slug);
      if (therapy) {
        setCurrentService(therapy);
        setServiceType("therapy");
        setTherapiesOpen(true);
        setTreatmentsOpen(false);
        
        // Find detail data
        const detailData = therapiesDetailData.find((t) => t.slug === params.slug);
        setCurrentDetailData(detailData || null);
        return;
      }
    }
  }, [params.slug]);

  const handleServiceClick = (service, type) => {
    router.push(`/services/${service.slug}`);
  };

  // Get related services for "More Treatments/Therapies" section
  const getRelatedServices = () => {
    if (!currentService || !serviceType) return [];
    
    const sourceArray = serviceType === "treatment" ? treatmentsData : therapiesData;
    
    return sourceArray
      .filter((s) => s.slug !== currentService.slug)
      .slice(0, 6); // Get 6 related services for the carousel
  };

  // Transform services data to match MoreTreatments component's expected format
  const transformServicesToBlogs = (services) => {
    return services.map((service) => ({
      slug: service.slug,
      title: service.name,
      image: `/assets/${service.imageName}`,
    }));
  };

  const relatedServices = getRelatedServices();
  const sectionTitle = serviceType === "treatment" ? "More Treatments" : "More Therapies";

  if (!currentService) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Service not found</h2>
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

      <div className="container mx-auto px-4 py-8 lg:py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-72 flex-shrink-0">
            <div className="bg-[#FFF8F5] rounded-lg p-4 lg:sticky lg:top-24">
              {/* Treatments Section */}
              <div className="mb-4">
                <button
                  onClick={() => setTreatmentsOpen(!treatmentsOpen)}
                  className="flex items-center justify-between w-full text-left py-2 px-3 rounded-lg hover:bg-white/50 transition-colors"
                >
                  <span className="font-medium text-[var(--brand-brown)]">
                    <h2>Treatments</h2>
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
                    <h2>Therapies</h2>
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
          <main className="flex-1" data-aos="fade-up">
            {/* Service Title */}
            <div className="mb-6">
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-2">
                {currentService.name}
              </h1>
              <Image
                src="/assets/SVG/below-right.svg"
                alt=""
                width={200}
                height={40}
                className="mt-2 mb-6"
              />
            </div>

            {/* Main Image */}
            <div className="mb-8 rounded-2xl overflow-hidden">
              <Image
                src={`/assets/${currentService.imageName}`}
                alt={currentService.name}
                width={800}
                height={400}
                className="w-full h-[400px] object-cover"
              />
            </div>

            {/* Description */}
            <div className="prose prose-lg max-w-none mb-8">
              <p className="para text-gray-700 leading-relaxed mb-6">
                {currentService.description}
              </p>
            </div>

            {/* Detailed Content from Detail Data */}
            {currentDetailData && (
              <div className="space-y-8">
                {/* Introduction/Overview */}
                {currentDetailData.introduction && (
                  <div>
                    <p className="para text-gray-700 leading-relaxed">
                      {currentDetailData.introduction}
                    </p>
                  </div>
                )}

                {/* Benefits Section */}
                {currentDetailData.benefits && currentDetailData.benefits.length > 0 && (
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">
                      Benefits
                    </h2>
                    <ul className="space-y-3">
                      {currentDetailData.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="text-[var(--brand-brown)] mt-1">✓</span>
                          <span className="para text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* How It Works / Process */}
                {currentDetailData.process && (
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">
                      How It Works
                    </h2>
                    <p className="para text-gray-700 leading-relaxed">
                      {currentDetailData.process}
                    </p>
                  </div>
                )}

                {/* Conditions Treated */}
                {currentDetailData.conditionsTreated && currentDetailData.conditionsTreated.length > 0 && (
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">
                      Conditions Treated
                    </h2>
                    <div className="flex flex-wrap gap-3">
                      {currentDetailData.conditionsTreated.map((condition, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 bg-[#FFF8F5] text-[var(--brand-brown)] rounded-full text-sm font-medium"
                        >
                          {condition}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Duration */}
                {currentDetailData.duration && (
                  <div className="bg-[#FFF8F5] rounded-xl p-6">
                    <h3 className="font-bold text-gray-800 mb-2">Duration</h3>
                    <p className="para text-gray-700">{currentDetailData.duration}</p>
                  </div>
                )}

                {/* Additional Info */}
                {currentDetailData.additionalInfo && (
                  <div>
                    <p className="para text-gray-700 leading-relaxed">
                      {currentDetailData.additionalInfo}
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* More Treatments/Therapies Section using MoreTreatments Component */}
            {relatedServices.length > 0 && (
              <MoreTreatments 
                blogs={transformServicesToBlogs(relatedServices)}
                title={sectionTitle}
              />
            )}
          </main>
        </div>
      </div>
    </>
  );
}