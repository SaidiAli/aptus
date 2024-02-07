import ClippedImage from "@/components/ClippedImage";
import ContactCTA from "@/components/contact-card";

export default function WebDevelopmentPage() {
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
        <ClippedImage />
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
