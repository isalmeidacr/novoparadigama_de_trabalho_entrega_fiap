import { useState } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Avatar } from './ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  ArrowLeft,
  Sparkles, 
  Users,
  MessageCircle,
  ThumbsUp,
  Share2,
  Award,
  Star,
  Calendar,
  Video,
  Lightbulb,
  TrendingUp,
  Heart
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface CommunityProps {
  onNavigate: (view: string) => void;
}

export function Community({ onNavigate }: CommunityProps) {
  const [likedPosts, setLikedPosts] = useState<Set<string>>(new Set());

  const mentors = [
    {
      id: '1',
      name: 'Carlos Mendes',
      role: 'Head of Marketing AI',
      company: 'TechCorp',
      expertise: ['IA', 'Marketing Digital', 'Automação'],
      rating: 4.9,
      sessions: 127,
      available: true,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200'
    },
    {
      id: '2',
      name: 'Mariana Silva',
      role: 'Data Science Lead',
      company: 'Green Analytics',
      expertise: ['Python', 'Machine Learning', 'BI'],
      rating: 4.8,
      sessions: 89,
      available: true,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200'
    },
    {
      id: '3',
      name: 'Rafael Costa',
      role: 'Sustainability Manager',
      company: 'EcoFuture',
      expertise: ['ESG', 'Sustentabilidade', 'Impacto Social'],
      rating: 4.9,
      sessions: 64,
      available: false,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200'
    }
  ];

  const posts = [
    {
      id: '1',
      author: 'Ana Paula',
      role: 'Transição para IA',
      time: '2h atrás',
      content: 'Acabei de concluir meu primeiro projeto usando ChatGPT para automação de campanhas! A produtividade aumentou 300%. Alguém mais explorando IA no marketing?',
      likes: 24,
      comments: 8,
      tags: ['IA', 'Marketing', 'Automação'],
      image: null
    },
    {
      id: '2',
      author: 'Bruno Santos',
      role: 'Aprendendo Análise de Dados',
      time: '5h atrás',
      content: 'Dica para quem está começando com Python: o curso de fundamentos da trilha é INCRÍVEL. Já consigo fazer análises básicas e criar visualizações. Muito gratificante! 🚀',
      likes: 42,
      comments: 15,
      tags: ['Python', 'Dados', 'Dica'],
      image: null
    },
    {
      id: '3',
      author: 'Juliana Ferreira',
      role: 'Marketing Sustentável',
      time: '1 dia atrás',
      content: 'Recebi minha primeira proposta de emprego através da plataforma! Vou trabalhar com marketing de impacto social. Obrigada pela trilha de ESG que me preparou para isso! 💚',
      likes: 156,
      comments: 32,
      tags: ['Sucesso', 'ESG', 'Carreira'],
      image: 'https://images.unsplash.com/photo-1668097613569-3405bb63262b?w=600'
    }
  ];

  const events = [
    {
      title: 'Workshop: IA Generativa para Marketing',
      date: '23 Nov, 19h',
      type: 'Online',
      attendees: 156,
      featured: true
    },
    {
      title: 'Mentoria em Grupo: Transição de Carreira',
      date: '25 Nov, 18h',
      type: 'Online',
      attendees: 45,
      featured: false
    },
    {
      title: 'Webinar: Tendências do Mercado 2025',
      date: '28 Nov, 20h',
      type: 'Online',
      attendees: 289,
      featured: true
    }
  ];

  const toggleLike = (id: string) => {
    const newLiked = new Set(likedPosts);
    if (newLiked.has(id)) {
      newLiked.delete(id);
    } else {
      newLiked.add(id);
    }
    setLikedPosts(newLiked);
  };

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
            <button className="text-slate-900">Comunidade</button>
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
            <Users className="w-6 h-6 text-purple-600" />
            <h1 className="text-slate-900">Comunidade e Mentoria</h1>
          </div>
          <p className="text-slate-600 text-lg">
            Conecte-se com mentores, compartilhe experiências e cresça junto com outros profissionais
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Feed */}
          <div className="lg:col-span-2 space-y-6">
            <Tabs defaultValue="feed" className="space-y-6">
              <TabsList>
                <TabsTrigger value="feed">Feed</TabsTrigger>
                <TabsTrigger value="mentors">Mentores</TabsTrigger>
                <TabsTrigger value="events">Eventos</TabsTrigger>
              </TabsList>

              <TabsContent value="feed" className="space-y-6">
                {/* Create Post */}
                <Card className="p-6">
                  <div className="flex gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white flex-shrink-0">
                      AS
                    </div>
                    <div className="flex-1">
                      <input 
                        type="text"
                        placeholder="Compartilhe sua jornada, conquistas ou dúvidas..."
                        className="w-full p-3 bg-slate-50 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                      <div className="flex gap-2 mt-3">
                        <Button size="sm" className="gap-2">
                          <Lightbulb className="w-4 h-4" />
                          Publicar
                        </Button>
                        <Button variant="outline" size="sm">
                          Adicionar Imagem
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Posts */}
                {posts.map((post) => (
                  <Card key={post.id} className="p-6">
                    <div className="flex gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-full flex items-center justify-center text-white flex-shrink-0">
                        {post.author.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="text-slate-900">{post.author}</h4>
                            <p className="text-sm text-slate-500">{post.role} • {post.time}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-slate-700 mb-4">{post.content}</p>

                    {post.image && (
                      <ImageWithFallback 
                        src={post.image}
                        alt="Post"
                        className="w-full h-64 object-cover rounded-xl mb-4"
                      />
                    )}

                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center gap-6 pt-4 border-t border-slate-200">
                      <button 
                        onClick={() => toggleLike(post.id)}
                        className={`flex items-center gap-2 text-sm transition-colors ${
                          likedPosts.has(post.id) ? 'text-pink-600' : 'text-slate-600 hover:text-pink-600'
                        }`}
                      >
                        <ThumbsUp className={`w-4 h-4 ${likedPosts.has(post.id) ? 'fill-pink-600' : ''}`} />
                        <span>{post.likes + (likedPosts.has(post.id) ? 1 : 0)}</span>
                      </button>
                      <button className="flex items-center gap-2 text-sm text-slate-600 hover:text-indigo-600 transition-colors">
                        <MessageCircle className="w-4 h-4" />
                        <span>{post.comments}</span>
                      </button>
                      <button className="flex items-center gap-2 text-sm text-slate-600 hover:text-indigo-600 transition-colors">
                        <Share2 className="w-4 h-4" />
                        <span>Compartilhar</span>
                      </button>
                    </div>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="mentors" className="space-y-4">
                {mentors.map((mentor) => (
                  <Card key={mentor.id} className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-full flex-shrink-0"></div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h4 className="text-slate-900">{mentor.name}</h4>
                            <p className="text-sm text-slate-600">{mentor.role} • {mentor.company}</p>
                          </div>
                          {mentor.available && (
                            <Badge className="bg-emerald-100 text-emerald-700">
                              Disponível
                            </Badge>
                          )}
                        </div>

                        <div className="flex items-center gap-4 mb-3 text-sm text-slate-600">
                          <span className="flex items-center gap-1">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            {mentor.rating}
                          </span>
                          <span className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            {mentor.sessions} sessões
                          </span>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {mentor.expertise.map((skill, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex gap-2">
                          <Button size="sm" disabled={!mentor.available}>
                            Agendar Sessão
                          </Button>
                          <Button variant="outline" size="sm">
                            Ver Perfil
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="events" className="space-y-4">
                {events.map((event, index) => (
                  <Card key={index} className={`p-6 ${event.featured ? 'border-indigo-200 bg-indigo-50' : ''}`}>
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="text-slate-900">{event.title}</h4>
                          {event.featured && (
                            <Badge className="bg-indigo-600">
                              <Sparkles className="w-3 h-3 mr-1" />
                              Destaque
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center gap-4 text-sm text-slate-600">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {event.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Video className="w-4 h-4" />
                            {event.type}
                          </span>
                          <span className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            {event.attendees} inscritos
                          </span>
                        </div>
                      </div>
                    </div>
                    <Button size="sm">Participar</Button>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Stats */}
            <Card className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
              <h3 className="text-slate-900 mb-4">Sua Rede</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-slate-600 text-sm">Conexões</span>
                  <span className="text-slate-900">127</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-600 text-sm">Sessões de Mentoria</span>
                  <span className="text-slate-900">8</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-600 text-sm">Publicações</span>
                  <span className="text-slate-900">15</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-600 text-sm">Curtidas Recebidas</span>
                  <span className="text-slate-900">234</span>
                </div>
              </div>
            </Card>

            {/* Top Contributors */}
            <Card className="p-6">
              <h3 className="text-slate-900 mb-4">Destaques da Semana</h3>
              <div className="space-y-3">
                {[
                  { name: 'Lucas Oliveira', badge: 'Mais Ativo', color: 'bg-blue-100 text-blue-700' },
                  { name: 'Fernanda Lima', badge: 'Melhor Conteúdo', color: 'bg-purple-100 text-purple-700' },
                  { name: 'Pedro Santos', badge: 'Mais Útil', color: 'bg-emerald-100 text-emerald-700' }
                ].map((user, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                    <div className="w-10 h-10 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-full"></div>
                    <div className="flex-1">
                      <div className="text-slate-900 text-sm">{user.name}</div>
                      <Badge className={`text-xs ${user.color}`}>
                        <Award className="w-3 h-3 mr-1" />
                        {user.badge}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Trending Topics */}
            <Card className="p-6">
              <h3 className="text-slate-900 mb-4">Tópicos em Alta</h3>
              <div className="space-y-2">
                {[
                  { tag: '#IAGenerativa', posts: 45 },
                  { tag: '#TransiçãoDeCarreira', posts: 32 },
                  { tag: '#AnaliseeDados', posts: 28 },
                  { tag: '#ESG', posts: 24 },
                  { tag: '#RemoteWork', posts: 19 }
                ].map((topic, index) => (
                  <button 
                    key={index}
                    className="w-full flex items-center justify-between p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors text-left"
                  >
                    <span className="text-slate-900 text-sm">{topic.tag}</span>
                    <div className="flex items-center gap-1 text-xs text-slate-500">
                      <TrendingUp className="w-3 h-3" />
                      {topic.posts}
                    </div>
                  </button>
                ))}
              </div>
            </Card>

            {/* Image */}
            <Card className="p-0 overflow-hidden">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1758270705317-3ef6142d306f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwdGVhbSUyMGNvbGxhYm9yYXRpb24lMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2MzU1MTI2NHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Community"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="text-slate-900 text-sm mb-1">Cresça Junto</div>
                <div className="text-xs text-slate-600">
                  Juntos somos mais fortes na jornada de transformação
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
