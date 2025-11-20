import { useState } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';
import { Brain, ChevronRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface SkillAssessmentProps {
  onComplete: (data: any) => void;
}

export function SkillAssessment({ onComplete }: SkillAssessmentProps) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});

  const questions = [
    {
      id: 'role',
      question: 'Qual sua função atual?',
      type: 'select',
      options: [
        'Marketing e Comunicação',
        'Tecnologia e Desenvolvimento',
        'Vendas e Negócios',
        'Recursos Humanos',
        'Design e Criatividade',
        'Operações e Logística',
        'Finanças e Contabilidade',
        'Educação e Treinamento'
      ]
    },
    {
      id: 'experience',
      question: 'Há quanto tempo você trabalha na sua área?',
      type: 'select',
      options: [
        'Menos de 1 ano',
        '1-3 anos',
        '3-5 anos',
        '5-10 anos',
        'Mais de 10 anos'
      ]
    },
    {
      id: 'skills',
      question: 'Quais habilidades você já possui?',
      type: 'multiselect',
      options: [
        'Análise de Dados',
        'Comunicação',
        'Liderança',
        'Programação',
        'Design',
        'Marketing Digital',
        'Gestão de Projetos',
        'Inteligência Artificial',
        'Idiomas',
        'Pensamento Crítico'
      ]
    },
    {
      id: 'interests',
      question: 'O que você gostaria de aprender?',
      type: 'multiselect',
      options: [
        'Inteligência Artificial e Machine Learning',
        'Análise de Dados e Business Intelligence',
        'Desenvolvimento Web e Mobile',
        'UX/UI Design',
        'Marketing Digital e Growth',
        'Sustentabilidade e ESG',
        'Gestão de Pessoas e Liderança',
        'Inovação e Empreendedorismo'
      ]
    },
    {
      id: 'goals',
      question: 'Qual seu objetivo principal?',
      type: 'select',
      options: [
        'Mudar de carreira completamente',
        'Evoluir na minha área atual',
        'Adicionar novas habilidades complementares',
        'Preparar-me para liderança',
        'Trabalhar com propósito e impacto social',
        'Aumentar minha empregabilidade'
      ]
    }
  ];

  const currentQuestion = questions[step];
  const progress = ((step + 1) / questions.length) * 100;

  const handleAnswer = (value: string) => {
    if (currentQuestion.type === 'multiselect') {
      const current = answers[currentQuestion.id] || [];
      const newValue = current.includes(value)
        ? current.filter((v: string) => v !== value)
        : [...current, value];
      setAnswers({ ...answers, [currentQuestion.id]: newValue });
    } else {
      setAnswers({ ...answers, [currentQuestion.id]: value });
      setTimeout(() => handleNext(), 300);
    }
  };

  const handleNext = () => {
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      // Simulando análise com IA
      setTimeout(() => {
        onComplete({ 
          answers, 
          level: 'intermediate',
          recommendedPaths: ['IA e Automação', 'Análise de Dados', 'Marketing Digital']
        });
      }, 2000);
    }
  };

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const isAnswered = () => {
    if (currentQuestion.type === 'multiselect') {
      return answers[currentQuestion.id] && answers[currentQuestion.id].length > 0;
    }
    return !!answers[currentQuestion.id];
  };

  if (step === questions.length) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-12 sm:py-20">
        <Card className="max-w-2xl w-full p-6 sm:p-12 text-center">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 animate-pulse">
            <Brain className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
          </div>
          <h2 className="text-slate-900 mb-3 sm:mb-4 text-xl sm:text-2xl">Analisando suas respostas...</h2>
          <p className="text-slate-600 mb-6 sm:mb-8 text-sm sm:text-base">
            Nossa IA está criando uma trilha de aprendizagem personalizada para você
          </p>
          <Progress value={100} className="mb-4" />
          <div className="space-y-2 text-slate-500 text-xs sm:text-sm">
            <div className="flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              Mapeamento de habilidades concluído
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              Análise de tendências do mercado
            </div>
            <div className="flex items-center justify-center gap-2">
              <Sparkles className="w-4 h-4 text-yellow-500 animate-pulse" />
              Criando trilha personalizada...
            </div>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-4 sm:px-6 py-12 sm:py-20">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-6 text-xs sm:text-sm">
            <Brain className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>Avaliação de Habilidades com IA</span>
          </div>
          <h1 className="text-slate-900 mb-3 sm:mb-4 text-2xl sm:text-3xl lg:text-4xl">Vamos conhecer você melhor</h1>
          <p className="text-slate-600 text-base sm:text-lg px-4">
            Responda algumas perguntas para criarmos sua trilha personalizada
          </p>
        </div>

        {/* Progress */}
        <div className="mb-6 sm:mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs sm:text-sm text-slate-600">Pergunta {step + 1} de {questions.length}</span>
            <span className="text-xs sm:text-sm text-slate-600">{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} />
        </div>

        {/* Question Card */}
        <Card className="p-4 sm:p-6 md:p-8 mb-6 sm:mb-8">
          <h2 className="text-slate-900 mb-4 sm:mb-6 text-lg sm:text-xl">{currentQuestion.question}</h2>
          
          {currentQuestion.type === 'select' && (
            <div className="grid gap-2 sm:gap-3">
              {currentQuestion.options.map((option) => (
                <button
                  key={option}
                  onClick={() => handleAnswer(option)}
                  className={`p-3 sm:p-4 rounded-xl border-2 text-left transition-all text-sm sm:text-base ${
                    answers[currentQuestion.id] === option
                      ? 'border-indigo-500 bg-indigo-50'
                      : 'border-slate-200 hover:border-indigo-200 bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-slate-700">{option}</span>
                    {answers[currentQuestion.id] === option && (
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600 flex-shrink-0 ml-2" />
                    )}
                  </div>
                </button>
              ))}
            </div>
          )}

          {currentQuestion.type === 'multiselect' && (
            <div>
              <p className="text-xs sm:text-sm text-slate-500 mb-3 sm:mb-4">Selecione todas que se aplicam</p>
              <div className="grid sm:grid-cols-2 gap-2 sm:gap-3">
                {currentQuestion.options.map((option) => {
                  const isSelected = answers[currentQuestion.id]?.includes(option);
                  return (
                    <button
                      key={option}
                      onClick={() => handleAnswer(option)}
                      className={`p-3 sm:p-4 rounded-xl border-2 text-left transition-all ${
                        isSelected
                          ? 'border-indigo-500 bg-indigo-50'
                          : 'border-slate-200 hover:border-indigo-200 bg-white'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-slate-700 text-xs sm:text-sm">{option}</span>
                        {isSelected && (
                          <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600 flex-shrink-0" />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center gap-4">
          <Button
            variant="outline"
            onClick={handleBack}
            disabled={step === 0}
            size="sm"
            className="sm:size-default"
          >
            Voltar
          </Button>
          
          {currentQuestion.type === 'multiselect' && (
            <Button
              onClick={handleNext}
              disabled={!isAnswered()}
              className="gap-2"
              size="sm"
              className="sm:size-default"
            >
              {step === questions.length - 1 ? 'Finalizar' : 'Próxima'}
              <ChevronRight className="w-4 h-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}