import React, { useState } from 'react';
import { Routes, Route, Navigate, useParams } from 'react-router-dom';
import { Sidebar } from '../components/Sidebar';
import { TopicDetail } from './TopicDetail';
import { initialTopics, TopicData } from '../data/calculusData';

function TopicRouter({ topics }: { topics: TopicData[] }) {
  const { topicId } = useParams();
  const topic = topics.find(t => t.id === topicId);

  if (!topic) {
    return (
      <div className="bg-surface-container-lowest ghost-border rounded-3xl p-10 lg:p-14 shadow-sm min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <span className="material-symbols-outlined text-6xl text-outline-variant mb-4">construction</span>
          <h2 className="text-2xl font-bold mb-2">Topic Not Found</h2>
          <p className="text-secondary font-serif">This topic does not exist or is under construction.</p>
        </div>
      </div>
    );
  }

  return <TopicDetail topic={topic} />;
}

export function Topics() {
  const [topics] = useState<TopicData[]>(initialTopics);

  return (
    <div className="min-h-screen pt-24 pb-20 px-6 max-w-7xl mx-auto w-full flex flex-col lg:flex-row gap-8">
      <Sidebar topics={topics} />
      
      <main className="flex-1 min-w-0">
        <Routes>
          <Route path="/" element={<Navigate to={topics[0]?.id || ''} replace />} />
          <Route path=":topicId" element={<TopicRouter topics={topics} />} />
        </Routes>
      </main>
    </div>
  );
}
