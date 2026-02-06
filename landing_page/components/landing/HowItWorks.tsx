"use client";

import { Play, Type, Sparkles } from "lucide-react";

const steps = [
  {
    icon: <Type size={24} />,
    title: "1. Enter Task",
    description: "Type what you need to do. e.g. 'Read a book' or 'Debug code'.",
  },
  {
    icon: <Sparkles size={24} />,
    title: "2. Set Timer",
    description: "Choose a duration or let our optional AI suggest one for you.",
  },
  {
    icon: <Play size={24} />,
    title: "3. Focus",
    description: "Start the timer and work until the bell rings. No distractions.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-white dark:bg-zinc-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-5xl font-black text-zinc-900 dark:text-white mb-6 tracking-tight">
              Focus in <br className="hidden lg:block" />
              <span className="text-brand-500">three steps.</span>
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 font-medium mb-8 leading-relaxed">
              Stop multitasking. Start finishing. TaskTimer makes it easy to focus on one thing at a time.
            </p>

            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-6">
                  <div className="shrink-0 relative">
                    <div className="w-12 h-12 rounded-2xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 flex items-center justify-center font-bold relative z-10 shadow-xl">
                      {step.icon}
                    </div>
                    {index !== steps.length - 1 && (
                      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-0.5 h-16 bg-zinc-100 dark:bg-zinc-800" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-zinc-500 dark:text-zinc-400 font-medium">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="md:w-1/2 relative">
            <div className="relative z-10 bg-zinc-50 dark:bg-zinc-900 rounded-[2.5rem] p-8 border border-zinc-100 dark:border-zinc-800 shadow-2xl">
              {/* Saved Note Mockup */}
              <div className="mb-6 p-4 bg-white dark:bg-zinc-950 rounded-2xl border border-zinc-200 dark:border-zinc-800 opacity-60 scale-95 origin-bottom">
                <p className="text-xs font-bold text-zinc-400 mb-2 uppercase tracking-wide">Last Session</p>
                <div className="flex justify-between items-center">
                  <p className="text-zinc-800 dark:text-zinc-200 font-medium text-sm">
                    Study Physics
                  </p>
                  <span className="text-brand-500 font-bold">45m ✅</span>
                </div>
              </div>

              {/* Query & Result Mockup */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-white dark:bg-zinc-950 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
                  <Type size={16} className="text-brand-500" />
                  <p className="text-zinc-800 dark:text-zinc-200 font-medium text-sm">"Write Blog Post"</p>
                </div>

                <div className="p-5 bg-brand-50 dark:bg-brand-900/20 rounded-2xl border border-brand-200 dark:border-brand-800/50">
                  <p className="text-zinc-800 dark:text-zinc-200 font-medium leading-relaxed mb-2">
                    AI Suggestion:
                  </p>
                  <div className="flex items-center gap-2">
                     <span className="bg-brand-200 dark:bg-brand-800 px-3 py-1 rounded-lg font-bold text-brand-900 dark:text-brand-100">30 minutes</span>
                     <span className="text-sm text-zinc-500">Great for a first draft sprint.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-500/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-500/20 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
