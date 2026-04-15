import React, { useState } from 'react';
import { Routes, Route, Navigate, useParams } from 'react-router-dom';
import { Sidebar } from '../components/Sidebar';
import { TopicDetail } from './TopicDetail';
import { initialTopics, TopicData, Problem } from '../data/calculusData';

function TopicRouter({ topics, onAddProblem }: { topics: TopicData[], onAddProblem: (tId: string, p: Problem) => void }) {
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

  return <TopicDetail topic={topic} onAddProblem={onAddProblem} />;
}

export function Topics() {
  const [topics, setTopics] = useState<TopicData[]>(initialTopics);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newTopicName, setNewTopicName] = useState('');
  const [newTopicCategory, setNewTopicCategory] = useState('differential');

  const handleAddTopic = () => {
    if (!newTopicName.trim()) return;
    const newTopic: TopicData = {
      id: newTopicName.toLowerCase().replace(/\s+/g, '-'),
      categoryId: newTopicCategory,
      title: newTopicName,
      icon: 'library_books',
      description: 'A newly added custom topic.',
      theory: <p className="text-secondary font-serif italic">Theory content for {newTopicName} goes here.</p>,
      problems: []
    };
    setTopics([...topics, newTopic]);
    setIsAddModalOpen(false);
    setNewTopicName('');
    setNewTopicCategory('differential');
  };

  const handleAddProblem = (topicId: string, problem: Problem) => {
    setTopics(topics.map(t => {
      if (t.id === topicId) {
        return { ...t, problems: [...t.problems, problem] };
      }
      return t;
    }));
  };

  return (
    <div className="min-h-screen pt-24 pb-20 px-6 max-w-7xl mx-auto w-full flex gap-8">
      <Sidebar topics={topics} onAddTopic={() => setIsAddModalOpen(true)} />
      
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Navigate to={topics[0]?.id || ''} replace />} />
          <Route path=":topicId" element={<TopicRouter topics={topics} onAddProblem={handleAddProblem} />} />
        </Routes>
      </main>

      {isAddModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-surface/80 backdrop-blur-sm">
          <div className="bg-surface-container-lowest p-8 rounded-3xl ghost-border shadow-2xl w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4">Add New Topic</h2>
            <p className="text-secondary text-sm mb-6">Create a new section in your Calculus Hub.</p>
            <input 
              type="text"
              value={newTopicName}
              onChange={(e) => setNewTopicName(e.target.value)}
              placeholder="Topic Name (e.g., Integrals)"
              className="w-full bg-surface-container-low p-4 rounded-xl ghost-border mb-4 focus:outline-none focus:ring-2 focus:ring-primary/50"
              autoFocus
            />
            <select
              value={newTopicCategory}
              onChange={(e) => setNewTopicCategory(e.target.value)}
              className="w-full bg-surface-container-low p-4 rounded-xl ghost-border mb-6 focus:outline-none focus:ring-2 focus:ring-primary/50 text-on-surface"
            >
              <option value="differential">Differential Calculus</option>
              <option value="integral">Integral Calculus</option>
            </select>
            <div className="flex justify-end gap-4">
              <button 
                onClick={() => setIsAddModalOpen(false)}
                className="px-5 py-2 text-secondary hover:bg-surface-container-high rounded-xl font-medium transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={handleAddTopic}
                className="px-5 py-2 bg-primary text-white rounded-xl font-medium hover:bg-primary-container transition-colors"
              >
                Add Topic
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
