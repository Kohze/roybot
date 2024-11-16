'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const dealStrategies = [
  { id: 'share-purchase', label: 'Share Purchase' },
  { id: 'private-placement', label: 'Private Placement' },
  { id: 'debt-financing', label: 'Debt Financing' },
  { id: 'merger', label: 'Merger' },
  { id: 'cash-extraction', label: 'Cash Extraction' },
  { id: 'creditors', label: 'Creditors' },
  { id: 'deferred-strategy', label: 'Deferred Strategy' },
  { id: 'earn-out-strategy', label: 'Earn-Out Strategy' },
  { id: 'asset-purchase', label: 'Asset Purchase' },
  { id: 'buying-company', label: 'Buying Company' },
  { id: 'bibo', label: 'BIBO (Buy In Buy Out)' },
  { id: 'collaborative-growth', label: 'Collaborative Growth Strategy' },
];

export function DealGeneratorView() {
  const [selectedStrategies, setSelectedStrategies] = useState<string[]>([]);
  const [generatedProposal, setGeneratedProposal] = useState<string>('');

  const handleStrategyChange = (strategyId: string) => {
    setSelectedStrategies(prev =>
      prev.includes(strategyId)
        ? prev.filter(id => id !== strategyId)
        : [...prev, strategyId]
    );
  };

  const handleGenerateProposal = () => {
    setGeneratedProposal(`The Earn-Out Strategy:

The earn-out strategy is a popular approach for de-risking an acquisition, providing both flexibility and alignment between the buyer and seller. An earn-out is essentially a flexible deferred consideration, where a portion of the payment for the business is deferred and linked to the future performance of the business. This strategy allows us to bridge the gap between what the seller wants and what we are willing to pay, ensuring that we only pay more if the business performs well. Here's how it works in practice:`);
  };

  const handleClearSelection = () => {
    setSelectedStrategies([]);
    setGeneratedProposal('');
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold">Deal Strategy Proposal Generator</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Select Deal Strategies:
        </p>
      </div>

      <Card className="p-6 relative bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {dealStrategies.map((strategy) => (
            <div
              key={strategy.id}
              className="flex items-center space-x-3 cursor-pointer group select-none"
              onClick={() => handleStrategyChange(strategy.id)}
            >
              <div
                className={cn(
                  "w-5 h-5 border rounded-[4px] flex items-center justify-center transition-colors",
                  selectedStrategies.includes(strategy.id)
                    ? "border-blue-600 bg-blue-600"
                    : "border-gray-300 dark:border-gray-600 group-hover:border-blue-500",
                )}
              >
                {selectedStrategies.includes(strategy.id) && (
                  <svg
                    className="w-3 h-3 text-white"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                )}
              </div>
              <span className="text-sm text-gray-700 dark:text-gray-200">
                {strategy.label}
              </span>
            </div>
          ))}
        </div>

        <div className="flex space-x-4">
          <Button 
            onClick={handleGenerateProposal}
            className="bg-blue-600 hover:bg-blue-700"
          >
            Generate Proposal
          </Button>
          <Button 
            variant="outline" 
            onClick={handleClearSelection}
            className="bg-white hover:bg-gray-50 dark:bg-transparent"
          >
            Clear Selection
          </Button>
        </div>
      </Card>

      {generatedProposal && (
        <Card className="p-6 relative -mt-4 bg-white dark:bg-gray-800 shadow-lg">
          <h2 className="text-xl font-bold mb-4">Generated Proposal</h2>
          <div className="prose dark:prose-invert max-w-none">
            <p className="whitespace-pre-line">{generatedProposal}</p>
          </div>
        </Card>
      )}
    </div>
  );
}