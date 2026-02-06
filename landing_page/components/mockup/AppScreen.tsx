import { Copy } from "lucide-react";
import Image from "next/image";

export function AppScreen() {
  return (
    <div className="flex flex-col h-full bg-zinc-50 dark:bg-black font-sans">
      {/* Status Bar Placeholder */}
      <div className="h-12 w-full bg-transparent shrink-0" />

      {/* AppBar */}
      <div className="px-4 py-3 flex items-center justify-between mb-4 border-b border-zinc-200/50 dark:border-zinc-800/50">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 relative overflow-hidden rounded">
            <Image src="/app_logo.svg" alt="TaskTimer" fill className="object-cover" />
          </div>
          <h1 className="text-lg font-bold text-zinc-900 dark:text-white tracking-tight">TaskTimer</h1>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 px-4 overflow-y-auto pb-20 scrollbar-hide">
        {/* Input Area */}
        <div className="mb-6">
          <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-400 dark:text-zinc-500 mb-2 block">
            Current Task
          </label>
          <div className="p-4 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm">
            <p className="text-sm font-bold text-zinc-900 dark:text-white leading-relaxed">
              Finish Project Report
            </p>
          </div>
        </div>

        {/* Output Section */}
        <div className="space-y-4">
          <div className="p-8 rounded-full bg-linear-to-br from-brand-500/10 to-teal-500/10 border-4 border-brand-200 dark:border-brand-800/50 shadow-sm relative group flex items-center justify-center aspect-square max-w-[200px] mx-auto">
            <div className="text-center">
               <span className="text-4xl font-black text-zinc-900 dark:text-white block font-mono">24:59</span>
               <span className="text-[10px] font-bold text-brand-600 dark:text-brand-400 uppercase tracking-wide mt-1 block">
                Focusing
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
