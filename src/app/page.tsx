import ClippedImage from "@/components/ClippedImage";
import Hero from "@/components/Hero";
import Image from "next/image";
import linus from "../../public/images/clients/linus.png";
import tattoos from "../../public/images/clients/safe-tattoos-logo.jpg";
import oluadepe from "../../public/images/clients/oluadepe.jpg";
import footprint from "../../public/images/clients/footprint-logo.png";
import afriven from "../../public/images/clients/afriven.png";
import mrembo from "../../public/images/mrembo-logo.png";
import ContactCTA from "@/components/contact-card";
import Link from "next/link";
import codeImage from "../../public/images/seo-banner.jpg";

export default function Home() {
  return (
    <main>
      <Hero />

      <section className="p-8">
        <div className="w-full md:rounded-lg md:px-32">
          <p className="font-bold mb-4 text-neutral-900 text-base text-center">
            We&apos;ve worked with some amazing people
          </p>
          <div className="grid grid-cols-2 md:flex justify-between overflow-scroll gap-3">
            <Image src={linus} alt="client" className="w-auto h-32" />
            <Image src={tattoos} alt="client" className="w-auto h-32" />
            <Image src={afriven} alt="client" className="w-auto h-32" />
            <Image src={footprint} alt="client" className="w-auto h-32" />
            <Image src={oluadepe} alt="client" className="w-auto h-32" />
            <Image src={mrembo} alt="client" className="w-auto h-32" />
          </div>
        </div>
      </section>

      {/* <div className="px-8 md:px-16">
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
      </div> */}

      {/* Services */}
      <section className="px-8 md:px-16 py-16 bg-gray-100" id="services">
        <div className="max-w-2xl">
          <h3 className="font-bold mb-4 text-neutral-900 text-base">
            Services
          </h3>
          <p className="text-4xl md:text-5xl mb-4 text-neutral-900 font-extrabold">
            Make a strong online presence
          </p>
          <p className="text-neutral-500 text-lg">
            We are convinced that having an online presence based on a
            comprehensive digital strategy has the ability to address actual
            business problems. However, not just any strategy will suffice. The
            perfect combination of user experience, functionality, content, and
            design can significantly enhance how you showcase yourself to the
            global audience.
          </p>
        </div>
        <div className="flex flex-col md:flex-row py-16 md:px-8 justify-between gap-4">
          <ClippedImage image={codeImage} />

          <div className="max-w-xl">
            <div className="mb-8 md:mb-16">
              <h2 className="text-neutral-700 font-bold">Web development</h2>
              <p className="text-gray-500">
                We specialize in crafting beautiful, high quality, custom
                designed websites, E-Commerce stores and custom Web
                Applications/systems, any web based tool that you feel your
                business needs to excel we can develop it for you.
              </p>
              <Link
                href="/web-development"
                className="text-sm font-semibold leading-6 text-gray-900 hover:underline"
              >
                Learn more <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
            <div className="mb-8 md:mb-16">
              <h2 className="text-neutral-700 font-bold">
                Mobile Application development
              </h2>
              <p className="text-gray-500">
                At Aptus we excel in developing mobile applications that engage
                users and generate valuable leads for growth-oriented
                businesses.
              </p>
            </div>
            <div className="mb-8 md:mb-16">
              <h2 className="text-neutral-700 font-bold">E-commerce</h2>
              <p className="text-gray-500">
                We are at the forefront of modern e-commerce development. With
                our focus on modern design, data-driven and scalable store
                fronts ready for conversion
              </p>
            </div>
            <div className="mb-8 md:mb-8">
              <h2 className="text-neutral-700 font-bold">Digital Marketing</h2>
              <p className="text-gray-500">
                From pay-per-click ads and search engine optimization to social
                media content and marketing. We do it all at a very professional
                level.
              </p>
              <Link
                href="/digital-marketing"
                className="text-sm font-semibold leading-6 text-gray-900 hover:underline"
              >
                Learn more <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-8 md:px-16 py-16 md:py-32" id="about">
        <div className="m-auto max-w-3xl">
          <p className="text-neutral-900 text-2xl">
            Aptus Agency, we craft conversion-focused websites, drive e-commerce
            revenue through expert PPC & SEO services. Our in-house team builds
            high-performing websites & e-commerce stores, optimizes search
            ranking, & manages targeted ads, all with proven results for B2B &
            B2C firms. From startups to established brands, our expertise &
            experience across all digital marketing disciplines helps businesses
            attract the right audience, increase leads, & grow revenue – no
            matter the budget.
          </p>
        </div>
      </section>

      <div className="flex justify-center">
        <figure className="relative bg-white p-6">
          <svg
            aria-hidden="true"
            width="105"
            height="78"
            className="absolute left-6 top-6 fill-slate-100"
          >
            <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z"></path>
          </svg>
          <blockquote className="relative">
            <p className="text-lg tracking-tight text-slate-900">
              We Are Helping To Lead The Digital Charge; We Can Help You Build
              On Your Past Successes And Prepare For Your Great Future.
            </p>
          </blockquote>
          <figcaption className="relative mt-4 flex items-center justify-between border-t border-slate-100 pt-6">
            <div>
              <div className="font-display text-base text-slate-900">
                Champe Triumph, Founder
              </div>
            </div>
            <div className="overflow-hidden rounded-full bg-slate-50"></div>
          </figcaption>
        </figure>
      </div>

      <ContactCTA />
    </main>
  );
}
