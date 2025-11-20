import { useState } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  ArrowLeft,
  Sparkles, 
  BookOpen, 
  PlayCircle,
  Clock,
  Star,
  CheckCircle2,
  Brain,
  Award,
  TrendingUp,
  Zap
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface LearningPathProps {
  onNavigate: (view: string) => void;
}

export function LearningPath({ onNavigate }: LearningPathProps) {
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);

  const learningPaths = [
    {
      id: '1',
      title: 'IA para Profissionais de Marketing',
      description: 'Domine ferramentas de IA generativa e automação para revolucionar suas campanhas',
      duration: '32 horas',
      level: 'Intermediário',
      progress: 45,
      modules: 8,
      skills: ['ChatGPT', 'Midjourney', 'Copy.ai', 'Análise Preditiva'],
      color: 'indigo',
      trend: '+340%',
      salary: '+35%',
      recommended: true
    },
    {
      id: '2',
      title: 'Análise de Dados e Business Intelligence',
      description: 'Transforme dados em insights estratégicos com Python, SQL e ferramentas de visualização',
      duration: '48 horas',
      level: 'Avançado',
      progress: 20,
      modules: 12,
      skills: ['Python', 'SQL', 'Power BI', 'Tableau'],
      color: 'emerald',
      trend: '+280%',
      salary: '+42%',
      recommended: true
    },
    {
      id: '3',
      title: 'Marketing Digital e Growth Hacking',
      description: 'Estratégias avançadas de crescimento, SEO, performance e métricas que importam',
      duration: '24 horas',
      level: 'Intermediário',
      progress: 60,
      modules: 6,
      skills: ['SEO', 'Google Analytics', 'Meta Ads', 'Growth'],
      color: 'purple',
      trend: '+195%',
      salary: '+28%',
      recommended: false
    },
    {
      id: '4',
      title: 'ESG e Marketing Sustentável',
      description: 'Lidere a transformação verde: estratégias de marketing com propósito e impacto',
      duration: '20 horas',
      level: 'Iniciante',
      progress: 0,
      modules: 5,
      skills: ['ESG', 'Sustentabilidade', 'Comunicação', 'Impacto Social'],
      color: 'green',
      trend: '+180%',
      salary: '+25%',
      recommended: true
    }
  ];

  const courses = [
    {
      title: 'Fundamentos de IA Generativa',
      duration: '4h',
      status: 'completed',
      rating: 4.9,
      students: '12.5k'
    },
    {
      title: 'ChatGPT para Marketing de Conteúdo',
      duration: '6h',
      status: 'in-progress',
      rating: 4.8,
      students: '8.3k'
    },
    {
      title: 'Automação de Campanhas com IA',
      duration: '8h',
      status: 'locked',
      rating: 4.9,
      students: '6.2k'
    },
    {
      title: 'Análise Preditiva de Audiência',
      duration: '10h',
      status: 'locked',
      rating: 4.7,
      students: '5.1k'
    }
  ];

  return (
    <div className="min-h-screen pb-20">
      {/* Navigation */}
      <nav className="sticky top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 sm:gap-4">
              <Button variant="ghost" size="sm" onClick={() => onNavigate('dashboard')}>
                <ArrowLeft className="w-4 h-4" />
              </Button>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <span className="text-slate-900 text-sm sm:text-base">Evolua</span>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-4 lg:gap-6">
              <button onClick={() => onNavigate('dashboard')} className="text-slate-600 hover:text-slate-900 transition-colors text-sm">
                Dashboard
              </button>
              <button className="text-slate-900 text-sm">Aprendizagem</button>
              <button onClick={() => onNavigate('opportunities')} className="text-slate-600 hover:text-slate-900 transition-colors text-sm">
                Oportunidades
              </button>
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm">
                AS
              </div>
            </div>
            <div className="md:hidden">
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
          <div className="flex items-center gap-2 mb-3 sm:mb-4">
            <Brain className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600" />
            <h1 className="text-slate-900 text-2xl sm:text-3xl lg:text-4xl">Trilhas de Aprendizagem Personalizadas</h1>
          </div>
          <p className="text-slate-600 text-sm sm:text-lg">
            Curadas especialmente para você com base em IA e nas tendências do mercado
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
          <Card className="p-3 sm:p-4 border-indigo-200 bg-indigo-50">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-slate-600 text-xs sm:text-sm mb-1">Progresso Geral</div>
                <div className="text-slate-900 text-xl sm:text-2xl">32%</div>
              </div>
              <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-600" />
            </div>
          </Card>
          <Card className="p-3 sm:p-4 border-emerald-200 bg-emerald-50">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-slate-600 text-xs sm:text-sm mb-1">Cursos Ativos</div>
                <div className="text-slate-900 text-xl sm:text-2xl">3</div>
              </div>
              <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-600" />
            </div>
          </Card>
          <Card className="p-3 sm:p-4 border-purple-200 bg-purple-50">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-slate-600 text-xs sm:text-sm mb-1">Horas de Estudo</div>
                <div className="text-slate-900 text-xl sm:text-2xl">24h</div>
              </div>
              <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600" />
            </div>
          </Card>
          <Card className="p-3 sm:p-4 border-yellow-200 bg-yellow-50">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-slate-600 text-xs sm:text-sm mb-1">Certificados</div>
                <div className="text-slate-900 text-xl sm:text-2xl">2</div>
              </div>
              <Award className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-600" />
            </div>
          </Card>
        </div>

        <Tabs defaultValue="paths" className="space-y-6">
          <TabsList className="w-full grid grid-cols-2 md:grid-cols-4 h-auto">
            <TabsTrigger value="paths" className="text-xs sm:text-sm">Trilhas Recomendadas</TabsTrigger>
            <TabsTrigger value="progress" className="text-xs sm:text-sm">Em Progresso</TabsTrigger>
            <TabsTrigger value="completed" className="text-xs sm:text-sm">Concluídos</TabsTrigger>
            <TabsTrigger value="explore" className="text-xs sm:text-sm">Explorar</TabsTrigger>
          </TabsList>

          <TabsContent value="paths" className="space-y-4 sm:space-y-6">
            {learningPaths.map((path) => (
              <Card key={path.id} className="p-4 sm:p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col lg:flex-row items-start justify-between mb-4 gap-4">
                  <div className="flex-1 w-full">
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
                      <h3 className="text-slate-900 text-base sm:text-lg">{path.title}</h3>
                      {path.recommended && (
                        <Badge className="bg-gradient-to-r from-indigo-600 to-purple-600 gap-1 text-xs">
                          <Sparkles className="w-3 h-3" />
                          IA Recomenda
                        </Badge>
                      )}
                    </div>
                    <p className="text-slate-600 mb-4 text-sm sm:text-base">{path.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {path.skills.map((skill, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1762330917056-e69b34329ddf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBsZWFybmluZyUyMGRpZ2l0YWx8ZW58MXx8fHwxNzYzNTUxMjY0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Learning"
                    className="w-full lg:w-32 h-32 rounded-xl object-cover"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 mb-4">
                  <div className="flex items-center gap-2 text-xs sm:text-sm">
                    <Clock className="w-4 h-4 text-slate-400" />
                    <span className="text-slate-600">{path.duration} de conteúdo</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm">
                    <BookOpen className="w-4 h-4 text-slate-400" />
                    <span className="text-slate-600">{path.modules} módulos</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm">
                    <TrendingUp className="w-4 h-4 text-emerald-500" />
                    <span className="text-slate-600">
                      Demanda: <span className="text-emerald-600">{path.trend}</span>
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm">
                    <Zap className="w-4 h-4 text-orange-500" />
                    <span className="text-slate-600">
                      Salário: <span className="text-orange-600">{path.salary}</span>
                    </span>
                  </div>
                </div>

                {path.progress > 0 && (
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs sm:text-sm text-slate-600">Progresso</span>
                      <span className="text-xs sm:text-sm text-slate-900">{path.progress}%</span>
                    </div>
                    <Progress value={path.progress} />
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button className="flex-1">
                    {path.progress > 0 ? 'Continuar' : 'Iniciar Trilha'}
                  </Button>
                  <Button variant="outline" onClick={() => setSelectedCourse(path.id)} className="sm:w-auto">
                    Ver Detalhes
                  </Button>
                </div>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="progress" className="space-y-4">
            <Card className="p-6">
              <h3 className="text-slate-900 mb-4">Cursos em Andamento</h3>
              <div className="space-y-4">
                {courses.filter(c => c.status === 'in-progress').map((course, idx) => (
                  <div key={idx} className="p-4 bg-slate-50 rounded-xl flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                        <PlayCircle className="w-6 h-6 text-indigo-600" />
                      </div>
                      <div>
                        <h4 className="text-slate-900 text-sm mb-1">{course.title}</h4>
                        <div className="flex items-center gap-3 text-xs text-slate-500">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {course.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                            {course.rating}
                          </span>
                        </div>
                      </div>
                    </div>
                    <Button size="sm">Continuar</Button>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="completed" className="space-y-4">
            <Card className="p-6">
              <h3 className="text-slate-900 mb-4">Cursos Concluídos</h3>
              <div className="space-y-4">
                {courses.filter(c => c.status === 'completed').map((course, idx) => (
                  <div key={idx} className="p-4 bg-emerald-50 rounded-xl flex items-center justify-between border border-emerald-200">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                        <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                      </div>
                      <div>
                        <h4 className="text-slate-900 text-sm mb-1">{course.title}</h4>
                        <div className="flex items-center gap-3 text-xs text-slate-600">
                          <span className="flex items-center gap-1">
                            <Award className="w-3 h-3" />
                            Certificado Obtido
                          </span>
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">Ver Certificado</Button>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="explore">
            <Card className="p-8 text-center">
              <BookOpen className="w-16 h-16 text-slate-300 mx-auto mb-4" />
              <h3 className="text-slate-900 mb-2">Biblioteca de Cursos</h3>
              <p className="text-slate-600 mb-6">
                Explore mais de 500 cursos em diferentes áreas
              </p>
              <Button>Explorar Catálogo</Button>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}