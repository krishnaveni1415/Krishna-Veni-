import { Project, SkillCategory, TimelineStep, LearningTopic } from '../types';

export const PERSONAL_INFO = {
  name: "Krishnaveni",
  role: "Aspiring AI Engineer",
  degree: "B.Tech – Computer Science",
  currentLevel: "First Year",
  careerGoal: "Aspiring AI Engineer",
  learningFocus: "AI, Python, Web Development, Generative AI",
  intro: "First-year B.Tech Computer Science student passionate about Artificial Intelligence, programming, web development, and building practical technology projects.",
  aboutText1: "I am Krishnaveni, a first-year B.Tech Computer Science student beginning my journey toward becoming an AI Engineer. I am currently building my foundation in programming, web development, and Generative AI through hands-on learning and beginner-level projects.",
  aboutText2: "I enjoy exploring how technology can solve practical problems and I am continuously improving my technical skills by learning, experimenting, and building projects.",
  githubUrl: "https://github.com/krishnaveni1415",
  linkedinPlaceholder: "[LinkedIn Profile]",
  email: "krishna.veni.141008@gmail.com",
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming",
    description: "Foundational concepts, basic syntax, and algorithmic logic",
    iconName: "Code2",
    skills: [
      {
        name: "Python",
        level: "Basic",
        description: "Variables, conditional logic, loops, functions, and console applications",
        badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
      },
    ],
  },
  {
    title: "Web Development",
    description: "Fundamentals of building responsive, semantic web interfaces",
    iconName: "Globe",
    skills: [
      {
        name: "HTML",
        level: "Basic",
        description: "Semantic document structure, tags, forms, and layout hierarchy",
        badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
      },
      {
        name: "CSS",
        level: "Basic",
        description: "Box model, flexbox, grid, styling, and responsive media queries",
        badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
      },
      {
        name: "JavaScript",
        level: "Basic",
        description: "DOM manipulation, event listeners, basic logic, and interactivity",
        badgeColor: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
      },
    ],
  },
  {
    title: "AI / Generative AI",
    description: "Foundational AI exploration, prompt experimentation, and beginner workflows",
    iconName: "Sparkles",
    skills: [
      {
        name: "Generative AI",
        level: "Basic",
        description: "Prompt engineering fundamentals, LLM capabilities, and practical use cases",
        badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/20",
      },
      {
        name: "AI Project Development",
        level: "Beginner",
        description: "Designing beginner-level GenAI workflows and exploring AI problem solving",
        badgeColor: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
      },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "grade-calculator",
    title: "Student Grade Calculator",
    description: "A beginner-friendly Python project that calculates student grades based on marks or scores. This project helped me practice Python fundamentals, conditional statements, user input, and basic programming logic.",
    technology: "Python",
    category: "Console Application",
    conceptsPracticed: [
      "Python syntax & variables",
      "User input handling (int/float)",
      "Conditional statements (if/elif/else)",
      "Basic mathematical logic & grading scales",
    ],
    codeSnippet: `# Student Grade Calculator
# Author: Krishnaveni (First-Year B.Tech CSE)

def calculate_grade(marks):
    if marks < 0 or marks > 100:
        return "Invalid marks! Please enter a score between 0 and 100."
    elif marks >= 90:
        return "Grade A+ (Outstanding Performance)"
    elif marks >= 80:
        return "Grade A (Excellent)"
    elif marks >= 70:
        return "Grade B (Good)"
    elif marks >= 60:
        return "Grade C (Satisfactory)"
    elif marks >= 50:
        return "Grade D (Pass)"
    else:
        return "Grade F (Needs Improvement)"

# Prompt the user for input
score = float(input("Enter student marks (0-100): "))
result = calculate_grade(score)
print(f"Result: {result}")`,
    interactiveType: 'grade',
    hasLiveDemo: true,
  },
  {
    id: "voting-eligibility",
    title: "Voting Eligibility Calculator",
    description: "A simple beginner-level project that determines whether a person is eligible to vote based on their age. This project helped me practice conditional logic, user input, and basic programming concepts.",
    technology: "Python",
    category: "Logic & Decision Program",
    conceptsPracticed: [
      "Integer input conversion",
      "Relational & logical operators",
      "Conditional decision branching",
      "User feedback & edge case validation",
    ],
    codeSnippet: `# Voting Eligibility Calculator
# Author: Krishnaveni (First-Year B.Tech CSE)

def check_voting_eligibility(age):
    VOTING_AGE = 18
    
    if age < 0 or age > 120:
        return "Invalid age provided."
    elif age >= VOTING_AGE:
        return f"Eligible to vote! You are {age} years old."
    else:
        years_left = VOTING_AGE - age
        return f"Not eligible yet. You have {years_left} more year(s) until eligible."

# Prompt user for age
user_age = int(input("Enter your age: "))
status = check_voting_eligibility(user_age)
print(status)`,
    interactiveType: 'voting',
    hasLiveDemo: true,
  },
];

export const TIMELINE_STEPS: TimelineStep[] = [
  {
    step: 1,
    title: "Started B.Tech",
    description: "Beginning my Computer Science journey and developing a foundation in programming.",
    status: "completed",
    tag: "Semester 1",
  },
  {
    step: 2,
    title: "Learning Python",
    description: "Practicing programming fundamentals and problem-solving using Python.",
    status: "completed",
    tag: "Core Language",
  },
  {
    step: 3,
    title: "Exploring Web Development",
    description: "Learning the fundamentals of creating websites using HTML, CSS, and JavaScript.",
    status: "in-progress",
    tag: "Frontend Basics",
  },
  {
    step: 4,
    title: "Exploring Generative AI",
    description: "Building beginner-level GenAI projects and understanding how AI can be applied to real-world problems.",
    status: "in-progress",
    tag: "AI Exploration",
  },
  {
    step: 5,
    title: "Future Goal",
    description: "Continue developing my technical skills and work toward becoming an AI Engineer.",
    status: "upcoming",
    tag: "Career Target",
  },
];

export const CURRENTLY_LEARNING: LearningTopic[] = [
  {
    title: "Python Programming",
    category: "Core Language",
    description: "Writing scripts, modular functions, list comprehensions, and algorithmic thinking.",
    iconName: "Terminal",
    status: "Active Daily Practice",
  },
  {
    title: "Data Structures & Algorithms",
    category: "CS Foundations",
    description: "Studying arrays, linked lists, searching, sorting, and time complexity basics.",
    iconName: "Binary",
    status: "Foundational Study",
  },
  {
    title: "Web Development",
    category: "Web Interfaces",
    description: "Structuring clean HTML documents, styling with CSS, and interactive JavaScript.",
    iconName: "Layout",
    status: "Building Projects",
  },
  {
    title: "Artificial Intelligence",
    category: "Future Focus",
    description: "Understanding core AI concepts, pattern recognition, and machine intelligence basics.",
    iconName: "Cpu",
    status: "Conceptual Learning",
  },
  {
    title: "Generative AI",
    category: "Emerging Tech",
    description: "Exploring prompt engineering, language models, and practical AI application prototypes.",
    iconName: "Sparkles",
    status: "Hands-on Experiments",
  },
  {
    title: "Problem Solving",
    category: "Engineering Mindset",
    description: "Practicing logic building, break-down analysis, and foundational coding exercises.",
    iconName: "BrainCircuit",
    status: "Ongoing Exercises",
  },
];
