import React from 'react';
import { Share2, Copy } from 'lucide-react';
import { ActionResult, BonusResult } from '../types';

interface ResultDisplayProps {
  result: ActionResult | BonusResult;
  type: 'action' | 'bonus';
}

export function ResultDisplay({ result, type }: ResultDisplayProps) {
  const handleCopy = async () => {
    const text = type === 'action' ? result.formattedText : (result as BonusResult).formattedBonusText;
    await navigator.clipboard.writeText(text);
  };

  const handleShare = async () => {
    const text = type === 'action' ? result.formattedText : (result as BonusResult).formattedBonusText;
    if (navigator.share) {
      try {
        await navigator.share({
          text: text
        });
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      await handleCopy();
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
      <pre className="whitespace-pre-wrap font-mono text-sm bg-gray-50 p-4 rounded-md">
        {type === 'action' ? result.formattedText : (result as BonusResult).formattedBonusText}
      </pre>

      <div className="flex justify-end space-x-2">
        <button
          onClick={handleCopy}
          className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <Copy className="w-4 h-4 mr-2" />
          Copiar
        </button>
        <button
          onClick={handleShare}
          className="flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <Share2 className="w-4 h-4 mr-2" />
          Compartilhar
        </button>
      </div>
    </div>
  );
}