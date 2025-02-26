import React from 'react';
import { BonusFormData } from '../types';

interface BonusFormProps {
  onSubmit: (data: BonusFormData) => void;
}

export function BonusForm({ onSubmit }: BonusFormProps) {
  const [formData, setFormData] = React.useState<BonusFormData>({
    orderCode: '',
    observation: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Código do Pedido
        </label>
        <input
          type="text"
          name="orderCode"
          value={formData.orderCode}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Observação
        </label>
        <textarea
          name="observation"
          value={formData.observation}
          onChange={handleChange}
          rows={3}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        >
          Calcular Bonificação
        </button>
      </div>
    </form>
  );
}