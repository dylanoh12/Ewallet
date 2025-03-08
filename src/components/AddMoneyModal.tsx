import React, { useState } from 'react';
import { X } from 'lucide-react';

interface AddMoneyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (amount: number) => void;
}

export function AddMoneyModal({ isOpen, onClose, onSubmit }: AddMoneyModalProps) {
  const [amount, setAmount] = useState('');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 w-full max-w-md mx-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold dark:text-white">Add Money</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
            <X className="w-5 h-5 dark:text-white" />
          </button>
        </div>
        <div className="mb-6">
          <label className="block text-sm text-gray-600 dark:text-gray-400 mb-2">Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            className="w-full bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl p-4 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
          />
        </div>
        <button 
          onClick={() => {
            onSubmit(Number(amount));
            onClose();
          }}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl p-4 font-medium"
        >
          Add Money
        </button>
      </div>
    </div>
  );
}