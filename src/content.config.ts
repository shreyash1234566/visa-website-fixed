import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const uscisQuarterlyStats = defineCollection({
  loader: glob({ pattern: "*.json", base: "./src/content/uscisQuarterlyStats" }),
  schema: z.object({
    formType: z.string(),        // e.g. "I-485"
    formName: z.string(),        // e.g. "Adjustment of Status"
    fiscalYear: z.number(),
    quarter: z.number(),         // 1-4
    receipts: z.number().optional(),
    completions: z.number().optional(),
    pending: z.number().optional(),
    rfeRate: z.number().optional(),   // % of cases issued a Request for Evidence
    sourceUrl: z.string(),        // the exact USCIS XLSX this came from
    lastUpdated: z.string(),     // ISO date
  }),
});

const visaBulletin = defineCollection({
  loader: glob({ pattern: "*.json", base: "./src/content/visaBulletin" }),
  schema: z.object({
    month: z.string(),
    category: z.string(),
    country: z.string(),
    finalActionDate: z.string().nullable(),
    dateForFiling: z.string().nullable(),
  }),
});

export const collections = { uscisQuarterlyStats, visaBulletin };
