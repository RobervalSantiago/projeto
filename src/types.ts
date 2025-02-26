export interface ActionFormData {
  clientCode: string;
  productCode: string;
  quantity: number;
  palmPrice: number;
  bonusProductCode: string;
  bonusValue: number;
  bonusQuantity: number;
  consultant: string;
  supervisor: string;
}

export interface BonusFormData {
  orderCode: string;
  observation: string;
}

export interface CalculationResult {
  requestedPrice: number;
  investment: number;
  orderValue: number;
}

export interface ActionResult extends ActionFormData, CalculationResult {
  formattedText: string;
}

export interface BonusResult extends ActionResult, BonusFormData {
  formattedBonusText: string;
}