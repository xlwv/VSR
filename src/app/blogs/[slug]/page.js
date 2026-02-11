import { notFound } from "next/navigation";
import PageBanner from "@/components/PageBanner";
import IndividualBlogStructure from "@/components/BlogComponents/IndividualBlogStructure";
import { blogData as allBlogs } from "../blogsData";

const blogsData = {
  "yoga-and-meditation-retreats": {
  title: "Yoga and Meditation Retreats: A Healing Journey for the Soul",
  heroImage: "/assets/blog-grid-img1.png",

  intro: `Life can often feel chaotic, filled with challenges, stress, and endless distractions. In the rush, we forget to pause and listen to the voice within. The noise and constant activity cloud our minds and leave us feeling disconnected. If you’re seeking peace, rejuvenation, or a deeper sense of purpose, the yoga and meditation retreats at <a href="/about" class="text-[#A54220] underline">VSR Vriksha</a> offer an authentic path to healing.

The healing process of yoga is more than stretching or breathing. It's about unlearning and rediscovering yourself. In each retreat at VSR Vriksha, we try to get you back in touch with your inner self. It doesn't matter if you're a seasoned yogi or a beginner. What does matter is that you want to learn to accept the present and embrace your true potential.`,

  sections: [
    {
      heading: "Reconnect in Nature",
      paragraphs: [
        "VSR Vriksha combines the wisdom of ancient yoga traditions with the serenity of nature. The moment you step in, birdsong and soft winds gently welcome you into a healing yoga retreat.",
        `Practicing yoga amidst nature clears the mind and grounds the body. Explore our <a href='/programs' class='text-[#A54220] underline'>wellness programs</a> designed to restore harmony.`
      ],
    },
    {
      heading: "Mindfulness Leads to Healing",
      paragraphs: [
        "Healing yoga retreats are not only physical experiences. They offer a safe haven for introspection, spiritual growth, and emotional release.",
        "Our meditation sessions focus on awareness, balance, and clarity. Learn more about our <a href='/services' class='text-[#A54220] underline'>holistic therapies</a> that support long-term mental well-being."
      ],
    },
    {
      heading: "A Community of Care",
      paragraphs: [
        "One of the most meaningful aspects of VSR Vriksha retreats is the supportive community where participants exchange stories and heal together.",
        "Whether you seek private contemplation or group interaction, our retreats provide both in a nurturing and safe environment."
      ],
    },
    {
      heading: "Transformative Practices",
      paragraphs: [
        "Transformative yoga and meditation practices form the core of our philosophy. Each session blends ancient wisdom with modern mindfulness.",
        "From sunrise yoga to silent meditation, every moment enhances self-awareness, resilience, and inner strength."
      ],
    },
    {
      heading: "Why VSR Vriksha?",
      paragraphs: [
        "VSR Vriksha is known for its genuine methodology, experienced teachers, and tranquil natural setting.",
        "If your heart seeks peace and authentic relaxation, <a href='/contact-us' class='text-[#A54220] underline'>book your retreat</a> and begin your healing journey today."
      ],
    },
  ],
},


 "mental-health-preventive-healthcare": {
  title: "Yoga and Meditation Retreats: A Healing Journey for the Soul",
  heroImage: "/assets/blog-grid-img2.png",

  intro: `Life can often feel chaotic, filled with challenges, stress, and endless distractions. In the rush, we forget to pause and listen to the voice within. The noise and constant activity cloud our minds and leave us feeling disconnected. If you’re seeking peace, rejuvenation, or a deeper sense of purpose, the yoga and meditation retreats at <a href="/about" class="text-[#A54220] underline">VSR Vriksha</a> offer an authentic path to healing.

The healing process of yoga is more than stretching or breathing. It's about unlearning and rediscovering yourself. In each retreat at VSR Vriksha, we try to get you back in touch with your inner self. It doesn't matter if you're a seasoned yogi or a beginner. What does matter is that you want to learn to accept the present and embrace your true potential.`,

  sections: [
    {
      heading: "Reconnect in Nature",
      paragraphs: [
        "VSR Vriksha combines the wisdom of ancient yoga traditions with the serenity of nature. The moment you step in, birdsong and soft winds gently welcome you into a healing yoga retreat.",
        `Practicing yoga amidst nature clears the mind and grounds the body. Explore our <a href='/programs' class='text-[#A54220] underline'>wellness programs</a> designed to restore harmony.`
      ],
    },
    {
      heading: "Mindfulness Leads to Healing",
      paragraphs: [
        "Healing yoga retreats are not only physical experiences. They offer a safe haven for introspection, spiritual growth, and emotional release.",
        "Our meditation sessions focus on awareness, balance, and clarity. Learn more about our <a href='/services' class='text-[#A54220] underline'>holistic therapies</a> that support long-term mental well-being."
      ],
    },
    {
      heading: "A Community of Care",
      paragraphs: [
        "One of the most meaningful aspects of VSR Vriksha retreats is the supportive community where participants exchange stories and heal together.",
        "Whether you seek private contemplation or group interaction, our retreats provide both in a nurturing and safe environment."
      ],
    },
    {
      heading: "Transformative Practices",
      paragraphs: [
        "Transformative yoga and meditation practices form the core of our philosophy. Each session blends ancient wisdom with modern mindfulness.",
        "From sunrise yoga to silent meditation, every moment enhances self-awareness, resilience, and inner strength."
      ],
    },
    {
      heading: "Why VSR Vriksha?",
      paragraphs: [
        "VSR Vriksha is known for its genuine methodology, experienced teachers, and tranquil natural setting.",
        "If your heart seeks peace and authentic relaxation, <a href='/contact-us' class='text-[#A54220] underline'>book your retreat</a> and begin your healing journey today."
      ],
    },
  ],
},
"how-sleep-improves-mental-health": {
  title: "How Sleep Improves Mental Health",
  heroImage: "/assets/blog-grid-img3.png",

  intro: `Life can often feel chaotic, filled with challenges, stress, and endless distractions. In the rush, we forget to pause and listen to the voice within. The noise and constant activity cloud our minds and leave us feeling disconnected. If you’re seeking peace, rejuvenation, or a deeper sense of purpose, the yoga and meditation retreats at <a href="/about" class="text-[#A54220] underline">VSR Vriksha</a> offer an authentic path to healing.

The healing process of yoga is more than stretching or breathing. It's about unlearning and rediscovering yourself. In each retreat at VSR Vriksha, we try to get you back in touch with your inner self. It doesn't matter if you're a seasoned yogi or a beginner. What does matter is that you want to learn to accept the present and embrace your true potential.`,

  sections: [
    {
      heading: "Reconnect in Nature",
      paragraphs: [
        "VSR Vriksha combines the wisdom of ancient yoga traditions with the serenity of nature. The moment you step in, birdsong and soft winds gently welcome you into a healing yoga retreat.",
        `Practicing yoga amidst nature clears the mind and grounds the body. Explore our <a href='/programs' class='text-[#A54220] underline'>wellness programs</a> designed to restore harmony.`
      ],
    },
    {
      heading: "Mindfulness Leads to Healing",
      paragraphs: [
        "Healing yoga retreats are not only physical experiences. They offer a safe haven for introspection, spiritual growth, and emotional release.",
        "Our meditation sessions focus on awareness, balance, and clarity. Learn more about our <a href='/services' class='text-[#A54220] underline'>holistic therapies</a> that support long-term mental well-being."
      ],
    },
    {
      heading: "A Community of Care",
      paragraphs: [
        "One of the most meaningful aspects of VSR Vriksha retreats is the supportive community where participants exchange stories and heal together.",
        "Whether you seek private contemplation or group interaction, our retreats provide both in a nurturing and safe environment."
      ],
    },
    {
      heading: "Transformative Practices",
      paragraphs: [
        "Transformative yoga and meditation practices form the core of our philosophy. Each session blends ancient wisdom with modern mindfulness.",
        "From sunrise yoga to silent meditation, every moment enhances self-awareness, resilience, and inner strength."
      ],
    },
    {
      heading: "Why VSR Vriksha?",
      paragraphs: [
        "VSR Vriksha is known for its genuine methodology, experienced teachers, and tranquil natural setting.",
        "If your heart seeks peace and authentic relaxation, <a href='/contact-us' class='text-[#A54220] underline'>book your retreat</a> and begin your healing journey today."
      ],
    },
  ],
},
"healing-centers-for-mental-health": {
  title: "How Healing Centers Play a Role in Preventive Healthcare",
  heroImage: "/assets/blog-grid-img4.png",

  intro: `Life can often feel chaotic, filled with challenges, stress, and endless distractions. In the rush, we forget to pause and listen to the voice within. The noise and constant activity cloud our minds and leave us feeling disconnected. If you’re seeking peace, rejuvenation, or a deeper sense of purpose, the yoga and meditation retreats at <a href="/about" class="text-[#A54220] underline">VSR Vriksha</a> offer an authentic path to healing.

The healing process of yoga is more than stretching or breathing. It's about unlearning and rediscovering yourself. In each retreat at VSR Vriksha, we try to get you back in touch with your inner self. It doesn't matter if you're a seasoned yogi or a beginner. What does matter is that you want to learn to accept the present and embrace your true potential.`,

  sections: [
    {
      heading: "Reconnect in Nature",
      paragraphs: [
        "VSR Vriksha combines the wisdom of ancient yoga traditions with the serenity of nature. The moment you step in, birdsong and soft winds gently welcome you into a healing yoga retreat.",
        `Practicing yoga amidst nature clears the mind and grounds the body. Explore our <a href='/programs' class='text-[#A54220] underline'>wellness programs</a> designed to restore harmony.`
      ],
    },
    {
      heading: "Mindfulness Leads to Healing",
      paragraphs: [
        "Healing yoga retreats are not only physical experiences. They offer a safe haven for introspection, spiritual growth, and emotional release.",
        "Our meditation sessions focus on awareness, balance, and clarity. Learn more about our <a href='/services' class='text-[#A54220] underline'>holistic therapies</a> that support long-term mental well-being."
      ],
    },
    {
      heading: "A Community of Care",
      paragraphs: [
        "One of the most meaningful aspects of VSR Vriksha retreats is the supportive community where participants exchange stories and heal together.",
        "Whether you seek private contemplation or group interaction, our retreats provide both in a nurturing and safe environment."
      ],
    },
    {
      heading: "Transformative Practices",
      paragraphs: [
        "Transformative yoga and meditation practices form the core of our philosophy. Each session blends ancient wisdom with modern mindfulness.",
        "From sunrise yoga to silent meditation, every moment enhances self-awareness, resilience, and inner strength."
      ],
    },
    {
      heading: "Why VSR Vriksha?",
      paragraphs: [
        "VSR Vriksha is known for its genuine methodology, experienced teachers, and tranquil natural setting.",
        "If your heart seeks peace and authentic relaxation, <a href='/contact-us' class='text-[#A54220] underline'>book your retreat</a> and begin your healing journey today."
      ],
    },
  ],
},
"stress-and-diabetes": {
  title: "How Stress and Diabetes Are Connected",
  heroImage: "/assets/blog-grid-img5.png",

  intro: `Life can often feel chaotic, filled with challenges, stress, and endless distractions. In the rush, we forget to pause and listen to the voice within. The noise and constant activity cloud our minds and leave us feeling disconnected. If you’re seeking peace, rejuvenation, or a deeper sense of purpose, the yoga and meditation retreats at <a href="/about" class="text-[#A54220] underline">VSR Vriksha</a> offer an authentic path to healing.

The healing process of yoga is more than stretching or breathing. It's about unlearning and rediscovering yourself. In each retreat at VSR Vriksha, we try to get you back in touch with your inner self. It doesn't matter if you're a seasoned yogi or a beginner. What does matter is that you want to learn to accept the present and embrace your true potential.`,

  sections: [
    {
      heading: "Reconnect in Nature",
      paragraphs: [
        "VSR Vriksha combines the wisdom of ancient yoga traditions with the serenity of nature. The moment you step in, birdsong and soft winds gently welcome you into a healing yoga retreat.",
        `Practicing yoga amidst nature clears the mind and grounds the body. Explore our <a href='/programs' class='text-[#A54220] underline'>wellness programs</a> designed to restore harmony.`
      ],
    },
    {
      heading: "Mindfulness Leads to Healing",
      paragraphs: [
        "Healing yoga retreats are not only physical experiences. They offer a safe haven for introspection, spiritual growth, and emotional release.",
        "Our meditation sessions focus on awareness, balance, and clarity. Learn more about our <a href='/services' class='text-[#A54220] underline'>holistic therapies</a> that support long-term mental well-being."
      ],
    },
    {
      heading: "A Community of Care",
      paragraphs: [
        "One of the most meaningful aspects of VSR Vriksha retreats is the supportive community where participants exchange stories and heal together.",
        "Whether you seek private contemplation or group interaction, our retreats provide both in a nurturing and safe environment."
      ],
    },
    {
      heading: "Transformative Practices",
      paragraphs: [
        "Transformative yoga and meditation practices form the core of our philosophy. Each session blends ancient wisdom with modern mindfulness.",
        "From sunrise yoga to silent meditation, every moment enhances self-awareness, resilience, and inner strength."
      ],
    },
    {
      heading: "Why VSR Vriksha?",
      paragraphs: [
        "VSR Vriksha is known for its genuine methodology, experienced teachers, and tranquil natural setting.",
        "If your heart seeks peace and authentic relaxation, <a href='/contact-us' class='text-[#A54220] underline'>book your retreat</a> and begin your healing journey today."
      ],
    },
  ],
},
"fitness-and-mental-health": {
  title: "How Fitness and Mental Health Are Connected",
  heroImage: "/assets/blog-grid-img6.png",

  intro: `Life can often feel chaotic, filled with challenges, stress, and endless distractions. In the rush, we forget to pause and listen to the voice within. The noise and constant activity cloud our minds and leave us feeling disconnected. If you’re seeking peace, rejuvenation, or a deeper sense of purpose, the yoga and meditation retreats at <a href="/about" class="text-[#A54220] underline">VSR Vriksha</a> offer an authentic path to healing.

The healing process of yoga is more than stretching or breathing. It's about unlearning and rediscovering yourself. In each retreat at VSR Vriksha, we try to get you back in touch with your inner self. It doesn't matter if you're a seasoned yogi or a beginner. What does matter is that you want to learn to accept the present and embrace your true potential.`,

  sections: [
    {
      heading: "Reconnect in Nature",
      paragraphs: [
        "VSR Vriksha combines the wisdom of ancient yoga traditions with the serenity of nature. The moment you step in, birdsong and soft winds gently welcome you into a healing yoga retreat.",
        `Practicing yoga amidst nature clears the mind and grounds the body. Explore our <a href='/programs' class='text-[#A54220] underline'>wellness programs</a> designed to restore harmony.`
      ],
    },
    {
      heading: "Mindfulness Leads to Healing",
      paragraphs: [
        "Healing yoga retreats are not only physical experiences. They offer a safe haven for introspection, spiritual growth, and emotional release.",
        "Our meditation sessions focus on awareness, balance, and clarity. Learn more about our <a href='/services' class='text-[#A54220] underline'>holistic therapies</a> that support long-term mental well-being."
      ],
    },
    {
      heading: "A Community of Care",
      paragraphs: [
        "One of the most meaningful aspects of VSR Vriksha retreats is the supportive community where participants exchange stories and heal together.",
        "Whether you seek private contemplation or group interaction, our retreats provide both in a nurturing and safe environment."
      ],
    },
    {
      heading: "Transformative Practices",
      paragraphs: [
        "Transformative yoga and meditation practices form the core of our philosophy. Each session blends ancient wisdom with modern mindfulness.",
        "From sunrise yoga to silent meditation, every moment enhances self-awareness, resilience, and inner strength."
      ],
    },
    {
      heading: "Why VSR Vriksha?",
      paragraphs: [
        "VSR Vriksha is known for its genuine methodology, experienced teachers, and tranquil natural setting.",
        "If your heart seeks peace and authentic relaxation, <a href='/contact-us' class='text-[#A54220] underline'>book your retreat</a> and begin your healing journey today."
      ],
    },
  ],
},

};

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;

  const blog = blogsData[slug];

  if (!blog) return notFound();

  const blogData = {
    ...blog,
    allBlogs: allBlogs.filter((b) => b.slug !== slug),
  };

  return (
    <>
      <div className="mt-[69px] sm:mt-[72px] md:mt-[80px] lg:mt-[88px]">
        <PageBanner
          title="Blogs"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Blogs", href: "/blogs" },
            { label: blog.title },
          ]}
          bgImage="/assets/banner.webp"
        />
      </div>

      <IndividualBlogStructure data={blogData} />
    </>
  );
}
