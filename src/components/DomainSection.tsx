// src/components/DomainSection.tsx
"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { BookOpen, Target, Code, FlaskConical, CheckCircle, Layers } from "lucide-react";
 
export default function DomainSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-32 -top-32 w-96 h-96 rounded-full" style={{ background: 'radial-gradient(circle, rgba(76, 175, 80, 0.1) 0%, rgba(76, 175, 80, 0) 70%)' }}></div>
        <div className="absolute -left-32 top-1/3 w-96 h-96 rounded-full" style={{ background: 'radial-gradient(circle, rgba(255, 193, 7, 0.1) 0%, rgba(255, 193, 7, 0) 70%)' }}></div>
        <div className="absolute right-0 bottom-0 w-full h-1/3 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="inline-block px-3 py-1 rounded-full text-sm font-medium mb-4" style={{ backgroundColor: 'rgba(46, 125, 50, 0.1)', color: 'var(--color-primary)' }}>
            Innovation in Sports Analytics
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6" style={{ color: 'var(--color-foreground)' }}>
            Revolutionizing Swimming Performance
          </h2>
          <p className="text-xl text-gray-600">
            Our research delivers comprehensive AI-powered swimming analytics, making professional-grade performance analysis accessible to swimmers, coaches, and sports scientists at all levels.
          </p>
        </motion.div>

        {/* Main domain card - Research Gap & Problem */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mb-24"
        >
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left side - Image */}
              <div className="relative h-64 lg:h-auto">
                <Image
                  src="/img4.jpg"  
                  alt="Swimming performance analytics technology"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-black/40 flex items-center">
                  <div className="p-8">
                    <h3 className="text-white text-2xl font-bold mb-3">Research Gap & Problem</h3>
                    <p className="text-white/90 max-w-md">
                      Professional swimming analysis traditionally requires expensive laboratory equipment ($10,000+) and specialist expertise. SwimSight democratizes access to comprehensive performance analytics through smartphone technology.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Right side - Content */}
              <div className="p-8">
                <div className="flex flex-col h-full justify-between">
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-red-50 rounded-lg p-2 mt-1 mr-4">
                        <CheckCircle className="h-5 w-5 text-red-500" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-1 text-gray-900">High Cost of Traditional Analysis</h4>
                        <p className="text-gray-600">Professional swimming analysis traditionally costs $10,000+ and requires specialized equipment and biomechanics experts.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-amber-50 rounded-lg p-2 mt-1 mr-4">
                        <CheckCircle className="h-5 w-5 text-amber-500" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-1 text-gray-900">Injury Prevention Challenges</h4>
                        <p className="text-gray-600">Swimming injuries (40-91% shoulder, 86% breaststroker&lsquo;s knee) often go undetected until chronic damage occurs.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-blue-50 rounded-lg p-2 mt-1 mr-4">
                        <CheckCircle className="h-5 w-5 text-blue-500" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-1 text-gray-900">Performance Optimization Gap</h4>
                        <p className="text-gray-600">Athletes lack access to data-driven training insights, fatigue monitoring, and race performance predictions.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <p className="text-gray-700 italic">
                      &quot;These challenges limit athletes&lsquo; potential and increase injury risk, creating barriers to optimal performance in competitive swimming.&quot;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Literature Survey & Research Objectives */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {/* Literature Survey */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200"
          >
            <div className="h-2 w-full" style={{ backgroundColor: 'var(--color-primary)' }}></div>
            <div className="p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-full mr-4" style={{ backgroundColor: 'rgba(46, 125, 50, 0.1)' }}>
                  <BookOpen className="h-6 w-6" style={{ color: 'var(--color-primary)' }} />
                </div>
                <h3 className="text-2xl font-bold" style={{ color: 'var(--color-foreground)' }}>Literature Survey</h3>
              </div>
              
              <div className="space-y-4">
                <p className="text-gray-600">
                  Our research revealed that competitive swimming demands comprehensive performance analysis. Key challenges include:
                </p>
                
                <ul className="space-y-3">
                  {[
                    "High cost of professional biomechanical analysis",
                    "Limited access to real-time performance data",
                    "Injury prevention requiring specialized expertise",
                    "Lack of integrated training optimization systems",
                    "Limited research on AI-powered swimming analytics"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" style={{ color: 'var(--color-primary)' }} />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="pt-4 mt-6 border-t border-gray-100">
                  <p className="text-gray-600">
                    While sports analytics has been widely studied for mainstream sports, comprehensive AI-powered swimming performance platforms remain limited, creating opportunity for innovation.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Research Objectives */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200"
          >
            <div className="h-2 w-full" style={{ backgroundColor: 'var(--color-accent)' }}></div>
            <div className="p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-full mr-4" style={{ backgroundColor: 'rgba(255, 193, 7, 0.1)' }}>
                  <Target className="h-6 w-6" style={{ color: 'var(--color-accent)' }} />
                </div>
                <h3 className="text-2xl font-bold" style={{ color: 'var(--color-foreground)' }}>Research Objectives</h3>
              </div>
              
              <div className="space-y-6">
                <p className="text-gray-600">
                  Our research aims to develop a comprehensive AI-powered platform to empower swimmers, coaches, and sports scientists through:
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-amber-50 rounded-lg p-4">
                    <h4 className="font-semibold mb-2 text-amber-800">Performance Analytics</h4>
                    <p className="text-amber-700 text-sm">AI-powered training optimization with 83% accuracy and fatigue monitoring</p>
                  </div>
                  
                  <div className="bg-green-50 rounded-lg p-4">
                    <h4 className="font-semibold mb-2 text-green-800">Injury Prevention</h4>
                    <p className="text-green-700 text-sm">Real-time biomechanical analysis detecting risky movements with 85% F1 score</p>
                  </div>
                  
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h4 className="font-semibold mb-2 text-blue-800">Technique Analysis</h4>
                    <p className="text-blue-700 text-sm">Automated kick and turn classification with 92% accuracy using VGG19 CNN</p>
                  </div>
                  
                  <div className="bg-purple-50 rounded-lg p-4">
                    <h4 className="font-semibold mb-2 text-purple-800">Race Prediction</h4>
                    <p className="text-purple-700 text-sm">LSTM-based race time forecasting with ±0.29 seconds accuracy</p>
                  </div>
                </div>
                
                <div className="pt-4 mt-2 border-t border-gray-100">
                  <p className="text-gray-600">
                    Through these objectives, we aim to democratize professional-grade swimming analytics, making them accessible to athletes at all levels.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* System Architecture */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-24"
        >
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
            <div className="p-8">
              <div className="flex items-center mb-8">
                <div className="p-3 rounded-full mr-4" style={{ backgroundColor: 'rgba(46, 125, 50, 0.1)' }}>
                  <Layers className="h-6 w-6" style={{ color: 'var(--color-primary)' }} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold" style={{ color: 'var(--color-foreground)' }}>System Architecture</h3>
                  <p className="text-gray-600 mt-1">Complete overview of our SwimSight system design</p>
                </div>
              </div>
              
              <div className="relative">
                {/* System diagram */}
                <div className="relative w-full h-auto mb-8">
                  <div className="relative aspect-video w-full rounded-xl overflow-hidden border-2 border-gray-200 bg-gray-50">
                    <Image
                      src="/system-diagram.png"
                      alt="SwimSight System Architecture Diagram"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                      quality={90}
                      className="object-contain p-4"
                      loading="lazy"
                    />
                  </div>
                </div>
                
                {/* Architecture description */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                    <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-white font-bold text-lg">1</span>
                    </div>
                    <h4 className="font-semibold text-blue-800 mb-2">Data Collection Layer</h4>
                    <p className="text-blue-700 text-sm">Video capture, wearable sensors, and historical race data provide comprehensive input for analysis</p>
                  </div>
                  
                  <div className="bg-green-50 rounded-xl p-6 border border-green-100">
                    <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-white font-bold text-lg">2</span>
                    </div>
                    <h4 className="font-semibold text-green-800 mb-2">ML Processing Engine</h4>
                    <p className="text-green-700 text-sm">Advanced algorithms process data for predictions and recommendations</p>
                  </div>
                  
                  <div className="bg-purple-50 rounded-xl p-6 border border-purple-100">
                    <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-white font-bold text-lg">3</span>
                    </div>
                    <h4 className="font-semibold text-purple-800 mb-2">Mobile Application</h4>
                    <p className="text-purple-700 text-sm">Flutter-based cross-platform interface delivering insights to swimmers and coaches</p>
                  </div>
                  
                  <div className="bg-orange-50 rounded-xl p-6 border border-orange-100">
                    <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-white font-bold text-lg">4</span>
                    </div>
                    <h4 className="font-semibold text-orange-800 mb-2">Cloud Synchronization</h4>
                    <p className="text-orange-700 text-sm">Firebase backend ensuring data availability across all devices with 99.9% uptime</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Methodology */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-24"
        >
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
            <div className="p-8">
              <div className="flex items-center mb-8">
                <div className="p-3 rounded-full mr-4" style={{ backgroundColor: 'rgba(46, 125, 50, 0.1)' }}>
                  <FlaskConical className="h-6 w-6" style={{ color: 'var(--color-primary)' }} />
                </div>
                <h3 className="text-2xl font-bold" style={{ color: 'var(--color-foreground)' }}>Methodology</h3>
              </div>
              
              <div className="relative">
                <div className="absolute top-0 bottom-0 left-8 w-0.5 bg-gray-200"></div>
                <div className="space-y-12 relative">
                  {[
                    {
                      title: "Data Collection & Processing",
                      desc: "Gathering swimming videos, training session data, and physiological metrics from 782 training sessions and 1200+ videos to build comprehensive datasets.",
                      color: "var(--color-primary-light)"
                    },
                    {
                      title: "Machine Learning Model Development",
                      desc: "Training and optimizing models for performance prediction (Neural Networks), injury detection (CNN Ensemble), technique analysis (VGG19), and race forecasting (LSTM).",
                      color: "var(--color-primary)"
                    },
                    {
                      title: "Mobile Application Development",
                      desc: "Building a Flutter-based cross-platform application integrating all four AI modules with intuitive interfaces for swimmers, coaches, and sports scientists.",
                      color: "var(--color-accent)"
                    },
                    {
                      title: "Field Testing & Validation",
                      desc: "Testing the platform with competitive swimmers and coaches to validate effectiveness, achieving 89% adoption rate and 92% usability rating.",
                      color: "var(--color-primary-dark)"
                    }
                  ].map((step, index) => (
                    <div key={index} className="flex">
                      <div className="relative">
                        <div className="h-16 w-16 rounded-full bg-white flex items-center justify-center border-4 z-10" style={{ borderColor: step.color }}>
                          <div className="h-8 w-8 rounded-full" style={{ backgroundColor: step.color }}></div>
                        </div>
                      </div>
                      <div className="ml-8">
                        <h4 className="text-xl font-semibold mb-3" style={{ color: 'var(--color-foreground)' }}>{step.title}</h4>
                        <p className="text-gray-600 max-w-3xl">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Technologies Used */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 shadow-sm">
            <div className="flex items-center mb-8">
              <div className="p-3 rounded-xl mr-4 bg-white shadow-sm">
                <Code className="h-6 w-6 text-black" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Technologies Used</h3>
                <p className="text-gray-600 mt-1">Modern stack powering our innovative solutions</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[
                { 
                  name: "Flutter", 
                  icon: "/tech/flutter.svg", 
                  color: "#42A5F5",
                  category: "Mobile Development"
                },
                { 
                  name: "TensorFlow", 
                  icon: "/tech/tensorflow.svg", 
                  color: "#FF6F00",
                  category: "Machine Learning"
                },
                { 
                  name: "Python", 
                  icon: "/tech/python.svg", 
                  color: "#3776AB",
                  category: "Backend"
                },
                { 
                  name: "XGBoost", 
                  icon: "/tech/xgboost.png", 
                  color: "#2E7D32",
                  category: "Machine Learning"
                },
                { 
                  name: "Supabase", 
                  icon: "/tech/supabase.svg", 
                  color: "#3ECF8E",
                  category: "Database"
                },
                { 
                  name: "Google Maps", 
                  icon: "/tech/googlemaps.svg", 
                  color: "#4285F4",
                  category: "APIs"
                },
                { 
                  name: "Flask", 
                  icon: "/tech/flask.svg", 
                  color: "#FFFFFF",
                  category: "Backend"
                },
                { 
                  name: "OpenMeteo", 
                  icon: "/tech/openmeteo.svg", 
                  color: "#62B8F6",
                  category: "APIs"
                },
                { 
                  name: "OpenCV", 
                  icon: "/tech/opencv.svg", 
                  color: "#5C3EE8",
                  category: "Computer Vision"
                },
                { 
                  name: "Scikit-learn", 
                  icon: "/tech/scikit.webp", 
                  color: "#F7931E",
                  category: "Machine Learning"
                },
                { 
                  name: "WhatsApp API", 
                  icon: "/tech/whatsapp.svg", 
                  color: "#25D366",
                  category: "APIs"
                }
              ].map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="group relative"
                >
                  <div 
                    className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col items-center justify-center border border-gray-100"
                  >
                    <div className="relative h-12 w-12 mb-4">
                      <Image 
                        src={tech.icon} 
                        alt={tech.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-900 text-center">{tech.name}</span>
                    <span className="text-xs text-gray-500 mt-1 text-center">{tech.category}</span>
                  </div>
                  <div 
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ 
                      background: `linear-gradient(45deg, ${tech.color}10, ${tech.color}05)`,
                      border: `1px solid ${tech.color}20`
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}