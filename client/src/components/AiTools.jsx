import React from "react";
import { AiToolsData } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";

const AiTools = () => {
  const navigate = useNavigate();
  const { user } = useUser();

  return (
    <div className="px-4 sm:px-20 xl:px-32 py-24">
      <div className="text-center max-w-xl mx-auto">
        <h2 className="font-display font-semibold tracking-tight text-4xl sm:text-5xl text-ink">
          Powerful AI tools
        </h2>
        <p className="mt-4 text-gray-600">
          Everything you need to create, enhance, and optimize your content —
          in one workspace.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-14 max-w-5xl mx-auto">
        {AiToolsData.map((tool, index) => (
          <div
            key={index}
            onClick={() => user && navigate(tool.path)}
            className="p-6 rounded-xl bg-white border border-gray-100
            hover:border-gray-200 hover:shadow-md transition-all duration-300 cursor-pointer"
          >
            <tool.Icon
              className="w-10 h-10 p-2.5 text-white rounded-lg"
              style={{
                background: `linear-gradient(to bottom, ${tool.bg.from}, ${tool.bg.to})`,
              }}
            />
            <h3 className="font-display font-semibold mt-5 mb-2 text-ink">
              {tool.title}
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              {tool.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AiTools;