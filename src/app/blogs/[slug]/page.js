import { notFound } from "next/navigation";
import PageBanner from "@/components/PageBanner";
import IndividualBlogStructure from "@/components/BlogComponents/IndividualBlogStructure";
import blogs from "../blogsData.json";

const blogsData = {
  "yoga-and-meditation-retreats": {
    title: "Yoga and Meditation Retreats: A Healing Journey for the Soul",
    heroImage: "/assets/blog-grid-img1.png",
    intro: `Life can often feel chaotic, filled with challenges, stress, and endless distractions. In the rush, we forget to pause and listen to the voice within. The noise and constant activity cloud our minds and leave us feeling disconnected. If you're seeking peace, rejuvenation, or a deeper sense of purpose, the yoga and meditation retreats at <a href="/about" class="text-[#A54220] underline">VSR Vriksha</a> offer an authentic path to healing.

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
          "If your heart seeks peace and authentic relaxation, <a href='/contact' class='text-[#A54220] underline'>book your retreat</a> and begin your healing journey today."
        ],
      },
    ],
  },
  "mental-health-preventive-healthcare": {
    title: "How Mental Health Plays a Role in Preventive Healthcare",
    heroImage: "/assets/blog-grid-img2.png",
    intro: `Mental health is no longer a topic we can afford to overlook. In today's fast-paced world, stress, anxiety, and emotional burnout have become commonplace. Yet, the importance of mental health in preventive healthcare is often underestimated. At <a href="/about" class="text-[#A54220] underline">VSR Vriksha</a>, we believe that true wellness begins with a healthy mind.

Preventive healthcare isn't just about avoiding physical illness—it's about nurturing every aspect of your well-being. Mental health plays a crucial role in this holistic approach, influencing everything from your immune system to your relationships and quality of life.`,
    sections: [
      {
        heading: "The Mind-Body Connection",
        paragraphs: [
          "Research consistently shows that mental and physical health are deeply interconnected. Chronic stress, for example, can lead to high blood pressure, heart disease, and weakened immunity.",
          "By prioritizing mental health through practices like meditation, yoga, and mindfulness, you can prevent many physical ailments before they manifest."
        ],
      },
      {
        heading: "Early Intervention Saves Lives",
        paragraphs: [
          "Addressing mental health concerns early can prevent them from escalating into more serious conditions. Depression, anxiety, and burnout are all manageable when caught early.",
          "Our <a href='/programs' class='text-[#A54220] underline'>wellness programs</a> are designed to identify and address these issues through natural, holistic methods."
        ],
      },
      {
        heading: "Building Emotional Resilience",
        paragraphs: [
          "Mental health isn't just about treating problems—it's about building strength. Emotional resilience helps you navigate life's challenges with grace and adaptability.",
          "Through guided meditation, therapeutic yoga, and community support, VSR Vriksha helps you develop the tools to thrive, not just survive."
        ],
      },
      {
        heading: "A Holistic Approach",
        paragraphs: [
          "At VSR Vriksha, we don't separate mind from body. Our approach to preventive healthcare addresses both simultaneously, ensuring comprehensive wellness.",
          "Explore our <a href='/services' class='text-[#A54220] underline'>holistic therapies</a> to discover how we integrate mental health into every aspect of care."
        ],
      },
      {
        heading: "Take the First Step",
        paragraphs: [
          "Investing in your mental health today can prevent countless health issues tomorrow. It's never too early or too late to start.",
          "Ready to prioritize your well-being? <a href='/contact' class='text-[#A54220] underline'>Contact us</a> to learn more about our programs."
        ],
      },
    ],
  },
  "how-sleep-improves-mental-health": {
    title: "How Sleep Improves Mental Health",
    heroImage: "/assets/blog-grid-img3.png",
    intro: `Sleep is often the first thing we sacrifice in our busy lives. Yet, it's one of the most powerful tools we have for maintaining and improving mental health. At <a href="/about" class="text-[#A54220] underline">VSR Vriksha</a>, we understand that quality sleep is foundational to overall wellness.

When you sleep, your brain doesn't simply shut down—it actively works to process emotions, consolidate memories, and repair itself. Without adequate rest, mental health suffers, leading to increased stress, anxiety, and even depression.`,
    sections: [
      {
        heading: "Sleep and Emotional Regulation",
        paragraphs: [
          "During sleep, particularly REM sleep, your brain processes emotional experiences from the day. This helps you regulate emotions and respond to stress more effectively.",
          "Chronic sleep deprivation disrupts this process, making you more reactive, irritable, and emotionally vulnerable."
        ],
      },
      {
        heading: "The Stress-Sleep Cycle",
        paragraphs: [
          "Poor sleep increases cortisol levels, the body's primary stress hormone. High cortisol, in turn, makes it harder to fall asleep, creating a vicious cycle.",
          "Breaking this cycle requires a holistic approach. Our <a href='/programs' class='text-[#A54220] underline'>wellness programs</a> incorporate relaxation techniques specifically designed to improve sleep quality."
        ],
      },
      {
        heading: "Sleep and Mental Clarity",
        paragraphs: [
          "Quality sleep enhances cognitive function, including memory, focus, and decision-making. When well-rested, you think more clearly and make better choices.",
          "Conversely, sleep deprivation impairs judgment and increases the risk of mental health disorders."
        ],
      },
      {
        heading: "Natural Solutions for Better Sleep",
        paragraphs: [
          "At VSR Vriksha, we offer natural therapies to help you achieve restorative sleep. From guided meditation to sleep-inducing yoga practices, our approach is gentle and effective.",
          "Discover our <a href='/services' class='text-[#A54220] underline'>holistic therapies</a> designed to help you sleep better and feel better."
        ],
      },
      {
        heading: "Prioritize Your Sleep",
        paragraphs: [
          "Good sleep isn't a luxury—it's a necessity for mental health. By making sleep a priority, you invest in your long-term well-being.",
          "Ready to transform your sleep? <a href='/contact' class='text-[#A54220] underline'>Contact us</a> to learn how we can help."
        ],
      },
    ],
  },
  "healing-centers-for-mental-health": {
    title: "How Healing Centers Play a Role in Preventive Healthcare",
    heroImage: "/assets/blog-grid-img4.png",
    intro: `In a world where healthcare often focuses on treating illness rather than preventing it, healing centers offer a refreshing alternative. At <a href="/about" class="text-[#A54220] underline">VSR Vriksha</a>, we believe that preventive healthcare is the key to long-term wellness—and healing centers play a vital role in this mission.

Healing centers provide a space for individuals to address health concerns before they become serious, using natural, holistic methods that support the body's innate ability to heal itself.`,
    sections: [
      {
        heading: "A Proactive Approach to Health",
        paragraphs: [
          "Unlike traditional healthcare, which often waits for symptoms to appear, healing centers focus on prevention. Through lifestyle coaching, stress management, and holistic therapies, they help you stay healthy before problems arise.",
          "This proactive approach saves time, money, and suffering in the long run."
        ],
      },
      {
        heading: "Addressing Root Causes",
        paragraphs: [
          "Healing centers don't just mask symptoms—they identify and address root causes. Whether it's chronic stress, poor nutrition, or emotional imbalance, the goal is lasting wellness.",
          "Our <a href='/programs' class='text-[#A54220] underline'>programs</a> are designed to uncover and resolve these underlying issues naturally."
        ],
      },
      {
        heading: "Holistic Integration",
        paragraphs: [
          "Healing centers like VSR Vriksha integrate multiple modalities—yoga, meditation, nutrition, and natural therapies—to create a comprehensive wellness experience.",
          "This holistic integration ensures that every aspect of your health is supported."
        ],
      },
      {
        heading: "Community and Support",
        paragraphs: [
          "Healing is often easier in community. Healing centers provide a supportive environment where you can connect with others on similar journeys.",
          "This sense of belonging and shared purpose enhances healing and builds lasting habits."
        ],
      },
      {
        heading: "Your Path to Prevention",
        paragraphs: [
          "Whether you're dealing with stress, chronic pain, or simply want to maintain optimal health, healing centers offer tools and guidance to help you thrive.",
          "Explore our <a href='/services' class='text-[#A54220] underline'>services</a> and take the first step toward preventive wellness today."
        ],
      },
    ],
  },
  "stress-and-diabetes": {
    title: "How Stress and Diabetes Are Connected",
    heroImage: "/assets/blog-grid-img5.png",
    intro: `Stress is more than just a mental burden—it has profound physical effects, including its impact on blood sugar levels. At <a href="/about" class="text-[#A54220] underline">VSR Vriksha</a>, we help individuals understand and manage the complex relationship between stress and diabetes.

Chronic stress triggers a cascade of hormonal responses that can lead to insulin resistance, elevated blood sugar, and ultimately, type 2 diabetes. Understanding this connection is the first step toward prevention and management.`,
    sections: [
      {
        heading: "The Stress-Diabetes Link",
        paragraphs: [
          "When you're stressed, your body releases cortisol and adrenaline. These hormones increase blood sugar to provide quick energy. While helpful in short bursts, chronic stress keeps blood sugar elevated, straining the pancreas and leading to insulin resistance.",
          "Over time, this can develop into prediabetes or type 2 diabetes."
        ],
      },
      {
        heading: "Managing Stress to Control Blood Sugar",
        paragraphs: [
          "Reducing stress is crucial for diabetes prevention and management. Practices like yoga, meditation, and deep breathing help lower cortisol levels and improve insulin sensitivity.",
          "Our <a href='/programs' class='text-[#A54220] underline'>diabetes management programs</a> incorporate these stress-reduction techniques alongside dietary guidance."
        ],
      },
      {
        heading: "The Role of Lifestyle",
        paragraphs: [
          "Lifestyle factors—diet, exercise, sleep, and stress management—play a significant role in diabetes risk. Addressing all of these holistically provides the best outcomes.",
          "At VSR Vriksha, we create personalized plans that address your unique needs and challenges."
        ],
      },
      {
        heading: "Natural Therapies for Diabetes",
        paragraphs: [
          "From nutritional counseling to therapeutic yoga, natural therapies can help regulate blood sugar and improve overall metabolic health.",
          "Explore our <a href='/services' class='text-[#A54220] underline'>holistic services</a> to learn how we support diabetes management naturally."
        ],
      },
      {
        heading: "Take Control Today",
        paragraphs: [
          "Whether you're at risk for diabetes or managing an existing diagnosis, stress reduction should be part of your strategy.",
          "Ready to take control? <a href='/contact' class='text-[#A54220] underline'>Contact us</a> to learn how we can help."
        ],
      },
    ],
  },
  "fitness-and-mental-health": {
    title: "How Fitness and Mental Health Are Connected",
    heroImage: "/assets/blog-grid-img6.png",
    intro: `The connection between physical fitness and mental health is undeniable. At <a href="/about" class="text-[#A54220] underline">VSR Vriksha</a>, we've seen firsthand how regular movement transforms not just bodies, but minds.

Exercise isn't just about building strength or losing weight—it's one of the most powerful tools for improving mood, reducing anxiety, and enhancing overall mental well-being.`,
    sections: [
      {
        heading: "Exercise as a Natural Antidepressant",
        paragraphs: [
          "Physical activity triggers the release of endorphins, often called 'feel-good' hormones. These natural chemicals elevate mood and create a sense of well-being.",
          "Regular exercise has been shown to be as effective as medication for mild to moderate depression in many cases."
        ],
      },
      {
        heading: "Stress Reduction Through Movement",
        paragraphs: [
          "Exercise reduces stress hormones like cortisol while simultaneously boosting the production of mood-enhancing neurotransmitters.",
          "Activities like yoga, which combine movement with mindfulness, are particularly effective. Explore our <a href='/programs' class='text-[#A54220] underline'>yoga programs</a> to experience this benefit."
        ],
      },
      {
        heading: "Improved Sleep and Cognitive Function",
        paragraphs: [
          "Regular physical activity improves sleep quality, which in turn enhances mental clarity, focus, and emotional regulation.",
          "Better sleep means better mental health—it's a virtuous cycle."
        ],
      },
      {
        heading: "Building Confidence and Resilience",
        paragraphs: [
          "Achieving fitness goals builds self-confidence and resilience. These psychological benefits extend far beyond the gym or yoga mat.",
          "At VSR Vriksha, we support your journey with personalized fitness and wellness plans."
        ],
      },
      {
        heading: "Start Moving Today",
        paragraphs: [
          "You don't need to run marathons to experience the mental health benefits of exercise. Even gentle, consistent movement makes a difference.",
          "Ready to begin? <a href='/contact' class='text-[#A54220] underline'>Contact us</a> to discover programs that fit your lifestyle."
        ],
      },
    ],
  },
  "stress-and-yoga": {
    title: "How Stress and Yoga Are Connected",
    heroImage: "/assets/blog-grid-img2.png",
    intro: `In our fast-paced modern world, stress has become an unwelcome companion in daily life. At <a href="/about" class="text-[#A54220] underline">VSR Vriksha</a>, we've witnessed the transformative power of yoga in managing and reducing stress.

Yoga isn't just physical exercise—it's a holistic practice that addresses stress at its roots, calming the mind, balancing hormones, and restoring inner peace.`,
    sections: [
      {
        heading: "How Yoga Reduces Stress",
        paragraphs: [
          "Yoga activates the parasympathetic nervous system, which counteracts the stress response. Through controlled breathing and mindful movement, it lowers cortisol levels and promotes relaxation.",
          "This isn't just theory—countless studies confirm yoga's effectiveness in stress reduction."
        ],
      },
      {
        heading: "The Mind-Body Balance",
        paragraphs: [
          "Stress manifests in both mind and body. Yoga addresses both simultaneously, releasing physical tension while calming mental chatter.",
          "Our <a href='/programs' class='text-[#A54220] underline'>specialized yoga programs</a> are designed to help you find this balance."
        ],
      },
      {
        heading: "Building Stress Resilience",
        paragraphs: [
          "Regular yoga practice doesn't just reduce current stress—it builds resilience against future stressors. You become better equipped to handle life's challenges with grace.",
          "This resilience is one of yoga's most valuable long-term benefits."
        ],
      },
      {
        heading: "A Practice for Everyone",
        paragraphs: [
          "Whether you're new to yoga or experienced, there's a practice that fits your needs. From gentle restorative yoga to more dynamic flows, we offer options for every level.",
          "Explore our <a href='/services' class='text-[#A54220] underline'>yoga services</a> to find what resonates with you."
        ],
      },
      {
        heading: "Begin Your Journey",
        paragraphs: [
          "Stress doesn't have to control your life. Through yoga, you can reclaim your peace and well-being.",
          "Ready to start? <a href='/contact' class='text-[#A54220] underline'>Contact us</a> today to join our yoga community."
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
    allBlogs: blogs.filter((b) => b.slug !== slug),
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