import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Menu, Home, BookOpen, Briefcase, Heart, Users } from 'lucide-react';

interface MobileNavProps {
  onNavigate: (view: string) => void;
  currentView?: string;
}

export function MobileNav({ onNavigate, currentView }: MobileNavProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="sm" className="lg:hidden">
          <Menu className="w-5 h-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-64">
        <nav className="flex flex-col gap-4 mt-8">
          <button
            onClick={() => onNavigate('dashboard')}
            className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
              currentView === 'dashboard' ? 'bg-indigo-50 text-indigo-600' : 'text-slate-600 hover:bg-slate-50'
            }`}
          >
            <Home className="w-5 h-5" />
            <span>Dashboard</span>
          </button>
          <button
            onClick={() => onNavigate('learning')}
            className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
              currentView === 'learning' ? 'bg-indigo-50 text-indigo-600' : 'text-slate-600 hover:bg-slate-50'
            }`}
          >
            <BookOpen className="w-5 h-5" />
            <span>Aprendizagem</span>
          </button>
          <button
            onClick={() => onNavigate('opportunities')}
            className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
              currentView === 'opportunities' ? 'bg-indigo-50 text-indigo-600' : 'text-slate-600 hover:bg-slate-50'
            }`}
          >
            <Briefcase className="w-5 h-5" />
            <span>Oportunidades</span>
          </button>
          <button
            onClick={() => onNavigate('wellness')}
            className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
              currentView === 'wellness' ? 'bg-indigo-50 text-indigo-600' : 'text-slate-600 hover:bg-slate-50'
            }`}
          >
            <Heart className="w-5 h-5" />
            <span>Bem-Estar</span>
          </button>
          <button
            onClick={() => onNavigate('community')}
            className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
              currentView === 'community' ? 'bg-indigo-50 text-indigo-600' : 'text-slate-600 hover:bg-slate-50'
            }`}
          >
            <Users className="w-5 h-5" />
            <span>Comunidade</span>
          </button>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
