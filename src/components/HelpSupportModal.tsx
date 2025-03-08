import React from 'react';
import { X, Mail, Phone, MessageCircle, Globe, ArrowUpRight } from 'lucide-react';

interface HelpSupportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HelpSupportModal = ({ isOpen, onClose }: HelpSupportModalProps) => {
  const supportOptions = [
    {
      id: 1,
      title: 'Email Support',
      description: 'Get help via email',
      icon: <Mail className="text-blue-500" />,
      action: 'support@Adrian28.com'
    },
    {
      id: 2,
      title: 'Phone Support',
      description: 'Call our support team',
      icon: <Phone className="text-green-500" />,
      action: '+1 (555) 123-4567'
    },
    {
      id: 3,
      title: 'Live Chat',
      description: 'Chat with our support team',
      icon: <MessageCircle className="text-purple-500" />,
      action: 'Start Chat'
    },
    {
      id: 4,
      title: 'Help Center',
      description: 'Browse our help articles',
      icon: <Globe className="text-indigo-500" />,
      action: 'Visit Help Center'
    }
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 w-full max-w-md mx-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold dark:text-white">Help & Support</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
            <X className="w-5 h-5 dark:text-white" />
          </button>
        </div>

        <div className="space-y-4">
          {supportOptions.map(option => (
            <div
              key={option.id}
              className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white dark:bg-gray-600 rounded-lg">
                  {option.icon}
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">{option.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{option.description}</p>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-gray-400 dark:text-gray-500" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};