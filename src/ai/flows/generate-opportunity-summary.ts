'use server';

/**
 * @fileOverview This file defines a Genkit flow to generate a concise AI-powered summary of an opportunity.
 *
 * The flow takes in opportunity details (title, description, and URL) and returns a short summary, potential eligibility, and progress.
 *
 * - generateOpportunitySummary - A function that calls the opportunity summary generation flow.
 * - GenerateOpportunitySummaryInput - The input type for the generateOpportunitySummary function.
 * - GenerateOpportunitySummaryOutput - The return type for the generateOpportunitySummary function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateOpportunitySummaryInputSchema = z.object({
  title: z.string().describe('The title of the opportunity.'),
  description: z.string().describe('A detailed description of the opportunity.'),
  url: z.string().describe('The URL of the opportunity.'),
});

export type GenerateOpportunitySummaryInput = z.infer<typeof GenerateOpportunitySummaryInputSchema>;

const GenerateOpportunitySummaryOutputSchema = z.object({
  summary: z.string().describe('A concise summary of the opportunity.'),
  eligibility: z.string().describe('Potential eligibility criteria for the opportunity.'),
  progress: z.string().describe('A short summary of what has been generated.'),
});

export type GenerateOpportunitySummaryOutput = z.infer<typeof GenerateOpportunitySummaryOutputSchema>;

export async function generateOpportunitySummary(
  input: GenerateOpportunitySummaryInput
): Promise<GenerateOpportunitySummaryOutput> {
  return generateOpportunitySummaryFlow(input);
}

const opportunitySummaryPrompt = ai.definePrompt({
  name: 'opportunitySummaryPrompt',
  input: {schema: GenerateOpportunitySummaryInputSchema},
  output: {schema: GenerateOpportunitySummaryOutputSchema},
  prompt: `You are an AI assistant designed to provide concise summaries and eligibility criteria for various opportunities (scholarships, internships, jobs, grants).

  Opportunity Title: {{{title}}}
  Opportunity Description: {{{description}}}
  Opportunity URL: {{{url}}}

  Generate a short, one-sentence summary and list potential eligibility criteria based on the provided information.
  Be as concise as possible.
  Please include a progress update in the output.

  Summary:
  Eligibility:
  Progress: The opportunity summary and potential eligibility have been generated.
  `,
});

const generateOpportunitySummaryFlow = ai.defineFlow(
  {
    name: 'generateOpportunitySummaryFlow',
    inputSchema: GenerateOpportunitySummaryInputSchema,
    outputSchema: GenerateOpportunitySummaryOutputSchema,
  },
  async input => {
    const {output} = await opportunitySummaryPrompt(input);
    return output!;
  }
);
