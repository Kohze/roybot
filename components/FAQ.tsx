'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'Why choose RoyBot.AI?',
    answer: 'RoyBot.AI offers an advanced platform designed for M&A customers. Its AI-powered system manages successful business sales with unprecedented accuracy and efficiency.',
  },
  {
    question: 'How do I get started?',
    answer: 'Sign up for a RoyBot.AI account. Once you sign up through the onboarding process and tell us about the business you want to sell or acquire, we will guide you through the platform.',
  },
  {
    question: 'Is my data secure?',
    answer: 'Yes, we implement enterprise-grade security measures to protect your data. All information is encrypted and stored in secure, compliant facilities.',
  },
];

export default function FAQ() {
  return (
    <div className="bg-white dark:bg-gray-900 py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4">Join the M&A Revolution</h2>
        <p className="text-gray-600 dark:text-gray-400 text-center mb-12">
          Get answers to commonly asked questions about RoyBot.AI
        </p>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}