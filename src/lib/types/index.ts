export interface SocialLink {
  platform: string;
  url: string;
  icon: 'linkedin';
}

export interface WorkProject {
  title: string;
  description: string;
  category: string;
  year: string;
  tags: string[];
  link: string;
}

export interface SelfProject {
  id: string;
  title: string;
  description: string;
  category: string;
  year: string;
  tags: string[];
  link: string;
}

export interface ProjectFeature {
  icon: string;
  title: string;
  description: string;
}

export interface AppScreenshot {
  image: string;
  caption: string;
}

export interface ProductProject {
  title: string;
  description: string;
  tagline: string;
  features: ProjectFeature[];
  techStack: string[];
  screenshots: AppScreenshot[];
}

export interface ContactInfo {
  email: string;
  phone: string;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
  website?: string;
}

export interface FormValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export interface FormState {
  isSubmitting: boolean;
  isSuccess: boolean;
  isError: boolean;
  charCount: number;
}

export interface PageProps {
  title: string;
  description: string;
}
