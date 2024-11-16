'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Upload, Download } from 'lucide-react';

export function UploadForm() {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Upload data for analysis</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column - Form */}
        <Card className="p-6 border-2">
          <div className="space-y-6">
            <div>
              <Label>Valuation Method:</Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Industry EBITDA Multiple" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ebitda">Industry EBITDA Multiple</SelectItem>
                  <SelectItem value="revenue">Revenue Multiple</SelectItem>
                  <SelectItem value="dcf">Discounted Cash Flow</SelectItem>
                </SelectContent>
              </Select>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                This valuation method involves applying a multiple to the company's EBITDA (Earnings Before
                Interest, Taxes, Depreciation, and Amortization). It's commonly used to estimate the value of a
                business by comparing it to similar companies in the industry.
              </p>
            </div>

            <div>
              <Label>Industry Multiple:</Label>
              <Input type="number" placeholder="7" className="w-full" />
            </div>

            <div>
              <Label>Buyer Financial Position (£):</Label>
              <Input type="number" placeholder="300000" className="w-full" />
            </div>

            <div>
              <Label>Seller's Desired Value (£):</Label>
              <Input type="number" placeholder="1000000" className="w-full" />
            </div>

            <div>
              <Label>Your Initial Offer (£):</Label>
              <Input type="number" placeholder="500000" className="w-full" />
            </div>

            <div>
              <Label>Risk Appetite:</Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Medium" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex space-x-4 pt-4">
              <Button variant="outline" className="w-full">Cancel</Button>
              <Button className="w-full">Analyze</Button>
            </div>
          </div>
        </Card>

        {/* Right Column - Upload Area */}
        <Card className="p-6 border-2">
          <div className="space-y-6">
            <div className="border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-lg p-8 h-[200px] flex flex-col items-center justify-center">
              <Upload className="h-8 w-8 text-blue-500 mb-4" />
              <div className="text-center">
                <button className="text-blue-500 hover:text-blue-600 font-medium">
                  Click to upload
                </button>
                <span className="text-gray-600 dark:text-gray-400"> or drag and drop .CSV file</span>
              </div>
              <input
                type="file"
                accept=".csv"
                onChange={handleFileChange}
                className="hidden"
                id="file-upload"
              />
            </div>

            <div className="space-y-4">
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Please ensure your CSV file contains the following columns: Period, Revenue, Gross Prof no file selected
                Current Assets, Accounts Receivable, Inventory, Prepaid Expenses, Fixed Assets, Total Assets, Current Liabilities,
                Accounts Payable, Accruals, Total Debt, Total Liabilities, Total Equity, Operating Expenses, EBITDA, Customer
                Revenue.
              </div>

              <div className="text-sm text-gray-600 dark:text-gray-400">
                You can download a sample template from the link below & update details and upload.
              </div>

              <Button variant="outline" className="w-full flex items-center justify-center space-x-2">
                <Download className="h-4 w-4" />
                <span>Download CSV</span>
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}