import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Settings, CreditCard, Bell, Shield, HelpCircle, LogOut, PlusCircle, X, MessageCircle, FileText } from "lucide-react";
import { DarkModeToggle } from "../components/DarkModeToggle";

export function Profile(): JSX.Element {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('general');
  const [showGeneralModal, setShowGeneralModal] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showNotificationsModal, setShowNotificationsModal] = useState(false);
  const [showSecurityModal, setShowSecurityModal] = useState(false);
  const [showHelpModal, setShowHelpModal] = useState(false);

  const menuItems = [
    { id: 'general', icon: Settings, label: 'General Settings' },
    { id: 'payment', icon: CreditCard, label: 'Payment Methods' },
    { id: 'notifications', icon: Bell, label: 'Notifications' },
    { id: 'security', icon: Shield, label: 'Security' },
    { id: 'help', icon: HelpCircle, label: 'Help & Support' },
  ];

  const notifications = [
    {
      id: 1,
      type: 'Push Notifications',
      description: 'Get notified about transactions and updates',
      enabled: true
    },
    {
      id: 2,
      type: 'Email Notifications',
      description: 'Receive email updates about your account',
      enabled: false
    },
    {
      id: 3,
      type: 'Marketing Updates',
      description: 'Stay updated with promotions and news',
      enabled: false
    }
  ];

  const securitySettings = [
    {
      id: 1,
      type: 'Face ID / Touch ID',
      description: 'Use biometric authentication for login',
      enabled: true
    },
    {
      id: 2,
      type: 'Two-Factor Authentication',
      description: 'Add an extra layer of security to your account',
      enabled: false
    },
    {
      id: 3,
      type: 'Transaction PIN',
      description: 'Require PIN for all transactions',
      enabled: true
    }
  ];

  const paymentMethods = [
    {
      id: 1,
      type: 'Visa',
      number: '•••• 4242',
      expiry: '12/24',
      isDefault: true
    },
    {
      id: 2,
      type: 'Mastercard',
      number: '•••• 5555',
      expiry: '08/25',
      isDefault: false
    }
  ];

  const helpItems = [
    {
      id: 1,
      title: 'FAQs',
      description: 'Find answers to common questions',
      icon: HelpCircle
    },
    {
      id: 2,
      title: 'Contact Support',
      description: 'Get in touch with our support team',
      icon: MessageCircle
    },
    {
      id: 3,
      title: 'Privacy Policy',
      description: 'Read our privacy policy',
      icon: Shield
    },
    {
      id: 4,
      title: 'Terms of Service',
      description: 'View our terms of service',
      icon: FileText
    }
  ];

  const handleLogout = () => {
    // Add any logout logic here (clearing tokens, state, etc.)
    navigate('/');
  };

  return (
    <div className="p-4 dark:bg-gray-900">
      <h1 className="text-2xl font-bold mb-6 dark:text-white">Settings</h1>
      
      <div className="space-y-2">
        {menuItems.map(({ id, icon: Icon, label }) => (
          <button
            key={id}
            onClick={() => {
              setActiveSection(id);
              if (id === 'general') setShowGeneralModal(true);
              if (id === 'payment') setShowPaymentModal(true);
              if (id === 'notifications') setShowNotificationsModal(true);
              if (id === 'security') setShowSecurityModal(true);
              if (id === 'help') setShowHelpModal(true);
            }}
            className="w-full flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-xl"
          >
            <div className="flex items-center gap-3">
              <Icon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              <span className="text-gray-900 dark:text-white">{label}</span>
            </div>
            <span className="text-gray-400">›</span>
          </button>
        ))}
        <button 
          onClick={handleLogout}
          className="w-full flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-xl text-red-600"
        >
          <LogOut className="w-5 h-5" />
          <span>Log Out</span>
        </button>
      </div>

      {/* Modals */}
      {showGeneralModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 w-full max-w-[430px] mx-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold dark:text-white">General Settings</h2>
              <button 
                onClick={() => setShowGeneralModal(false)}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
              >
                <X className="w-5 h-5 dark:text-white" />
              </button>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-medium dark:text-white">Dark Mode</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Toggle dark mode on/off</p>
                </div>
                <DarkModeToggle />
              </div>
            </div>
          </div>
        </div>
      )}

      {showPaymentModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 w-full max-w-[430px] mx-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold dark:text-white">Payment Methods</h2>
              <button 
                onClick={() => setShowPaymentModal(false)}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
              >
                <X className="w-5 h-5 dark:text-white" />
              </button>
            </div>

            <div className="space-y-4 mb-6">
              {paymentMethods.map(card => (
                <div key={card.id} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-100 dark:bg-gray-600 rounded-lg flex items-center justify-center">
                      <CreditCard className="w-6 h-6 text-gray-600 dark:text-gray-400" />
                    </div>
                    <div>
                      <p className="font-medium dark:text-white">{card.type} {card.number}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Expires {card.expiry}</p>
                    </div>
                  </div>
                  {card.isDefault && (
                    <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">Default</span>
                  )}
                </div>
              ))}
            </div>

            <button className="w-full flex items-center justify-center gap-2 p-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700">
              <PlusCircle className="w-5 h-5" />
              <span>Add New Card</span>
            </button>
          </div>
        </div>
      )}

      {showNotificationsModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 w-full max-w-[430px] mx-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold dark:text-white">Notifications</h2>
              <button 
                onClick={() => setShowNotificationsModal(false)}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
              >
                <X className="w-5 h-5 dark:text-white" />
              </button>
            </div>

            <div className="space-y-4 mb-6">
              {notifications.map(notification => (
                <div key={notification.id} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                  <div>
                    <h3 className="font-medium dark:text-white">{notification.type}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{notification.description}</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="sr-only peer"
                      checked={notification.enabled}
                      onChange={() => {}}
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              ))}
            </div>

            <button 
              onClick={() => setShowNotificationsModal(false)}
              className="w-full p-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700"
            >
              Save Changes
            </button>
          </div>
        </div>
      )}

      {showSecurityModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 w-full max-w-[430px] mx-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold dark:text-white">Security Settings</h2>
              <button 
                onClick={() => setShowSecurityModal(false)}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
              >
                <X className="w-5 h-5 dark:text-white" />
              </button>
            </div>

            <div className="space-y-4 mb-6">
              {securitySettings.map(setting => (
                <div key={setting.id} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                  <div>
                    <h3 className="font-medium dark:text-white">{setting.type}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{setting.description}</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="sr-only peer"
                      checked={setting.enabled}
                      onChange={() => {}}
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              ))}
            </div>

            <button 
              onClick={() => setShowSecurityModal(false)}
              className="w-full p-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700"
            >
              Save Changes
            </button>
          </div>
        </div>
      )}

      {showHelpModal && (
<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
  <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 w-full max-w-[430px] mx-4">
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-xl font-semibold dark:text-white">Help & Support</h2>
      <button 
        onClick={() => setShowHelpModal(false)}
        className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
      >
        <X className="w-5 h-5 dark:text-white" />
      </button>
    </div>

    <div className="space-y-4 mb-6">
      {helpItems.map(item => (
        <button
          key={item.id}
          className="w-full flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-600"
        >
          <div className="w-12 h-12 bg-gray-100 dark:bg-gray-600 rounded-lg flex items-center justify-center">
            <item.icon className="w-6 h-6 text-gray-600 dark:text-gray-400" />
          </div>
          <div className="flex-1 text-left">
            <h3 className="font-medium dark:text-white">{item.title}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">{item.description}</p>
          </div>
          <span className="text-gray-400">›</span>
        </button>
      ))}
    </div>

    <div className="text-center">
      <p className="text-sm text-gray-500 dark:text-gray-400">Need more help? Email us at
              </p>
              <a href="mailto:support@ewallet.com" className="text-blue-600 dark:text-blue-400">
                adrian@ewallet.com
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


