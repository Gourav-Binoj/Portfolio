import KnowledgeManager from '@/components/knowledge-manager';

export const metadata = {
  title: 'Admin - Portfolio',
  description: 'Manage your portfolio knowledge base',
};

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Portfolio Admin</h1>
          <p className="text-muted-foreground">
            Manage your knowledge base entries that power the AI chatbot. Add your resume, projects,
            skills, certifications, and education details.
          </p>
        </div>

        <KnowledgeManager />

        <div className="mt-8 p-4 bg-muted rounded-lg border border-border">
          <h3 className="font-semibold text-foreground mb-2">How to use:</h3>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• Add entries about your experience, skills, projects, certifications, and education</li>
            <li>• The AI chatbot will use these entries to answer questions about you</li>
            <li>• Use natural language and be descriptive for better AI responses</li>
            <li>• You can edit or delete entries at any time</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
