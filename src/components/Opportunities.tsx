import { useState } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { 
  ArrowLeft,
  Sparkles, 
  Briefcase,
  MapPin,
  DollarSign,
  Clock,
  Heart,
  Leaf,
  TrendingUp,
  Building2,
  Search,
  Filter,
  Bookmark
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface OpportunitiesProps {
  onNavigate: (view: string) => void;
}

export function Opportunities({ onNavigate }: OpportunitiesProps) {
  const [savedJobs, setSavedJobs] = useState<Set<string>>(new Set());

  const opportunities = [
    {
      id: '1',
      title: 'Especialista em Marketing de IA',
      company: 'Green Tech Solutions',
      location: 'São Paulo, SP (Híbrido)',
      salary: 'R$ 12.000 - R$ 18.000',
      type: 'Tempo Integral',
      match: 95,
      posted: '2 dias atrás',
      tags: ['IA', 'Marketing', 'Automação'],
      impact: true,
      sustainability: true,
      description: 'Buscamos profissional para liderar estratégias de marketing sustentável usando IA generativa.',
      requirements: ['3+ anos em Marketing Digital', 'Experiência com IA', 'Inglês fluente'],
      benefits: ['Home office', 'Plano de saúde', 'Auxílio educação']
    },
    {
      id: '2',
      title: 'Analista de Dados Sênior - Impacto Social',
      company: 'Instituto Conexão',
      location: 'Remoto',
      salary: 'R$ 10.000 - R$ 15.000',
      type: 'Tempo Integral',
      match: 88,
      posted: '5 dias atrás',
      tags: ['Dados', 'Python', 'Social Impact'],
      impact: true,
      sustainability: false,
      description: 'Transforme dados em ações que mudam vidas em comunidades vulneráveis.',
      requirements: ['Python e SQL', 'Power BI', 'Visão de impacto social'],
      benefits: ['100% remoto', 'Flexibilidade', 'Propósito']
    },
    {
      id: '3',
      title: 'Coordenador de Marketing Digital',
      company: 'EcoCommerce Brasil',
      location: 'Rio de Janeiro, RJ',
      salary: 'R$ 9.000 - R$ 13.000',
      type: 'Tempo Integral',
      match: 82,
      posted: '1 semana atrás',
      tags: ['Marketing', 'E-commerce', 'Sustentabilidade'],
      impact: false,
      sustainability: true,
      description: 'Lidere campanhas de marketing para o maior e-commerce sustentável do Brasil.',
      requirements: ['Experiência em e-commerce', 'Google Analytics', 'SEO/SEM'],
      benefits: ['Vale alimentação', 'Plano dental', 'Day off aniversário']
    },
    {
      id: '4',
      title: 'Growth Marketing Lead',
      company: 'TechStartup AI',
      location: 'São Paulo, SP',
      salary: 'R$ 15.000 - R$ 22.000',
      type: 'Tempo Integral',
      match: 78,
      posted: '3 dias atrás',
      tags: ['Growth', 'Performance', 'IA'],
      impact: false,
      sustainability: false,
      description: 'Escale uma startup de IA usando estratégias de growth hacking data-driven.',
      requirements: ['Experiência em growth', 'A/B Testing', 'Performance Marketing'],
      benefits: ['Stock options', 'Horário flexível', 'Gym pass']
    }
  ];

  const toggleSave = (id: string) => {
    const newSaved = new Set(savedJobs);
    if (newSaved.has(id)) {
      newSaved.delete(id);
    } else {
      newSaved.add(id);
    }
    setSavedJobs(newSaved);
  };

  return (
    <div className="min-h-screen pb-12 sm:pb-20">
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
              <button onClick={() => onNavigate('learning')} className="text-slate-600 hover:text-slate-900 transition-colors text-sm">
                Aprendizagem
              </button>
              <button className="text-slate-900 text-sm">Oportunidades</button>
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
            <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600" />
            <h1 className="text-slate-900 text-2xl sm:text-3xl lg:text-4xl">Oportunidades com Propósito</h1>
          </div>
          <p className="text-slate-600 text-sm sm:text-lg mb-4 sm:mb-6">
            Vagas selecionadas com base no seu perfil, habilidades e valores
          </p>

          {/* Search and Filters */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-slate-400" />
              <Input 
                placeholder="Buscar por cargo, empresa ou habilidade..." 
                className="pl-9 sm:pl-10"
              />
            </div>
            <Button variant="outline" className="gap-2">
              <Filter className="w-4 h-4" />
              Filtros
            </Button>
          </div>
        </div>

        {/* AI Insights */}
        <Card className="p-4 sm:p-6 bg-gradient-to-br from-indigo-50 to-purple-50 border-indigo-200 mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600" />
            </div>
            <div>
              <h3 className="text-slate-900 mb-2 text-base sm:text-lg">IA Encontrou 23 Vagas Compatíveis</h3>
              <p className="text-slate-700 mb-4 text-sm sm:text-base">
                Com base nas suas habilidades atuais e trilhas de aprendizagem, você está <strong>95% compatível</strong> com 
                a vaga de Especialista em Marketing de IA na Green Tech Solutions.
              </p>
              <div className="flex flex-wrap gap-3 text-xs sm:text-sm">
                <div className="flex items-center gap-2 text-emerald-600">
                  <TrendingUp className="w-4 h-4" />
                  <span>3 novas vagas hoje</span>
                </div>
                <div className="flex items-center gap-2 text-indigo-600">
                  <Heart className="w-4 h-4" />
                  <span>12 vagas com impacto social</span>
                </div>
                <div className="flex items-center gap-2 text-green-600">
                  <Leaf className="w-4 h-4" />
                  <span>8 empresas sustentáveis</span>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
          <Card className="p-3 sm:p-4">
            <div className="text-slate-600 text-xs sm:text-sm mb-1">Vagas Compatíveis</div>
            <div className="text-slate-900 text-xl sm:text-2xl">23</div>
          </Card>
          <Card className="p-3 sm:p-4">
            <div className="text-slate-600 text-xs sm:text-sm mb-1">Match Médio</div>
            <div className="text-slate-900 text-xl sm:text-2xl">86%</div>
          </Card>
          <Card className="p-3 sm:p-4">
            <div className="text-slate-600 text-xs sm:text-sm mb-1">Candidaturas</div>
            <div className="text-slate-900 text-xl sm:text-2xl">5</div>
          </Card>
          <Card className="p-3 sm:p-4">
            <div className="text-slate-600 text-xs sm:text-sm mb-1">Salvas</div>
            <div className="text-slate-900 text-xl sm:text-2xl">{savedJobs.size}</div>
          </Card>
        </div>

        {/* Opportunities List */}
        <div className="space-y-4 sm:space-y-6">
          {opportunities.map((job) => (
            <Card key={job.id} className="p-4 sm:p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col lg:flex-row items-start justify-between mb-4 gap-4">
                <div className="flex-1 w-full">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <h3 className="text-slate-900 text-base sm:text-lg">{job.title}</h3>
                    <Badge 
                      className={`text-xs ${
                        job.match >= 90 
                          ? 'bg-emerald-100 text-emerald-700' 
                          : job.match >= 80 
                          ? 'bg-blue-100 text-blue-700'
                          : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      {job.match}% match
                    </Badge>
                    {job.impact && (
                      <Badge className="bg-pink-100 text-pink-700 gap-1 text-xs">
                        <Heart className="w-3 h-3" />
                        <span className="hidden sm:inline">Impacto Social</span>
                        <span className="sm:hidden">Impacto</span>
                      </Badge>
                    )}
                    {job.sustainability && (
                      <Badge className="bg-green-100 text-green-700 gap-1 text-xs">
                        <Leaf className="w-3 h-3" />
                        <span className="hidden sm:inline">Sustentável</span>
                      </Badge>
                    )}
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-3 text-xs sm:text-sm text-slate-600">
                    <span className="flex items-center gap-1">
                      <Building2 className="w-3 h-3 sm:w-4 sm:h-4" />
                      {job.company}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span className="hidden sm:inline">{job.location}</span>
                      <span className="sm:hidden">{job.location.split(' ')[0]}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <DollarSign className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span className="hidden md:inline">{job.salary}</span>
                      <span className="md:hidden">R$ 12k-18k</span>
                    </span>
                  </div>

                  <p className="text-slate-700 mb-4 text-sm sm:text-base">{job.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {job.tags.map((tag, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 p-3 sm:p-4 bg-slate-50 rounded-lg mb-4">
                    <div>
                      <div className="text-xs text-slate-500 mb-2">Requisitos</div>
                      <ul className="space-y-1">
                        {job.requirements.map((req, idx) => (
                          <li key={idx} className="text-xs text-slate-700 flex items-start gap-2">
                            <span className="text-indigo-600 mt-1">•</span>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 mb-2">Benefícios</div>
                      <ul className="space-y-1">
                        {job.benefits.map((benefit, idx) => (
                          <li key={idx} className="text-xs text-slate-700 flex items-start gap-2">
                            <span className="text-emerald-600 mt-1">•</span>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-4 sm:mb-0">
                    <Clock className="w-3 h-3" />
                    <span>Publicada {job.posted}</span>
                  </div>
                </div>

                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1668097613569-3405bb63262b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGdyZWVuJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjM0ODY2NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Company"
                  className="hidden lg:block w-24 h-24 rounded-xl object-cover"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button className="flex-1">Candidatar-se</Button>
                <Button 
                  variant="outline"
                  onClick={() => toggleSave(job.id)}
                  className={savedJobs.has(job.id) ? 'text-pink-600 border-pink-600' : ''}
                >
                  <Bookmark className={`w-4 h-4 ${savedJobs.has(job.id) ? 'fill-pink-600' : ''}`} />
                </Button>
                <Button variant="outline" className="sm:w-auto">Ver Detalhes</Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-6 sm:mt-8">
          <Button variant="outline" size="lg" className="w-full sm:w-auto">
            Carregar Mais Oportunidades
          </Button>
        </div>
      </div>
    </div>
  );
}