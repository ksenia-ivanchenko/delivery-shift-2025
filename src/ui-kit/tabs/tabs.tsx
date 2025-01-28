import { useState } from 'react';
import { TabsProps } from './types';
import styles from './tabs.module.scss';
import clsx from 'clsx';

export const Tabs = ({ tabs, defaultActiveTabId }: TabsProps) => {
  const [activeTabId, setActiveTabId] = useState(defaultActiveTabId || tabs[0]?.id);
  const handleTabClick = (tabId: string) => {
    setActiveTabId(tabId);
  };
  const activeTab = tabs.find((tab) => tab.id === activeTabId);

  return (
    <div className={styles.tabsContainer}>
      <div className={styles.tabHeaders}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={clsx(styles.tabButton, tab.id === activeTabId && styles.active)}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className={styles.tabContent}>{activeTab?.content}</div>
    </div>
  );
};
