"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

const FAQS = [
  {
    question: "Do I need to create an account?",
    answer: "No. TaskTimer works instantly without any signup."
  },
  {
    question: "Is my data private?",
    answer: "Yes. We don't collect your tasks. Everything happens on your device."
  },
  {
    question: "How do the AI suggestions work?",
    answer: "Our optional AI analyzes the task name to suggest a productive time block based on common practices (e.g., 'Study' might get 45m, 'Check email' might get 15m)."
  },
  {
    question: "Can I set my own time?",
    answer: "Absolutely. You can manually enter any duration you like."
  },
  {
    question: "Is it free?",
    answer: "Yes, TaskTimer is free to use."
  }
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 bg-white dark:bg-zinc-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-zinc-900 dark:text-white mb-6 tracking-tight">
            Frequently Asked <span className="text-brand-500">Questions</span>
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 font-medium font-sans">
            Everything you need to know about TaskTimer.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {FAQS.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="border border-zinc-200 dark:border-zinc-800 rounded-2xl px-6 bg-zinc-50/50 dark:bg-zinc-900/10 overflow-hidden"
                >
                  <AccordionTrigger className="hover:no-underline py-6 text-lg font-bold text-zinc-900 dark:text-white text-left tracking-tight">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-zinc-600 dark:text-zinc-400 text-md font-medium leading-relaxed pb-6 font-sans">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
