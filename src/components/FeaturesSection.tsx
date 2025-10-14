// FeaturesSection.tsx
"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Activity, TrendingUp, Eye, Award, Zap, Smartphone } from "lucide-react";

const features = [
  {
    name: "Performance Analytics",
    description: "AI-powered training optimization with 83% accuracy, analyzing 782 sessions with 23+ features for evidence-based guidance.",
    icon: <TrendingUp className="h-6 w-6 text-white" />,
    color: "var(--color-primary)"
  },
  {
    name: "Injury Prevention",
    description: "Real-time biomechanical analysis with 85% F1 score, detecting dangerous movement patterns before they cause chronic injuries.",
    icon: <Activity className="h-6 w-6 text-white" />,
    color: "var(--color-primary-dark)"
  },
  {
    name: "Technique Analysis",
    description: "Automated kick and turn classification with 92% accuracy using VGG19 CNN, providing explainable AI visualizations.",
    icon: <Eye className="h-6 w-6 text-white" />,
    color: "var(--color-accent)"
  },
  {
    name: "Race Prediction",
    description: "LSTM-based race time forecasting with ±0.29 seconds accuracy, integrating historical data and real-time physiological metrics.",
    icon: <Award className="h-6 w-6 text-white" />,
    color: "var(--color-primary-light)"
  },
  {
    name: "Fatigue Monitoring",
    description: "Perfect 100% accuracy in fatigue detection using Gradient Boosting, monitoring 48 different physical and technical indicators.",
    icon: <Zap className="h-6 w-6 text-white" />,
    color: "var(--color-primary)"
  },
  {
    name: "Cross-Platform Access",
    description: "Built using Flutter for iOS, Android, and web with identical functionality, supporting 1000+ concurrent users with 99.9% uptime.",
    icon: <Smartphone className="h-6 w-6 text-white" />,
    color: "var(--color-primary-dark)"
  }
];

export default function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-base font-semibold tracking-wider uppercase" style={{ color: 'var(--color-primary)' }}>
            Key Features
          </h2>
          <h3 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Four Integrated AI-Powered Modules
          </h3>
          <p className="mt-4 text-lg text-gray-600">
            Our comprehensive platform addresses the most critical challenges in competitive swimming through 
            innovative AI technology and data-driven performance analytics.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-xl   p-8 border border-gray-100 hover:shadow-sm transition-all"
            >
              <div 
                className="w-12 h-12 rounded-lg mb-5 flex items-center justify-center"
                style={{ backgroundColor: feature.color }}
              >
                {feature.icon}
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">{feature.name}</h4>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}