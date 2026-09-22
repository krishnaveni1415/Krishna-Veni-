export interface Project {
  id: string;
  title: string;
  description: string;
  technology: string;
  category: string;
  conceptsPracticed: string[];
  codeSnippet: string;
  interactiveType: 'grade' | 'voting';
  hasLiveDemo: boolean;
}

export interface SkillCategory {
  title: string;
  description: string;
  iconName: string;
  skills: {
    name: string;
    level: string;
    description: string;
    badgeColor: string;
  }[];
}

export interface TimelineStep {
  step: number;
  title: string;
  description: string;
  status: 'completed' | 'in-progress' | 'upcoming';
  tag: string;
}

export interface LearningTopic {
  title: string;
  category: string;
  description: string;
  iconName: string;
  status: string;
}
