import { Card } from '@/components/ui/card';
import { Brain, Database, Settings } from 'lucide-react';

export default function ModelTrainingPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold">Model Training</h1>
        <p className="text-gray-600 dark:text-gray-400">
          AI model training status and configuration
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            icon: Brain,
            title: 'Model Status',
            value: 'Training',
            detail: 'Epoch 24/100',
          },
          {
            icon: Database,
            title: 'Training Data',
            value: '15,432',
            detail: 'Sample Size',
          },
          {
            icon: Settings,
            title: 'Accuracy',
            value: '94.8%',
            detail: 'Validation Set',
          },
        ].map((stat) => (
          <Card key={stat.title} className="p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <stat.icon className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="font-semibold">{stat.title}</h2>
            </div>
            <div className="space-y-1">
              <p className="text-2xl font-bold">{stat.value}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {stat.detail}
              </p>
            </div>
          </Card>
        ))}
      </div>

      {/* Training Progress */}
      <Card className="p-6">
        <h2 className="text-xl font-bold mb-6">Training Progress</h2>
        <div className="space-y-6">
          {[
            {
              phase: 'Data Preprocessing',
              status: 'Completed',
              progress: '100%',
            },
            {
              phase: 'Model Training',
              status: 'In Progress',
              progress: '45%',
            },
            {
              phase: 'Validation',
              status: 'Pending',
              progress: '0%',
            },
          ].map((phase) => (
            <div key={phase.phase} className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium">{phase.phase}</span>
                <span className="text-gray-600 dark:text-gray-400">
                  {phase.status}
                </span>
              </div>
              <div className="h-2 bg-gray-100 dark:bg-gray-800 rounded-full">
                <div
                  className="h-full bg-blue-600 rounded-full"
                  style={{ width: phase.progress }}
                />
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}