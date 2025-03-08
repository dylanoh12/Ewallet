import React, { useState } from "react";
import { Search, Users, ArrowLeft, User, DollarSign } from "lucide-react";
import { SendMoneyModal } from '../components/SendMoneyModal';
import { useNavigate } from 'react-router-dom';

const recentContacts = [
  { id: 1, name: 'Acel Will', email: 'acel28@gmail.com' },
  { id: 2, name: 'Boby Winn', email: 'bob08@gmail.com' },
  { id: 3, name: 'Jimy Fare', email: 'jimy17@yahoo.com' },
];

export function Send(): JSX.Element {
  const navigate = useNavigate();
  const [step, setStep] = useState(1); // 1: recipient, 2: amount, 3: confirmation
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');
  const [note, setNote] = useState('');
  const [showConfirm, setShowConfirm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredContacts = recentContacts.filter(contact => 
    contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleRecipientSelect = (selectedRecipient: string) => {
    setRecipient(selectedRecipient);
    setStep(2);
  };

  const handleAmountSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(3);
  };

  const handleConfirmSend = () => {
    console.log(`Sending $${amount} to ${recipient} with note: ${note}`);
    // Reset all form fields
    setRecipient('');
    setAmount('');
    setNote('');
    setSearchTerm('');
    setShowConfirm(false);
    // Go back to step 1 instead of navigating away
    setStep(1);
  };

  const handleBackClick = () => {
    if (step > 1) {
      setStep(step - 1);
    } else {
      navigate(-1);
    }
  };

  return (
    <div className="p-4 dark:bg-gray-900">
      <h1 className="text-2xl font-bold mb-6 dark:text-white">Send Money</h1>
      
      {step === 1 && (
        <div className="space-y-4">
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search contacts..."
              className="w-full pl-10 pr-4 py-2 border rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            />
          </div>

          <div className="space-y-4">
            {recentContacts.map(contact => (
              <button
                key={contact.id}
                onClick={() => handleRecipientSelect(contact.name)}
                className="w-full flex items-center gap-4 p-4 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-xl"
              >
                <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-gray-600 dark:text-gray-400" />
                </div>
                <div className="text-left">
                  <p className="font-medium dark:text-white">{contact.name}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{contact.email}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 2 && (
        <form onSubmit={handleAmountSubmit} className="space-y-6">
          <div className="relative">
            <span className="absolute left-3 top-3 text-gray-500 dark:text-gray-400">₱</span>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="0.00"
              className="w-full pl-10 pr-4 py-4 border rounded-xl text-2xl dark:bg-gray-800 dark:border-gray-700 dark:text-white"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full p-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl"
          >
            Continue
          </button>
        </form>
      )}

      {step === 3 && (
        <div className="space-y-6">
          <div className="space-y-4 p-6 bg-white dark:bg-gray-800 rounded-xl">
            <div className="text-center">
              <p className="text-gray-500 dark:text-gray-400">Sending to</p>
              <p className="text-xl font-semibold dark:text-white">{recipient}</p>
            </div>
            <div className="text-center">
              <p className="text-gray-500 dark:text-gray-400">Amount</p>
              <p className="text-2xl font-semibold dark:text-white">₱{amount}</p>
            </div>
          </div>

          <button
            onClick={handleConfirmSend}
            className="w-full p-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl"
          >
            Confirm Send
          </button>
        </div>
      )}
    </div>
  );
}