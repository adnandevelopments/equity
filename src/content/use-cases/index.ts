import type { ComponentType } from "react";
import { CanadaToUsInvestorReachContent } from "./canada-to-us-investor-reach";
import { NasdaqSmallCapSocialContent } from "./nasdaq-small-cap-social-campaigns";
import { OtcqbCanadaAwarenessContent } from "./otcqb-canada-investor-awareness";
import { PermissionBasedEmailContent } from "./permission-based-investor-email";

export const useCaseContent: Record<string, ComponentType> = {
  "otcqb-canada-investor-awareness": OtcqbCanadaAwarenessContent,
  "nasdaq-small-cap-social-campaigns": NasdaqSmallCapSocialContent,
  "permission-based-investor-email": PermissionBasedEmailContent,
  "canada-to-us-investor-reach": CanadaToUsInvestorReachContent,
};
