import { Card } from '@/components/ui/card';
import { FileText, CheckCircle, AlertTriangle } from 'lucide-react';

export default function RagAnalysisPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold">RAG Analysis</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Red, Amber, Green analysis of key business metrics
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            status: 'Green',
            count: 12,
            icon: CheckCircle,
            color: 'text-green-600',
            bg: 'bg-green-50 dark:bg-green-900/20',
          },
          {
            status: 'Amber',
            count: 8,
            icon: AlertTriangle,
            color: 'text-yellow-600',
            bg: 'bg-yellow-50 dark:bg-yellow-900/20',
          },
          {
            status: 'Red',
            count: 4,
            icon: AlertTriangle,
            color: 'text-red-600',
            bg: 'bg-red-50 dark:bg-red-900/20',
          },
        ].map((stat) => (
          <Card key={stat.status} className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-2 ${stat.bg} rounded-lg`}>
                <stat.icon className={`h-6 w-6 ${stat.color}`} />
              </div>
              <span className={`text-2xl font-bold ${stat.color}`}>
                {stat.count}
              </span>
            </div>
            <h3 className="text-sm text-gray-600 dark:text-gray-400">
              {stat.status} Metrics
            </h3>
          </Card>
        ))}
      </div>

      {/* Detailed Analysis */}
      <Card className="p-6">
        <div className="flex items-center space-x-3 mb-6">
          <FileText className="h-6 w-6 text-blue-600" />
          <h2 className="text-xl font-bold">Detailed Analysis</h2>
        </div>
        <div className="space-y-6">
          {[
            {
              category: 'Financial Metrics',
              items: [
                { name: 'Revenue Growth', status: 'green' },
                { name: 'Profit Margin', status: 'amber' },
                { name: 'Cash Flow', status: 'green' },
              ],
            },
            {
              category: 'Operational Metrics',
              items: [
                { name: 'Customer Satisfaction', status: 'green' },
                { name: 'Employee Turnover', status: 'red' },
                { name: 'Process Efficiency', status: 'amber' },
              ],
            },
            {
              category: 'Market Metrics',
              items: [
                { name: 'Market Share', status: 'amber' },
                { name: 'Competitive Position', status: 'green' },
                { name: 'Brand Strength', status: 'green' },
              ],
            },
          ].map((section) => (
            <div key={section.category}>
              <h3 className="font-semibold mb-4">{section.category}</h3>
              <div className="space-y-3">
                {section.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
                  >
                    <span>{item.name}</span>
                    <div
                      className={`w-3 h-3 rounded-full ${
                        item.status === 'green'
                          ? 'bg-green-500'
                          : item.status === 'amber'
                          ? 'bg-yellow-500'
                          : 'bg-red-500'
                      }`}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}