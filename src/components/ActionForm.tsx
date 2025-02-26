import React from 'react';
import { ActionFormData } from '../types';

interface ActionFormProps {
  onSubmit: (data: ActionFormData) => void;
}

export function ActionForm({ onSubmit }: ActionFormProps) {
  const [formData, setFormData] = React.useState<ActionFormData>({
    clientCode: '',
    productCode: '',
    quantity: 0,
    palmPrice: 0,
    bonusProductCode: '',
    bonusValue: 0,
    bonusQuantity: 0,
    consultant: '',
    supervisor: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name.includes('quantity') || name.includes('Price') || name.includes('Value')
        ? parseFloat(value) || 0
        : value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Código/Razão do Cliente
          </label>
          <input
            type="text"
            name="clientCode"
            value={formData.clientCode}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Código/Produto
          </label>
          <input
            type="text"
            name="productCode"
            value={formData.productCode}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Quantidade do Produto
          </label>
          <input
            type="number"
            name="quantity"
            value={formData.quantity || ''}
            onChange={handleChange}
            min="0"
            step="1"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Preço no Palm
          </label>
          <input
            type="number"
            name="palmPrice"
            value={formData.palmPrice || ''}
            onChange={handleChange}
            min="0"
            step="0.01"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Código/Produto Bonificado
          </label>
          <input
            type="text"
            name="bonusProductCode"
            value={formData.bonusProductCode}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Quantidade do Produto Bonificado
          </label>
          <input
            type="number"
            name="bonusQuantity"
            value={formData.bonusQuantity || ''}
            onChange={handleChange}
            min="0"
            step="1"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Valor do Produto Bonificado
          </label>
          <input
            type="number"
            name="bonusValue"
            value={formData.bonusValue || ''}
            onChange={handleChange}
            min="0"
            step="0.01"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Consultor
          </label>
          <input
            type="text"
            name="consultant"
            value={formData.consultant}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Supervisor
          </label>
          <input
            type="text"
            name="supervisor"
            value={formData.supervisor}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Calcular Ação
        </button>
      </div>
    </form>
  );
}