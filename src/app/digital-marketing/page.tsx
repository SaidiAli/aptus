import ClippedImage from "@/components/ClippedImage";
import ContactCTA from "@/components/contact-card";
import { CheckCircleIcon } from "@heroicons/react/16/solid";
import image from "../../../public/images/8.jpg";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital marketing",
};

export default function WebDevelopmentPage() {
  return (
    <>
      <div className="w-full px-8 md:px-16 py-32 md:py-44 bg-gray-100">
        <div className="max-w-2xl">
          <h1 className="text-black text-sm mb-2">Digital Marketing</h1>
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
            <h2 className="">
              <CheckCircleIcon className="inline w-auto h-6" /> Digital Media
              Campaign Development
            </h2>
            <h2 className="">
              <CheckCircleIcon className="inline w-auto h-6" /> Internet
              marketing
            </h2>
            <h2 className="">
              <CheckCircleIcon className="inline w-auto h-6" /> Social Media Management
            </h2>
            <h2 className="">
              <CheckCircleIcon className="inline w-auto h-6" /> Web traffic
              generation
            </h2>
            <h2 className="">
              <CheckCircleIcon className="inline w-auto h-6" /> Google Display
              Ads
            </h2>
            <h2 className="">
              <CheckCircleIcon className="inline w-auto h-6" /> Youtube Ads
            </h2>
            <h2 className="">
              <CheckCircleIcon className="inline w-auto h-6" /> Google Search
              Ads
            </h2>
            <h2 className="">
              <CheckCircleIcon className="inline w-auto h-6" /> Bing Ads
            </h2>
            <h2 className="">
              <CheckCircleIcon className="inline w-auto h-6" /> Bing Remarketing
              Ads
            </h2>
            <h2 className="">
              <CheckCircleIcon className="inline w-auto h-6" /> Contextual
              Advertising
            </h2>
            <h2 className="">
              <CheckCircleIcon className="inline w-auto h-6" /> Media Audit and
              Media Planning
            </h2>
            <h2 className="">
              <CheckCircleIcon className="inline w-auto h-6" /> Analytics and
              Reporting
            </h2>
          </div>
        </div>
        <ClippedImage image={image} />
      </div>

      <div className="mx-auto max-w-7xl px-8 md:px-16 mt-24">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <p className="text-black mb-8">
            Here&apos;s why Aptus is the perfect fit for your growth-minded
            business.
          </p>
          <div>
            <ul
              role="list"
              className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3"
            >
              <li className="text-base text-neutral-600 before:bg-neutral-950 after:bg-neutral-100">
                <div>
                  <div className="pl-8 relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px">
                    <strong className="font-semibold text-neutral-950">
                      Demonstrated History of Success.
                    </strong>{" "}
                    As an industry-leading marketing agency, that offers
                    cost-effective services, we are skilled in executing
                    effective campaigns. Our expertise lies in creating paid
                    advertising campaigns that drive growth for our
                    clients&apos; businesses.
                  </div>
                </div>
              </li>
              <li className="text-base text-neutral-600 before:bg-neutral-950 after:bg-neutral-100">
                <div>
                  <div className="pl-8 relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px">
                    <strong className="font-semibold text-neutral-950">
                      Conversion Driven Strategy.
                    </strong>{" "}
                    We run campaigns that are focused on driving relevant
                    traffic that converts into new sales. We are more than
                    capable to ensure your business growth with our proven
                    strategies.
                  </div>
                </div>
              </li>
              <li className="text-base text-neutral-600 before:bg-neutral-950 after:bg-neutral-100">
                <div>
                  <div className="pl-8 relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px">
                    <strong className="font-semibold text-neutral-950">
                      Ad and Landing page performance.
                    </strong>{" "}
                    Aptus&apos;s full-time, in-house team of marketing
                    specialists is familiar with every aspect of maximizing the
                    performance of your ads and landing pages.
                  </div>
                </div>
              </li>
              <li className="text-base text-neutral-600 before:bg-neutral-950 after:bg-neutral-100">
                <div>
                  <div className="pl-8 relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px">
                    <strong className="font-semibold text-neutral-950">
                      AI & New Technology.
                    </strong>{" "}
                    At Aptus, we leverage the latest and most effective
                    tools/technology on the market to get the job done. This
                    includes tracking tools, analytics and reporting tools.
                  </div>
                </div>
              </li>
              <li className="text-base text-neutral-600 before:bg-neutral-950 after:bg-neutral-100">
                <div>
                  <div className="pl-8 relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px">
                    <strong className="font-semibold text-neutral-950">
                      All round.
                    </strong>{" "}
                    We use all digital channels to reach your customer and make
                    that sale. This includes, but not limited to Social media,
                    Email marketing, SEO, influencer marketing, Pay-per-click
                    (Google ads) and much more.
                  </div>
                </div>
              </li>
              <li className="text-base text-neutral-600 before:bg-neutral-950 after:bg-neutral-100">
                <div>
                  <div className="pl-8 relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px">
                    <strong className="font-semibold text-neutral-950">
                      Analytic & Reporting.
                    </strong>{" "}
                    Efficient marketing is a game of numbers. We collect the
                    data, process it and report back to you giving insight in
                    what is working and whats not. This way, you know exactly
                    how your marketing budget is being spent.
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
