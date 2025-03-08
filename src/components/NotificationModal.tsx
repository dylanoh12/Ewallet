import React from 'react';
import { X, ArrowUpRight, ArrowDownLeft } from 'lucide-react';

interface NotificationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NotificationModal = ({ isOpen, onClose }: NotificationModalProps) => {
  const notifications = [
    { 
      id: 1, 
      type: 'received',
      amount: 50.00,
      from: 'John wick',
      time: '2 hours ago'
    },
    { 
      id: 2, 
      type: 'sent',
      amount: 30.00,
      to: 'bill rose',
      time: '5 hours ago'
    },
    { 
      id: 3, 
      type: 'received',
      amount: 100.00,
      from: 'Mike ford',
      time: '1 day ago'
    }
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 w-full max-w-md mx-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold dark:text-white">Notifications</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
            <X className="w-5 h-5 dark:text-white" />
          </button>
        </div>

        <div className="space-y-4">
          {notifications.map((notification) => (
            <div key={notification.id} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-full ${
                  notification.type === 'received' 
                    ? 'bg-green-100 dark:bg-green-900' 
                    : 'bg-red-100 dark:bg-red-900'
                }`}>
                  {notification.type === 'received' ? (
                    <ArrowDownLeft className="w-5 h-5 text-green-600 dark:text-green-400" />
                  ) : (
                    <ArrowUpRight className="w-5 h-5 text-red-600 dark:text-red-400" />
                  )}
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">
                    {notification.type === 'received' 
                      ? `Received $${notification.amount} from ${notification.from}`
                      : `Sent $${notification.amount} to ${notification.to}`
                    }
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{notification.time}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};