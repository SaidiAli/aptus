"use client";

import ClippedImage from "@/components/ClippedImage";
import ContactCTA from "@/components/contact-card";
import mrembo from "../../../public/images/mrembo-home.png";
import Image from "next/image";
import {
  ArrowRightEndOnRectangleIcon,
  ArrowRightIcon,
  ArrowTopRightOnSquareIcon,
  ArrowUpRightIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";
import Link from "next/link";
import image from "../../../public/images/9.jpg";

export default function WebDevelopmentPage() {
  // const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <div className="w-full px-8 md:px-16 py-32 md:py-44 bg-gray-100">
        <div className="max-w-2xl">
          <h2 className="text-black text-sm mb-2">Website Development</h2>
          <p className="text-black text-3xl md:text-5xl font-bold mb-2">
            We provide the best web development services inline with your exact
            needs
          </p>
          <p className="text-black">
            We Build Beautiful, Results-Driven Websites That Increase Visibility
            And Win Opportunities For Our Clients.
          </p>
        </div>
      </div>
      <div className="px-8 md:px-16 md:flex gap-8 mt-8">
        <ClippedImage image={image} />
        <div className="text-neutral-700 flex flex-col gap-8 max-w-xl mt-12">
          <p>
            Our team of experienced designers and developers work closely with
            you to bring your vision to life, delivering custom-designed
            websites that are not only beautiful but also functional and
            user-friendly.
          </p>
          <p>
            Whether you need a simple brochure website or a complex e-commerce
            platform, we have the expertise to deliver a web solution that meets
            your specific needs and exceeds your expectations.
          </p>
          <p>
            With our web design and development services, you can expect a
            website that effectively showcases your brand and helps you achieve
            your online goals.
          </p>
        </div>
      </div>

      <div
        className="mx-auto max-w-7xl px-8 md:px-16 mt-24 py-8
      "
      >
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div>
            <ul
              role="list"
              className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3"
            >
              <li className="text-base text-neutral-600 before:bg-neutral-950 after:bg-neutral-100">
                <div>
                  <div className="pl-8 relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px">
                    <strong className="font-semibold text-neutral-950">
                      Modern Design.
                    </strong>{" "}
                    Successful websites require both an optimized design and a
                    user experience that is easy to use.
                  </div>
                </div>
              </li>
              <li className="text-base text-neutral-600 before:bg-neutral-950 after:bg-neutral-100">
                <div>
                  <div className="pl-8 relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px">
                    <strong className="font-semibold text-neutral-950">
                      Domain & Email.
                    </strong>{" "}
                    Using generic free email addresses is acceptable for
                    personal use, but having a business email that matches your
                    domain adds a higher level of professionalism.
                  </div>
                </div>
              </li>
              <li className="text-base text-neutral-600 before:bg-neutral-950 after:bg-neutral-100">
                <div>
                  <div className="pl-8 relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px">
                    <strong className="font-semibold text-neutral-950">
                      Search Engine Optimization.
                    </strong>{" "}
                    Our team ensures that all content is optimized for search
                    engines, which enhances your online presence on Google and
                    drives more traffic to your website.
                  </div>
                </div>
              </li>
              <li className="text-base text-neutral-600 before:bg-neutral-950 after:bg-neutral-100">
                <div>
                  <div className="pl-8 relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px">
                    <strong className="font-semibold text-neutral-950">
                      Conversion Focus.
                    </strong>{" "}
                    Our designers have a deep understanding of the best
                    practices for conversion optimization. They know how to
                    capture attention, generate interest, and ultimately drive
                    action, which is our ultimate objective.
                  </div>
                </div>
              </li>
              <li className="text-base text-neutral-600 before:bg-neutral-950 after:bg-neutral-100">
                <div>
                  <div className="pl-8 relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px">
                    <strong className="font-semibold text-neutral-950">
                      Solid Security.
                    </strong>{" "}
                    All data transfers are protected by SSL and 256-bit
                    encryption, ensuring the security of your visitors and
                    enhancing your Google ranking
                  </div>
                </div>
              </li>
              <li className="text-base text-neutral-600 before:bg-neutral-950 after:bg-neutral-100">
                <div>
                  <div className="pl-8 relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px">
                    <strong className="font-semibold text-neutral-950">
                      Maintenance & Updates.
                    </strong>{" "}
                    Once your site is live, we will handle the editing for you.
                    The frequency of these edits will vary depending on the plan
                    you select.
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <section className="w-full bg-[#64c4b5] px-8 md:px-16 py-16 md:py-32">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-8">E-Commerce</h2>
            <p className="mb-4 text-sm">
              We are at the forefront of modern e-commerce development. With our
              focus on modern design, data-driven and scalable store fronts
              ready for conversion
            </p>
            <p className="mb-4 font-bold">What we do</p>

            <h2 className="font-bold">
              <ArrowRightIcon className="w-auto h-6 inline" />
              E-commerce Development Services
            </h2>
            <p className="mb-4 text-sm">
              We offer services for planning, designing, developing, and
              migrating platforms to help you expand your business and provide a
              unique brand experience that delights your customers.
            </p>
            <h2 className="font-bold">
              <ArrowRightIcon className="w-auto h-6 inline" />
              E-Commerce Managed Services
            </h2>
            <p className="text-sm">
              Ongoing support to manage, maintain, optimize, and support your
              online store and digital infrastructure, so you can focus on
              growing your business.
            </p>
          </div>
          <div>
            <p className="text-2xl font-bold mb-4 md:mb-8">Case Study</p>
            <p className="mb-4">
              Mrembo mart approached Aptus and needed a robust, easy to use and
              beautifully designed with a modern UI online store and we
              delivered.
            </p>
            <div
              className="relative isolate max-w-[45rem]"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Image
                src={mrembo}
                alt={"mrembo mart"}
                className="rounded-md w-auto"
              />
              <Link
                href={"https://mrembomart.com"}
                className={`absolute w-full inset-0 ${
                  isHovered ? "block" : "md:hidden"
                }`}
                target="black"
              >
                <div className="flex justify-center bg-[#00000080] items-center w-full h-full">
                  <p>Visit</p>
                  <ArrowTopRightOnSquareIcon className="w-auto h-4" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
