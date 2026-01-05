import React from 'react';

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  result: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}