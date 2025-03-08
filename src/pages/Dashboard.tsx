import { useState } from "react";
import { Plus, ArrowDownLeft, ArrowUpRight } from "lucide-react";
import { NotificationBell } from '../components/NotificationBell';
import { AddMoneyModal } from '../components/AddMoneyModal';
import { SendMoneyModal } from '../components/SendMoneyModal';
import { ReceiveMoneyModal } from '../components/ReceiveMoneyModal';

export function Dashboard() {
  const [isAddMoneyOpen, setIsAddMoneyOpen] = useState(false);

  const handleAddMoney = (amount: number) => {
    // Here you can implement the logic to process the money addition
    console.log(`Adding $${amount}`);
    // You might want to update the total balance or call an API
  };

  const [isSendMoneyOpen, setIsSendMoneyOpen] = useState(false);

  // Add these state variables at the top with other state declarations
    const [recipient, setRecipient] = useState('');
    const [amount, setAmount] = useState('');
  
    const handleSendMoney = () => {
      console.log(`Sending $${amount} to ${recipient}`);
      setIsSendMoneyOpen(false);
      setRecipient('');
      setAmount('');
    };

  const [isReceiveMoneyOpen, setIsReceiveMoneyOpen] = useState(false);

  return (
    <div className="p-4 dark:bg-gray-800">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-lg font-medium text-gray-600 dark:text-gray-300">Welcome back</h2>
          <h1 className="text-2xl font-bold dark:text-white">Adrian F.</h1>
        </div>
        <NotificationBell />
      </div>
      <div className="bg-blue-600 dark:bg-blue-700 rounded-2xl p-6 text-white mb-6">
        <p className="text-sm opacity-90 mb-1">Total Balance</p>
        <h2 className="text-3xl font-bold mb-4">₱35,000,000</h2>
        <div className="flex gap-2">
          <button 
            onClick={() => setIsAddMoneyOpen(true)}
            className="flex items-center gap-2 bg-white/20 hover:bg-white/30 rounded-full px-4 py-2 text-sm"
          >
            <Plus className="w-4 h-4" /> Add Money
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <button 
          onClick={() => setIsSendMoneyOpen(true)}
          className="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-600"
        >
          <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-full mb-2">
            <ArrowUpRight className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          </div>
          <span className="text-sm font-medium dark:text-white">Send</span>
        </button>
        <button 
          onClick={() => setIsReceiveMoneyOpen(true)}
          className="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-600"
        >
          <div className="bg-green-100 dark:bg-green-900 p-2 rounded-full mb-2">
            <ArrowDownLeft className="w-6 h-6 text-green-600 dark:text-green-400" />
          </div>
          <span className="text-sm font-medium dark:text-white">Receive</span>
        </button>
      </div>

      <div>
        <h3 className="font-semibold mb-4 dark:text-white">Recent Transactions</h3>
        <div className="space-y-4">
          {[
            {
              name: "Netflix Subscription",
              amount: -15.99,
              date: "Today"
            },
            {
              name: "Salary Deposit",
              amount: 3500,
              date: "Yesterday"
            },
            {
              name: "Grocery Store",
              amount: -64.37,
              date: "Yesterday"
            }
          ].map((transaction, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-xl">
              <div>
                <p className="font-medium dark:text-white">{transaction.name}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{transaction.date}</p>
              </div>
              <span className={`font-medium ${transaction.amount > 0 ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}`}>
                ₱{Math.abs(transaction.amount).toFixed(2)}
              </span>
            </div>
          ))}
        </div>
      </div>
      
      <AddMoneyModal 
        isOpen={isAddMoneyOpen}
        onClose={() => setIsAddMoneyOpen(false)}
        onSubmit={handleAddMoney}
      />
      
      <SendMoneyModal 
        isOpen={isSendMoneyOpen}
        onClose={() => {
          setIsSendMoneyOpen(false);
          setRecipient('');
          setAmount('');
        }}
        onSubmit={handleSendMoney}
        recipient={recipient}
        setRecipient={setRecipient}
        amount={amount}
        setAmount={setAmount}
      />
      
      <ReceiveMoneyModal 
        isOpen={isReceiveMoneyOpen}
        onClose={() => setIsReceiveMoneyOpen(false)}
      />
    </div>
  );
}