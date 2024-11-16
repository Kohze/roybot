import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function CTA() {
  return (
    <div className="bg-black py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-6xl font-bold text-white mb-8">Let's Talk</h2>
        <Link href="/dashboard">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8">
            Get Started
          </Button>
        </Link>
      </div>
    </div>
  );
}