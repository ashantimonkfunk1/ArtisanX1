/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Artisan {
  id: string;
  name: string;
  trade: string;
  subTrades: string[];
  location: string;
  rating: number;
  completedJobs: number;
  avatar: string;
  verified: boolean;
  phone: string;
  available: boolean;
  emergency: boolean;
  bio: string;
}

export type JobStatus = 'pending' | 'quoted' | 'assigned' | 'in_progress' | 'inspection' | 'completed';

export interface PaymentItem {
  id: string;
  amount: number;
  date: string;
  status: 'pending' | 'paid';
  description: string;
}

export interface ChecklistItem {
  id: string;
  task: string;
  completed: boolean;
}

export interface Job {
  id: string;
  clientName: string;
  clientPhone: string;
  clientEmail: string;
  trade: string;
  description: string;
  status: JobStatus;
  location: string;
  costEstimate: number;
  assignedArtisanId?: string;
  assignedArtisanName?: string;
  groupLeaderName?: string;
  dateCreated: string;
  completionDate?: string;
  photos: string[];
  payments: PaymentItem[];
  progress: number; // 0 to 100
  checklist: ChecklistItem[];
  feedbackRating?: number;
  feedbackComment?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  snippet: string;
  content: string;
  bullets?: { title: string; desc: string }[];
  author: string;
  date: string;
  readTime: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  quote: string;
  rating: number;
  avatar: string;
}

export interface FeaturedProject {
  id: string;
  title: string;
  category: string;
  location: string;
  imageBefore: string;
  imageAfter: string;
  description: string;
  year: string;
}

export interface QuoteRequest {
  id: string;
  clientName: string;
  phone: string;
  email: string;
  trade: string;
  description: string;
  location: string;
  urgency: 'routine' | 'medium' | 'emergency';
  status: 'pending' | 'quoted' | 'declined';
  responseEstimate?: number;
  dateCreated: string;
  photos: string[];
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  date: string;
  read: boolean;
  type: 'info' | 'success' | 'alert';
}
