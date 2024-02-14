import { EnvelopeIcon, PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { PhoneIcon, CalendarDaysIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import Link from "next/link";

export default function ContactCTA() {
  return (
    <div className="md:px-8 md:py-16" id="contact">
      <div className="px-8 md:px-32 pb-16 md:pb-32 pt-16 bg-black md:rounded-lg">
        <div className="mb-12 max-w-xl">
          <h3 className="mb-3 text-3xl md:text-4xl">Let's Work Together</h3>
          <p className="text-xs">
            Whether you have a specific project in mind or are looking for a
            long-term partnership, let us know your goals and we will assist you
            in reaching them.
          </p>
        </div>
        <div className="flex justify-between flex-col md:flex-row">
          <div className="w-full md:w-1/2">
            <div className="mb-4">
              <p className="font-bold">Our Offices</p>
              <p>Kampala, Uganda</p>
            </div>
            <div className="mb-4">
              <p className="font-bold">Email Us</p>
              <div className="flex gap-2">
                <EnvelopeIcon className="w-4" />
                <p>info@aptusagency.com</p>
              </div>
            </div>
            <div className="mb-4">
              <p className="font-bold">Call Us</p>
              <div className="flex gap-2">
                <PhoneIcon className="w-4" />
                <a href="tel:0777343212">0777 343 212 / 0788 300 819</a>
              </div>
            </div>
            <Link
              href={"https://calendly.com/aaptus/schedule"}
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-black h-10 px-4 py-2 mt-3"
            >
              <CalendarDaysIcon className="mr-2 h-4 w-4" /> Book a 30 min call
            </Link>
          </div>
          <form action="" className="w-full md:w-1/2 mt-3 md:mt-0">
            <p className="mb-4 font-bold">Write to Us</p>
            <div className="flex flex-col gap-3">
              <Input type="text" placeholder="Name" />
              <Input type="email" placeholder="Email" />
              <textarea
                placeholder="Message"
                rows={3}
                className={
                  "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50"
                }
              ></textarea>
              <Button>
                <PaperAirplaneIcon className="mr-2 h-4 w-4" /> Send
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
