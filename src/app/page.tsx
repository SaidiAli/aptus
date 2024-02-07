import ClippedImage from "@/components/ClippedImage";
import Hero from "@/components/Hero";
import Image from "next/image";
import linus from "../../public/images/clients/linus.png";
import tattoos from "../../public/images/clients/safe-tattoos-logo.jpg";
import oluadepe from "../../public/images/clients/oluadepe.jpg";
import footprint from "../../public/images/clients/footprint-logo.png";
import afriven from "../../public/images/clients/afriven.png";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  CalendarDaysIcon,
  EnvelopeIcon,
  PaperAirplaneIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import ContactCTA from "@/components/contact-card";

export default function Home() {
  return (
    <main>
      <Hero />

      <div className="px-8 md:px-16">
        <div className="pl-8 mt-12 relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px">
          <figure className="text-sm">
            <blockquote className="text-neutral-600 [&amp;>*]:relative [&amp;>:first-child]:before:absolute [&amp;>:first-child]:before:right-full [&amp;>:first-child]:before:content-['“'] [&amp;>:last-child]:after:content-['”']">
              <p>
                We Are Helping To Lead The Digital Charge; We Can Help You Build
                On Your Past Successes And Prepare For Your Great Future.
              </p>
            </blockquote>
            <figcaption className="mt-6 font-semibold text-neutral-950">
              - Champe Triumph, Founder
            </figcaption>
          </figure>
        </div>
      </div>

      {/* Services */}
      <section className="px-8 md:px-16 py-16">
        <div className="max-w-2xl">
          <h3 className="font-bold mb-4 text-neutral-900 text-base">
            Services
          </h3>
          <p className="text-4xl md:text-5xl mb-4 text-neutral-900 font-extrabold">
            We help you identify, explore and respond to new opportunities.
          </p>
          <p className="text-neutral-500 text-lg">
            As long as those opportunities involve giving us money to re-purpose
            old projects — we can come up with an endless number of those.
          </p>
        </div>
        <div className="flex flex-col md:flex-row py-16 md:px-8 justify-between gap-4">
          <ClippedImage />

          <div className="max-w-xl">
            <div className="mb-8 md:mb-16">
              <p className="text-gray-500">
                <strong className="text-neutral-700 font-bold">
                  Web development.
                </strong>{" "}
                We specialise in crafting beautiful, high quality marketing
                pages. The rest of the website will be a shell that uses lorem
                ipsum everywhere.
              </p>
            </div>
            <div className="mb-8 md:mb-16">
              <p className="text-gray-500">
                <strong className="text-neutral-700 font-bold">
                  Application development.
                </strong>{" "}
                We have a team of skilled developers who are experts in the
                latest app frameworks, like Angular 1 and Google Web Toolkit.
              </p>
            </div>
            <div className="mb-8 md:mb-16">
              <p className="text-gray-500">
                <strong className="text-neutral-700 font-bold">
                  E-commerce.
                </strong>{" "}
                We are at the forefront of modern e-commerce development. Which
                mainly means adding your logo to the Shopify store template
                we’ve used for the past six years.
              </p>
            </div>
            <div className="mb-8 md:mb-8">
              <p className="text-gray-500">
                <strong className="text-neutral-700 font-bold">
                  Custom content management.
                </strong>{" "}
                At Studio we understand the importance of having a robust and
                customised CMS. That’s why we run all of our client projects out
                of a single, enormous Joomla instance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-8 md:px-16 py-16 md:py-32">
        <div className="m-auto max-w-3xl">
          <p className="text-neutral-900 text-2xl">
            Aptus Agency is an agency that offers comprehensive online marketing
            services. We have been serving clients from various industries with
            a diverse range of services. Our expertise lies in providing
            professional IT solutions for various online marketing strategies. I
            nstead of choosing any digital marketing agency, opt for a
            trustworthy company like us.
          </p>
        </div>
      </section>

      <section className="py-16 px-8">
        <div className="bg-black w-full p-8 md:p-32 md:rounded-lg">
          <p className="mb-8">We've worked with some amazing people</p>
          <div className="grid grid-cols-2 md:flex justify-between overflow-scroll gap-3">
            <Image src={linus} alt="client" className="w-auto h-40" />
            <Image src={tattoos} alt="client" className="w-auto h-40" />
            <Image src={afriven} alt="client" className="w-auto h-40" />
            <Image src={footprint} alt="client" className="w-auto h-40" />
            <Image src={oluadepe} alt="client" className="w-auto h-40" />
          </div>
        </div>
      </section>

      <ContactCTA />
    </main>
  );
}
