import React from "react";
import {
  BoltIcon,
  DevicePhoneMobileIcon,
  GlobeAltIcon,
  ScaleIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "24/7 Communication & Support",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: GlobeAltIcon,
  },
  {
    name: "Transparency",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: ScaleIcon,
  },
  {
    name: "Quick & Easy Process",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: BoltIcon,
  },
  {
    name: "Fully Responsive Development",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: DevicePhoneMobileIcon,
  },
];
function WhyUs() {
  return (
    <div>
      <div className="bg-white py-10 sm:py-32 lg:py-30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="sm:text-center">
            <h2 className="text-2xl font-semibold leading-8 text-orange-500">
              Why Choose Me?
            </h2>
            <p className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              I'm your One & Only Developer ;)
            </p>
            <p className="mx-auto mt-6 mb-10 max-w-2xl text-md leading-8 text-gray-600">
              We don't just Develop Websites, We Develop Businesses.
              <br></br>Your website is the window of your business. Keep it
              fresh, keep it exciting.
            </p>
          </div>

          <div className="mt-5 max-w-lg sm:mx-auto md:max-w-none">
            <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
              {features.map((feature) => (
                <div
                  key={feature.name}
                  className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500 text-white sm:shrink-0">
                    <feature.icon className="h-8 w-8" aria-hidden="true" />
                  </div>
                  <div className="sm:min-w-0 sm:flex-1">
                    <p className="text-lg font-semibold leading-8 text-gray-900 text-left">
                      {feature.name}
                    </p>
                    <p className="mt-2 text-base leading-7 text-gray-600 text-left">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyUs;
