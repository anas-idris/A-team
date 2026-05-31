import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { portfolioItem } from './schemas/portfolioItem';

export default defineConfig({
  name: 'spent-portfolio',
  title: 'Spent Portfolio CMS',
  projectId: process.env.SANITY_PROJECT_ID!,
  dataset: process.env.SANITY_DATASET || 'production',
  plugins: [structureTool()],
  schema: {
    types: [portfolioItem],
  },
});
