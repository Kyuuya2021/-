import React from 'react';

export type Language = 'en' | 'jp';

export interface LocaleString {
  en: string;
  jp: string;
}

export interface TimelineItem {
  date: string;
  title: LocaleString;
  description?: LocaleString;
  link?: string;
  linkText?: string;
  highlight?: boolean;
}

export interface SkillCategory {
  category: LocaleString;
  items: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon?: React.ReactNode;
}