import { Button } from './ui/button';
import { Sparkles, Brain, Heart, TrendingUp, Users, Leaf } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HeroProps {
  onGetStarted: () => void;
}

export function Hero({ onGetStarted }: HeroProps) {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <span className="text-slate-900 text-sm sm:text-base">Evolua</span>
          </div>
          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            <a href="#conceito" className="text-slate-600 hover:text-slate-900 transition-colors text-sm">Conceito</a>
            <a href="#pilares" className="text-slate-600 hover:text-slate-900 transition-colors text-sm">Pilares</a>
            <a href="#solucao" className="text-slate-600 hover:text-slate-900 transition-colors text-sm">Solução</a>
            <Button onClick={onGetStarted} size="sm">Começar</Button>
          </div>
          <Button onClick={onGetStarted} className="md:hidden" size="sm">Começar</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-6 text-xs sm:text-sm">
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>O Futuro do Trabalho Começa Agora</span>
              </div>
              <h1 className="text-slate-900 mb-4 sm:mb-6 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl">
                Evolua continuamente em um mundo em transformação
              </h1>
              <p className="text-slate-600 mb-6 sm:mb-8 text-base sm:text-lg">
                Uma plataforma inteligente que combina IA com humanidade para preparar você para as profissões do futuro. 
                Aprenda, requalifique-se e descubra oportunidades com propósito.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button onClick={onGetStarted} size="lg" className="gap-2 w-full sm:w-auto">
                  <Sparkles className="w-5 h-5" />
                  Iniciar Jornada
                </Button>
                <Button variant="outline" size="lg" className="w-full sm:w-auto">Saber Mais</Button>
              </div>
              <div className="grid grid-cols-3 gap-4 sm:gap-8 mt-8 sm:mt-12">
                <div>
                  <div className="text-slate-900 text-xl sm:text-2xl">170M+</div>
                  <div className="text-slate-600 text-xs sm:text-sm">Novos Empregos até 2027</div>
                </div>
                <div>
                  <div className="text-slate-900 text-xl sm:text-2xl">23%</div>
                  <div className="text-slate-600 text-xs sm:text-sm">Profissões em Transformação</div>
                </div>
                <div>
                  <div className="text-slate-900 text-xl sm:text-2xl">40%</div>
                  <div className="text-slate-600 text-xs sm:text-sm">Tarefas Automatizáveis</div>
                </div>
              </div>
            </div>
            <div className="relative order-first lg:order-last">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-2xl sm:rounded-3xl blur-3xl opacity-20"></div>
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1758270705317-3ef6142d306f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwdGVhbSUyMGNvbGxhYm9yYXRpb24lMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2MzU1MTI2NHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Equipe diversa colaborando"
                className="relative rounded-2xl sm:rounded-3xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Conceito Section */}
      <section id="conceito" className="py-12 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-slate-900 mb-3 sm:mb-4 text-xl sm:text-2xl lg:text-3xl">O Cenário: A Era da Requalificação Contínua</h2>
            <p className="text-slate-600 max-w-3xl mx-auto text-base sm:text-lg px-4">
              Estamos em um ponto de inflexão. A disrupção tecnológica está redefinindo profissões, 
              mas também criando oportunidades sem precedentes. O novo superpoder é a capacidade de aprender e reaprender.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
            <div className="bg-gradient-to-br from-red-50 to-orange-50 p-6 sm:p-8 rounded-2xl border border-orange-200">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-slate-900 mb-3 text-base sm:text-lg">Disrupção Tecnológica</h3>
              <p className="text-slate-600 text-sm sm:text-base">
                IA, robótica e automação estão transformando o mercado de trabalho em ritmo acelerado. 
                É preciso se adaptar ou ficar para trás.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 sm:p-8 rounded-2xl border border-indigo-200">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-slate-900 mb-3 text-base sm:text-lg">O Fator Humano</h3>
              <p className="text-slate-600 text-sm sm:text-base">
                170 milhões de novos empregos surgirão, impulsionados pela tecnologia e economia verde. 
                A criatividade e empatia humanas são insubstituíveis.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 sm:p-8 rounded-2xl border border-purple-200 sm:col-span-2 md:col-span-1">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-slate-900 mb-3 text-base sm:text-lg">Tecnologia + Humanidade</h3>
              <p className="text-slate-600 text-sm sm:text-base">
                Nosso papel é usar a tecnologia para fazer a diferença, sem perder o lado humano. 
                Equilíbrio é fundamental.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pilares Section */}
      <section id="pilares" className="py-12 sm:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-slate-900 mb-3 sm:mb-4 text-xl sm:text-2xl lg:text-3xl">Pilares da Nossa Solução</h2>
            <p className="text-slate-600 max-w-3xl mx-auto text-base sm:text-lg px-4">
              Fundamentados em princípios que colocam pessoas em primeiro lugar, 
              enquanto aproveitamos o poder da tecnologia.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-200 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-slate-900 mb-2">Humano-Cêntrica</h3>
              <p className="text-slate-600 text-sm">
                Tecnologia a serviço do bem-estar, saúde mental e equilíbrio vida-trabalho.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-200 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-slate-900 mb-2">Aprendizagem Contínua</h3>
              <p className="text-slate-600 text-sm">
                Upskilling e reskilling facilitados. Aprender é o novo superpoder.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-200 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-slate-900 mb-2">Inclusão e Ética</h3>
              <p className="text-slate-600 text-sm">
                Futuro mais diverso, acessível e inclusivo, com privacidade garantida.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-200 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <Leaf className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-slate-900 mb-2">Propósito e Sustentabilidade</h3>
              <p className="text-slate-600 text-sm">
                Conectando talentos a projetos com impacto social e ambiental.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solução Section */}
      <section id="solucao" className="py-20 px-6 bg-gradient-to-br from-indigo-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4">Como a Evolua Funciona</h2>
            <p className="max-w-3xl mx-auto text-indigo-200 text-lg">
              Uma jornada personalizada de transformação profissional em 5 etapas
            </p>
          </div>
          <div className="grid md:grid-cols-5 gap-6">
            {[
              { step: '1', title: 'Avaliação', desc: 'Mapeie suas habilidades atuais com IA' },
              { step: '2', title: 'Trilha', desc: 'Receba um plano personalizado de aprendizagem' },
              { step: '3', title: 'Aprenda', desc: 'Acesse cursos e recursos curados' },
              { step: '4', title: 'Conecte', desc: 'Encontre oportunidades com propósito' },
              { step: '5', title: 'Evolua', desc: 'Acompanhe seu progresso e bem-estar' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-white/20">
                  <span className="text-white text-2xl">{item.step}</span>
                </div>
                <h4 className="mb-2">{item.title}</h4>
                <p className="text-indigo-200 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button 
              onClick={onGetStarted} 
              size="lg" 
              className="bg-white text-indigo-900 hover:bg-indigo-50 gap-2"
            >
              <Sparkles className="w-5 h-5" />
              Começar Minha Jornada
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-slate-900 text-slate-300">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-white">Evolua</span>
          </div>
          <p className="text-sm">
            Preparando pessoas para carreiras que ainda nem existem. <br />
            Quando ideias ganham propósito, elas têm o poder de transformar o trabalho e o mundo.
          </p>
        </div>
      </footer>
    </div>
  );
}