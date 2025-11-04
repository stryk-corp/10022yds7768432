'use server';
/**
 * @fileOverview Suggests potential eligibility criteria for an opportunity.
 *
 * - suggestOpportunityEligibility - A function that suggests eligibility criteria for an opportunity.
 * - SuggestOpportunityEligibilityInput - The input type for the suggestOpportunityEligibility function.
 * - SuggestOpportunityEligibilityOutput - The return type for the suggestOpportunityEligibility function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestOpportunityEligibilityInputSchema = z.object({
  opportunityDescription: z
    .string()
    .describe('The description of the opportunity.'),
});
export type SuggestOpportunityEligibilityInput = z.infer<
  typeof SuggestOpportunityEligibilityInputSchema
>;

const SuggestOpportunityEligibilityOutputSchema = z.object({
  eligibilityCriteria: z
    .string()
    .describe(
      'A list of potential eligibility criteria for the opportunity.'
    ),
});
export type SuggestOpportunityEligibilityOutput = z.infer<
  typeof SuggestOpportunityEligibilityOutputSchema
>;

export async function suggestOpportunityEligibility(
  input: SuggestOpportunityEligibilityInput
): Promise<SuggestOpportunityEligibilityOutput> {
  return suggestOpportunityEligibilityFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestOpportunityEligibilityPrompt',
  input: {schema: SuggestOpportunityEligibilityInputSchema},
  output: {schema: SuggestOpportunityEligibilityOutputSchema},
  prompt: `You are an AI assistant helping users determine their eligibility for various opportunities.

  Given the following opportunity description, suggest potential eligibility criteria that a user should meet to qualify for the opportunity. 

  Opportunity Description: {{{opportunityDescription}}}

  Eligibility Criteria: `,
});

const suggestOpportunityEligibilityFlow = ai.defineFlow(
  {
    name: 'suggestOpportunityEligibilityFlow',
    inputSchema: SuggestOpportunityEligibilityInputSchema,
    outputSchema: SuggestOpportunityEligibilityOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
