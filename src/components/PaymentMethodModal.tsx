import React from 'react';
import { X, Plus, CreditCard, Trash2 } from 'lucide-react';

interface PaymentMethodModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PaymentMethodModal = ({ isOpen, onClose }: PaymentMethodModalProps) => {
  const savedCards = [
    { id: 1, last4: '4242', brand: 'Visa', expiry: '12/24' },
    { id: 2, last4: '8888', brand: 'Mastercard', expiry: '06/25' }
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 w-full max-w-md mx-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Payment Methods</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full">
            <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          </button>
        </div>

        <div className="space-y-4">
          <button className="w-full flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
            <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
              <Plus className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <span className="font-medium text-gray-900 dark:text-white">Add New Card</span>
          </button>

          {savedCards.map(card => (
            <div key={card.id} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg">
                  <CreditCard className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">
                    {card.brand} ending in {card.last4}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Expires {card.expiry}
                  </p>
                </div>
              </div>
              <button className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors">
                <Trash2 className="w-5 h-5 text-red-500 dark:text-red-400" />
              </button>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <button className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-xl p-4 font-medium transition-colors">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};