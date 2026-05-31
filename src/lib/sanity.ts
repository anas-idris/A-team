import { createClient, type SanityClient } from '@sanity/client';

let _client: SanityClient | null = null;

function getClient(): SanityClient {
  if (!_client) {
    _client = createClient({
      projectId: import.meta.env.SANITY_PROJECT_ID || '',
      dataset: import.meta.env.SANITY_DATASET || 'production',
      apiVersion: '2024-01-01',
      useCdn: true,
      token: import.meta.env.SANITY_TOKEN,
      stega: { enabled: false },
    });
  }
  return _client;
}

export interface PortfolioItem {
  _id: string;
  _type: string;
  title: string;
  slug: { _type: string; current: string };
  description: string;
  category: string;
  imageUrl: {
    _type: string;
    asset: {
      _id: string;
      url: string;
      mimeType: string;
      metadata: {
        dimensions: { width: number; height: number };
      };
    };
  };
  screenshots?: Array<{
    _type: string;
    asset: {
      _id: string;
      url: string;
      mimeType: string;
    };
  }>;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  sortOrder?: number;
  publishedAt: string;
}

export async function getAllPortfolioItems(): Promise<PortfolioItem[]> {
  if (!import.meta.env.SANITY_PROJECT_ID) {
    console.warn('SANITY_PROJECT_ID not set — returning empty portfolio');
    return [];
  }

  try {
    const query = `*[_type == "portfolioItem"] | order(sortOrder asc) {
      _id, _type, title, slug, description, category,
      "imageUrl": imageUrl.asset->,
      "screenshots": screenshots[].asset->,
      techStack, liveUrl, githubUrl, sortOrder, publishedAt
    }`;
    return await getClient().fetch(query);
  } catch (error) {
    console.warn('Sanity fetch failed — returning empty portfolio:', error);
    return [];
  }
}

export async function getPortfolioItemBySlug(slug: string): Promise<PortfolioItem | null> {
  if (!import.meta.env.SANITY_PROJECT_ID) return null;

  try {
    const query = `*[_type == "portfolioItem" && slug.current == $slug][0] {
      _id, _type, title, slug, description, category,
      "imageUrl": imageUrl.asset->,
      "screenshots": screenshots[].asset->,
      techStack, liveUrl, githubUrl, sortOrder, publishedAt
    }`;
    return await getClient().fetch(query, { slug });
  } catch (error) {
    console.warn('Sanity fetch failed for slug:', slug, error);
    return null;
  }
}
