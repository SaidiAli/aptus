import { Button } from "./ui/button";
import { Input } from "./ui/input";
import Image from "next/image";
import logo from "../../public/images/logo-black.png";

export default function Footer() {
  return (
    <div className="px-8 md:px-32 py-8 text-neutral-400">
      <div className="hidden md:flex justify-between gap-32 mb-8">
        <div className="flex justify-between w-[60%]">
          <div>
            <p className="text-neutral-600 font-bold mb-3">Work</p>
            <ul>
              <li>Mrembo Mart</li>
              <li>Afriven</li>
              <li>Footprint Experiences</li>
            </ul>
          </div>
          <div>
            <p className="text-neutral-600 font-bold mb-3">Company</p>
            <ul>
              <li>About</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <p className="text-neutral-600 font-bold mb-3">Connect</p>
            <ul>
              <li>X (Twitter)</li>
              <li>Instagram</li>
              <li>LinkedIn</li>
            </ul>
          </div>
        </div>
        <div className="">
          <p className="text-neutral-600 font-bold mb-3">
            Sign Up to our newsletter
          </p>
          <p className="mb-3">
            Subscribe to get the latest design news, articles, resources and
            inspiration.
          </p>
          <form action="">
            <div className="flex w-full max-w-sm items-center space-x-2">
              <Input type="email" placeholder="Email" className="bg-white" />
              <Button
                type="submit"
                variant="default"
                className="bg-black text-white"
              >
                Subscribe
              </Button>
            </div>
          </form>
        </div>
      </div>
      <div className="flex justify-between items-center border-t border-neutral-200 pt-4">
        <Image src={logo} alt={"logo"} className="w-auto h-8" />
        <p className="text-xs">@Aptus Agency Inc. 2024</p>
      </div>
    </div>
  );
}
