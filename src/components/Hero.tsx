"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <div className="bg-white">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative right-[calc(50%-21rem)] aspect-[1155/678] w-[56.125rem] -translate-x-1/2 rotate-[60deg] bg-gradient-to-tr from-[#64c4b5] to-[#64c4b5] opacity-40 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <h1 className="px-3 py-1 text-sm text-gray-600">
              Aptus Marketing Agency
            </h1>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Growth focussed creative digital agency
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We are a full-service creative digital agency working at the
              intersection of marketing and development. Our process involves
              Strategy, Design, Development and Marketing.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="#contact"
                className="rounded-md bg-[#64c4b5] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#64c4b5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#64c4b5]"
              >
                Get started
              </Link>
              <Link
                href="#services"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
