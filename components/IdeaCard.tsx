type Idea = { title: string; summary: string; author: string; tension: number; };

export default function IdeaCard({ idea }: { idea: Idea }) {
  return (
    <div className="card p-6 transition hover:shadow-xl">
      <h4 className="mb-2 text-lg font-semibold">{idea.title}</h4>
      <p className="mb-4 text-sm text-white/80">{idea.summary}</p>
      <div className="flex items-center justify-between text-xs text-white/60">
        <span>作者：{idea.author}</span>
        <span>張力指數：{idea.tension.toFixed(1)}</span>
      </div>
    </div>
  );
}
