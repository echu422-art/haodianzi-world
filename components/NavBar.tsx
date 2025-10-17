import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-primary/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold tracking-tight">💡 好點子網站</Link>
        <div className="hidden gap-6 text-sm md:flex">
          <Link href="/" className="hover:opacity-80">首頁</Link>
          <Link href="/submit" className="hover:opacity-80">發表點子</Link>
          <a className="cursor-not-allowed opacity-50">張力星圖（soon）</a>
          <a className="cursor-not-allowed opacity-50">關於我們</a>
        </div>
        <button className="btn-ghost">登入 / 註冊</button>
      </div>
    </nav>
  );
}
