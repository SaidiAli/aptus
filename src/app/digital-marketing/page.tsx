import ClippedImage from "@/components/ClippedImage";
import ContactCTA from "@/components/contact-card";
import { CheckCircleIcon } from "@heroicons/react/16/solid";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import { CheckCircle } from "lucide-react";

export default function WebDevelopmentPage() {
  return (
    <>
      <div className="w-full px-8 md:px-16 py-32 md:py-44 bg-gray-100">
        <div className="max-w-2xl">
          <h2 className="text-black text-sm mb-2">Digital Marketing</h2>
          <p className="text-black text-3xl md:text-5xl font-bold mb-2">
            We craft marketing strategies that drive sales and increase revenue
          </p>
          <p className="text-black">
            Elevate your online presence using our battle-tested marketing
            strategies using Google Ads, Bing Ads and Remarketing, which
            efficiently generate fresh business leads and boosts sales.
          </p>
        </div>
      </div>
      <div className="px-8 md:px-16 flex flex-col md:flex-row gap-8 mt-8">
        <div className="text-neutral-700 flex flex-col gap-8 max-w-xl mt-12 order-last md:order-first">
          <p>
            Want to drive targeted traffic to your website and get the most out
            of your paid ads? Aptus has a dedicated team of PPC specialists that
            help you run Google Ads, Bing Ads and Remarketing Ads to maximize
            your ROI through expertly executed campaigns. With our proven
            strategies and experience, we can help you reach your target
            audience effectively and efficiently.
          </p>
          <p>
            Say goodbye to ineffective marketing campaigns and wasted ad spend.
            We use data-driven solutions to make sure you hit your marketing
            objectives every month.
          </p>
          <div>
            <p>What we do!</p>
            <h3 className="">
              <CheckCircleIcon className="inline w-auto h-6" /> Digital Media
              Campaign Development
            </h3>
            <h3 className="">
              <CheckCircleIcon className="inline w-auto h-6" /> Internet
              marketing
            </h3>
            <h3 className="">
              <CheckCircleIcon className="inline w-auto h-6" /> Web traffic
              generation
            </h3>
            <h3 className="">
              <CheckCircleIcon className="inline w-auto h-6" /> Google Display
              Ads
            </h3>
            <h3 className="">
              <CheckCircleIcon className="inline w-auto h-6" /> Youtube Ads
            </h3>
            <h3 className="">
              <CheckCircleIcon className="inline w-auto h-6" /> Google Search
              Ads
            </h3>
            <h3 className="">
              <CheckCircleIcon className="inline w-auto h-6" /> Bing Ads
            </h3>
            <h3 className="">
              <CheckCircleIcon className="inline w-auto h-6" /> Bing Remarketing
              Ads
            </h3>
            <h3 className="">
              <CheckCircleIcon className="inline w-auto h-6" /> Contextual
              Advertising
            </h3>
            <h3 className="">
              <CheckCircleIcon className="inline w-auto h-6" /> Media Audit and
              Media Planning
            </h3>
            <h3 className="">
              <CheckCircleIcon className="inline w-auto h-6" /> Analytics and
              Reporting
            </h3>
          </div>
        </div>
        <ClippedImage />
      </div>

      <div className="mx-auto max-w-7xl px-8 md:px-16 mt-24">
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
                      Meticulous.
                    </strong>{" "}
                    The first part of any partnership is getting our designer to
                    put your logo in our template. The second step is getting
                    them to do the colors.
                  </div>
                </div>
              </li>
              <li className="text-base text-neutral-600 before:bg-neutral-950 after:bg-neutral-100">
                <div>
                  <div className="pl-8 relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px">
                    <strong className="font-semibold text-neutral-950">
                      Efficient.
                    </strong>{" "}
                    We pride ourselves on never missing a deadline which is easy
                    because most of the work was done years ago.
                  </div>
                </div>
              </li>
              <li className="text-base text-neutral-600 before:bg-neutral-950 after:bg-neutral-100">
                <div>
                  <div className="pl-8 relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px">
                    <strong className="font-semibold text-neutral-950">
                      Adaptable.
                    </strong>{" "}
                    Every business has unique needs and our greatest challenge
                    is shoe-horning those needs into something we already built.
                  </div>
                </div>
              </li>
              <li className="text-base text-neutral-600 before:bg-neutral-950 after:bg-neutral-100">
                <div>
                  <div className="pl-8 relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px">
                    <strong className="font-semibold text-neutral-950">
                      Honest.
                    </strong>{" "}
                    We are transparent about all of our processes, banking on
                    the simple fact our clients never actually read anything.
                  </div>
                </div>
              </li>
              <li className="text-base text-neutral-600 before:bg-neutral-950 after:bg-neutral-100">
                <div>
                  <div className="pl-8 relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px">
                    <strong className="font-semibold text-neutral-950">
                      Loyal.
                    </strong>{" "}
                    We foster long-term relationships with our clients that go
                    beyond just delivering a product, allowing us to invoice
                    them for decades.
                  </div>
                </div>
              </li>
              <li className="text-base text-neutral-600 before:bg-neutral-950 after:bg-neutral-100">
                <div>
                  <div className="pl-8 relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px">
                    <strong className="font-semibold text-neutral-950">
                      Innovative.
                    </strong>{" "}
                    The technological landscape is always evolving and so are
                    we. We are constantly on the lookout for new open source
                    projects to clone.
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <ContactCTA />
    </>
  );
}
