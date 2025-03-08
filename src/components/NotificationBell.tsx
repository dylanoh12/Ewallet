import { useState } from 'react';
import { Bell, X, ArrowDownLeft, ArrowUpRight } from 'lucide-react';

export const NotificationBell = () => {
  const [isOpen, setIsOpen] = useState(false);

  const notifications = [
    { 
      id: 1, 
      type: 'received',
      amount: 50.00,
      from: 'John Doe',
      time: '2 hours ago'
    },
    { 
      id: 2, 
      type: 'sent',
      amount: 30.00,
      to: 'Jane Smith',
      time: '5 hours ago'
    }
  ];

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(true)}
        className="relative p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
      >
        <Bell className="w-6 h-6 text-gray-600 dark:text-gray-300" />
        <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
      </button>

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          ></div>
          <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-900 rounded-xl shadow-lg z-50 max-h-[80vh] overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Notifications</h3>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
              >
                <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              </button>
            </div>
            <div className="overflow-y-auto max-h-[calc(80vh-4rem)]">
              {notifications.map(notification => (
                <div 
                  key={notification.id}
                  className="p-4 border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
                >
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
                          ? `Received ₱${notification.amount} from ${notification.from}`
                          : `Sent ₱${notification.amount} to ${notification.to}`
                        }
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{notification.time}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};