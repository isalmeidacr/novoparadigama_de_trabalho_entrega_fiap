import { useState } from 'react';
import { Hero } from './components/Hero';
import { Dashboard } from './components/Dashboard';
import { SkillAssessment } from './components/SkillAssessment';
import { LearningPath } from './components/LearningPath';
import { Opportunities } from './components/Opportunities';
import { WellnessTracker } from './components/WellnessTracker';
import { Community } from './components/Community';

type View = 'hero' | 'dashboard' | 'assessment' | 'learning' | 'opportunities' | 'wellness' | 'community';

export default function App() {
  const [currentView, setCurrentView] = useState<View>('hero');
  const [userProfile, setUserProfile] = useState({
    name: 'Ana Silva',
    currentRole: 'Analista de Marketing',
    assessmentComplete: false,
    skillLevel: 0,
  });

  const handleGetStarted = () => {
    setCurrentView('assessment');
  };

  const handleAssessmentComplete = (data: any) => {
    setUserProfile({ ...userProfile, assessmentComplete: true, skillLevel: data.level });
    setCurrentView('dashboard');
  };

  const renderView = () => {
    switch (currentView) {
      case 'hero':
        return <Hero onGetStarted={handleGetStarted} />;
      case 'assessment':
        return <SkillAssessment onComplete={handleAssessmentComplete} />;
      case 'dashboard':
        return <Dashboard userProfile={userProfile} onNavigate={setCurrentView} />;
      case 'learning':
        return <LearningPath onNavigate={setCurrentView} />;
      case 'opportunities':
        return <Opportunities onNavigate={setCurrentView} />;
      case 'wellness':
        return <WellnessTracker onNavigate={setCurrentView} />;
      case 'community':
        return <Community onNavigate={setCurrentView} />;
      default:
        return <Hero onGetStarted={handleGetStarted} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {renderView()}
    </div>
  );
}
