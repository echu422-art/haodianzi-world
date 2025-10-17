import { useState, useEffect } from 'react';
import Link from 'next/link';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

type Idea = { title: string; summary: string; author: string; tension: number };

export default function SubmitPage() {
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [author, setAuthor] = useState('');
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setAuthor('訪客');
  }, []);

  const handleSave = () => {
    if (!title || !summary) return;
    setSaving(true);
    const idea: Idea = { title, summary, author: author || '訪客', tension: 70 + Math.random() * 25 };
    try {
      const raw = localStorage.getItem('ideas');
      const arr: Idea[] = raw ? JSON.parse(raw) : [];
      arr.push(idea);
      localStorage.setItem('ideas', JSON.stringify(arr));
      setSaved(true);
      setTitle(''); setSummary('');
    } catch (e) {
      console.error(e);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="min-h-screen">
      <div className="starfield" />
      <NavBar />
      <main className="relative z-10 mx-auto max-w-2xl px-6 py-16">
        <h1 className="mb-2 text-3xl font-bold">發表你的好點子</h1>
        <p className="mb-8 text-white/70">先填一個標題與簡短描述，我們會在首頁顯示（本地暫存，僅此裝置可見，MVP 測試用）。</p>

        <div className="card p-6 space-y-4">
          <div>
            <label className="mb-2 block text-sm text-white/70">標題</label>
            <input value={title} onChange={e => setTitle(e.target.value)} placeholder="輸入點子標題"
                   className="w-full rounded-xl border border-white/20 bg-white/5 p-3 outline-none placeholder-white/40" />
          </div>
          <div>
            <label className="mb-2 block text-sm text-white/70">摘要</label>
            <textarea value={summary} onChange={e => setSummary(e.target.value)} placeholder="簡短描述你的構想..."
                      rows={5}
                      className="w-full rounded-xl border border-white/20 bg-white/5 p-3 outline-none placeholder-white/40" />
          </div>
          <div className="flex items-center gap-3">
            <button onClick={handleSave} disabled={saving || !title || !summary}
                    className="btn-primary disabled:opacity-50">{saving ? '發佈中...' : '發佈'}</button>
            <Link href="/" className="btn-ghost">回首頁</Link>
          </div>
          {saved && <p className="text-emerald-300">已發佈！重新整理首頁即可看到你的點子（僅此裝置）。</p>}
        </div>
      </main>
      <Footer />
    </div>
  );
}
