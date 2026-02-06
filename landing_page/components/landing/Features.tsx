"use client";

import { Brain, Zap, Shield, CheckCircle, Clock, Eye } from "lucide-react";

const features = [
  {
    icon: <Zap size={24} />,
    title: "Quick Entry",
    description: "Just type your task and go. No complex setup or categories required.",
  },
  {
    icon: <Brain size={24} />,
    title: "Smart Suggestions",
    description: "Optional AI suggests optimal timer durations based on your task name.",
  },
  {
    icon: <Eye size={24} />,
    title: "Focus First",
    description: "Minimalist interface designed to keep you in the zone and distraction-free.",
  },
  {
    icon: <Shield size={24} />,
    title: "Privacy First",
    description: "No sensitive data processing. Your tasks stay on your device.",
  },
  {
    icon: <Clock size={24} />,
    title: "Custom Timers",
    description: "Manually set timers for any duration you need.",
  },
  {
    icon: <CheckCircle size={24} />,
    title: "Proven Effective",
    description: "Based on time-blocking principles to help you finish tasks.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-zinc-900 dark:text-white mb-6 tracking-tight">
            One task. <span className="text-brand-500">Done.</span>
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 font-medium">
            TaskTimer is built on the core principle: One task, one timer, minimal friction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-3xl bg-white dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800 hover:border-brand-200 dark:hover:border-brand-900/50 transition-colors group"
            >
              <div className="w-12 h-12 rounded-2xl bg-brand-50 dark:bg-zinc-900 flex items-center justify-center text-brand-600 dark:text-brand-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-zinc-500 dark:text-zinc-400 font-medium leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
