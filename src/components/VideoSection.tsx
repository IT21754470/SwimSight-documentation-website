// VideoSection.tsx
"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Play, Smartphone, Eye, Download } from "lucide-react";
import Link from "next/link";

export default function VideoSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-green-400 to-green-600 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400 to-green-400 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full text-sm font-medium text-white"
            style={{ backgroundColor: 'var(--color-primary)' }}
          >
            <Play className="w-4 h-4" />
            App Demo Video
          </div>
          
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6" 
            style={{ color: 'var(--color-foreground)' }}
          >
            See SwimSight in Action
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
            Experience our AI-powered swimming analytics platform through this comprehensive demo showcasing 
            all four core modules: performance analytics, injury prevention, technique analysis, and race prediction.
          </p>

          {/* Feature highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { icon: <Smartphone className="w-5 h-5" />, text: "Cross-Platform" },
              { icon: <Eye className="w-5 h-5" />, text: "Real-Time Analysis" },
              { icon: <Download className="w-5 h-5" />, text: "Cloud Sync" },
              { icon: <Play className="w-5 h-5" />, text: "50ms-60s Processing" },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-3 p-4 rounded-lg bg-white shadow-sm border border-gray-100"
              >
                <div className="text-blue-600">
                  {feature.icon}
                </div>
                <span className="font-medium text-gray-700">{feature.text}</span>
              </motion.div>
            ))}
          </div>

          {/* Module highlights */}
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="space-y-4">
              <div className="flex items-start">
                <div 
                  className="flex-shrink-0 w-6 h-6 rounded-full mr-3 mt-1 flex items-center justify-center text-xs font-bold text-white"
                  style={{ backgroundColor: 'var(--color-primary)' }}
                >
                  1
                </div>
                <div>
                  <h4 className="font-semibold mb-1" style={{ color: 'var(--color-primary-dark)' }}>
                    Performance Analytics
                  </h4>
                  <p className="text-gray-600 text-sm">
                    AI-powered training optimization with 83% accuracy, analyzing 782 sessions with fatigue monitoring.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div 
                  className="flex-shrink-0 w-6 h-6 rounded-full mr-3 mt-1 flex items-center justify-center text-xs font-bold text-white"
                  style={{ backgroundColor: 'var(--color-primary)' }}
                >
                  2
                </div>
                <div>
                  <h4 className="font-semibold mb-1" style={{ color: 'var(--color-primary-dark)' }}>
                    Injury Prevention
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Real-time biomechanical analysis with 85% F1 score, detecting dangerous movement patterns.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div 
                  className="flex-shrink-0 w-6 h-6 rounded-full mr-3 mt-1 flex items-center justify-center text-xs font-bold text-white"
                  style={{ backgroundColor: 'var(--color-primary)' }}
                >
                  3
                </div>
                <div>
                  <h4 className="font-semibold mb-1" style={{ color: 'var(--color-primary-dark)' }}>
                    Technique Analysis
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Automated kick and turn classification with 92% accuracy using VGG19 CNN with explainable AI.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div 
                  className="flex-shrink-0 w-6 h-6 rounded-full mr-3 mt-1 flex items-center justify-center text-xs font-bold text-white"
                  style={{ backgroundColor: 'var(--color-primary)' }}
                >
                  4
                </div>
                <div>
                  <h4 className="font-semibold mb-1" style={{ color: 'var(--color-primary-dark)' }}>
                    Race Prediction
                  </h4>
                  <p className="text-gray-600 text-sm">
                    LSTM-based race time forecasting with ±0.29 seconds accuracy and confidence intervals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Video Player */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 max-w-5xl mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-900" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://youtu.be/D0d9xhYju4Q"
              title="SwimSight App Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <a
              href="https://www.youtube.com/watch?v=2JoUbhKsYR0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium text-white shadow-lg transition-all hover:scale-105"
              style={{ backgroundColor: 'var(--color-primary)' }}
            >
              <Play className="w-4 h-4" />
              Watch on YouTube
            </a>
            <Link
              href="/#documents"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium border transition-all hover:bg-gray-50"
              style={{ borderColor: 'var(--color-primary)', color: 'var(--color-primary)' }}
            >
              <Download className="w-4 h-4" />
              Download Documentations
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}