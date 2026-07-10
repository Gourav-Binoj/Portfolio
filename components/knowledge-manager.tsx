'use client';

import { useState, useEffect } from 'react';
import { Plus, Trash2, Edit2 } from 'lucide-react';

interface KnowledgeEntry {
  id: string;
  content: string;
  category: string;
  timestamp: Date;
}

export default function KnowledgeManager() {
  const [knowledge, setKnowledge] = useState<KnowledgeEntry[]>([]);
  const [newContent, setNewContent] = useState('');
  const [newCategory, setNewCategory] = useState('experience');
  const [isLoading, setIsLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    loadKnowledge();
  }, []);

  const loadKnowledge = async () => {
    try {
      const response = await fetch('/api/knowledge');
      const data = await response.json();
      setKnowledge(data.knowledge || []);
    } catch (error) {
      console.error('[v0] Failed to load knowledge:', error);
    }
  };

  const addEntry = async () => {
    if (!newContent.trim()) {
      alert('Please enter content');
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch('/api/knowledge', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: newContent, category: newCategory }),
      });

      if (response.ok) {
        setNewContent('');
        setShowForm(false);
        loadKnowledge();
      }
    } catch (error) {
      console.error('[v0] Failed to add entry:', error);
      alert('Failed to add entry');
    } finally {
      setIsLoading(false);
    }
  };

  const deleteEntry = async (id: string) => {
    if (!confirm('Are you sure?')) return;

    const updated = knowledge.filter((k) => k.id !== id);
    try {
      const response = await fetch('/api/knowledge', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ knowledge: updated }),
      });

      if (response.ok) {
        setKnowledge(updated);
      }
    } catch (error) {
      console.error('[v0] Failed to delete:', error);
      alert('Failed to delete entry');
    }
  };

  const categories = ['experience', 'skills', 'projects', 'certifications', 'education'];

  return (
    <div className="p-6 bg-background rounded-lg border border-border max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-foreground">Knowledge Base Manager</h2>
        <button
          onClick={() => setShowForm(!showForm)}
          className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
        >
          <Plus size={18} />
          Add Entry
        </button>
      </div>

      {showForm && (
        <div className="mb-6 p-4 bg-muted rounded-lg border border-border">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Category
              </label>
              <select
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
                className="w-full px-3 py-2 bg-background border border-border rounded-lg text-foreground"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Content
              </label>
              <textarea
                value={newContent}
                onChange={(e) => setNewContent(e.target.value)}
                placeholder="Add your information here..."
                className="w-full px-3 py-2 bg-background border border-border rounded-lg text-foreground resize-none"
                rows={4}
              />
            </div>
            <div className="flex gap-2">
              <button
                onClick={addEntry}
                disabled={isLoading}
                className="flex-1 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 disabled:opacity-50 transition-colors"
              >
                {isLoading ? 'Adding...' : 'Add Entry'}
              </button>
              <button
                onClick={() => setShowForm(false)}
                className="flex-1 px-4 py-2 bg-muted text-foreground rounded-lg hover:bg-muted/80 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="space-y-3">
        {knowledge.map((entry) => (
          <div
            key={entry.id}
            className="p-4 bg-muted rounded-lg border border-border flex items-start justify-between gap-4"
          >
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-block px-2 py-1 text-xs font-semibold rounded bg-primary/10 text-primary">
                  {entry.category}
                </span>
                <span className="text-xs text-muted-foreground">
                  {new Date(entry.timestamp).toLocaleDateString()}
                </span>
              </div>
              <p className="text-foreground text-sm">{entry.content}</p>
            </div>
            <button
              onClick={() => deleteEntry(entry.id)}
              className="text-destructive hover:bg-destructive/10 p-2 rounded transition-colors"
              title="Delete entry"
            >
              <Trash2 size={18} />
            </button>
          </div>
        ))}
        {knowledge.length === 0 && (
          <p className="text-center text-muted-foreground py-8">
            No entries yet. Add one to get started!
          </p>
        )}
      </div>
    </div>
  );
}
