
import { Heart, Briefcase, Twitter, Globe, Users } from "lucide-react";
import Toggle from "../ui/toggle";
import TestimonialCard from "./ui/testimonial-card";
const toggleProps = [
  {
    label: (
      <span className="flex items-center gap-1">
        <Briefcase className="w-4 h-4" />
        Business
      </span>
    ),
    selected: true,
  },
  {
    label: (
      <span className="flex items-center gap-1">
        <Twitter className="w-4 h-4" />
        Twitter
      </span>
    ),
    selected: false,
  },
  {
    label: (
      <span className="flex items-center gap-1">
        <Globe className="w-4 h-4" />
        Global
      </span>
    ),
    selected: false,
  },
  {
    label: (
      <span className="flex items-center gap-1">
        <Users className="w-4 h-4" />
        Teams
      </span>
    ),
    selected: false,
  },
];

export default function Testimonial() {
  return (
    <div className="flex flex-col items-center gap-4 min-h-[500px] p-5">
      <div className="text-green-600 flex items-center font-medium gap-2">
        <div className="bg-green-300 rounded-full p-1">
          <Heart className="w-5 h-5 fill-green-600" />
        </div>
        <p className="uppercase text-sm tracking-wide">Testimonial</p>
      </div>

      <h2 className="font-bold text-3xl sm:text-4xl text-center">
        Customers love using Defendia
      </h2>
      <p className="text-base md:text-lg text-black/80 text-center max-w-xl">
        Learn what different types of customers have to say about our service.
      </p>

      <div className="flex gap-2 mt-4"></div>
      <Toggle key={"toggle-button"} labels={toggleProps} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <TestimonialCard></TestimonialCard>
        <TestimonialCard></TestimonialCard>
        <TestimonialCard></TestimonialCard>
      </div>
    </div>
  );
}
