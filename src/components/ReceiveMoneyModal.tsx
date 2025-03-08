import { useState } from 'react';
import { X, Copy, QrCode } from 'lucide-react';

interface ReceiveMoneyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReceiveMoneyModal: React.FC<ReceiveMoneyModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const walletAddress = 'wallet_123456789';

  const handleCopy = () => {
    navigator.clipboard.writeText(walletAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 w-full max-w-md mx-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold dark:text-white">Receive Money</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
            <X className="w-5 h-5 dark:text-white" />
          </button>
        </div>
        <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl text-center mb-6">
          <div className="w-48 h-48 mx-auto mb-4 bg-white dark:bg-gray-600 rounded-lg flex items-center justify-center">
            <QrCode className="w-32 h-32 dark:text-white" />
          </div>
          <p className="text-gray-600 dark:text-gray-300">Scan this QR code to receive money</p>
        </div>
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl p-4 font-medium">
          Share Payment Link
        </button>
      </div>
    </div>
  );
}