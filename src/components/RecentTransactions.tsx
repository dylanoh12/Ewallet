import { Clock, ArrowUpRight, ArrowDownLeft, ShoppingBag, Briefcase, Film, Coffee } from 'lucide-react';

const transactions = [
  {
    id: 1,
    name: "Netflix Subscription",
    amount: -28.35,
    date: "Today",
    time: "10:30 AM",
    category: "Entertainment",
    icon: Film
  },
  {
    id: 2,
    name: "Salary Deposit",
    amount: 3500,
    date: "Yesterday",
    time: "9:00 AM",
    category: "Income",
    icon: Briefcase
  },
  {
    id: 3,
    name: "Grocery Store",
    amount: -280.028,
    date: "Yesterday",
    time: "2:15 PM",
    category: "Shopping",
    icon: ShoppingBag
  },
  {
    id: 4,
    name: "Starbucks Coffee",
    amount: -17.35,
    date: "Yesterday",
    time: "8:45 AM",
    category: "Food & Drinks",
    icon: Coffee
  },
  {
    id: 5,
    name: "Money Sent to Alice",
    amount: -35,
    date: "2 days ago",
    time: "3:20 PM",
    category: "Transfer",
    icon: ArrowUpRight
  },
  {
    id: 6,
    name: "Money Received from Bob",
    amount: 350,
    date: "2 days ago",
    time: "11:30 AM",
    category: "Transfer",
    icon: ArrowDownLeft
  }
];

export const RecentTransactions = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold">Recent Transactions</h3>
        <button className="text-blue-600 text-sm font-medium hover:underline">
          View All
        </button>
      </div>
      <div className="space-y-4">
        {transactions.map((transaction) => {
          const Icon = transaction.icon;
          return (
            <div 
              key={transaction.id} 
              className="flex items-center justify-between p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-full ${
                  transaction.amount > 0 ? 'bg-green-100' : 'bg-red-100'
                }`}>
                  <Icon className={`w-5 h-5 ${
                    transaction.amount > 0 ? 'text-green-600' : 'text-red-600'
                  }`} />
                </div>
                <div>
                  <p className="font-medium">{transaction.name}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <span>{transaction.category}</span>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{transaction.time}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <span className={`font-medium ${
                  transaction.amount > 0 ? 'text-green-600' : 'text-red-600'
                }`}>
                  ${Math.abs(transaction.amount).toFixed(2)}
                </span>
                <p className="text-sm text-gray-500">{transaction.date}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};