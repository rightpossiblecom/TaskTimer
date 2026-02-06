"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Search, Save, ArrowRight, Brain, Database, Shield } from "lucide-react";
import { cn } from "@/lib/utils";

export function Hero() {
  const [mode, setMode] = useState<"timer" | "suggest">("timer");
  const [task, setTask] = useState("");
  const [duration, setDuration] = useState("25");
  const [isProcessing, setIsProcessing] = useState(false);
  const [result, setResult] = useState<null | string>(null);

  const handleAction = () => {
    setIsProcessing(true);
    setResult(null);

    setTimeout(() => {
      if (mode === "timer") {
        setResult(`Timer started for ${duration} minutes! ⏱️`);
      } else {
        setResult("Suggested: 25 minutes for 'Study Math' 🧠");
        setTask("");
      }
      setIsProcessing(false);
    }, 1500);
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-white dark:bg-zinc-950">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-500/10 blur-[120px] rounded-full mix-blend-multiply dark:mix-blend-normal" />
        <div className="absolute bottom-[10%] right-[-10%] w-[50%] h-[50%] bg-purple-500/10 blur-[120px] rounded-full mix-blend-multiply dark:mix-blend-normal" />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-950/30 border border-brand-100 dark:border-brand-900/50 mb-6"
          >
            <Sparkles size={14} className="text-brand-600 dark:text-brand-400" />
            <span className="text-xs font-bold text-brand-700 dark:text-brand-300 uppercase tracking-wider">
              Boost Productivity
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-zinc-900 dark:text-white mb-6 tracking-tight leading-[1.1]"
          >
            One task. <br className="hidden md:block" />
            <span className="text-brand-500">One timer.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto font-medium"
          >
            TaskTimer helps you beat procrastination by setting focused timers for your tasks. Simple, distraction-free, and effective.
          </motion.p>
        </div>

        {/* Interactive Demo Widget */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          id="demo"
          className="max-w-3xl mx-auto bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-2xl shadow-brand-500/10 overflow-hidden"
        >
          <div className="flex items-center justify-center p-2 border-b border-zinc-100 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 gap-2">
            <button
              onClick={() => setMode("timer")}
              className={cn(
                "flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold transition-all w-full md:w-auto justify-center",
                mode === "timer"
                  ? "bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white shadow-sm ring-1 ring-zinc-200 dark:ring-zinc-700"
                  : "text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300"
              )}
            >
              <Save size={16} />
              Set Timer
            </button>
            <button
              onClick={() => setMode("suggest")}
              className={cn(
                "flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold transition-all w-full md:w-auto justify-center",
                mode === "suggest"
                  ? "bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white shadow-sm ring-1 ring-zinc-200 dark:ring-zinc-700"
                  : "text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300"
              )}
            >
              <Sparkles size={16} />
              AI Suggest
            </button>
          </div>

          <div className="p-6 md:p-8 min-h-[300px] flex flex-col">
            <div className="flex-1 mb-6">
              <AnimatePresence mode="wait">
                {mode === "timer" ? (
                  <motion.div
                    key="timer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                  >
                    <label className="block text-sm font-bold text-zinc-500 mb-2 uppercase tracking-wide">
                      What are you working on?
                    </label>
                    <input
                      value={task}
                      onChange={(e) => setTask(e.target.value)}
                      placeholder="e.g. Study Math"
                      className="w-full p-4 bg-zinc-50 dark:bg-zinc-950/50 border border-zinc-200 dark:border-zinc-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 text-lg mb-4"
                    />
                    <label className="block text-sm font-bold text-zinc-500 mb-2 uppercase tracking-wide">
                      Duration (minutes)
                    </label>
                    <input
                      type="number"
                      value={duration}
                      onChange={(e) => setDuration(e.target.value)}
                      className="w-full p-4 bg-zinc-50 dark:bg-zinc-950/50 border border-zinc-200 dark:border-zinc-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 text-lg"
                    />
                  </motion.div>
                ) : (
                  <motion.div
                    key="suggest"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <label className="block text-sm font-bold text-zinc-500 mb-2 uppercase tracking-wide">
                      Let AI decide the time
                    </label>
                    <input
                      value={task}
                      onChange={(e) => setTask(e.target.value)}
                      placeholder="e.g. Clean Room"
                      className="w-full p-4 bg-zinc-50 dark:bg-zinc-950/50 border border-zinc-200 dark:border-zinc-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 text-lg"
                    />

                    {result && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-6 p-4 bg-brand-50 dark:bg-brand-900/10 border border-brand-100 dark:border-brand-800/30 rounded-xl"
                      >
                        <div className="flex items-center gap-2 mb-2 text-brand-600 dark:text-brand-400 font-bold text-sm uppercase tracking-wide">
                          <Sparkles size={14} /> Suggestion
                        </div>
                        <p className="whitespace-pre-wrap text-zinc-800 dark:text-zinc-200 font-medium">{result}</p>
                      </motion.div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="flex justify-end">
              <button
                onClick={handleAction}
                disabled={isProcessing || !task}
                className="inline-flex items-center justify-center px-6 py-3 text-base font-bold text-white bg-zinc-900 dark:bg-white dark:text-zinc-900 rounded-xl hover:scale-105 active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
              >
                {isProcessing ? (
                  <span className="animate-pulse">Starting...</span>
                ) : (
                  <>
                    {mode === "timer" ? "Start Timer" : "Get Suggestion"}
                    <ArrowRight size={18} className="ml-2" />
                  </>
                )}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
