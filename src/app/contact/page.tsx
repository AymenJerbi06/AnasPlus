import type { Metadata } from "next";
import { Phone, MessageCircle } from "lucide-react";
import { InstagramIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Call, WhatsApp or message Anas Plus Bouzayen in Sfax or Route Tunis in Tunis.",
};

const CONTACTS = [
  {
    Icon: Phone,
    label: "Call us",
    value: "53 266 222",
    href: "tel:53266222",
  },
  {
    Icon: MessageCircle,
    label: "WhatsApp",
    value: "53 266 222",
    href: "https://wa.me/21653266222",
  },
  {
    Icon: InstagramIcon,
    label: "Instagram – Bouzayen · Sfax",
    value: "@anasplusbouzayen",
    href: "https://instagram.com/anasplusbouzayen",
  },
  {
    Icon: InstagramIcon,
    label: "Instagram – Route Tunis · Tunis",
    value: "@anasplus_rte_tunis",
    href: "https://instagram.com/anasplus_rte_tunis",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="bg-black px-6 pt-14 pb-10 text-center lg:px-8">
        <div className="container mx-auto max-w-[640px]">
          <h1 className="font-heading text-[32px] italic uppercase text-white sm:text-[40px]">
            Contact Us
          </h1>
          <p className="mt-3 font-sans text-[16px] text-white/80">
            Questions about coaching, classes or membership? Contact either club
            directly using the phone number or branch account below.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-16 lg:px-8">
        <div className="container mx-auto grid max-w-[720px] grid-cols-1 gap-4 sm:grid-cols-2">
          {CONTACTS.map(({ Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex items-center gap-4 border border-[#9c9e9f] p-5 transition-colors duration-200 hover:border-ff-red"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ff-red text-white">
                <Icon className="h-5 w-5" />
              </span>
              <span>
                <span className="block font-sans text-sm text-ff-graphit">
                  {label}
                </span>
                <span className="block font-sans text-base font-bold text-black">
                  {value}
                </span>
              </span>
            </a>
          ))}
        </div>

        <div
          id="membership"
          className="mx-auto mt-12 max-w-[640px] scroll-mt-28 border-t border-[#d5d5d5] pt-10 text-center"
        >
          <h2 className="font-heading text-[22px] italic uppercase text-black">
            Pause or Cancel Your Membership
          </h2>
          <p className="mt-3 font-sans text-[15px] leading-[1.6] text-ff-graphit">
            Membership changes are handled directly by your Home Club. Call
            53 266 222 or stop by in person and our team will take care of
            it.
          </p>
        </div>
      </section>
    </>
  );
}
