export interface Product {
  id: string;
  name: string;
  category: 'Flowers' | 'Chocolates' | 'Keychains' | 'Polaroids' | 'Special';
  subtype?: string;
  price: number;
  image: string;
  description: string;
}

export interface HamperItem extends Product {
  quantity: number;
}

export interface GiftRequest {
  contactName: string;
  contactMobile: string;
  contactEmail: string;
  recipient: string;
  occasion: string;
  preferences: string;
  budget: string;
  vibe: string;
}

export interface CustomSourceRequest {
  itemType: string;
  description: string;
  dateNeeded: string;
  budget: string;
}

export enum Page {
  HOME = 'home',
  SHOP = 'shop',
  BUILD_HAMPER = 'build-hamper',
  HELP_ME_DECIDE = 'help-me-decide',
  CUSTOM_REQUEST = 'custom-request',
}