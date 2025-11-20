import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { 
  Sparkles, 
  Brain, 
  TrendingUp, 
  Heart, 
  Users, 
  BookOpen, 
  Target,
  Briefcase,
  Award,
  ChevronRight,
  Clock,
  Zap
} from 'lucide-react';

interface DashboardProps {
  userProfile: {
    name: string;
    currentRole: string;
  };
  onNavigate: (view: string) => void;
}

export function Dashboard({ userProfile, onNavigate }: DashboardProps) {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="sticky top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <span className="text-slate-900 text-sm sm:text-base">Evolua</span>
            </div>
            <div className="hidden lg:flex items-center gap-4 xl:gap-6">
              <button 
                onClick={() => onNavigate('dashboard')}
                className="text-slate-900 hover:text-indigo-600 transition-colors text-sm"
              >
                Dashboard
              </button>
              <button 
                onClick={() => onNavigate('learning')}
                className="text-slate-600 hover:text-slate-900 transition-colors text-sm"
              >
                Aprendizagem
              </button>
              <button 
                onClick={() => onNavigate('opportunities')}
                className="text-slate-600 hover:text-slate-900 transition-colors text-sm"
              >
                Oportunidades
              </button>
              <button 
                onClick={() => onNavigate('wellness')}
                className="text-slate-600 hover:text-slate-900 transition-colors text-sm"
              >
                Bem-Estar
              </button>
              <button 
                onClick={() => onNavigate('community')}
                className="text-slate-600 hover:text-slate-900 transition-colors text-sm"
              >
                Comunidade
              </button>
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm">
                AS
              </div>
            </div>
            <div className="lg:hidden">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white text-xs sm:text-sm">
                AS
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-slate-900 mb-2 text-2xl sm:text-3xl lg:text-4xl">Olá, {userProfile.name}! 👋</h1>
          <p className="text-slate-600 text-sm sm:text-base">Bem-vinda à sua jornada de transformação profissional</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 mb-6 sm:mb-8">
          <Card className="p-4 sm:p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-slate-600 text-xs sm:text-sm">Progresso Geral</span>
              <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600" />
            </div>
            <div className="text-slate-900 text-2xl sm:text-3xl mb-2">32%</div>
            <Progress value={32} className="mb-2" />
            <span className="text-xs text-slate-500">+8% esta semana</span>
          </Card>

          <Card className="p-4 sm:p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-slate-600 text-xs sm:text-sm">Horas de Estudo</span>
              <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600" />
            </div>
            <div className="text-slate-900 text-2xl sm:text-3xl mb-2">24h</div>
            <div className="text-xs text-slate-500">Este mês</div>
          </Card>

          <Card className="p-4 sm:p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-slate-600 text-xs sm:text-sm">Habilidades</span>
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600" />
            </div>
            <div className="text-slate-900 text-2xl sm:text-3xl mb-2">12</div>
            <div className="text-xs text-slate-500">+3 novas</div>
          </Card>

          <Card className="p-4 sm:p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-slate-600 text-xs sm:text-sm">Nível de Bem-Estar</span>
              <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-pink-600" />
            </div>
            <div className="text-slate-900 text-2xl sm:text-3xl mb-2">8.5</div>
            <div className="text-xs text-slate-500">De 10</div>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Main Column */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6">
            {/* AI Recommendation */}
            <Card className="p-4 sm:p-6 bg-gradient-to-br from-indigo-50 to-purple-50 border-indigo-200">
              <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Brain className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <h3 className="text-slate-900 text-base sm:text-lg">Recomendação da IA</h3>
                    <Badge className="bg-indigo-600 text-xs">Novo</Badge>
                  </div>
                  <p className="text-slate-700 mb-4 text-sm sm:text-base">
                    Com base no seu perfil e nas tendências do mercado, recomendamos focar em 
                    <strong> Automação de Marketing com IA</strong>. Esta habilidade está em alta demanda 
                    e combina perfeitamente com sua experiência atual.
                  </p>
                  <Button onClick={() => onNavigate('learning')} size="sm" className="gap-2 w-full sm:w-auto">
                    Ver Trilha Completa
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>

            {/* Current Learning Path */}
            <Card className="p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-6 gap-3">
                <h3 className="text-slate-900 text-base sm:text-lg">Sua Trilha de Aprendizagem</h3>
                <Button variant="ghost" size="sm" onClick={() => onNavigate('learning')}>
                  Ver Tudo
                </Button>
              </div>
              <div className="space-y-3 sm:space-y-4">
                {[
                  {
                    title: 'Fundamentos de IA para Profissionais',
                    progress: 65,
                    time: '2h restantes',
                    status: 'Em progresso',
                    color: 'indigo'
                  },
                  {
                    title: 'Automação de Marketing Digital',
                    progress: 30,
                    time: '8h restantes',
                    status: 'Em progresso',
                    color: 'purple'
                  },
                  {
                    title: 'Análise de Dados com Python',
                    progress: 0,
                    time: '12h',
                    status: 'Próximo',
                    color: 'slate'
                  }
                ].map((course, index) => (
                  <div key={index} className="p-4 bg-slate-50 rounded-xl">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h4 className="text-slate-900 text-sm mb-1">{course.title}</h4>
                        <div className="flex items-center gap-3 text-xs text-slate-500">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {course.time}
                          </span>
                          <Badge variant="outline" className="text-xs py-0">
                            {course.status}
                          </Badge>
                        </div>
                      </div>
                      <BookOpen className={`w-5 h-5 text-${course.color}-600`} />
                    </div>
                    <Progress value={course.progress} className="h-2" />
                  </div>
                ))}
              </div>
            </Card>

            {/* Market Insights */}
            <Card className="p-4 sm:p-6">
              <div className="flex items-center gap-2 mb-6">
                <TrendingUp className="w-5 h-5 text-emerald-600" />
                <h3 className="text-slate-900">Insights do Mercado</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 bg-emerald-50 rounded-xl border border-emerald-200">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-slate-900 text-sm mb-1">
                      <strong>IA Generativa</strong> teve aumento de 340% em demanda
                    </p>
                    <p className="text-slate-600 text-xs">
                      Empresas buscam profissionais que saibam aplicar IA em marketing
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl border border-blue-200">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-slate-900 text-sm mb-1">
                      <strong>Análise de Dados</strong> é a habilidade #1 mais requisitada
                    </p>
                    <p className="text-slate-600 text-xs">
                      85% das vagas em marketing exigem conhecimento em analytics
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-purple-50 rounded-xl border border-purple-200">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-slate-900 text-sm mb-1">
                      <strong>ESG e Sustentabilidade</strong> crescem 180% em marketing
                    </p>
                    <p className="text-slate-600 text-xs">
                      Empresas valorizam profissionais com visão de impacto social
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-4 sm:space-y-6">
            {/* Next Steps */}
            <Card className="p-4 sm:p-6">
              <h3 className="text-slate-900 mb-4">Próximos Passos</h3>
              <div className="space-y-3">
                <button 
                  onClick={() => onNavigate('learning')}
                  className="w-full p-4 bg-indigo-50 rounded-xl text-left hover:bg-indigo-100 transition-colors border border-indigo-200"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                      <BookOpen className="w-5 h-5 text-indigo-600" />
                    </div>
                    <div className="flex-1">
                      <div className="text-slate-900 text-sm">Continue sua trilha</div>
                      <div className="text-slate-600 text-xs">2 cursos em andamento</div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-slate-400" />
                  </div>
                </button>

                <button 
                  onClick={() => onNavigate('opportunities')}
                  className="w-full p-4 bg-emerald-50 rounded-xl text-left hover:bg-emerald-100 transition-colors border border-emerald-200"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                      <Briefcase className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div className="flex-1">
                      <div className="text-slate-900 text-sm">Explorar oportunidades</div>
                      <div className="text-slate-600 text-xs">23 vagas compatíveis</div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-slate-400" />
                  </div>
                </button>

                <button 
                  onClick={() => onNavigate('community')}
                  className="w-full p-4 bg-purple-50 rounded-xl text-left hover:bg-purple-100 transition-colors border border-purple-200"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Users className="w-5 h-5 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <div className="text-slate-900 text-sm">Conectar com mentores</div>
                      <div className="text-slate-600 text-xs">5 mentores disponíveis</div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-slate-400" />
                  </div>
                </button>
              </div>
            </Card>

            {/* Achievements */}
            <Card className="p-4 sm:p-6">
              <h3 className="text-slate-900 mb-4">Conquistas Recentes</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                  <Award className="w-8 h-8 text-yellow-600" />
                  <div>
                    <div className="text-slate-900 text-sm">Primeira Semana</div>
                    <div className="text-slate-600 text-xs">Completou 1 semana de aprendizado</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <Award className="w-8 h-8 text-blue-600" />
                  <div>
                    <div className="text-slate-900 text-sm">Aprendiz Dedicado</div>
                    <div className="text-slate-600 text-xs">24h de estudo este mês</div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Wellness Check */}
            <Card className="p-4 sm:p-6 bg-gradient-to-br from-pink-50 to-rose-50 border-pink-200">
              <div className="flex items-center gap-2 mb-4">
                <Heart className="w-5 h-5 text-pink-600" />
                <h3 className="text-slate-900">Check-in de Bem-Estar</h3>
              </div>
              <p className="text-slate-700 text-sm mb-4">
                Como você está se sentindo hoje?
              </p>
              <Button 
                onClick={() => onNavigate('wellness')}
                variant="outline" 
                size="sm" 
                className="w-full"
              >
                Fazer Check-in
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}