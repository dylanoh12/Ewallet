import { useState } from 'react';
import { X, CreditCard } from 'lucide-react';

interface CardData {
  cardNumber: string;
  cardHolder: string;
  expiryDate: string;
  cvv: string;
  type: 'visa' | 'mastercard';
  lastFourDigits?: string;
}

interface AddCardModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (cardData: CardData) => void;
}

export function AddCardModal({ isOpen, onClose, onSubmit }: AddCardModalProps) {
  const [cardData, setCardData] = useState<CardData>({
    cardNumber: '',
    cardHolder: '',
    expiryDate: '',
    cvv: '',
    type: 'visa',
    lastFourDigits: ''
  });
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      ...cardData,
      lastFourDigits: cardData.cardNumber.slice(-4)
    });
    onClose();
  };
  
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 w-full max-w-md mx-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Add New Card</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full">
            <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm text-gray-600 dark:text-gray-400 mb-2">Card Number</label>
            <input
              type="text"
              value={cardData.cardNumber}
              onChange={(e) => setCardData({ ...cardData, cardNumber: e.target.value })}
              className="w-full p-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white"
              placeholder="1234 5678 9012 3456"
              maxLength={19}
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 dark:text-gray-400 mb-2">Card Holder Name</label>
            <input
              type="text"
              value={cardData.cardHolder}
              onChange={(e) => setCardData({ ...cardData, cardHolder: e.target.value.toUpperCase() })}
              className="w-full p-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white"
              placeholder="ADRIAN WINN"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-600 dark:text-gray-400 mb-2">Expiry Date</label>
              <input
                type="text"
                value={cardData.expiryDate}
                onChange={(e) => setCardData({ ...cardData, expiryDate: e.target.value })}
                className="w-full p-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white"
                placeholder="MM/YY"
                maxLength={5}
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 dark:text-gray-400 mb-2">CVV</label>
              <input
                type="text"
                value={cardData.cvv}
                onChange={(e) => setCardData({ ...cardData, cvv: e.target.value })}
                className="w-full p-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white"
                placeholder="123"
                maxLength={3}
              />
            </div>
          </div>
        </div>

        <button
          onClick={handleSubmit}
          className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-xl p-4 font-medium transition-colors mt-6"
        >
          Add Card
        </button>
      </div>
    </div>
  );
};