import React, { useState, useMemo } from "react";
import { ArrowUpRight, ArrowDownLeft, Search } from "lucide-react";

interface Transaction {
  id: number;  // Add id to the interface
  name: string;
  amount: number;
  date: string;
  type: 'income' | 'expense';
}

export function Transactions() {
  const [searchTerm, setSearchTerm] = useState('');

  const transactions: Transaction[] = [
    {
      id: 1,
      name: "Netflix Subscription",
      amount: -15.99,
      date: "Oct 12, 2023",
      type: "expense"
    },
    {
      id: 2,
      name: "Salary Deposit",
      amount: 3500,
      date: "Oct 11, 2023",
      type: "income"
    },
    {
      id: 3,
      name: "Grocery Store",
      amount: -64.37,
      date: "Oct 11, 2023",
      type: "expense"
    },
    {
      id: 4,
      name: "Freelance Payment",
      amount: 850,
      date: "Oct 10, 2023",
      type: "income"
    },
    {
      id: 5,
      name: "Electric Bill",
      amount: -85.0,
      date: "Oct 09, 2023",
      type: "expense"
    }
  ];

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value.trim());
  };

  const filteredTransactions = useMemo(() => {
    const searchLower = searchTerm.toLowerCase();
    
    if (!searchLower) return transactions;

    return transactions.filter(transaction => {
      const amountStr = Math.abs(transaction.amount).toFixed(2);
      return (
        transaction.name.toLowerCase().includes(searchLower) ||
        amountStr.includes(searchLower) ||
        transaction.date.toLowerCase().includes(searchLower) ||
        transaction.type.toLowerCase().includes(searchLower)
      );
    });
  }, [searchTerm, transactions]);

  return (
    <div className="p-4 dark:bg-gray-800">
      <h1 className="text-2xl font-bold mb-6 dark:text-white">Transaction History</h1>
      
      <div className="relative mb-6">
        <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search transactions..."
          value={searchTerm}
          onChange={handleSearch}
          className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-700 dark:text-white border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="space-y-4">
        {filteredTransactions.map((transaction) => (
          <div 
            key={transaction.id} 
            className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-xl"
          >
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-full ${
                transaction.type === 'income' 
                  ? 'bg-green-100 dark:bg-green-900' 
                  : 'bg-red-100 dark:bg-red-900'
              }`}>
                {transaction.type === 'income' ? (
                  <ArrowDownLeft className="w-5 h-5 text-green-600 dark:text-green-400" />
                ) : (
                  <ArrowUpRight className="w-5 h-5 text-red-600 dark:text-red-400" />
                )}
              </div>
              <div>
                <p className="font-medium dark:text-white">{transaction.name}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{transaction.date}</p>
              </div>
            </div>
            <span className={`font-medium ${transaction.amount > 0 ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}`}>
              ₱{Math.abs(transaction.amount).toFixed(2)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}