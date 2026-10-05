import type { ComponentType } from "react";
import { AiSearchInvestorAwarenessContent } from "./ai-search-investor-awareness";
import { FacebookInstagramInvestorAdvertisingContent } from "./facebook-instagram-investor-advertising";
import { GrowthStockContent } from "./growth-stock";
import { InvestorEmailMarketingContent } from "./investor-email-marketing-public-companies";
import { InvestorRelationsContent } from "./investor-relations";
import { InternationalGrowthContent } from "./international-growth";
import { NasdaqSmallCapVisibilityContent } from "./nasdaq-small-cap-investor-visibility";
import { OtcqbCanadaArticleContent } from "./otcqb-investor-awareness-canada";
import { StakeholderConfidenceContent } from "./stakeholder-confidence";

export const articleContent: Record<string, ComponentType> = {
  "the-next-great-growth-stock": GrowthStockContent,
  "investor-relations-best-practices": InvestorRelationsContent,
  "building-stakeholder-confidence": StakeholderConfidenceContent,
  "international-growth": InternationalGrowthContent,
  "otcqb-investor-awareness-canada": OtcqbCanadaArticleContent,
  "facebook-instagram-investor-advertising":
    FacebookInstagramInvestorAdvertisingContent,
  "investor-email-marketing-public-companies": InvestorEmailMarketingContent,
  "nasdaq-small-cap-investor-visibility": NasdaqSmallCapVisibilityContent,
  "ai-search-investor-awareness": AiSearchInvestorAwarenessContent,
};
