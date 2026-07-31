import type { ComponentType } from "react";
import { GrowthStockContent } from "./growth-stock";
import { InvestorRelationsContent } from "./investor-relations";
import { StakeholderConfidenceContent } from "./stakeholder-confidence";
import { InternationalGrowthContent } from "./international-growth";

export const articleContent: Record<string, ComponentType> = {
  "the-next-great-growth-stock": GrowthStockContent,
  "investor-relations-best-practices": InvestorRelationsContent,
  "building-stakeholder-confidence": StakeholderConfidenceContent,
  "international-growth": InternationalGrowthContent,
};
