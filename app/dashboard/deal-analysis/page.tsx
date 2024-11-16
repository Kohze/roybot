import { Card } from '@/components/ui/card';
import { BarChart2, TrendingUp, AlertCircle } from 'lucide-react';

export default function DealAnalysisPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold">Deal Analysis</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Comprehensive analysis of the current deal
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Financial Analysis */}
        <Card className="p-6">
          <div className="flex items-center space-x-3 mb-6">
            <BarChart2 className="h-6 w-6 text-blue-600" />
            <h2 className="text-xl font-bold">Financial Analysis</h2>
          </div>
          <div className="space-y-4">
            {[
              { label: 'Revenue Growth', value: '+15%' },
              { label: 'EBITDA Margin', value: '28%' },
              { label: 'Working Capital', value: '£1.2M' },
            ].map((metric) => (
              <div key={metric.label} className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">
                  {metric.label}
                </span>
                <span className="font-semibold">{metric.value}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Market Analysis */}
        <Card className="p-6">
          <div className="flex items-center space-x-3 mb-6">
            <TrendingUp className="h-6 w-6 text-blue-600" />
            <h2 className="text-xl font-bold">Market Analysis</h2>
          </div>
          <div className="space-y-4">
            {[
              { label: 'Market Share', value: '12%' },
              { label: 'Industry Growth', value: '8%' },
              { label: 'Competitive Position', value: 'Strong' },
            ].map((metric) => (
              <div key={metric.label} className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">
                  {metric.label}
                </span>
                <span className="font-semibold">{metric.value}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Risk Assessment */}
        <Card className="p-6 lg:col-span-2">
          <div className="flex items-center space-x-3 mb-6">
            <AlertCircle className="h-6 w-6 text-blue-600" />
            <h2 className="text-xl font-bold">Risk Assessment</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                category: 'Financial Risk',
                level: 'Medium',
                details: 'Working capital management needs attention',
              },
              {
                category: 'Operational Risk',
                level: 'Low',
                details: 'Strong operational processes in place',
              },
              {
                category: 'Market Risk',
                level: 'High',
                details: 'Increasing competition in key markets',
              },
            ].map((risk) => (
              <div
                key={risk.category}
                className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
              >
                <h3 className="font-semibold mb-2">{risk.category}</h3>
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  Risk Level: {risk.level}
                </div>
                <p className="text-sm">{risk.details}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}