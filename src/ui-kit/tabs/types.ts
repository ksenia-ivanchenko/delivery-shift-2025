import { ReactNode } from 'react';

export type Tab = {
  id: string;
  label: string;
  content: ReactNode;
};

export type TabsProps = {
  tabs: Tab[];
  defaultActiveTabId?: string;
};
