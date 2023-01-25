import { Inter } from '@next/font/google';
import Button from '@/components/Button';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className="mx-auto flex max-w-sm items-center space-x-4 rounded-xl bg-white p-6 shadow-lg">
      <div className="shrink-0">
        <img className="h-12 w-12" src="/vercel.svg" alt="ChitChat Logo" />
      </div>
      <div>
        <div className="text-xl font-medium text-black">ChitChat</div>
        <p className="text-slate-500">You have a new message!</p>
        <Button>Click me</Button>
      </div>
    </div>
  );
}
