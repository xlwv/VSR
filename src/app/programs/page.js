import PageBanner from "@/components/PageBanner";
import WellnessIntro from "./WellnessIntro";
import HealthPackage from "@/components/HealthPackage";

export default function Page() {
  return (
    <main>
      <div className="pt-[70px]">
        <PageBanner
          title="Programs"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Programs" },
          ]}
          bgImage="/assets/banner.webp"
        />
      </div>
      <WellnessIntro/>
      
      {/* Optimal Weight Package */}
      <HealthPackage
        id="optimal-weight-package"
        title="Optimal Weight Package"
        duration="7/14/21 Days"
        description="Designed to help you achieve your target weight naturally, this program combines therapeutic treatments and holistic practices to boost metabolism, improve energy levels, and enhance cardiac health."
        benefits={["Boosts metabolism", "Improves cardiac health", "Enhances energy levels","Supports achieving your target weight"]}
        includes={["Udhwarthanam", "Deep tissue massage", "Vibro massage"]}
        image="/assets/HP-1.webp"
        reverse={false}
      />
      
      {/* Diabetes Remission Package */}
      <HealthPackage
        id="diabetes-remission-package"
        title="Diabetes Remission Package"
        duration="7/14/21 Days"
        description="This program focuses on managing blood sugar levels and improving 
insulin sensitivity using natural therapies and dietary practices tailored 
to your needs."
        benefits={["Regulates insulin resistance", "Helps control blood glucose levels", "Reduces blood cholesterol levels"]}
        includes={["GH Pack", "Castor oil pack", "Hip bath"]}
        image="/assets/HP-2.webp"
        reverse={true}
      />
      
      {/* Renew Your Gut Package */}
      <HealthPackage
        id="renew-your-gut-package"
        title="Renew Your Gut Package"
        duration="7/14 Days"
        description="Address issues like bloating, constipation, and IBS through carefully curated treatments designed to improve digestion and restore gut balance."
        benefits={["Enhances digestion","Alleviates gas, bloating, and IBS","Supports overall gut health"]}
        includes={["Abdomen pack","Castor oil pack","Hip bath"]}
        image="/assets/HP-3.webp"
        reverse={false}
      />
      
      {/* Body & Mind Detox Package */}
      <HealthPackage
        id="body-mind-detox-package"
        title="Body & Mind Detox Package"
        duration="3/7/14 Days"
        description="This program aims to reduce stress, calm your mind, and repair your body through a combination of restorative treatments and relaxation techniques."
        benefits={["Relieves stress and tension","Calms the mind","Repairs and rejuvenates the body",]}
        includes={["Head, neck, and shoulder massage","Shirodhara","Hand and foot reflexology","Laughter yoga",]}
        image="/assets/HP-4.webp"
        reverse={true}
      />
      
      {/* Pain Management Package */}
      <HealthPackage
        id="pain-management-package"
        title="Pain Management Package"
        duration="7/14/21 Days"
        description="Whether you're dealing with arthritis, migraines, or muscular pain, our treatments aim to reduce inflammation, alleviate discomfort, and boost immunity."
        benefits={["Reduces pain naturally","Decreases inflammation","Enhances immunity",]}
        includes={["Ginger Pack","Mustard Pack","Epsom Salt Pack","Neutral immersion bath with Epsom salt","Alternate hot and cold application / Potli massage"]}
        image="/assets/pain.webp"
        reverse={false}
      />
    </main>
  );
}