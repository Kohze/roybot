'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block">
              <div className="mb-6 inline-flex items-center rounded-full bg-blue-600 px-4 py-1.5">
                <span className="text-sm font-medium text-white">
                  We appreciate your trust greatly!
                </span>
              </div>
            </div>
            <h1 className="text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
              AI-Powered Business{' '}
              <span className="block">Acquisitions</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-xl">
              AI-Powered Business Acquisitions leverages artificial intelligence to 
              streamline and optimize the process of identifying, evaluating, and 
              acquiring businesses, enabling faster, data-driven decision making. With 
              advanced analytics, AI uncovers growth opportunities and aligns strategic 
              investments for seamless integrations.
            </p>
            <div className="flex gap-4">
              <Link href="/dashboard">
                <Button size="lg" className="rounded-full px-8">
                  Let&apos;s Get Started
                  <svg
                    className="ml-2 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="rounded-full px-8">
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative lg:h-[600px]">
            <div className="relative z-10 bg-white dark:bg-gray-800 rounded-lg shadow-xl">
              <Image
                src="/dashboard-preview.png"
                alt="RoyBot Dashboard Preview"
                width={800}
                height={600}
                className="rounded-lg"
                priority
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
}