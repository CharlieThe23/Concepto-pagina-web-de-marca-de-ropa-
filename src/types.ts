import { ReleaseStatus } from './config/dropConfig';

export type Category = 
  | 'jerseys' 
  | 'chandales' 
  | 'pantalones' 
  | 'accesorios' 
  | 'archive'
  | 'knitwear' 
  | 'outerwear' 
  | 'bottoms' 
  | 'hardware';

export interface GalleryImage {
  id: string;
  label: string;
  src: string;
  alt: string;
  objectPosition?: string;
  viewType: 'model-front' | 'model-back' | 'product-front' | 'product-back' | 'rack-full';
}

export interface Product {
  id: string;
  code: string;
  title: string;
  category: Category;
  categoryLabel: string;
  priceEUR: number | null;
  priceConfigured: boolean;
  currency: 'EUR';
  description: string;
  features?: string[];
  fabricSpecs?: string;
  silhouette?: string;
  image: string;
  gallery?: GalleryImage[];
  status: ReleaseStatus | 'AVAILABLE' | 'FEW UNITS' | 'EXTRACTED';
  sizes: string[];
  isStarProduct?: boolean;
  isPreOrder?: boolean;
  variants?: {
    id: string;
    name: string;
    colorCode: string;
    image: string;
    backImage?: string;
  }[];
}

export interface CartItem {
  product: Product;
  size: string;
  quantity: number;
}
