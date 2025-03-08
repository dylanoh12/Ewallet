import { X } from 'lucide-react';

interface SendMoneyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
  recipient: string;
  setRecipient: (value: string) => void;
  amount: string;
  setAmount: (value: string) => void;
}

export function SendMoneyModal({
  isOpen,
  onClose,
  onSubmit,
  recipient,
  setRecipient,
  amount,
  setAmount
}: SendMoneyModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 w-full max-w-[430px] mx-4">
        <h2 className="text-xl font-semibold mb-6 dark:text-white">Send Money</h2>
        
        <div className="space-y-4 mb-6">
          <div>
            <label className="block text-sm text-gray-600 dark:text-gray-400 mb-2">
              Recipient Email
            </label>
            <input
              type="email"
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
              className="w-full p-3 border rounded-xl dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="Enter recipient's email"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 dark:text-gray-400 mb-2">
              Amount
            </label>
            <div className="relative">
              <span className="absolute left-3 top-3 text-gray-500 dark:text-gray-400">₱</span>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full p-3 pl-8 border rounded-xl dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="0.00"
                required
              />
            </div>
          </div>
        </div>

        <div className="flex gap-4">
          <button
            onClick={onClose}
            className="flex-1 p-4 border rounded-xl dark:border-gray-600 dark:text-white"
          >
            Cancel
          </button>
          <button
            onClick={onSubmit}
            className="flex-1 p-4 bg-blue-600 text-white rounded-xl"
            disabled={!recipient || !amount}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}