import React, { useState } from 'react';
import { X, Lock, Fingerprint, Eye, EyeOff, Shield } from 'lucide-react';

interface SecurityModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface SecurityOption {
  id: number;
  title: string;
  description: string;
  icon: JSX.Element;
}

export const SecurityModal = ({ isOpen, onClose }: SecurityModalProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [biometricEnabled, setBiometricEnabled] = useState(false);

  const securityOptions: SecurityOption[] = [
    {
      id: 1,
      title: 'Change Password',
      description: 'Update your account password',
      icon: <Lock className="text-blue-500" />,
    },
    {
      id: 2,
      title: 'Biometric Login',
      description: 'Use fingerprint or face recognition',
      icon: <Fingerprint className="text-purple-500" />,
    }
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 w-full max-w-md mx-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold dark:text-white">Security Settings</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
            <X className="w-5 h-5 dark:text-white" />
          </button>
        </div>
        
        <div className="space-y-4">
          {securityOptions.map((option: SecurityOption) => (
            <button
              key={option.id}
              className="w-full flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors group"
            >
              <div className="p-2 bg-white dark:bg-gray-600 rounded-lg">
                {React.cloneElement(option.icon, {
                  className: `w-5 h-5 ${option.icon.props.className}`
                })}
              </div>
              <div className="flex-1 text-left">
                <h3 className="font-medium text-gray-900 dark:text-white">{option.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{option.description}</p>
              </div>
              <Shield className="w-5 h-5 text-gray-400 dark:text-gray-500 group-hover:text-gray-500 dark:group-hover:text-gray-400" />
            </button>
          ))}
        </div>

        <div className="mt-6">
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl p-4 font-medium transition-colors">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};