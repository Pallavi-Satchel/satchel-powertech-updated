import React from 'react';
import { ProjectsShowcase } from '../components/ProjectsShowcase';
import { Sun } from 'lucide-react';

interface ProjectsPageProps {
  onOpenQuoteWithProject?: (title: string) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = () => {
  return (
    <div className="bg-slate-950 min-h-screen">
      <div className="py-12">
        <ProjectsShowcase />
      </div>
    </div>
  );
};
