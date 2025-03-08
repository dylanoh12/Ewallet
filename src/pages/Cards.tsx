import React, { useState } from "react";
import { Plus, CreditCard } from "lucide-react";
import { AddCardModal } from '../components/AddCardModal';
import { VisaIcon, MastercardIcon } from '../components/CardIcons';

interface CardData {
  cardNumber: string;
  cardHolder: string;
  expiryDate: string;
  cvv: string;
  type: 'visa' | 'mastercard';
  lastFourDigits?: string;  // Add this line
}

export function Cards() {
  const [isAddCardOpen, setIsAddCardOpen] = useState(false);
  const [cards, setCards] = useState<CardData[]>([
    {
      cardNumber: "4111 1111 1111 1111",
      cardHolder: "ADRIAN DE MILLIONES",
      expiryDate: "08/28",
      cvv: "888",
      type: "visa",
      lastFourDigits: "1111"  // Add this line
    }
  ]);

  const handleAddCard = (cardData: CardData) => {
    setCards([...cards, cardData]);
  };

  return (
    <div className="p-4 dark:bg-gray-800">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold dark:text-white">Cards</h1>
        <button
          onClick={() => setIsAddCardOpen(true)}
          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full dark:text-white"
        >
          <Plus className="w-6 h-6" />
        </button>
      </div>

      <div className="space-y-4">
        {cards.map((card, index) => (
          <div key={index} className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-6 text-white relative overflow-hidden">
            {/* Card chip and expiry */}
            <div className="flex justify-between items-start mb-8">
              <div className="w-12 h-10 bg-yellow-300/30 rounded-lg border border-yellow-300/50" />
              <span className="text-sm font-medium">
                {card.expiryDate}
              </span>
            </div>

            {/* Card number */}
            <p className="font-mono text-xl mb-8 tracking-widest">
              {card.cardNumber.match(/.{1,4}/g)?.join(' ')}
            </p>

            {/* Card holder and type */}
            <div className="flex justify-between items-center">
              <div className="space-y-1">
                <p className="text-xs text-white/70">Card Holder</p>
                <p className="font-medium">{card.cardHolder}</p>
              </div>
              <div className="h-8 w-auto">
                {card.type === 'visa' ? (
                  <VisaIcon className="w-12 h-12 text-white" />
                ) : (
                  <MastercardIcon className="w-12 h-12 text-white" />
                )}
              </div>
            </div>

            {/* Background pattern */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -right-8 -top-8 w-64 h-64 bg-white/5 rounded-full" />
              <div className="absolute -left-8 -bottom-8 w-64 h-64 bg-white/5 rounded-full" />
            </div>
          </div>
        ))}

        {/* No cards message */}
        {cards.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            <CreditCard className="w-12 h-12 mx-auto mb-2 opacity-50" />
            <p>No cards added yet</p>
          </div>
        )}
      </div>

      <AddCardModal
        isOpen={isAddCardOpen}
        onClose={() => setIsAddCardOpen(false)}
        onSubmit={handleAddCard}
      />
    </div>
  );
}