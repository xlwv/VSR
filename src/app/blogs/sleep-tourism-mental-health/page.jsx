import React from "react";
import PageBanner from "@/components/PageBanner";
import IndividualBlogStructure from "@/components/BlogComponents/IndividualBlogStructure";
import Link from "next/link";
import { blogData as allBlogs } from "../page";

export default function YogaMeditationBlogPage() {
  const blogData = {
    title: "Yoga & Meditation Retreats: A Healing Journey for the Soul",
    heroImage: "/assets/blog-grid-img3.png",

    intro: (
      <React.Fragment>
        Life can often feel chaotic, filled with challenges, stress, and endless
        distractions. In the rush, we forget to pause and listen to the voice
        within. The noise and constant activity cloud our minds and leave us
        feeling disconnected. If you’re seeking peace, rejuvenation, or a deeper
        sense of purpose, the yoga and meditation retreats at VSR Vriksha offer an
        authentic path to healing.
        <br />
        <br />
        The healing process of yoga is more than stretching or breathing. It's
        about unlearning and rediscovering yourself. In each retreat at VSR
        Vriksha, we try to get you back in touch with your inner self. It doesn't
        matter if you're a seasoned yogi or a beginner. What does matter is that
        you want to learn to accept the present and embrace your true potential.
      </React.Fragment>
    ),

    sections: [
      {
        heading: "Reconnect in Nature",
        paragraphs: [
          <React.Fragment key="nature-1">
            VSR Vriksha combines the wisdom of ancient yoga traditions with the
            serenity of nature. The moment you step in, birdsong and soft winds
            gently caress your ears, welcoming you into a healing yoga retreat.
          </React.Fragment>,
          <React.Fragment key="nature-2">
            Practicing yoga amidst nature clears the mind and grounds the body.
            Learn more about our{" "}
            <Link href="/programs" className="text-[#A54220] underline">
              wellness programs
            </Link>{" "}
            designed to restore harmony.
          </React.Fragment>,
        ],
      },
      {
        heading: "Mindfulness Leads to Healing",
        paragraphs: [
          <React.Fragment key="mindfulness-1">
            Healing yoga retreats are not only physical experiences. They offer a
            safe haven for introspection, spiritual growth, and emotional
            release.
          </React.Fragment>,
          <React.Fragment key="mindfulness-2">
            Our meditation sessions focus on awareness, balance, and clarity.
            Read about{" "}
            <Link href="/services" className="text-[#A54220] underline">
              our holistic therapies
            </Link>{" "}
            that support long-term mental well-being.
          </React.Fragment>,
        ],
      },
      {
        heading: "A Community of Care",
        paragraphs: [
          <React.Fragment key="community-1">
            One of the most meaningful aspects of VSR Vriksha retreats is the
            supportive community. Participants exchange stories and heal
            together.
          </React.Fragment>,
          <React.Fragment key="community-2">
            Whether you seek private contemplation or group interaction, our
            retreats provide both in a nurturing environment.
          </React.Fragment>,
        ],
      },
      {
        heading: "Transformative Practices",
        paragraphs: [
          <React.Fragment key="practice-1">
            Transformative yoga and meditation practices form the core of our
            philosophy. Each session blends ancient wisdom with modern
            mindfulness.
          </React.Fragment>,
          <React.Fragment key="practice-2">
            From sunrise yoga to silent meditation, every moment is curated to
            enhance self-awareness and inner strength.
          </React.Fragment>,
        ],
      },
      {
        heading: "Why VSR Vriksha?",
        paragraphs: [
          <React.Fragment key="why-1">
            VSR Vriksha is known for its genuine methodology, experienced
            teachers, and tranquil natural setting.
          </React.Fragment>,
          <React.Fragment key="why-2">
            If your heart seeks peace and authentic relaxation,{" "}
            <Link href="/contact-us" className="text-[#A54220] underline">
              book your retreat
            </Link>{" "}
            and begin your healing journey today.
          </React.Fragment>,
        ],
      },
    ],

    allBlogs: allBlogs,
  };

  return (
    <>
      <div className="mt-[64px] sm:mt-[72px] md:mt-[80px] lg:mt-[88px]">
        <PageBanner
          title="Blogs"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Blogs", href: "/blogs" },
            { label: "Yoga & Meditation Retreats..." },
          ]}
          bgImage="/assets/banner.webp"
        />
      </div>

      <IndividualBlogStructure data={blogData} />
    </>
  );
}
