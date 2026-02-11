import Image from "next/image";
import PageBanner from "@/components/PageBanner";
import "../globals.css";
import GetInTouch from "./GetInTouch";

const CONTACTS = [
  {
    icon: "/assets/SVG/email.svg",
    title: "Email",
    text: "contact@svvriksha.com",
    href: "mailto:contact@svvriksha.com",
  },
  {
    icon: "/assets/SVG/phone.svg",
    title: "Phone",
    text: ["+91 84310 04444", "+91 89050 04444"],
    href: ["tel:+918431004444", "tel:+918905004444"],
  },
  {
    icon: "/assets/SVG/loc.svg",
    title: "Location",
    text: `Irish Valley, Dharmaram Village, Near Bits
Pilani Campus, Keesara Mandal, Medchal
District, Shameerpet, Telangana - 501301`,
    href: "https://www.google.com/maps/place/VSR+Vriksha+Naturopathy+Center+In+Hyderabad/",
  },
];

export default function Page() {
  return (
    <main>
      {/* Banner */}
      <div className="pt-[70px]">
        <PageBanner
          title="Contact Us"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Contact Us" },
          ]}
          bgImage="/assets/banner.webp"
        />
      </div>

      {/* CONTACT INFO SECTION */}
      <section className="relative overflow-hidden bg-white py-28">
                <div
          className="
            pointer-events-none
            absolute
            left-1/2
            bottom-[-340px]
            h-[600px]
            w-[130%]
            -translate-x-1/2
            rounded-[50%]
            bg-[radial-gradient(ellipse_at_center,_rgba(160,61,19,0.1)_0%,_rgba(160,61,19,0.08)_30%,_rgba(160,61,19,0.03)_55%,_rgba(160,61,19,0)_75%)]
            blur-[120px]
          "
        />

        {/* Content */}
        <div className="relative z-10 mx-auto grid max-w-6xl gap-16 px-6 text-center md:grid-cols-3">
          {CONTACTS.map((item) => (
            <div key={item.title} className="flex flex-col items-center">
              
              {/* Icon */}
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={112}
                  height={112}
                />
              </div>

              {/* Title */}
              <h3 className="mb-3 text-xl font-medium text-[#A03D13]">
                {item.title}
              </h3>

              {/* Content */}
              {item.title === "Email" && (
                <a
                  href={item.href}
                  className="text-[18] text-[#212529] transition hover:text-[#A03D13]"
                >
                  {item.text}
                </a>
              )}

              {item.title === "Phone" && (
                <div className="space-y-1">
                  {item.text.map((phone, index) => (
                    <a
                      key={index}
                      href={item.href[index]}
                      className="block text-[18] text-[#212529] transition hover:text-[#A03D13]"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              )}

              {item.title === "Location" && (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whitespace-pre-line text-[18] leading-relaxed text-[#212529] transition hover:text-[#A03D13]"
                >
                  {item.text}
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* GET IN TOUCH */}
      <GetInTouch />
    </main>
  );
}
