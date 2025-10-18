// src/components/MilestonesSection.tsx
"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { 
  FileText, 
  Presentation, 
  CheckCircle, 
  Calendar, 
  Clock,
  ChevronDown
} from "lucide-react";
const milestones = [
  {
    title: "Project Proposal",
    date: "Jan 15, 2025",
    description: "Initial research project proposal for SwimSight AI-powered swimming analytics platform.",
    marks: "10%",
    status: "completed",
    icon: <FileText className="h-5 w-5" />,
    link: "/documents/project-proposal.pdf",
    details: [
      "Problem Statement: High cost of swimming analysis",
      "Four AI Modules: Performance, Injury, Technique, Race",
      "Proposed ML Models & Architecture",
      "Timeline & Deliverables",
      "Literature Review on Sports Analytics"
    ]
  },
  {
    title: "Progress Presentation-1",
    date: "Apr 8, 2024",
    description: "First milestone presentation covering implementation of Performance Analytics and Injury Prevention modules.",
    marks: "15%",
    status: "completed",
    icon: <Presentation className="h-5 w-5" />,
    link: "/documents/progress-presentation-1.pdf",
    details: [
      "Performance Prediction: 83% accuracy with Neural Networks",
      "Fatigue Monitoring: 100% accuracy with Gradient Boosting",
      "Injury Detection: 85% F1 score with CNN Ensemble",
      "FastAPI Backend with OAuth2/JWT Security",
      "MediaPipe Pose Estimation Integration"
    ]
  },
  {
    title: "Progress Presentation-2",
    date: "Sep 15, 2025",
    description: "Second milestone presentation showcasing Technique Analysis, Race Prediction, and Flutter app development.",
    marks: "30%",
    status: "completed",
    icon: <Presentation className="h-5 w-5" />,
    link: "/documents/progress-presentation-2.pdf",
    details: [
      "Technique Analysis: 92% accuracy with VGG19 CNN",
      "Grad-CAM Explainable AI Visualizations",
      "Race Prediction: ±0.29s accuracy with LSTM",
      "Flutter Cross-Platform App (iOS, Android, Web)",
      "Firebase Cloud Synchronization & Real-time Updates"
    ]
  },
  {
    title: "Final Report Submission",
    date: "Oct 27, 2025",
    description: "Comprehensive documentation of SwimSight platform with all four AI modules and performance metrics.",
    marks: "25%",
    status: "completed",
    icon: <FileText className="h-5 w-5" />,
    link: "/documents/final-report.pdf",
    details: [
      "Research Paper: AI-Powered Swimming Analytics",
      "Documentation Website with Technical Details",
      "System Architecture: 1000+ concurrent users",
      "Results: 89% adoption, 92% usability rating",
      "Future Work: Additional stroke analysis & wearables"
    ]
  },
  {
    title: "Final Viva",
    date: "May 10, 2025",
    description: "Final assessment through oral examination and project demonstration.",
    marks: "20%",
    status: "in-progress",
    icon: <CheckCircle className="h-5 w-5" />,
    link: null,
    details: [
      "Project Demonstration",
      "Technical Q&A Session",
      "Research Contribution Assessment",
      "Implementation Quality Evaluation",
      "Final Feedback & Grading"
    ]
  }
];

export default function MilestonesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
         
        <div className="absolute w-1/3 h-32 md:h-64 right-0 bottom-0 opacity-10" style={{ 
          background: 'linear-gradient(135deg, var(--color-accent) 0%, transparent 100%)' 
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full text-sm font-medium mb-4" style={{ backgroundColor: 'rgba(46, 125, 50, 0.1)', color: 'var(--color-primary)' }}>
            Project Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6" style={{ color: 'var(--color-foreground)' }}>
            Research Milestones
          </h2>
          <p className="text-xl text-gray-600">
            Track our SwimSight development journey through key assessments and deliverables from project proposal to final presentation.
          </p>
        </motion.div>

        {/* Progress bar for desktop */}
        <div className="hidden lg:block relative max-w-5xl mx-auto mb-24 px-12">
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full rounded-full transition-all duration-1000"
              style={{ 
                width: '80%',
                background: 'linear-gradient(90deg, var(--color-primary) 0%, var(--color-accent) 100%)'
              }}
            ></div>
          </div>
          <div className="flex justify-between absolute -top-2 left-12 right-12">
            {milestones.map((_, index) => {
              const completed = index < 4;
              const inProgress = index === 4;
              const upcoming = index > 4;
              
              return (
                <div key={index} className="relative -ml-5">
                  <div 
                    className={`w-10 h-10 rounded-full border-4 flex items-center justify-center transition-all ${
                      completed 
                        ? 'bg-white border-primary' 
                        : inProgress 
                          ? 'bg-white border-amber-800' 
                          : 'bg-white border-gray-300'
                    }`}
                    style={{ 
                      borderColor: completed 
                        ? 'var(--color-primary)' 
                        : inProgress 
                          ? 'var(--color-accent)' 
                          : '#D1D5DB'
                    }}
                  >
                    {completed && (
                      <CheckCircle className="h-5 w-5" style={{ color: 'var(--color-primary)' }} />
                    )}
                    {inProgress && (
                      <div className="w-2 h-2 bg-amber-700 rounded-full animate-pulse" style={{ backgroundColor: 'var(--color-accent)' }}></div>
                    )}
                    {upcoming && (
                      <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                    )}
                  </div>
                  <div 
                    className={`absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-sm font-medium ${
                      completed 
                        ? 'text-primary' 
                        : inProgress 
                          ? 'text-amber-700' 
                          : 'text-gray-400'
                    }`}
                    style={{ 
                      color: completed 
                        ? 'var(--color-primary)' 
                        : inProgress 
                          ? 'var(--color-accent)' 
                          : '#9CA3AF'
                    }}
                  >
                    {index === 0 ? 'Proposal' : index === 1 ? 'Progress 1' : index === 2 ? 'Progress 2' : index === 3 ? 'Final Report' : 'Viva'}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Milestone cards */}
        <div className="space-y-10 max-w-4xl mx-auto">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <div 
                className={`bg-white rounded-xl overflow-hidden border border-gray-200  border-l-8 transition-all ${
                  expandedCard === index ? 'shadow-xl' : ''
                }`}
                style={{
                  borderLeftColor: milestone.status === 'completed' 
                    ? 'var(--color-primary)' 
                    : milestone.status === 'in-progress' 
                      ? 'var(--color-accent)' 
                      : '#D1D5DB'
                }}
              >
                <div 
                  className="p-6 cursor-pointer"
                  onClick={() => setExpandedCard(expandedCard === index ? null : index)}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div className="flex items-center mb-4 md:mb-0">
                      <div 
                        className="w-12 h-12 rounded-lg flex items-center justify-center mr-4"
                        style={{ 
                          backgroundColor: milestone.status === 'completed' 
                            ? 'rgba(46, 125, 50, 0.1)' 
                            : milestone.status === 'in-progress' 
                              ? 'rgba(255, 193, 7, 0.1)' 
                              : 'rgba(209, 213, 219, 0.2)',
                          color: milestone.status === 'completed' 
                            ? 'var(--color-primary)' 
                            : milestone.status === 'in-progress' 
                              ? 'var(--color-accent)' 
                              : '#9CA3AF'
                        }}
                      >
                        {milestone.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{milestone.title}</h3>
                        <div className="flex items-center text-sm text-gray-500 mt-1">
                          <Calendar className="h-4 w-4 mr-1" />
                          {milestone.date}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <span 
                        className="px-3 py-1 rounded-full text-sm font-medium mr-3"
                        style={{ 
                          backgroundColor: milestone.status === 'completed' 
                            ? 'rgba(46, 125, 50, 0.1)' 
                            : milestone.status === 'in-progress' 
                              ? 'rgba(255, 193, 7, 0.1)' 
                              : 'rgba(209, 213, 219, 0.2)',
                          color: milestone.status === 'completed' 
                            ? 'var(--color-primary)' 
                            : milestone.status === 'in-progress' 
                              ? 'var(--color-accent)' 
                              : '#9CA3AF'
                        }}
                      >
                        {milestone.status}
                      </span>
                      <ChevronDown className={`h-5 w-5 text-gray-400 transition-transform ${expandedCard === index ? 'transform rotate-180' : ''}`} />
                    </div>
                  </div>
                  
                  <p className="text-gray-600">{milestone.description}</p>
                  
                  <div className="mt-4 flex items-center text-sm font-medium" style={{ color: 'var(--color-primary-dark)' }}>
                    <Clock className="h-4 w-4 mr-1" />
                    Weight: {milestone.marks}
                  </div>
                </div>
                
                {/* Expanded content */}
                {expandedCard === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6"
                  >
                    <div className="pt-4 border-t border-gray-100">
                      <h4 className="font-semibold mb-3 text-gray-900">Deliverables:</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {milestone.details.map((detail, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0" style={{ color: 'var(--color-primary-light)' }} />
                            <span className="text-gray-600">{detail}</span>
                          </li>
                        ))}
                      </ul>
                      
                       
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}