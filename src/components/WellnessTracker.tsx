import { useState } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Slider } from './ui/slider';
import { 
  ArrowLeft,
  Sparkles, 
  Heart,
  Brain,
  Battery,
  Coffee,
  Moon,
  Smile,
  AlertCircle,
  TrendingUp,
  Calendar,
  Activity,
  Zap
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface WellnessTrackerProps {
  onNavigate: (view: string) => void;
}

export function WellnessTracker({ onNavigate }: WellnessTrackerProps) {
  const [mood, setMood] = useState<number>(8);
  const [energy, setEnergy] = useState<number>(7);
  const [stress, setStress] = useState<number>(4);

  const moods = [
    { value: 1, emoji: '😢', label: 'Muito mal' },
    { value: 3, emoji: '😕', label: 'Mal' },
    { value: 5, emoji: '😐', label: 'OK' },
    { value: 7, emoji: '🙂', label: 'Bem' },
    { value: 9, emoji: '😊', label: 'Muito bem' },
    { value: 10, emoji: '🤩', label: 'Excelente' },
  ];

  const wellnessMetrics = [
    {
      title: 'Humor Geral',
      value: 8.5,
      max: 10,
      trend: '+12%',
      icon: Smile,
      color: 'yellow',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-200',
      textColor: 'text-yellow-700'
    },
    {
      title: 'Nível de Energia',
      value: 7.2,
      max: 10,
      trend: '+5%',
      icon: Battery,
      color: 'emerald',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-200',
      textColor: 'text-emerald-700'
    },
    {
      title: 'Equilíbrio Vida-Trabalho',
      value: 6.8,
      max: 10,
      trend: '-3%',
      icon: Activity,
      color: 'blue',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      textColor: 'text-blue-700'
    },
    {
      title: 'Qualidade do Sono',
      value: 7.5,
      max: 10,
      trend: '+8%',
      icon: Moon,
      color: 'indigo',
      bgColor: 'bg-indigo-50',
      borderColor: 'border-indigo-200',
      textColor: 'text-indigo-700'
    }
  ];

  const insights = [
    {
      type: 'warning',
      icon: AlertCircle,
      title: 'Atenção ao Equilíbrio',
      message: 'Você estudou 6h nos últimos 2 dias. Lembre-se de fazer pausas regulares.',
      action: 'Ver Dicas'
    },
    {
      type: 'success',
      icon: TrendingUp,
      title: 'Progresso Positivo',
      message: 'Seu humor melhorou 12% esta semana. Continue assim!',
      action: null
    },
    {
      type: 'info',
      icon: Coffee,
      title: 'Hora de uma Pausa',
      message: 'Já faz 2h de estudo. Que tal uma pausa de 15 minutos?',
      action: 'Iniciar Pausa'
    }
  ];

  const activities = [
    {
      icon: Brain,
      title: 'Meditação Guiada',
      duration: '10 min',
      category: 'Mindfulness'
    },
    {
      icon: Coffee,
      title: 'Pausa Ativa',
      duration: '5 min',
      category: 'Movimento'
    },
    {
      icon: Moon,
      title: 'Exercícios de Respiração',
      duration: '8 min',
      category: 'Relaxamento'
    }
  ];

  return (
    <div className="min-h-screen pb-20">
      {/* Navigation */}
      <nav className="sticky top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" onClick={() => onNavigate('dashboard')}>
              <ArrowLeft className="w-4 h-4" />
            </Button>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-slate-900">Evolua</span>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <button onClick={() => onNavigate('dashboard')} className="text-slate-600 hover:text-slate-900 transition-colors">
              Dashboard
            </button>
            <button onClick={() => onNavigate('learning')} className="text-slate-600 hover:text-slate-900 transition-colors">
              Aprendizagem
            </button>
            <button onClick={() => onNavigate('opportunities')} className="text-slate-600 hover:text-slate-900 transition-colors">
              Oportunidades
            </button>
            <button className="text-slate-900">Bem-Estar</button>
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white">
              AS
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Heart className="w-6 h-6 text-pink-600" />
            <h1 className="text-slate-900">Bem-Estar e Saúde Mental</h1>
          </div>
          <p className="text-slate-600 text-lg">
            Monitore seu bem-estar durante sua jornada de transformação profissional
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Daily Check-in */}
            <Card className="p-6 bg-gradient-to-br from-pink-50 to-rose-50 border-pink-200">
              <h3 className="text-slate-900 mb-6">Check-in Diário</h3>
              
              <div className="space-y-6">
                <div>
                  <label className="text-slate-700 mb-3 block">
                    Como você está se sentindo hoje?
                  </label>
                  <div className="grid grid-cols-6 gap-2">
                    {moods.map((m) => (
                      <button
                        key={m.value}
                        onClick={() => setMood(m.value)}
                        className={`p-4 rounded-xl border-2 transition-all ${
                          mood === m.value
                            ? 'border-pink-500 bg-pink-100 scale-110'
                            : 'border-slate-200 hover:border-pink-300 bg-white'
                        }`}
                      >
                        <div className="text-3xl mb-1">{m.emoji}</div>
                        <div className="text-xs text-slate-600">{m.label}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-slate-700 mb-3 block">
                    Nível de Energia: <strong>{energy}/10</strong>
                  </label>
                  <Slider 
                    value={[energy]} 
                    onValueChange={(v) => setEnergy(v[0])}
                    max={10}
                    step={1}
                    className="mb-2"
                  />
                  <div className="flex justify-between text-xs text-slate-500">
                    <span>Muito baixo</span>
                    <span>Muito alto</span>
                  </div>
                </div>

                <div>
                  <label className="text-slate-700 mb-3 block">
                    Nível de Estresse: <strong>{stress}/10</strong>
                  </label>
                  <Slider 
                    value={[stress]} 
                    onValueChange={(v) => setStress(v[0])}
                    max={10}
                    step={1}
                    className="mb-2"
                  />
                  <div className="flex justify-between text-xs text-slate-500">
                    <span>Muito relaxado</span>
                    <span>Muito estressado</span>
                  </div>
                </div>

                <Button className="w-full gap-2">
                  <Heart className="w-4 h-4" />
                  Salvar Check-in
                </Button>
              </div>
            </Card>

            {/* Wellness Metrics */}
            <div className="grid md:grid-cols-2 gap-4">
              {wellnessMetrics.map((metric, index) => {
                const Icon = metric.icon;
                const percentage = (metric.value / metric.max) * 100;
                
                return (
                  <Card key={index} className={`p-6 ${metric.bgColor} border ${metric.borderColor}`}>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-slate-700 text-sm">{metric.title}</span>
                      <Icon className={`w-5 h-5 ${metric.textColor}`} />
                    </div>
                    <div className="text-slate-900 text-3xl mb-2">{metric.value}</div>
                    <Progress value={percentage} className="mb-2" />
                    <div className="flex items-center gap-2 text-xs">
                      <TrendingUp className={`w-3 h-3 ${metric.textColor}`} />
                      <span className={metric.textColor}>{metric.trend} esta semana</span>
                    </div>
                  </Card>
                );
              })}
            </div>

            {/* AI Insights */}
            <Card className="p-6">
              <h3 className="text-slate-900 mb-4">Insights Personalizados</h3>
              <div className="space-y-3">
                {insights.map((insight, index) => {
                  const Icon = insight.icon;
                  const colorMap = {
                    warning: 'bg-orange-50 border-orange-200 text-orange-700',
                    success: 'bg-emerald-50 border-emerald-200 text-emerald-700',
                    info: 'bg-blue-50 border-blue-200 text-blue-700'
                  };
                  
                  return (
                    <div key={index} className={`p-4 rounded-xl border ${colorMap[insight.type as keyof typeof colorMap]}`}>
                      <div className="flex items-start gap-3">
                        <Icon className="w-5 h-5 flex-shrink-0 mt-0.5" />
                        <div className="flex-1">
                          <h4 className="text-sm mb-1">{insight.title}</h4>
                          <p className="text-xs opacity-90 mb-2">{insight.message}</p>
                          {insight.action && (
                            <Button variant="outline" size="sm" className="text-xs h-7">
                              {insight.action}
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>

            {/* Weekly Progress */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-slate-900">Progresso Semanal</h3>
                <Button variant="ghost" size="sm" className="gap-2">
                  <Calendar className="w-4 h-4" />
                  Ver Histórico
                </Button>
              </div>
              
              <div className="grid grid-cols-7 gap-2">
                {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'].map((day, index) => {
                  const value = [7, 8, 6, 9, 8, 7, 8][index];
                  return (
                    <div key={day} className="text-center">
                      <div className="text-xs text-slate-500 mb-2">{day}</div>
                      <div className={`h-24 rounded-lg flex items-end justify-center p-2 ${
                        value >= 8 ? 'bg-emerald-100' : value >= 6 ? 'bg-blue-100' : 'bg-orange-100'
                      }`}>
                        <div className="text-2xl mb-1">
                          {value >= 8 ? '😊' : value >= 6 ? '🙂' : '😐'}
                        </div>
                      </div>
                      <div className="text-xs text-slate-700 mt-1">{value}/10</div>
                    </div>
                  );
                })}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card className="p-6">
              <h3 className="text-slate-900 mb-4">Atividades de Bem-Estar</h3>
              <div className="space-y-3">
                {activities.map((activity, index) => {
                  const Icon = activity.icon;
                  return (
                    <button 
                      key={index}
                      className="w-full p-4 bg-slate-50 rounded-xl text-left hover:bg-slate-100 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                          <Icon className="w-5 h-5 text-indigo-600" />
                        </div>
                        <div className="flex-1">
                          <div className="text-slate-900 text-sm mb-1">{activity.title}</div>
                          <div className="flex items-center gap-2 text-xs text-slate-500">
                            <Badge variant="outline" className="text-xs py-0">
                              {activity.category}
                            </Badge>
                            <span>{activity.duration}</span>
                          </div>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </Card>

            {/* Tips */}
            <Card className="p-6 bg-gradient-to-br from-indigo-50 to-purple-50 border-indigo-200">
              <div className="flex items-center gap-2 mb-4">
                <Zap className="w-5 h-5 text-indigo-600" />
                <h3 className="text-slate-900">Dica do Dia</h3>
              </div>
              <p className="text-slate-700 text-sm mb-4">
                A regra 20-20-20: A cada 20 minutos de estudo, olhe para algo a 20 metros de distância por 20 segundos. 
                Isso ajuda a reduzir a fadiga ocular.
              </p>
              <Button variant="outline" size="sm" className="w-full">
                Mais Dicas
              </Button>
            </Card>

            {/* Resources */}
            <Card className="p-6">
              <h3 className="text-slate-900 mb-4">Recursos de Apoio</h3>
              <div className="space-y-3">
                <a href="#" className="block p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                  <div className="text-slate-900 text-sm mb-1">Fale com um Mentor</div>
                  <div className="text-xs text-slate-600">Suporte profissional disponível</div>
                </a>
                <a href="#" className="block p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                  <div className="text-slate-900 text-sm mb-1">Artigos sobre Bem-Estar</div>
                  <div className="text-xs text-slate-600">Biblioteca de recursos</div>
                </a>
                <a href="#" className="block p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                  <div className="text-slate-900 text-sm mb-1">Comunidade de Apoio</div>
                  <div className="text-xs text-slate-600">Conecte-se com outros</div>
                </a>
              </div>
            </Card>

            {/* Image */}
            <Card className="p-0 overflow-hidden">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1621887348744-6b0444f8a058?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW50YWwlMjBoZWFsdGglMjB3ZWxsbmVzc3xlbnwxfHx8fDE3NjM1NTEyNjV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Wellness"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="text-slate-900 text-sm mb-1">Cuide de Você</div>
                <div className="text-xs text-slate-600">
                  Seu bem-estar é tão importante quanto seu aprendizado
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
