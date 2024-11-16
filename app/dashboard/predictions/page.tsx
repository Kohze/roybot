import { Card } from '@/components/ui/card';
import { TrendingUp, ArrowUpRight, ArrowDownRight } from 'lucide-react';

export default function PredictionsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold">AI Predictions</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Model predictions and forecasts
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Valuation Predictions */}
        <Card className="p-6">
          <h2 className="text-xl font-bold mb-6">Valuation Predictions</h2>
          <div className="space-y-6">
            {[
              {
                metric: 'Enterprise Value',
                prediction: '£12.5M',
                change: '+5.2%',
                positive: true,
              },
              {
                metric: 'Revenue Multiple',
                prediction: '3.2x',
                change: '-1.8%',
                positive: false,
              },
              {
                metric: 'EBITDA Multiple',
                prediction: '8.4x',
                change: '+2.1%',
                positive: true,
              },
            ].map((item) => (
              <div key={item.metric} className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {item.metric}
                  </div>
                  <div className="text-xl font-bold">{item.prediction}</div>
                </div>
                <div
                  className={`flex items-center ${
                    item.positive ? 'text-green-600' : 'text-red-600'
                  }`}
                >
                  {item.change}
                  {item.positive ? (
                    <ArrowUpRight className="h-4 w-4 ml-1" />
                  ) : (
                    <ArrowDownRight className="h-4 w-4 ml-1" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Market Trends */}
        <Card className="p-6">
          <h2 className="text-xl font-bold mb-6">Market Trends</h2>
          <div className="space-y-6">
            {[
              {
                trend: 'Industry Growth',
                prediction: '+7.5%',
                confidence: '85%',
              },
              {
                trend: 'Market Share',
                prediction: '12.3%',
                confidence: '92%',
              },
              {
                trend: 'Competitive Position',
                prediction: 'Strong',
                confidence: '88%',
              },
            ].map((item) => (
              <div key={item.trend} className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">
                    {item.trend}
                  </span>
                  <span className="text-sm">
                    Confidence: {item.confidence}
                  </span>
                </div>
                <div className="text-xl font-bold">{item.prediction}</div>
              </div>
            ))}
          </div>
        </Card>

        {/* Risk Predictions */}
        <Card className="p-6 lg:col-span-2">
          <h2 className="text-xl font-bold mb-6">Risk Predictions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                category: 'Financial Risk',
                probability: '25%',
                impact: 'Medium',
                trend: 'Decreasing',
              },
              {
                category: 'Market Risk',
                probability: '35%',
                impact: 'High',
                trend: 'Stable',
              },
              {
                category: 'Operational Risk',
                probability: '15%',
                impact: 'Low',
                trend: 'Improving',
              },
            ].map((risk) => (
              <div
                key={risk.category}
                className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
              >
                <h3 className="font-semibold mb-2">{risk.category}</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Probability:</span>
                    <span>{risk.probability}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Impact:</span>
                    <span>{risk.impact}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Trend:</span>
                    <span>{risk.trend}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}