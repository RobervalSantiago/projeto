import React, { useState } from 'react';
import { ActionForm } from './components/ActionForm';
import { BonusForm } from './components/BonusForm';
import { ResultDisplay } from './components/ResultDisplay';
import { calculateAction, formatActionResult, formatBonusResult } from './utils/calculations';
import { ActionFormData, BonusFormData, ActionResult, BonusResult } from './types';

function App() {
  const [actionResult, setActionResult] = useState<ActionResult | null>(null);
  const [bonusResult, setBonusResult] = useState<BonusResult | null>(null);
  const [showBonusForm, setShowBonusForm] = useState(false);

  const handleActionSubmit = (data: ActionFormData) => {
    const calculations = calculateAction(data);
    const result: ActionResult = {
      ...data,
      ...calculations,
      formattedText: formatActionResult({ ...data, ...calculations })
    };
    setActionResult(result);
    setShowBonusForm(true);
    setBonusResult(null);
  };

  const handleBonusSubmit = (bonusData: BonusFormData) => {
    if (!actionResult) return;

    const result: BonusResult = {
      ...actionResult,
      ...bonusData,
      formattedBonusText: formatBonusResult({ ...actionResult, ...bonusData })
    };
    setBonusResult(result);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            Calculadora de Bonificação
          </h1>
          <p className="mt-2 text-gray-600">
            Preencha os dados abaixo para calcular a ação e bonificação
          </p>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Dados da Ação</h2>
          <ActionForm onSubmit={handleActionSubmit} />
        </div>

        {actionResult && (
          <div className="space-y-8">
            <ResultDisplay result={actionResult} type="action" />

            {showBonusForm && (
              <div className="bg-white shadow rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-4">Dados da Bonificação</h2>
                <BonusForm onSubmit={handleBonusSubmit} />
              </div>
            )}

            {bonusResult && (
              <ResultDisplay result={bonusResult} type="bonus" />
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;