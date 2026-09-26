import React from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { SquarePen, Image as ImageIcon, Eraser } from "lucide-react";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="px-4 sm:px-20 xl:px-32 pt-32 pb-20 w-full min-h-screen flex items-center bg-[url(/gradientBackground.png)] bg-cover bg-no-repeat">
      <div className="grid lg:grid-cols-[1.1fr_1fr] gap-16 items-center max-w-6xl mx-auto w-full">
       
        <div>
          <h1 className="font-display font-semibold tracking-tight text-4xl sm:text-5xl xl:text-[3.4rem] leading-[1.1] text-ink">
            Every AI tool your content needs, in one place.
          </h1>
          <p className="mt-5 max-w-md text-gray-600 text-base sm:text-lg">
            Write articles, generate images, and polish your work without
            switching between five different apps. QuickAI brings your whole
            creative process into one workspace.
          </p>

          <div className="flex flex-wrap items-center gap-6 mt-8">
            <button
              onClick={() => navigate("/ai")}
              className="bg-primary text-white px-8 py-3 rounded-lg font-medium hover:opacity-90 active:scale-95 transition cursor-pointer"
            >
              Start creating
            </button>
          </div>

          <div className="flex items-center gap-3 mt-12 text-sm text-gray-500">
            <img src={assets.user_group} alt="" className="h-8" />
            Trusted by 10,000+ creators
          </div>
        </div>

       
        <div className="relative hidden sm:block">
          <div className="absolute -top-6 -right-4 w-32 rotate-6 rounded-xl overflow-hidden shadow-lg border border-white/60">
            <div className="h-20 bg-gradient-to-br from-[#5044E5] to-[#B794F6]" />
            <div className="bg-white text-[11px] px-2 py-1.5 text-gray-500">
              Generated image
            </div>
          </div>

          <div className="relative -rotate-2 bg-white rounded-2xl shadow-xl border border-gray-100 p-6 max-w-sm">
            <div className="flex items-center gap-2 text-xs font-medium text-primary bg-primary/10 w-fit px-2.5 py-1 rounded-full">
              <SquarePen className="w-3.5 h-3.5" />
              Article draft
            </div>

            <h3 className="mt-4 font-medium text-ink">
              5 marketing trends worth watching in 2026
            </h3>

            <div className="mt-4 space-y-2.5">
              <div className="h-2.5 bg-gray-100 rounded-full w-full" />
              <div className="h-2.5 bg-gray-100 rounded-full w-5/6" />
              <span className="inline-block text-xs text-ink bg-highlight px-2 py-1 rounded">
                AI suggests leading with this stat
              </span>
              <div className="h-2.5 bg-gray-100 rounded-full w-4/6" />
              <div className="h-2.5 bg-gray-100 rounded-full w-3/6 relative">
                <span className="absolute -right-0.5 top-0 h-2.5 w-0.5 bg-ink animate-pulse" />
              </div>
            </div>

            <div className="flex items-center justify-between mt-5 pt-4 border-t border-gray-100 text-xs text-gray-400">
              <span>Generated in 12s</span>
              <div className="flex items-center gap-2">
                <ImageIcon className="w-3.5 h-3.5" />
                <Eraser className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;