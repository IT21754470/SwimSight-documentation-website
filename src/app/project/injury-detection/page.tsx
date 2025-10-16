// src/app/project/harvest-prediction/page.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, Eye, Check, ExternalLink, Shield, Activity, Zap, LineChart } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function HarvestPredictionPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 z-0">
          <div className="absolute right-0 bottom-0 left-0 h-1/3 bg-gradient-to-t from-green-50 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <Link 
                href="/" 
                className="inline-flex items-center text-sm font-medium mb-6 group"
                style={{ color: 'var(--color-primary)' }}
              >
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Back to home
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4" style={{ color: 'var(--color-foreground)' }}>
                Injury-Prone Movement Detection
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl">
                Advanced computer vision system preventing swimming injuries by analyzing biomechanical movements in real-time, focusing on shoulders and knee with 85% F1 score accuracy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image with animated overlay */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/img41.jpg"
                alt="Injury Detection System"
                width={1000}
                height={700}
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={85}
                className="w-full h-auto rounded-2xl"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkMjU1LS0yMi4qLjg0PjU1ODU1Oj4+NTU1NTU1NTU1NTU1NTU1NTX/2wBDAR4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                <p className="text-white text-sm md:text-base">
                  Using MediaPipe pose estimation and 1D+2D CNN Ensemble to detect dangerous movement patterns with 83% precision and 86% recall.
                </p>
              </div>
            </motion.div>

            {/* Content */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-6" style={{ backgroundColor: 'rgba(46, 125, 50, 0.1)', color: 'var(--color-primary-dark)' }}>
                  <Eye className="w-4 h-4 mr-2" />
                  Computer Vision & AI
                </div>
                
                <h2 className="text-3xl font-bold mb-6">Three-Layer Safety System</h2>
                
                <div className="space-y-8 mb-10">
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex items-start"
                  >
                    <div className="flex-shrink-0 p-2 rounded-lg mr-4" style={{ backgroundColor: 'var(--color-primary-light)', color: 'white' }}>
                      <Eye className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-2">Automated Injury Detection</h3>
                      <p className="text-gray-600">
                        24/7 biomechanical safety monitor using MediaPipe for 2D keypoint detection and vector geometry for joint angle calculation. Identifies dangerous movement patterns before they lead to chronic injuries.
                      </p>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex items-start"
                  >
                    <div className="flex-shrink-0 p-2 rounded-lg mr-4" style={{ backgroundColor: 'var(--color-primary-dark)', color: 'white' }}>
                      <Zap className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-2">Real-Time Video Analysis Backend</h3>
                      <p className="text-gray-600">
                        High-performance FastAPI processing engine with OAuth2/JWT security. Sub-50ms API response time, supporting 1000+ concurrent users with 99.9% uptime and 30-60 second complete video analysis.
                      </p>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="flex items-start"
                  >
                    <div className="flex-shrink-0 p-2 rounded-lg mr-4" style={{ backgroundColor: 'var(--color-accent)', color: 'white' }}>
                      <Shield className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-2">Safe Range Thresholds</h3>
                      <p className="text-gray-600">
                        Scientifically-validated joint angle thresholds: Shoulder 40°-150°, Elbow 90°-160°, Knee 30°-140°, Hip 50°-160°. Flags movements outside safe ranges to prevent injury.
                      </p>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex items-start"
                  >
                    <div className="flex-shrink-0 p-2 rounded-lg mr-4" style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}>
                      <Activity className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-2">Cross-Platform Mobile App</h3>
                      <p className="text-gray-600">
                        Flutter app with 89% athlete adoption rate and 92% usability rating. Features video capture, real-time progress updates, risk visualization, and OAuth2 authentication with biometric login.
                      </p>
                    </div>
                  </motion.div>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                  <h3 className="text-lg font-medium mb-4">System Performance</h3>
                  <div className="space-y-3">
                    {[
                      { leafType: "F1 Score", accuracy: "0.85" },
                      { leafType: "Precision", accuracy: "83%" },
                      { leafType: "Recall", accuracy: "86%" }
                    ].map((stat, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-gray-600">{stat.leafType}</span>
                        <span className="font-medium" style={{ color: 'var(--color-primary-dark)' }}>{stat.accuracy}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Additional Details */}
          <div className="mt-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
                <h3 className="text-2xl font-bold mb-4">Technical Implementation</h3>
                <p className="text-gray-600 mb-6">
                  The injury detection system uses 1D+2D CNN Ensemble combining temporal and spatial analysis with MediaPipe pose estimation for comprehensive biomechanical safety monitoring.
                </p>
                
                <h4 className="font-medium mb-3" style={{ color: 'var(--color-primary-dark)' }}>Key Technologies</h4>
                <ul className="space-y-2 mb-6">
                  {[
                    "MediaPipe for 2D keypoint detection",
                    "1D+2D CNN Ensemble architecture",
                    "Vector geometry for joint angle calculation",
                    "2-second windows with 50% overlap",
                    "FastAPI with OAuth2/JWT security"
                  ].map((tech, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 mr-2 flex-shrink-0" style={{ color: 'var(--color-primary)' }} />
                      <span className="text-gray-600">{tech}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
                <h3 className="text-2xl font-bold mb-4">Safety Monitoring</h3>
                <p className="text-gray-600 mb-6">
                  The system provides comprehensive injury prevention through real-time biomechanical analysis, focusing on the most injury-prone areas in competitive swimming.
                </p>
                
                <div className="space-y-4">
                  {[
                    { dataType: "Shoulder Safety", source: "40°-150° safe range (40-91% of swimming injuries)" },
                    { dataType: "Knee Protection", source: "30°-140° safe range (breaststroker's knee prevention)" },
                    { dataType: "Processing Speed", source: "30-60 seconds complete video analysis" },
                    { dataType: "Data Quality", source: ">98% maintained through preprocessing" }
                  ].map((data, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4">
                      <p className="font-medium" style={{ color: 'var(--color-primary-dark)' }}>{data.dataType}</p>
                      <p className="text-gray-600 text-sm">{data.source}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Performance Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 bg-white rounded-xl shadow-lg p-8 border border-gray-100"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <h3 className="text-2xl font-bold">Research Validation</h3>
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium" style={{ backgroundColor: 'rgba(46, 125, 50, 0.1)', color: 'var(--color-primary-dark)' }}>
                <LineChart className="w-4 h-4 mr-2" />
                Peer-Reviewed Results
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { metric: "F1 Score", value: "0.85", icon: <Eye className="h-6 w-6" /> },
                { metric: "Precision", value: "83%", icon: <Shield className="h-6 w-6" /> },
                { metric: "Recall", value: "86%", icon: <Activity className="h-6 w-6" /> },
                { metric: "API Response", value: "<50ms", icon: <Zap className="h-6 w-6" /> }
              ].map((stat, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 text-center">
                  <div className="inline-flex items-center justify-center p-3 rounded-full mb-4" style={{ backgroundColor: 'var(--color-primary-light)', color: 'white' }}>
                    {stat.icon}
                  </div>
                  <h4 className="text-lg font-medium mb-1" style={{ color: 'var(--color-foreground)' }}>{stat.metric}</h4>
                  <p className="text-2xl font-bold" style={{ color: 'var(--color-primary-dark)' }}>{stat.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Learn More About Our Research</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Explore our comprehensive documentation and research findings on the injury-prone movement detection system.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/documents"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-white font-medium"
              style={{ backgroundColor: 'var(--color-primary)' }}
            >
              View Research Documentation
            </Link>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium border"
              style={{ borderColor: 'var(--color-primary)', color: 'var(--color-primary)' }}
            >
              Contact Our Team
              <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}