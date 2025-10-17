import { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import IdeaCard from '../components/IdeaCard';

type Idea = { title: string; summary: string; author: string; tension: number };

const defaultIdeas: Idea[] = [
  { title: 'AI Router 自我防禦網關', summary: '結合AI流量判斷與威脅封鎖，讓企業資安自動化。', author: 'Eric Chu', tension: 89.2 },
  { title: '張力場模擬系統', summary: '以UTFT原理可視化原子內張力分布，探索新物理。', author: 'Eric Chu', tension: 94.5 },
  { title: '情緒共鳴燈', summary: '透過腦波與光色互動，將情緒轉成光的語言。', author: 'Guest', tension: 76.8 },
];

export default function HomePage() {
  const [ideas, setIdeas] = useState<Idea[]>(defaultIdeas);

  useEffect(() => {
    // 合併瀏覽器 localStorage 的暫存點子（MVP 模擬資料源）
    try {
      const raw = localStorage.getItem('ideas');
      if (raw) {
        const saved: Idea[] = JSON.parse(raw);
        // 新投稿放在最前面
        setIdeas(prev => [...saved.reverse(), ...prev]);
      }
    } catch {}
  }, []);

  return (
    <div className="relative min-h-screen">
      <div className="starfield" />
      <NavBar />
      <Hero />

      <main className="relative z-10 mx-auto max-w-6xl px-6 pb-16">
        <h3 className="mb-6 text-center text-2xl font-semibold">✨ 今日好點子</h3>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {ideas.map((idea, i) => <IdeaCard key={i} idea={idea} />)}
        </div>

        <section className="mt-16 text-center">
          <h3 className="mb-6 text-2xl font-semibold">🔮 AI 張力推薦</h3>
          <p className="mx-auto mb-10 max-w-xl text-white/80">根據你的興趣，我們找到三個高張力構想：</p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {['AI共創實驗室', '人類張力記錄計畫', '意識資料庫'].map((title, i) => (
              <div key={i} className="card p-6">
                <h4 className="mb-2 font-semibold">{title}</h4>
                <p className="text-sm text-white/80">這是AI依據你的偏好推薦的高張力創意。</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
