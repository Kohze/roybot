'use client';

import { Card } from '@/components/ui/card';
import { Sphere } from 'lucide-react';

interface FinancialMetric {
  label: string;
  value: string;
  description?: string;
}

interface ValuationDetails {
  companyValuation: string;
  sellerDesiredValue: string;
  initialOffer: string;
}

interface ExecutiveSummaryMetrics {
  revenue: FinancialMetric;
  netIncome: FinancialMetric;
  currentLiabilities: FinancialMetric;
  grossProfit: FinancialMetric;
  totalDebt: FinancialMetric;
  grossProfitMargin: FinancialMetric;
  currentAssets: FinancialMetric;
  totalEquity: FinancialMetric;
  totalAssets: FinancialMetric;
  ebitda: string;
}

interface PeriodMetrics {
  revenue: string;
  grossProfitMargin: string;
  netIncome: string;
  profitMargin: string;
  currentAssets: string;
}

export function DealComparisonView() {
  const valuationDetails: ValuationDetails = {
    companyValuation: '£800,569.00',
    sellerDesiredValue: '£1,000,000.00',
    initialOffer: '£500,000.00',
  };

  const executiveSummary: ExecutiveSummaryMetrics = {
    revenue: {
      label: 'Revenue',
      value: '£110,000.00',
      description: 'The total income generated from sales or services is',
    },
    netIncome: {
      label: 'Net Income',
      value: '£22,169.00',
      description: 'The total profit after all expenses, including taxes and interest, is',
    },
    currentLiabilities: {
      label: 'Current Liabilities',
      value: '£93,039.00',
      description: "The company's short-term debts or obligations total",
    },
    grossProfit: {
      label: 'Gross Profit',
      value: '£40000.00',
      description: 'Revenue minus the cost of goods sold (COGS) stands at',
    },
    totalDebt: {
      label: 'Total Debt',
      value: '£773,368.00',
      description: 'The sum of all short-term and long-term debts amounts to',
    },
    grossProfitMargin: {
      label: 'Gross Profit Margin',
      value: '63.64%',
      description: 'Revenue minus the cost of goods sold (COGS) stands at £40000.00, with a gross profit margin of',
    },
    currentAssets: {
      label: 'Current Assets',
      value: '£93,039.00',
      description: 'Revenue minus the cost of goods sold (COGS) stands at £40000.00, with a gross profit margin of',
    },
    totalEquity: {
      label: 'Total Equity',
      value: '£439,231.00',
      description: "The residual interest in the company's assets after deducting liabilities stands at",
    },
    totalAssets: {
      label: 'Total Assets',
      value: '£1,212,599.00',
      description: 'The total assets of the company, calculated as the sum of total equity and liabilities, is',
    },
    ebitda: '£114,367.00',
  };

  const periodMetrics: PeriodMetrics = {
    revenue: '£274,663.00',
    grossProfitMargin: '78.51%',
    netIncome: '£44,338.00',
    profitMargin: '16.81%',
    currentAssets: '£874,663.00',
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold">Financial Analysis Results</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Detailed financial analysis and valuation results
        </p>
      </div>

      {/* Company Valuation Section */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Company Valuation</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          The selected valuation method resulted in the following company valuation:
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Company Valuation:</div>
              <div className="text-3xl font-bold">{valuationDetails.companyValuation}</div>
            </div>
            <div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Seller's Desired Value:</div>
              <div className="text-3xl font-bold">{valuationDetails.sellerDesiredValue}</div>
            </div>
            <div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Your Initial Offer:</div>
              <div className="text-3xl font-bold">{valuationDetails.initialOffer}</div>
            </div>
          </div>

          <div className="bg-blue-600 rounded-lg p-6 text-white">
            <div className="flex items-center gap-4 mb-4">
              <Sphere className="h-8 w-8" />
              <div>
                <div className="text-sm opacity-90">Valuation Method:</div>
                <div className="text-xl font-semibold">Industry EBITDA Multiple</div>
              </div>
            </div>
            <p className="text-sm opacity-90">
              The Industry EBITDA Multiple method values the company based on its Earnings Before
              Interest, Taxes, Depreciation, and Amortization (EBITDA), multiplied by an industry-standard
              multiple. This method assumes that similar companies within the industry are valued
              similarly, providing a quick estimate based on industry norms.
            </p>
          </div>
        </div>
      </Card>

      {/* Executive Summary Section */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Executive Summary</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          The analysis focuses on the most recent financial year, providing an overview of the company's current performance:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(executiveSummary).map(([key, metric]) => {
            if (key === 'ebitda') return null;
            return (
              <div key={key} className="space-y-2">
                <div className="text-sm text-gray-600 dark:text-gray-400">{metric.label}:</div>
                <div className="text-2xl font-bold">{metric.value}</div>
                <div className="text-sm text-gray-500">{metric.description}</div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 bg-blue-600 rounded-lg p-6 text-white">
          <div className="flex items-center gap-4">
            <Sphere className="h-8 w-8" />
            <div>
              <div className="text-sm opacity-90">EBITDA:</div>
              <div className="text-3xl font-bold">{executiveSummary.ebitda}</div>
            </div>
          </div>
        </div>
      </Card>

      {/* Period Metrics */}
      <Card className="p-6">
        <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 mb-6">
          <p className="text-sm text-green-800 dark:text-green-200">
            The data covers 2 periods, providing an overview of the company's financial performance.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
            <div className="text-sm text-gray-600 dark:text-gray-400">Revenue:</div>
            <div className="text-xl font-bold">{periodMetrics.revenue}</div>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
            <div className="text-sm text-gray-600 dark:text-gray-400">Gross Profit Margin:</div>
            <div className="text-xl font-bold">{periodMetrics.grossProfitMargin}</div>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
            <div className="text-sm text-gray-600 dark:text-gray-400">Net Income:</div>
            <div className="text-xl font-bold">{periodMetrics.netIncome}</div>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
            <div className="text-sm text-gray-600 dark:text-gray-400">Profit Margin:</div>
            <div className="text-xl font-bold">{periodMetrics.profitMargin}</div>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
            <div className="text-sm text-gray-600 dark:text-gray-400">Current Assets:</div>
            <div className="text-xl font-bold">{periodMetrics.currentAssets}</div>
          </div>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 mt-6">
          <p className="text-sm text-green-800 dark:text-green-200">
            The revenue grew by -33.20% from the first to the last period, reflecting the company's growth over time.
          </p>
        </div>
      </Card>
    </div>
  );
}