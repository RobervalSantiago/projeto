export function calculateAction(data: {
  palmPrice: number;
  bonusValue: number;
  quantity: number;
  bonusQuantity: number;
}) {
  const requestedPrice = data.palmPrice - data.bonusValue;
  const orderValue = data.quantity * data.palmPrice;
  const totalBonusValue = data.bonusValue * data.bonusQuantity;
  const investment = (totalBonusValue / orderValue) * 100;

  return {
    requestedPrice,
    investment,
    orderValue,
    totalBonusValue
  };
}

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value);
}

export function formatActionResult(data: any): string {
  const totalBonusValue = data.bonusValue * data.bonusQuantity;
  
  return `*Solicitação de ação:*

Código/Produto: ${data.productCode}
Quantidade do Produto: ${data.quantity}
Preço do Palm: ${formatCurrency(data.palmPrice)}

*Ação*

Preço solicitado: ${formatCurrency(data.requestedPrice)}
Investimento: ${data.investment.toFixed(2)}%
Quantidade bonificada: ${data.bonusQuantity} und
Valor Bonificação: ${formatCurrency(totalBonusValue)}
Valor pedido: ${formatCurrency(data.orderValue)}
Código/Produto Bonificado: ${data.bonusProductCode}

Código/Razão do Cliente: ${data.clientCode}`;
}

export function formatBonusResult(data: any): string {
  const totalBonusValue = data.bonusValue * data.bonusQuantity;
  
  return `*Bonificação*

*Código/Razão do Cliente:* ${data.clientCode}
*Consultor:* ${data.consultant}
*Cód do pedido:* ${data.orderCode}
*Código/Produto Bonificado:* ${data.bonusProductCode}
*Quantidade:* ${data.bonusQuantity} UND
*Valor da bonificação (unitário):* ${formatCurrency(data.bonusValue)}
*Valor da bonificação (total):* ${formatCurrency(totalBonusValue)}
*Observação:* ${data.observation}`;
}