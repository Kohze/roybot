'use client';

export default function Solution() {
  return (
    <div className="bg-white dark:bg-gray-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-16">
          <h2 className="text-4xl font-bold mb-4">RoyBot.AI: AI-Powered Solution</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            RoyBot.AI is an advanced AI-powered solution designed to streamline business operations
            with intelligent automation and data-driven insights.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {/* Top row */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Accurate Valuations - Smaller (40%) */}
            <div className="md:col-span-5 space-y-6">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 h-[250px]">
                <div className="relative w-32 h-32">
                  <div className="absolute w-full h-full rounded-full bg-green-100 dark:bg-green-900/20">
                    <div className="relative w-full h-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-green-600 dark:text-green-400">46%</span>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold">Accurate Valuations</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Our AI predicts precise business valuations based on comprehensive market data and financial analysis.
              </p>
            </div>

            {/* Deal Success Probability - Larger (60%) */}
            <div className="md:col-span-7 space-y-6">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 h-[250px]">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 bg-white dark:bg-gray-700 p-4 rounded-lg">
                    <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-600" />
                    <div className="flex-1">
                      <div className="h-4 w-32 bg-gray-200 dark:bg-gray-600 rounded" />
                    </div>
                    <div className="h-4 w-16 bg-gray-200 dark:bg-gray-600 rounded" />
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold">Deal Success Probability</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We estimate the likelihood of deal success, helping you focus on the most promising opportunities.
              </p>
            </div>
          </div>

          {/* Bottom row */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Optimal Deal Structures - Larger (60%) */}
            <div className="md:col-span-7 space-y-6">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 h-[250px]">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 rounded bg-blue-500" />
                      <span className="text-sm">Active Jobs</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="h-24 bg-white dark:bg-gray-700 rounded-lg" />
                    ))}
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold">Optimal Deal Structures</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Our platform suggests tailored deal structures to maximise success and minimise risks for all parties.
              </p>
            </div>

            {/* Actionable Insights - Smaller (40%) */}
            <div className="md:col-span-5 space-y-6">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 h-[250px]">
                <div className="relative w-48 h-48">
                  <div className="absolute top-4 right-4 bg-white dark:bg-gray-700 rounded-lg p-4 shadow-lg">
                    <div className="text-3xl font-bold">282</div>
                    <div className="text-sm text-gray-500">Contributing Members</div>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold">Actionable Insights</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Receive data-driven recommendations to make smarter, faster decisions throughout the acquisition process.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}